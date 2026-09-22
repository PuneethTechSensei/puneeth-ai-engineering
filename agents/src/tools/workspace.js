import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { tool } from "@openai/agents";
import { z } from "zod";

const execFileAsync = promisify(execFile);
const ROOT = path.resolve(process.env.GITHUB_WORKSPACE || process.cwd(), "..");

function safePath(relativePath) {
  const resolved = path.resolve(ROOT, relativePath);
  if (!resolved.startsWith(ROOT + path.sep) && resolved !== ROOT) throw new Error("Path escapes workspace");
  return resolved;
}

export const repoStatus = tool({
  name: "repo_status",
  description: "Read git status for the checked-out repository.",
  parameters: z.object({}),
  async execute() {
    const { stdout } = await execFileAsync("git", ["status", "--short", "--branch"], { cwd: ROOT });
    return stdout.trim() || "clean";
  }
});

export const repoList = tool({
  name: "repo_list",
  description: "List files at a repository path.",
  parameters: z.object({ relativePath: z.string().default(".") }),
  async execute({ relativePath }) {
    const dir = safePath(relativePath);
    const entries = await fs.readdir(dir, { withFileTypes: true });
    return entries
      .filter(entry => ![".git", "node_modules", "public"].includes(entry.name))
      .map(entry => (entry.isDirectory() ? entry.name + "/" : entry.name))
      .sort()
      .join("\n");
  }
});

export const repoRead = tool({
  name: "repo_read",
  description: "Read a UTF-8 text file from the repository.",
  parameters: z.object({ relativePath: z.string(), maxChars: z.number().int().min(1).max(30000).default(15000) }),
  async execute({ relativePath, maxChars }) {
    return (await fs.readFile(safePath(relativePath), "utf8")).slice(0, maxChars);
  }
});

export const repoSearch = tool({
  name: "repo_search",
  description: "Search repository text with grep, excluding generated and dependency folders.",
  parameters: z.object({ pattern: z.string(), path: z.string().default(".") }),
  async execute({ pattern, path: searchPath }) {
    const args = ["-R", "-n", "-I", "--exclude-dir=.git", "--exclude-dir=node_modules", "--exclude-dir=public", "-e", pattern, searchPath];
    try {
      const { stdout } = await execFileAsync("grep", args, { cwd: ROOT, maxBuffer: 1000000 });
      return stdout.slice(0, 30000);
    } catch (error) {
      if (error.code === 1) return "No matches.";
      throw error;
    }
  }
});

export const repoWrite = tool({
  name: "repo_write",
  description: "Write a repository file. Only enabled when AGENT_ALLOW_WRITE=true. Never write secrets.",
  parameters: z.object({ relativePath: z.string(), content: z.string() }),
  async execute({ relativePath, content }) {
    if (process.env.AGENT_ALLOW_WRITE !== "true") return "WRITE_BLOCKED: explicit workflow approval is required.";
    if (/secret|\.env($|\.)|credentials|private[-_]?key/i.test(relativePath)) throw new Error("Refusing to write a likely secret or credential file");
    const file = safePath(relativePath);
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, content, "utf8");
    return "Wrote " + relativePath;
  }
});

export const repoDiff = tool({
  name: "repo_diff",
  description: "Show the current git diff without changing the repository.",
  parameters: z.object({}),
  async execute() {
    const { stdout } = await execFileAsync("git", ["diff", "--", "."], { cwd: ROOT, maxBuffer: 2000000 });
    return stdout.slice(0, 50000) || "No unstaged diff.";
  }
});

export const runTests = tool({
  name: "run_tests",
  description: "Run a safe repository verification command.",
  parameters: z.object({ command: z.string().default("npm test") }),
  async execute({ command }) {
    const allowed = /^(npm|npx|node|python|pytest|gradle|\.\/gradlew|git)\b/;
    if (!allowed.test(command.trim())) throw new Error("Command not allowed");
    if (new RegExp("[;&|\\x60$<>]").test(command)) throw new Error("Shell operators are not allowed");
    const [file, ...args] = command.trim().split(/\s+/);
    const { stdout, stderr } = await execFileAsync(file, args, { cwd: ROOT, maxBuffer: 2000000 });
    return (stdout + (stderr ? "\nSTDERR:\n" + stderr : "")).slice(0, 50000);
  }
});
