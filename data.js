/* Puneeth AI Engineering — curriculum V8 / PromptFix editorial rewrite */

const phases = [["00", "Setup & Engineering Workflow", "Set up a reproducible AI engineering environment and the habits that make work inspectable.", ["Python runtime & package management", "Git fundamentals & branching", "Command-line & filesystem skills", "Project structure & reproducibility", "HTTP & API fundamentals", "Secrets & configuration", "Documentation & reproducibility"]], ["01", "Python for AI", "Learn the Python needed to build, test and maintain AI software.", ["Python syntax & control flow", "Functions & modules", "Collections & comprehensions", "Exceptions & debugging", "Files, JSON & CSV", "Typing & dataclasses", "Testing with pytest", "Python project patterns"]], ["02", "Data & Math Foundations", "Learn the minimum data and mathematical foundations needed to reason about models and AI systems.", ["NumPy arrays & vectorization", "Pandas & data preparation", "SQL for AI data work", "Vectors, matrices & dot products", "Probability & statistics", "Gradients & optimization", "Distance, similarity & embeddings intuition", "Data quality & measurement"]], ["03", "Machine Learning Foundations", "Build reliable classical ML workflows before moving into deep learning.", ["Datasets, features & targets", "Splits, leakage & baselines", "Regression", "Classification", "Trees & ensembles", "Feature engineering & regularization", "Model evaluation & error analysis", "Build a small ML system"]], ["04", "Deep Learning with PyTorch", "Understand neural networks and learn to train and debug them with PyTorch.", ["Tensors, datasets & autograd", "Forward pass & loss", "Backpropagation", "Optimizers & activation functions", "DataLoaders & batching", "Training loops & validation", "Debugging training experiments", "Build a neural network"]], ["05", "Computer Vision", "Optional specialization: build practical intuition for image models and visual evaluation.", ["Image representation & preprocessing", "Convolution & CNNs", "Augmentation & transfer learning", "Image classification & detection", "Vision evaluation & mini-project"]], ["06", "NLP & Representation", "Learn the language-processing foundations that make modern language models easier to reason about.", ["Text normalization & tokenization", "Bag-of-words & TF-IDF", "Embeddings & representation", "Pretrained NLP workflows", "Text classification", "NLP evaluation", "Build a small text system"]], ["07", "Transformers", "Understand the architecture behind modern language models and use pretrained Transformers correctly.", ["Self-attention", "Queries, keys, values & scaled attention", "Multi-head attention & positional information", "Transformer blocks", "Encoder vs decoder architectures", "Causal & attention masking", "Inference mechanics", "Use and fine-tune a pretrained Transformer"]], ["08", "LLM Foundations & Inference", "Understand how modern LLM applications depend on generation, context, model choice and failure behavior.", ["Autoregressive generation", "Decoding: temperature, top-k & top-p", "Instruction tuning & alignment overview", "Context windows & context limits", "Model selection, latency & cost", "LLM capabilities & limitations", "Generation failure modes", "Build a small LLM application"]], ["09", "LLM Internals & Training", "Optional specialization: go deeper into how language models are trained and optimized.", ["Tokenization, data & pretraining objectives", "Tiny Transformer implementation", "Training loop & checkpoints", "Memory, compute & scaling trade-offs", "Build a tiny language model"]], ["10", "LLM Application Engineering", "Turn foundation models into dependable application components.", ["Prompt & instruction architecture", "Context engineering", "Structured outputs & validation", "Model/tool API integration", "Caching & cost-aware design", "LLM application testing", "Failure handling & fallbacks", "Build an LLM application"]], ["11", "RAG Engineering", "Build retrieval-augmented systems that ground answers in evidence and can be evaluated.", ["RAG architecture & data flow", "Document ingestion & normalization", "Chunking strategies", "Embeddings & vector search", "Hybrid retrieval, metadata & reranking", "Citations, grounding & answerability", "RAG evaluation", "Build a production-style RAG system"]], ["12", "Multimodal AI", "Optional specialization: extend AI systems across vision, documents and audio.", ["Vision-language models", "Document understanding & OCR", "Multimodal embeddings", "Audio & cross-modal retrieval", "Build and evaluate a multimodal application"]], ["13", "Tools & Protocols", "Give models reliable, bounded interfaces to software and external systems.", ["Tool contracts & schemas", "Tool selection & routing", "MCP concepts & control model", "MCP server basics", "Authentication & authorization boundaries", "Tool security & trust boundaries", "Tool error handling", "Build a safe tool-enabled application"]], ["14", "Agent Engineering", "Design agents as bounded, observable systems rather than unconstrained model loops.", ["Harness engineering", "Loop engineering & termination", "Context engineering for agents", "Tool design & recovery", "Memory architecture", "Orchestration patterns", "Guardrails & permissions", "Agent evaluation", "Human-in-the-loop design", "Observability & tracing"]], ["15", "AI Systems & Reliability", "Turn agentic demos into durable workflows that survive retries, concurrency and partial failure.", ["State machines & explicit workflow state", "Workflow orchestration", "Queues & background jobs", "Retries, backoff & idempotency", "Long-running tasks & checkpoints", "Caching & concurrency", "Failure recovery & compensation", "Design a reliable AI workflow"]], ["16", "AI Quality Engineering", "Treat evaluation as engineering: datasets, regression, behavior, safety and release gates.", ["AI test strategy", "Evaluation datasets & golden cases", "Outcome vs trajectory evaluation", "LLM-as-judge: use and limitations", "RAG & grounding evaluation", "Agent/tool-call testing", "Regression & change detection", "Evaluation validity, reward hacking & contamination", "Safety, hallucination & adversarial testing", "Build an AI evaluation harness"]], ["17", "Production & LLMOps", "Deploy, operate and improve AI systems with observability, reliability and cost discipline.", ["Serving architecture & APIs", "Containers & dependency control", "CI/CD for AI applications", "Observability & tracing", "Latency & performance", "Caching & cost controls", "Configuration, secrets & rollout", "Incident response, rollback & recovery"]], ["18", "Security & Responsible AI", "Design AI systems around explicit trust boundaries, least privilege, privacy and risk controls.", ["Threat modeling for AI systems", "Prompt injection & indirect injection", "Sensitive information & privacy", "Improper output handling", "Supply chain & dependency risk", "Permissions, excessive agency & tool security", "Abuse cases, incident response & human oversight"]], ["19", "Capstone & Portfolio", "Combine the core skills into one defensible, runnable engineering project.", ["Choose the problem & define success", "Architecture & threat model", "Build the smallest end-to-end system", "Evaluation, regression & failure analysis", "Production readiness & runbook", "Portfolio documentation & technical defense"]]];

const lessonSpecs = [
  {
    "id": "00-1",
    "phase": "00",
    "phaseName": "Setup & Engineering Workflow",
    "title": "Python runtime & package management",
    "summary": "A project can work on one laptop and fail on another because runtime and dependency assumptions are hidden. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "00-2",
    "phase": "00",
    "phaseName": "Setup & Engineering Workflow",
    "title": "Git fundamentals & branching",
    "summary": "AI projects change quickly; without recoverable history, an experiment can destroy a working system. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "00-3",
    "phase": "00",
    "phaseName": "Setup & Engineering Workflow",
    "title": "Command-line & filesystem skills",
    "summary": "AI engineering tools are often driven from terminals, scripts and file paths; weak shell skills turn simple failures into guesswork. This lesson gives you a concrete way to see the problem, change one variable, and verify the result."
  },
  {
    "id": "00-4",
    "phase": "00",
    "phaseName": "Setup & Engineering Workflow",
    "title": "Project structure & reproducibility",
    "summary": "A working prototype is not reusable if another engineer cannot tell where code, tests, data and configuration belong. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A working prototype is not reusable if another engineer cannot tell where code, tests, data and configuration belong.",
    "body": "Design a small AI project with source, tests, configuration, scripts and documentation separated by responsibility.",
    "example": "Worked example: Turn a single-file prototype into a predictable layout and add one command that runs the project checks.",
    "takeaways": [
      "Design a small AI project with source, tests, configuration, scripts and documentation separated by responsibility.",
      "Practice: Turn a single-file prototype into a predictable layout and add one command that runs the project checks.",
      "Failure to diagnose: Move a required file or import and observe how the structure exposes the dependency; fix it without adding a global path hack.",
      "Proof: A repository tree plus one-command setup/run/test instructions that another learner can follow."
    ],
    "code": "src/\n  app.py\ntests/\n  test_app.py\npyproject.toml\nREADME.md",
    "practice": "Turn a single-file prototype into a predictable layout and add one command that runs the project checks.",
    "breakIt": "Move a required file or import and observe how the structure exposes the dependency; fix it without adding a global path hack.",
    "proof": "A repository tree plus one-command setup/run/test instructions that another learner can follow.",
    "transfer": "This becomes the operating discipline for every later project: reproducible environments, inspectable changes, safe configuration and recoverable work.",
    "mistakes": [
      "Assuming a command succeeded because it produced no obvious error.",
      "Mixing machine-specific state into the project.",
      "Documenting steps without recording versions, inputs or expected outputs."
    ],
    "resources": [
      [
        "Python documentation",
        "https://docs.python.org/3/"
      ],
      [
        "Git documentation",
        "https://git-scm.com/doc"
      ],
      [
        "HTTP Semantics (RFC 9110)",
        "https://www.rfc-editor.org/rfc/rfc9110"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Project structure & reproducibility — applied lab",
      "task": "Turn a single-file prototype into a predictable layout and add one command that runs the project checks.",
      "evidence": "A repository tree plus one-command setup/run/test instructions that another learner can follow.",
      "breakIt": "Move a required file or import and observe how the structure exposes the dependency; fix it without adding a global path hack.",
      "transfer": "These habits make every later experiment reproducible and debuggable."
    },
    "competency": {
      "difficulty": "Core+",
      "time": "30–45 min",
      "artifact": "A repository tree plus one-command setup/run/test instructions that another learner can follow.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Move a required file or import and observe how the structure exposes the dependency; fix it without adding a global path hack.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Organize source code, tests, configuration and data so another engineer can understand how to run the project.",
    "usedLater": "This becomes the operating discipline for every later project: reproducible environments, inspectable changes, safe configuration and recoverable work.",
    "guidedSteps": [
      "State the engineering problem and the expected result before changing the project.",
      "Run the smallest example that exposes the relevant contract.",
      "Inspect one observable output: file, request, test, trace, version or configuration value.",
      "Change one assumption deliberately and compare the result."
    ],
    "decision": "What engineering choice does project structure & reproducibility require, and what evidence would justify that choice?"
  },
  {
    "id": "00-5",
    "phase": "00",
    "phaseName": "Setup & Engineering Workflow",
    "title": "HTTP & API fundamentals",
    "summary": "Most AI applications are networks of requests, responses and failure states, not just model calls. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Most AI applications are networks of requests, responses and failure states, not just model calls.",
    "body": "Understand methods, URLs, headers, JSON, status codes, timeouts and the difference between client errors, server errors and transport failures.",
    "example": "Worked example: Call a public JSON endpoint, inspect the response status/body, handle a timeout and validate one required field.",
    "takeaways": [
      "Understand methods, URLs, headers, JSON, status codes, timeouts and the difference between client errors, server errors and transport failures.",
      "Practice: Call a public JSON endpoint, inspect the response status/body, handle a timeout and validate one required field.",
      "Failure to diagnose: Point the client at a missing route or malformed response and make the program fail with a useful diagnostic instead of a traceback dump.",
      "Proof: A tiny API client with explicit timeout, status handling and schema validation."
    ],
    "code": "import requests\nr = requests.get(\"https://example.com\", timeout=5)\nr.raise_for_status()\nprint(r.status_code, r.headers.get(\"content-type\"))",
    "practice": "Call a public JSON endpoint, inspect the response status/body, handle a timeout and validate one required field.",
    "breakIt": "Point the client at a missing route or malformed response and make the program fail with a useful diagnostic instead of a traceback dump.",
    "proof": "A tiny API client with explicit timeout, status handling and schema validation.",
    "transfer": "This becomes the operating discipline for every later project: reproducible environments, inspectable changes, safe configuration and recoverable work.",
    "mistakes": [
      "Assuming a command succeeded because it produced no obvious error.",
      "Mixing machine-specific state into the project.",
      "Documenting steps without recording versions, inputs or expected outputs."
    ],
    "resources": [
      [
        "Python documentation",
        "https://docs.python.org/3/"
      ],
      [
        "Git documentation",
        "https://git-scm.com/doc"
      ],
      [
        "HTTP Semantics (RFC 9110)",
        "https://www.rfc-editor.org/rfc/rfc9110"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "HTTP & API fundamentals — applied lab",
      "task": "Call a public JSON endpoint, inspect the response status/body, handle a timeout and validate one required field.",
      "evidence": "A tiny API client with explicit timeout, status handling and schema validation.",
      "breakIt": "Point the client at a missing route or malformed response and make the program fail with a useful diagnostic instead of a traceback dump.",
      "transfer": "These habits make every later experiment reproducible and debuggable."
    },
    "competency": {
      "difficulty": "Core+",
      "time": "30–45 min",
      "artifact": "A tiny API client with explicit timeout, status handling and schema validation.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Point the client at a missing route or malformed response and make the program fail with a useful diagnostic instead of a traceback dump.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Trace an HTTP request from client to server and handle status codes, payloads, timeouts and authentication as explicit contracts.",
    "usedLater": "This becomes the operating discipline for every later project: reproducible environments, inspectable changes, safe configuration and recoverable work.",
    "guidedSteps": [
      "State the engineering problem and the expected result before changing the project.",
      "Run the smallest example that exposes the relevant contract.",
      "Inspect one observable output: file, request, test, trace, version or configuration value.",
      "Change one assumption deliberately and compare the result."
    ],
    "decision": "What should the client do for success, invalid input, timeout and server failure?"
  },
  {
    "id": "00-6",
    "phase": "00",
    "phaseName": "Setup & Engineering Workflow",
    "title": "Secrets & configuration",
    "summary": "Putting API keys in source code or committing them creates a preventable security incident. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Putting API keys in source code or committing them creates a preventable security incident.",
    "body": "Separate configuration from code; distinguish public configuration from secrets and learn environment-variable loading and safe logging.",
    "example": "Worked example: Move a fake API key out of code into an environment variable and make the application refuse to start when it is missing.",
    "takeaways": [
      "Separate configuration from code; distinguish public configuration from secrets and learn environment-variable loading and safe logging.",
      "Practice: Move a fake API key out of code into an environment variable and make the application refuse to start when it is missing.",
      "Failure to diagnose: Log the configuration object incorrectly; identify the secret leak and replace it with redacted diagnostics.",
      "Proof: A configuration example, safe startup check and a demonstration that no secret appears in source or logs."
    ],
    "code": "import os\napi_key = os.environ.get(\"API_KEY\")\nif not api_key:\n    raise RuntimeError(\"API_KEY is not configured\")\nprint(\"key loaded; value not printed\")",
    "practice": "Move a fake API key out of code into an environment variable and make the application refuse to start when it is missing.",
    "breakIt": "Log the configuration object incorrectly; identify the secret leak and replace it with redacted diagnostics.",
    "proof": "A configuration example, safe startup check and a demonstration that no secret appears in source or logs.",
    "transfer": "This becomes the operating discipline for every later project: reproducible environments, inspectable changes, safe configuration and recoverable work.",
    "mistakes": [
      "Assuming a command succeeded because it produced no obvious error.",
      "Mixing machine-specific state into the project.",
      "Documenting steps without recording versions, inputs or expected outputs."
    ],
    "resources": [
      [
        "Python documentation",
        "https://docs.python.org/3/"
      ],
      [
        "Git documentation",
        "https://git-scm.com/doc"
      ],
      [
        "HTTP Semantics (RFC 9110)",
        "https://www.rfc-editor.org/rfc/rfc9110"
      ]
    ],
    "experience": {
      "type": "Design",
      "title": "Secrets & configuration — applied lab",
      "task": "Move a fake API key out of code into an environment variable and make the application refuse to start when it is missing.",
      "evidence": "A configuration example, safe startup check and a demonstration that no secret appears in source or logs.",
      "breakIt": "Log the configuration object incorrectly; identify the secret leak and replace it with redacted diagnostics.",
      "transfer": "These habits make every later experiment reproducible and debuggable."
    },
    "competency": {
      "difficulty": "Core+",
      "time": "30–45 min",
      "artifact": "A configuration example, safe startup check and a demonstration that no secret appears in source or logs.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Log the configuration object incorrectly; identify the secret leak and replace it with redacted diagnostics.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Keep secrets outside source control and separate environment-specific configuration from application code.",
    "usedLater": "This becomes the operating discipline for every later project: reproducible environments, inspectable changes, safe configuration and recoverable work.",
    "guidedSteps": [
      "State the engineering problem and the expected result before changing the project.",
      "Run the smallest example that exposes the relevant contract.",
      "Inspect one observable output: file, request, test, trace, version or configuration value.",
      "Change one assumption deliberately and compare the result."
    ],
    "decision": "Which values belong in source control, environment configuration or a secret store?"
  },
  {
    "id": "00-7",
    "phase": "00",
    "phaseName": "Setup & Engineering Workflow",
    "title": "Documentation & reproducibility",
    "summary": "Future-you and other engineers need to know what was run, with which inputs, and why the result should be trusted. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Future-you and other engineers need to know what was run, with which inputs, and why the result should be trusted.",
    "body": "Write a useful README: problem, prerequisites, setup, run/test commands, expected output, known limits and reproducibility notes.",
    "example": "Worked example: Document the project you built in this phase and ask whether a fresh learner could reproduce it without asking you questions.",
    "takeaways": [
      "Write a useful README: problem, prerequisites, setup, run/test commands, expected output, known limits and reproducibility notes.",
      "Practice: Document the project you built in this phase and ask whether a fresh learner could reproduce it without asking you questions.",
      "Failure to diagnose: Give a fresh reader an incomplete setup and record exactly where they get blocked; revise the documentation until the path is unambiguous.",
      "Proof: A README that supports a clean reproduction from a fresh environment."
    ],
    "code": "# Reproduce\n# 1. Create environment\n# 2. Install dependencies\n# 3. Run tests\n# 4. Run the example\n# 5. Compare expected output",
    "practice": "Document the project you built in this phase and ask whether a fresh learner could reproduce it without asking you questions.",
    "breakIt": "Give a fresh reader an incomplete setup and record exactly where they get blocked; revise the documentation until the path is unambiguous.",
    "proof": "A README that supports a clean reproduction from a fresh environment.",
    "transfer": "This becomes the operating discipline for every later project: reproducible environments, inspectable changes, safe configuration and recoverable work.",
    "mistakes": [
      "Assuming a command succeeded because it produced no obvious error.",
      "Mixing machine-specific state into the project.",
      "Documenting steps without recording versions, inputs or expected outputs."
    ],
    "resources": [
      [
        "Python documentation",
        "https://docs.python.org/3/"
      ],
      [
        "Git documentation",
        "https://git-scm.com/doc"
      ],
      [
        "HTTP Semantics (RFC 9110)",
        "https://www.rfc-editor.org/rfc/rfc9110"
      ]
    ],
    "experience": {
      "type": "Prove",
      "title": "Documentation & reproducibility — applied lab",
      "task": "Document the project you built in this phase and ask whether a fresh learner could reproduce it without asking you questions.",
      "evidence": "A README that supports a clean reproduction from a fresh environment.",
      "breakIt": "Give a fresh reader an incomplete setup and record exactly where they get blocked; revise the documentation until the path is unambiguous.",
      "transfer": "These habits make every later experiment reproducible and debuggable."
    },
    "competency": {
      "difficulty": "Core+",
      "time": "30–45 min",
      "artifact": "A README that supports a clean reproduction from a fresh environment.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Give a fresh reader an incomplete setup and record exactly where they get blocked; revise the documentation until the path is unambiguous.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Write a runbook that lets another engineer reproduce an experiment and understand its assumptions and expected result.",
    "usedLater": "This becomes the operating discipline for every later project: reproducible environments, inspectable changes, safe configuration and recoverable work.",
    "guidedSteps": [
      "State the engineering problem and the expected result before changing the project.",
      "Run the smallest example that exposes the relevant contract.",
      "Inspect one observable output: file, request, test, trace, version or configuration value.",
      "Change one assumption deliberately and compare the result."
    ],
    "decision": "What engineering choice does documentation & reproducibility require, and what evidence would justify that choice?"
  },
  {
    "id": "01-1",
    "phase": "01",
    "phaseName": "Python for AI",
    "title": "Python syntax & control flow",
    "summary": "AI code is built from ordinary program logic; model libraries cannot rescue unclear control flow. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "AI code is built from ordinary program logic; model libraries cannot rescue unclear control flow.",
    "body": "Use variables, conditions, loops and comprehensions while keeping state changes explicit and testable.",
    "example": "Worked example: Write a small classifier that maps scores to labels and handles boundary values.",
    "takeaways": [
      "Use variables, conditions, loops and comprehensions while keeping state changes explicit and testable.",
      "Practice: Write a small classifier that maps scores to labels and handles boundary values.",
      "Failure to diagnose: Test exactly-on-the-boundary scores and an unexpected value; fix the branch logic rather than adding special cases blindly.",
      "Proof: A runnable script plus boundary tests showing the decision table is correct."
    ],
    "code": "def classify(score: float) -> str:\n    if not 0 <= score <= 1:\n        raise ValueError(\"score must be between 0 and 1\")\n    return \"positive\" if score >= 0.5 else \"negative\"\n\nprint(classify(0.72))",
    "practice": "Write a small classifier that maps scores to labels and handles boundary values.",
    "breakIt": "Test exactly-on-the-boundary scores and an unexpected value; fix the branch logic rather than adding special cases blindly.",
    "proof": "A runnable script plus boundary tests showing the decision table is correct.",
    "transfer": "You will reuse these Python contracts in data pipelines, evaluation harnesses, APIs and agent services.",
    "mistakes": [
      "Using a language feature without understanding its input/output behavior.",
      "Catching broad exceptions that hide the real defect.",
      "Writing code that is difficult to test because behavior is buried in global state."
    ],
    "resources": [
      [
        "Python documentation",
        "https://docs.python.org/3/"
      ],
      [
        "pytest documentation",
        "https://docs.pytest.org/"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Python syntax & control flow — applied lab",
      "task": "Write a small classifier that maps scores to labels and handles boundary values.",
      "evidence": "A runnable script plus boundary tests showing the decision table is correct.",
      "breakIt": "Test exactly-on-the-boundary scores and an unexpected value; fix the branch logic rather than adding special cases blindly.",
      "transfer": "These Python contracts become the building blocks for data pipelines, model code and evaluation harnesses."
    },
    "competency": {
      "difficulty": "Core",
      "time": "30–45 min",
      "artifact": "A runnable script plus boundary tests showing the decision table is correct.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Test exactly-on-the-boundary scores and an unexpected value; fix the branch logic rather than adding special cases blindly.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Write small Python programs that branch, loop and transform inputs while making edge-case behavior explicit.",
    "usedLater": "You will reuse these Python contracts in data pipelines, evaluation harnesses, APIs and agent services.",
    "guidedSteps": [
      "Start with a tiny input you can inspect by hand.",
      "Run the operation and inspect types, shapes, values or exceptions.",
      "Change one edge case and observe what breaks.",
      "Record the rule you would reuse in a larger system."
    ],
    "decision": "What engineering choice does python syntax & control flow require, and what evidence would justify that choice?"
  },
  {
    "id": "01-2",
    "phase": "01",
    "phaseName": "Python for AI",
    "title": "Functions & modules",
    "summary": "Reusable AI systems depend on small units with clear inputs and outputs. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Reusable AI systems depend on small units with clear inputs and outputs.",
    "body": "Design functions around contracts, keep side effects at the edges, and split reusable code into modules.",
    "example": "Worked example: Refactor a script into parsing, scoring and formatting functions with type-friendly inputs/outputs.",
    "takeaways": [
      "Design functions around contracts, keep side effects at the edges, and split reusable code into modules.",
      "Practice: Refactor a script into parsing, scoring and formatting functions with type-friendly inputs/outputs.",
      "Failure to diagnose: Pass the wrong shape/type into one function and improve the error or validation at the correct boundary.",
      "Proof: A module with three focused functions and tests that demonstrate their contracts."
    ],
    "code": "def classify(score: float) -> str:\n    if not 0 <= score <= 1:\n        raise ValueError(\"score must be between 0 and 1\")\n    return \"positive\" if score >= 0.5 else \"negative\"\n\nprint(classify(0.72))",
    "practice": "Refactor a script into parsing, scoring and formatting functions with type-friendly inputs/outputs.",
    "breakIt": "Pass the wrong shape/type into one function and improve the error or validation at the correct boundary.",
    "proof": "A module with three focused functions and tests that demonstrate their contracts.",
    "transfer": "You will reuse these Python contracts in data pipelines, evaluation harnesses, APIs and agent services.",
    "mistakes": [
      "Using a language feature without understanding its input/output behavior.",
      "Catching broad exceptions that hide the real defect.",
      "Writing code that is difficult to test because behavior is buried in global state."
    ],
    "resources": [
      [
        "Python documentation",
        "https://docs.python.org/3/"
      ],
      [
        "pytest documentation",
        "https://docs.pytest.org/"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Functions & modules — applied lab",
      "task": "Refactor a script into parsing, scoring and formatting functions with type-friendly inputs/outputs.",
      "evidence": "A module with three focused functions and tests that demonstrate their contracts.",
      "breakIt": "Pass the wrong shape/type into one function and improve the error or validation at the correct boundary.",
      "transfer": "These Python contracts become the building blocks for data pipelines, model code and evaluation harnesses."
    },
    "competency": {
      "difficulty": "Core",
      "time": "30–45 min",
      "artifact": "A module with three focused functions and tests that demonstrate their contracts.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Pass the wrong shape/type into one function and improve the error or validation at the correct boundary.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Design small Python units with clear inputs and outputs, then import and test them without hidden global state.",
    "usedLater": "You will reuse these Python contracts in data pipelines, evaluation harnesses, APIs and agent services.",
    "guidedSteps": [
      "Start with a tiny input you can inspect by hand.",
      "Run the operation and inspect types, shapes, values or exceptions.",
      "Change one edge case and observe what breaks.",
      "Record the rule you would reuse in a larger system."
    ],
    "decision": "What engineering choice does functions & modules require, and what evidence would justify that choice?"
  },
  {
    "id": "01-3",
    "phase": "01",
    "phaseName": "Python for AI",
    "title": "Collections & comprehensions",
    "summary": "Data pipelines constantly transform lists, dictionaries and sets; poor choices create bugs or unnecessary complexity. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Data pipelines constantly transform lists, dictionaries and sets; poor choices create bugs or unnecessary complexity.",
    "body": "Choose list, tuple, set and dict based on semantics, and use comprehensions when they remain readable.",
    "example": "Worked example: Transform a list of model results into grouped summaries and unique labels using the appropriate collection types.",
    "takeaways": [
      "Choose list, tuple, set and dict based on semantics, and use comprehensions when they remain readable.",
      "Practice: Transform a list of model results into grouped summaries and unique labels using the appropriate collection types.",
      "Failure to diagnose: Introduce duplicate keys or missing values and show how the chosen structure behaves; then make the assumption explicit.",
      "Proof: A small transformation script with example inputs, outputs and one edge-case test."
    ],
    "code": "def classify(score: float) -> str:\n    if not 0 <= score <= 1:\n        raise ValueError(\"score must be between 0 and 1\")\n    return \"positive\" if score >= 0.5 else \"negative\"\n\nprint(classify(0.72))",
    "practice": "Transform a list of model results into grouped summaries and unique labels using the appropriate collection types.",
    "breakIt": "Introduce duplicate keys or missing values and show how the chosen structure behaves; then make the assumption explicit.",
    "proof": "A small transformation script with example inputs, outputs and one edge-case test.",
    "transfer": "You will reuse these Python contracts in data pipelines, evaluation harnesses, APIs and agent services.",
    "mistakes": [
      "Using a language feature without understanding its input/output behavior.",
      "Catching broad exceptions that hide the real defect.",
      "Writing code that is difficult to test because behavior is buried in global state."
    ],
    "resources": [
      [
        "Python documentation",
        "https://docs.python.org/3/"
      ],
      [
        "pytest documentation",
        "https://docs.pytest.org/"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Collections & comprehensions — applied lab",
      "task": "Transform a list of model results into grouped summaries and unique labels using the appropriate collection types.",
      "evidence": "A small transformation script with example inputs, outputs and one edge-case test.",
      "breakIt": "Introduce duplicate keys or missing values and show how the chosen structure behaves; then make the assumption explicit.",
      "transfer": "These Python contracts become the building blocks for data pipelines, model code and evaluation harnesses."
    },
    "competency": {
      "difficulty": "Core+",
      "time": "30–45 min",
      "artifact": "A small transformation script with example inputs, outputs and one edge-case test.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Introduce duplicate keys or missing values and show how the chosen structure behaves; then make the assumption explicit.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Choose lists, dictionaries and sets based on the data operation you need and express simple transformations clearly.",
    "usedLater": "You will reuse these Python contracts in data pipelines, evaluation harnesses, APIs and agent services.",
    "guidedSteps": [
      "Start with a tiny input you can inspect by hand.",
      "Run the operation and inspect types, shapes, values or exceptions.",
      "Change one edge case and observe what breaks.",
      "Record the rule you would reuse in a larger system."
    ],
    "decision": "What engineering choice does collections & comprehensions require, and what evidence would justify that choice?"
  },
  {
    "id": "01-4",
    "phase": "01",
    "phaseName": "Python for AI",
    "title": "Exceptions & debugging",
    "summary": "AI failures often surface far from their root cause; reading tracebacks is a core engineering skill. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "AI failures often surface far from their root cause; reading tracebacks is a core engineering skill.",
    "body": "Distinguish expected validation errors from unexpected defects, read tracebacks from bottom to top, and preserve useful context.",
    "example": "Worked example: Debug a deliberately broken parser and add one targeted exception with a helpful message.",
    "takeaways": [
      "Distinguish expected validation errors from unexpected defects, read tracebacks from bottom to top, and preserve useful context.",
      "Practice: Debug a deliberately broken parser and add one targeted exception with a helpful message.",
      "Failure to diagnose: Catch Exception everywhere and observe how it hides the real bug; remove the broad catch and handle only the expected failure.",
      "Proof: A before/after debugging note with root cause, fix and regression test."
    ],
    "code": "def classify(score: float) -> str:\n    if not 0 <= score <= 1:\n        raise ValueError(\"score must be between 0 and 1\")\n    return \"positive\" if score >= 0.5 else \"negative\"\n\nprint(classify(0.72))",
    "practice": "Debug a deliberately broken parser and add one targeted exception with a helpful message.",
    "breakIt": "Catch Exception everywhere and observe how it hides the real bug; remove the broad catch and handle only the expected failure.",
    "proof": "A before/after debugging note with root cause, fix and regression test.",
    "transfer": "You will reuse these Python contracts in data pipelines, evaluation harnesses, APIs and agent services.",
    "mistakes": [
      "Using a language feature without understanding its input/output behavior.",
      "Catching broad exceptions that hide the real defect.",
      "Writing code that is difficult to test because behavior is buried in global state."
    ],
    "resources": [
      [
        "Python documentation",
        "https://docs.python.org/3/"
      ],
      [
        "pytest documentation",
        "https://docs.pytest.org/"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Exceptions & debugging — applied lab",
      "task": "Debug a deliberately broken parser and add one targeted exception with a helpful message.",
      "evidence": "A before/after debugging note with root cause, fix and regression test.",
      "breakIt": "Catch Exception everywhere and observe how it hides the real bug; remove the broad catch and handle only the expected failure.",
      "transfer": "These Python contracts become the building blocks for data pipelines, model code and evaluation harnesses."
    },
    "competency": {
      "difficulty": "Core+",
      "time": "30–45 min",
      "artifact": "A before/after debugging note with root cause, fix and regression test.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Catch Exception everywhere and observe how it hides the real bug; remove the broad catch and handle only the expected failure.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Read a traceback, isolate the failing operation, inspect the relevant state and fix the root cause rather than masking it.",
    "usedLater": "You will reuse these Python contracts in data pipelines, evaluation harnesses, APIs and agent services.",
    "guidedSteps": [
      "Start with a tiny input you can inspect by hand.",
      "Run the operation and inspect types, shapes, values or exceptions.",
      "Change one edge case and observe what breaks.",
      "Record the rule you would reuse in a larger system."
    ],
    "decision": "What engineering choice does exceptions & debugging require, and what evidence would justify that choice?"
  },
  {
    "id": "01-5",
    "phase": "01",
    "phaseName": "Python for AI",
    "title": "Files, JSON & CSV",
    "summary": "AI applications move data between files and services; malformed input is normal, not exceptional. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "AI applications move data between files and services; malformed input is normal, not exceptional.",
    "body": "Read/write text, JSON and CSV while validating required fields and handling encoding or missing-column issues.",
    "example": "Worked example: Load a small dataset, validate required columns, transform it and write a clean JSON summary.",
    "takeaways": [
      "Read/write text, JSON and CSV while validating required fields and handling encoding or missing-column issues.",
      "Practice: Load a small dataset, validate required columns, transform it and write a clean JSON summary.",
      "Failure to diagnose: Remove a required column or corrupt one record and make the pipeline report the exact bad input without losing the rest of the diagnosis.",
      "Proof: A data-processing script and sample output plus a malformed-input test."
    ],
    "code": "def classify(score: float) -> str:\n    if not 0 <= score <= 1:\n        raise ValueError(\"score must be between 0 and 1\")\n    return \"positive\" if score >= 0.5 else \"negative\"\n\nprint(classify(0.72))",
    "practice": "Load a small dataset, validate required columns, transform it and write a clean JSON summary.",
    "breakIt": "Remove a required column or corrupt one record and make the pipeline report the exact bad input without losing the rest of the diagnosis.",
    "proof": "A data-processing script and sample output plus a malformed-input test.",
    "transfer": "You will reuse these Python contracts in data pipelines, evaluation harnesses, APIs and agent services.",
    "mistakes": [
      "Using a language feature without understanding its input/output behavior.",
      "Catching broad exceptions that hide the real defect.",
      "Writing code that is difficult to test because behavior is buried in global state."
    ],
    "resources": [
      [
        "Python documentation",
        "https://docs.python.org/3/"
      ],
      [
        "pytest documentation",
        "https://docs.pytest.org/"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "Files, JSON & CSV — applied lab",
      "task": "Load a small dataset, validate required columns, transform it and write a clean JSON summary.",
      "evidence": "A data-processing script and sample output plus a malformed-input test.",
      "breakIt": "Remove a required column or corrupt one record and make the pipeline report the exact bad input without losing the rest of the diagnosis.",
      "transfer": "These Python contracts become the building blocks for data pipelines, model code and evaluation harnesses."
    },
    "competency": {
      "difficulty": "Core+",
      "time": "30–45 min",
      "artifact": "A data-processing script and sample output plus a malformed-input test.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Remove a required column or corrupt one record and make the pipeline report the exact bad input without losing the rest of the diagnosis.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Read and write common data formats while validating missing fields, malformed records and encoding assumptions.",
    "usedLater": "You will reuse these Python contracts in data pipelines, evaluation harnesses, APIs and agent services.",
    "guidedSteps": [
      "Start with a tiny input you can inspect by hand.",
      "Run the operation and inspect types, shapes, values or exceptions.",
      "Change one edge case and observe what breaks.",
      "Record the rule you would reuse in a larger system."
    ],
    "decision": "What engineering choice does files, json & csv require, and what evidence would justify that choice?"
  },
  {
    "id": "01-6",
    "phase": "01",
    "phaseName": "Python for AI",
    "title": "Typing & dataclasses",
    "summary": "As AI systems grow, implicit dictionaries become difficult to reason about and easy to misuse. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "As AI systems grow, implicit dictionaries become difficult to reason about and easy to misuse.",
    "body": "Use type hints and dataclasses to make data contracts visible without pretending types replace runtime validation.",
    "example": "Worked example: Represent a model request/result as dataclasses and add a function that converts validated JSON into the typed object.",
    "takeaways": [
      "Use type hints and dataclasses to make data contracts visible without pretending types replace runtime validation.",
      "Practice: Represent a model request/result as dataclasses and add a function that converts validated JSON into the typed object.",
      "Failure to diagnose: Pass a missing or wrong field and distinguish static type guidance from runtime validation.",
      "Proof: Typed request/result objects plus one validation test demonstrating the boundary."
    ],
    "code": "def classify(score: float) -> str:\n    if not 0 <= score <= 1:\n        raise ValueError(\"score must be between 0 and 1\")\n    return \"positive\" if score >= 0.5 else \"negative\"\n\nprint(classify(0.72))",
    "practice": "Represent a model request/result as dataclasses and add a function that converts validated JSON into the typed object.",
    "breakIt": "Pass a missing or wrong field and distinguish static type guidance from runtime validation.",
    "proof": "Typed request/result objects plus one validation test demonstrating the boundary.",
    "transfer": "You will reuse these Python contracts in data pipelines, evaluation harnesses, APIs and agent services.",
    "mistakes": [
      "Using a language feature without understanding its input/output behavior.",
      "Catching broad exceptions that hide the real defect.",
      "Writing code that is difficult to test because behavior is buried in global state."
    ],
    "resources": [
      [
        "Python documentation",
        "https://docs.python.org/3/"
      ],
      [
        "pytest documentation",
        "https://docs.pytest.org/"
      ]
    ],
    "experience": {
      "type": "Design",
      "title": "Typing & dataclasses — applied lab",
      "task": "Represent a model request/result as dataclasses and add a function that converts validated JSON into the typed object.",
      "evidence": "Typed request/result objects plus one validation test demonstrating the boundary.",
      "breakIt": "Pass a missing or wrong field and distinguish static type guidance from runtime validation.",
      "transfer": "These Python contracts become the building blocks for data pipelines, model code and evaluation harnesses."
    },
    "competency": {
      "difficulty": "Core+",
      "time": "30–45 min",
      "artifact": "Typed request/result objects plus one validation test demonstrating the boundary.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Pass a missing or wrong field and distinguish static type guidance from runtime validation.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Make Python data contracts explicit with types and dataclasses so incorrect state is easier to detect before runtime.",
    "usedLater": "You will reuse these Python contracts in data pipelines, evaluation harnesses, APIs and agent services.",
    "guidedSteps": [
      "Start with a tiny input you can inspect by hand.",
      "Run the operation and inspect types, shapes, values or exceptions.",
      "Change one edge case and observe what breaks.",
      "Record the rule you would reuse in a larger system."
    ],
    "decision": "What engineering choice does typing & dataclasses require, and what evidence would justify that choice?"
  },
  {
    "id": "01-7",
    "phase": "01",
    "phaseName": "Python for AI",
    "title": "Testing with pytest",
    "summary": "A test that only checks that code runs is weak evidence; good tests encode expected behavior and failure boundaries. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A test that only checks that code runs is weak evidence; good tests encode expected behavior and failure boundaries.",
    "body": "Use arrange → act → assert, parametrization and focused tests; distinguish unit tests from integration tests.",
    "example": "Worked example: Write tests for a scoring function including normal, boundary and invalid inputs.",
    "takeaways": [
      "Use arrange → act → assert, parametrization and focused tests; distinguish unit tests from integration tests.",
      "Practice: Write tests for a scoring function including normal, boundary and invalid inputs.",
      "Failure to diagnose: Change the implementation to an incorrect boundary condition and confirm the test suite catches it.",
      "Proof: A pytest suite with normal, boundary and failure cases and a recorded failing run before the fix."
    ],
    "code": "def classify(score: float) -> str:\n    if not 0 <= score <= 1:\n        raise ValueError(\"score must be between 0 and 1\")\n    return \"positive\" if score >= 0.5 else \"negative\"\n\nprint(classify(0.72))",
    "practice": "Write tests for a scoring function including normal, boundary and invalid inputs.",
    "breakIt": "Change the implementation to an incorrect boundary condition and confirm the test suite catches it.",
    "proof": "A pytest suite with normal, boundary and failure cases and a recorded failing run before the fix.",
    "transfer": "You will reuse these Python contracts in data pipelines, evaluation harnesses, APIs and agent services.",
    "mistakes": [
      "Using a language feature without understanding its input/output behavior.",
      "Catching broad exceptions that hide the real defect.",
      "Writing code that is difficult to test because behavior is buried in global state."
    ],
    "resources": [
      [
        "Python documentation",
        "https://docs.python.org/3/"
      ],
      [
        "pytest documentation",
        "https://docs.pytest.org/"
      ]
    ],
    "experience": {
      "type": "Prove",
      "title": "Testing with pytest — applied lab",
      "task": "Write tests for a scoring function including normal, boundary and invalid inputs.",
      "evidence": "A pytest suite with normal, boundary and failure cases and a recorded failing run before the fix.",
      "breakIt": "Change the implementation to an incorrect boundary condition and confirm the test suite catches it.",
      "transfer": "These Python contracts become the building blocks for data pipelines, model code and evaluation harnesses."
    },
    "competency": {
      "difficulty": "Core+",
      "time": "30–45 min",
      "artifact": "A pytest suite with normal, boundary and failure cases and a recorded failing run before the fix.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Change the implementation to an incorrect boundary condition and confirm the test suite catches it.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Turn expected behavior and edge cases into repeatable pytest tests that catch regressions.",
    "usedLater": "You will reuse these Python contracts in data pipelines, evaluation harnesses, APIs and agent services.",
    "guidedSteps": [
      "Start with a tiny input you can inspect by hand.",
      "Run the operation and inspect types, shapes, values or exceptions.",
      "Change one edge case and observe what breaks.",
      "Record the rule you would reuse in a larger system."
    ],
    "decision": "Which behavior deserves a regression test because a future change could break it?"
  },
  {
    "id": "01-8",
    "phase": "01",
    "phaseName": "Python for AI",
    "title": "Python project patterns",
    "summary": "A maintainable Python project needs predictable entry points, configuration boundaries, tests and import discipline. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A maintainable Python project needs predictable entry points, configuration boundaries, tests and import discipline.",
    "body": "Connect modules, package boundaries, configuration and test layout into one small application without over-engineering it.",
    "example": "Worked example: Build a command-line mini application with src/tests structure and a single documented entry point.",
    "takeaways": [
      "Connect modules, package boundaries, configuration and test layout into one small application without over-engineering it.",
      "Practice: Build a command-line mini application with src/tests structure and a single documented entry point.",
      "Failure to diagnose: Break an import or configuration assumption and diagnose it from the test/CLI output.",
      "Proof: A small repository that another learner can install, test and run using documented commands."
    ],
    "code": "def classify(score: float) -> str:\n    if not 0 <= score <= 1:\n        raise ValueError(\"score must be between 0 and 1\")\n    return \"positive\" if score >= 0.5 else \"negative\"\n\nprint(classify(0.72))",
    "practice": "Build a command-line mini application with src/tests structure and a single documented entry point.",
    "breakIt": "Break an import or configuration assumption and diagnose it from the test/CLI output.",
    "proof": "A small repository that another learner can install, test and run using documented commands.",
    "transfer": "You will reuse these Python contracts in data pipelines, evaluation harnesses, APIs and agent services.",
    "mistakes": [
      "Using a language feature without understanding its input/output behavior.",
      "Catching broad exceptions that hide the real defect.",
      "Writing code that is difficult to test because behavior is buried in global state."
    ],
    "resources": [
      [
        "Python documentation",
        "https://docs.python.org/3/"
      ],
      [
        "pytest documentation",
        "https://docs.pytest.org/"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Python project patterns — applied lab",
      "task": "Build a command-line mini application with src/tests structure and a single documented entry point.",
      "evidence": "A small repository that another learner can install, test and run using documented commands.",
      "breakIt": "Break an import or configuration assumption and diagnose it from the test/CLI output.",
      "transfer": "These Python contracts become the building blocks for data pipelines, model code and evaluation harnesses."
    },
    "competency": {
      "difficulty": "Core+",
      "time": "30–45 min",
      "artifact": "A small repository that another learner can install, test and run using documented commands.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Break an import or configuration assumption and diagnose it from the test/CLI output.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Create a maintainable Python project with clear entry points, imports, configuration boundaries and tests.",
    "usedLater": "You will reuse these Python contracts in data pipelines, evaluation harnesses, APIs and agent services.",
    "guidedSteps": [
      "Start with a tiny input you can inspect by hand.",
      "Run the operation and inspect types, shapes, values or exceptions.",
      "Change one edge case and observe what breaks.",
      "Record the rule you would reuse in a larger system."
    ],
    "decision": "What engineering choice does python project patterns require, and what evidence would justify that choice?"
  },
  {
    "id": "02-1",
    "phase": "02",
    "phaseName": "Data & Math Foundations",
    "title": "NumPy arrays & vectorization",
    "summary": "AI data is numerical and large; Python loops become awkward and slow when every value is handled individually. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "AI data is numerical and large; Python loops become awkward and slow when every value is handled individually.",
    "body": "Understand shape, dtype, axis and broadcasting, then use array operations instead of accidental nested loops.",
    "example": "Worked example: Normalize a matrix of feature values and compute row-wise statistics with vectorized operations.",
    "takeaways": [
      "Understand shape, dtype, axis and broadcasting, then use array operations instead of accidental nested loops.",
      "Practice: Normalize a matrix of feature values and compute row-wise statistics with vectorized operations.",
      "Failure to diagnose: Transpose or reshape the array incorrectly and use shape inspection to diagnose the mismatch.",
      "Proof: A notebook/script showing shapes before/after and a vectorized result verified against a small loop."
    ],
    "code": "import numpy as np\nX = np.array([[1.,2.],[3.,4.]])\nprint(\"shape:\", X.shape)\nprint(\"row means:\", X.mean(axis=1))",
    "practice": "Normalize a matrix of feature values and compute row-wise statistics with vectorized operations.",
    "breakIt": "Transpose or reshape the array incorrectly and use shape inspection to diagnose the mismatch.",
    "proof": "A notebook/script showing shapes before/after and a vectorized result verified against a small loop.",
    "transfer": "You will use these foundations to inspect datasets, embeddings, model inputs, metrics and optimization behavior instead of treating them as magic.",
    "mistakes": [
      "Ignoring shape, units, data types or population definitions.",
      "Using a metric without checking what it measures.",
      "Treating a numerical result as meaningful without validating the data that produced it."
    ],
    "resources": [
      [
        "NumPy documentation",
        "https://numpy.org/doc/stable/"
      ],
      [
        "pandas documentation",
        "https://pandas.pydata.org/docs/"
      ],
      [
        "scikit-learn User Guide",
        "https://scikit-learn.org/stable/user_guide.html"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "NumPy arrays & vectorization — applied lab",
      "task": "Normalize a matrix of feature values and compute row-wise statistics with vectorized operations.",
      "evidence": "A notebook/script showing shapes before/after and a vectorized result verified against a small loop.",
      "breakIt": "Transpose or reshape the array incorrectly and use shape inspection to diagnose the mismatch.",
      "transfer": "These data and mathematical tools let you inspect representations, metrics and model behavior instead of treating them as magic."
    },
    "competency": {
      "difficulty": "Core",
      "time": "30–45 min",
      "artifact": "A notebook/script showing shapes before/after and a vectorized result verified against a small loop.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Transpose or reshape the array incorrectly and use shape inspection to diagnose the mismatch.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Represent numerical data with predictable shapes and replace unnecessary Python loops with vectorized array operations.",
    "usedLater": "You will use these foundations to inspect datasets, embeddings, model inputs, metrics and optimization behavior instead of treating them as magic.",
    "guidedSteps": [
      "Start with a tiny input you can inspect by hand.",
      "Run the operation and inspect types, shapes, values or exceptions.",
      "Change one edge case and observe what breaks.",
      "Record the rule you would reuse in a larger system."
    ],
    "decision": "What engineering choice does numpy arrays & vectorization require, and what evidence would justify that choice?"
  },
  {
    "id": "02-2",
    "phase": "02",
    "phaseName": "Data & Math Foundations",
    "title": "Pandas & data preparation",
    "summary": "Real AI datasets contain missing values, duplicate rows, mixed types and awkward tables before modeling even begins. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Real AI datasets contain missing values, duplicate rows, mixed types and awkward tables before modeling even begins.",
    "body": "Use DataFrames for inspection, filtering, grouping, joining and missing-data decisions; make cleaning rules explicit.",
    "example": "Worked example: Clean a small customer/event table, fix types, remove duplicates and create one modeling-ready table.",
    "takeaways": [
      "Use DataFrames for inspection, filtering, grouping, joining and missing-data decisions; make cleaning rules explicit.",
      "Practice: Clean a small customer/event table, fix types, remove duplicates and create one modeling-ready table.",
      "Failure to diagnose: Introduce a duplicate key or missing value and show how a silent join/aggregation can corrupt counts.",
      "Proof: A before/after dataset report with cleaning rules and a check on row counts/keys."
    ],
    "code": "import numpy as np\nX = np.array([[1.,2.],[3.,4.]])\nprint(\"shape:\", X.shape)\nprint(\"row means:\", X.mean(axis=1))",
    "practice": "Clean a small customer/event table, fix types, remove duplicates and create one modeling-ready table.",
    "breakIt": "Introduce a duplicate key or missing value and show how a silent join/aggregation can corrupt counts.",
    "proof": "A before/after dataset report with cleaning rules and a check on row counts/keys.",
    "transfer": "You will use these foundations to inspect datasets, embeddings, model inputs, metrics and optimization behavior instead of treating them as magic.",
    "mistakes": [
      "Ignoring shape, units, data types or population definitions.",
      "Using a metric without checking what it measures.",
      "Treating a numerical result as meaningful without validating the data that produced it."
    ],
    "resources": [
      [
        "NumPy documentation",
        "https://numpy.org/doc/stable/"
      ],
      [
        "pandas documentation",
        "https://pandas.pydata.org/docs/"
      ],
      [
        "scikit-learn User Guide",
        "https://scikit-learn.org/stable/user_guide.html"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Pandas & data preparation — applied lab",
      "task": "Clean a small customer/event table, fix types, remove duplicates and create one modeling-ready table.",
      "evidence": "A before/after dataset report with cleaning rules and a check on row counts/keys.",
      "breakIt": "Introduce a duplicate key or missing value and show how a silent join/aggregation can corrupt counts.",
      "transfer": "These data and mathematical tools let you inspect representations, metrics and model behavior instead of treating them as magic."
    },
    "competency": {
      "difficulty": "Core",
      "time": "30–45 min",
      "artifact": "A before/after dataset report with cleaning rules and a check on row counts/keys.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Introduce a duplicate key or missing value and show how a silent join/aggregation can corrupt counts.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Inspect, clean, join and transform tabular data while preserving row meaning and measuring what changed.",
    "usedLater": "You will use these foundations to inspect datasets, embeddings, model inputs, metrics and optimization behavior instead of treating them as magic.",
    "guidedSteps": [
      "Start with a tiny input you can inspect by hand.",
      "Run the operation and inspect types, shapes, values or exceptions.",
      "Change one edge case and observe what breaks.",
      "Record the rule you would reuse in a larger system."
    ],
    "decision": "What engineering choice does pandas & data preparation require, and what evidence would justify that choice?"
  },
  {
    "id": "02-3",
    "phase": "02",
    "phaseName": "Data & Math Foundations",
    "title": "SQL for AI data work",
    "summary": "Many model inputs originate in relational systems; pulling the wrong rows can invalidate an otherwise perfect model. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Many model inputs originate in relational systems; pulling the wrong rows can invalidate an otherwise perfect model.",
    "body": "Use SELECT, WHERE, JOIN, GROUP BY and window functions to express dataset construction and understand row multiplication.",
    "example": "Worked example: Build a training table from users, events and labels using a time cutoff.",
    "takeaways": [
      "Use SELECT, WHERE, JOIN, GROUP BY and window functions to express dataset construction and understand row multiplication.",
      "Practice: Build a training table from users, events and labels using a time cutoff.",
      "Failure to diagnose: Create a many-to-many join that duplicates examples; detect it by comparing expected and actual row counts.",
      "Proof: A query plus a validation query proving row uniqueness and time cutoff correctness."
    ],
    "code": "import numpy as np\nX = np.array([[1.,2.],[3.,4.]])\nprint(\"shape:\", X.shape)\nprint(\"row means:\", X.mean(axis=1))",
    "practice": "Build a training table from users, events and labels using a time cutoff.",
    "breakIt": "Create a many-to-many join that duplicates examples; detect it by comparing expected and actual row counts.",
    "proof": "A query plus a validation query proving row uniqueness and time cutoff correctness.",
    "transfer": "You will use these foundations to inspect datasets, embeddings, model inputs, metrics and optimization behavior instead of treating them as magic.",
    "mistakes": [
      "Ignoring shape, units, data types or population definitions.",
      "Using a metric without checking what it measures.",
      "Treating a numerical result as meaningful without validating the data that produced it."
    ],
    "resources": [
      [
        "NumPy documentation",
        "https://numpy.org/doc/stable/"
      ],
      [
        "pandas documentation",
        "https://pandas.pydata.org/docs/"
      ],
      [
        "scikit-learn User Guide",
        "https://scikit-learn.org/stable/user_guide.html"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "SQL for AI data work — applied lab",
      "task": "Build a training table from users, events and labels using a time cutoff.",
      "evidence": "A query plus a validation query proving row uniqueness and time cutoff correctness.",
      "breakIt": "Create a many-to-many join that duplicates examples; detect it by comparing expected and actual row counts.",
      "transfer": "These data and mathematical tools let you inspect representations, metrics and model behavior instead of treating them as magic."
    },
    "competency": {
      "difficulty": "Core+",
      "time": "30–45 min",
      "artifact": "A query plus a validation query proving row uniqueness and time cutoff correctness.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Create a many-to-many join that duplicates examples; detect it by comparing expected and actual row counts.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Query relational data with filters, joins and aggregations while checking that the resulting rows match the intended population.",
    "usedLater": "You will use these foundations to inspect datasets, embeddings, model inputs, metrics and optimization behavior instead of treating them as magic.",
    "guidedSteps": [
      "Start with a tiny input you can inspect by hand.",
      "Run the operation and inspect types, shapes, values or exceptions.",
      "Change one edge case and observe what breaks.",
      "Record the rule you would reuse in a larger system."
    ],
    "decision": "What engineering choice does sql for ai data work require, and what evidence would justify that choice?"
  },
  {
    "id": "02-4",
    "phase": "02",
    "phaseName": "Data & Math Foundations",
    "title": "Vectors, matrices & dot products",
    "summary": "Embeddings, linear layers and similarity search all rely on vector and matrix operations. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Embeddings, linear layers and similarity search all rely on vector and matrix operations.",
    "body": "Interpret dimensions, dot products, matrix multiplication and linear transformations geometrically and computationally.",
    "example": "Worked example: Compute scores for several feature vectors using a weight matrix and inspect each dimension.",
    "takeaways": [
      "Interpret dimensions, dot products, matrix multiplication and linear transformations geometrically and computationally.",
      "Practice: Compute scores for several feature vectors using a weight matrix and inspect each dimension.",
      "Failure to diagnose: Swap matrix dimensions or transpose the wrong operand and diagnose the exact shape contract.",
      "Proof: A worked calculation and a small program whose printed shapes make the multiplication explicit."
    ],
    "code": "import numpy as np\nX = np.array([[1.,2.],[3.,4.]])\nprint(\"shape:\", X.shape)\nprint(\"row means:\", X.mean(axis=1))",
    "practice": "Compute scores for several feature vectors using a weight matrix and inspect each dimension.",
    "breakIt": "Swap matrix dimensions or transpose the wrong operand and diagnose the exact shape contract.",
    "proof": "A worked calculation and a small program whose printed shapes make the multiplication explicit.",
    "transfer": "You will use these foundations to inspect datasets, embeddings, model inputs, metrics and optimization behavior instead of treating them as magic.",
    "mistakes": [
      "Ignoring shape, units, data types or population definitions.",
      "Using a metric without checking what it measures.",
      "Treating a numerical result as meaningful without validating the data that produced it."
    ],
    "resources": [
      [
        "NumPy documentation",
        "https://numpy.org/doc/stable/"
      ],
      [
        "pandas documentation",
        "https://pandas.pydata.org/docs/"
      ],
      [
        "scikit-learn User Guide",
        "https://scikit-learn.org/stable/user_guide.html"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Vectors, matrices & dot products — applied lab",
      "task": "Compute scores for several feature vectors using a weight matrix and inspect each dimension.",
      "evidence": "A worked calculation and a small program whose printed shapes make the multiplication explicit.",
      "breakIt": "Swap matrix dimensions or transpose the wrong operand and diagnose the exact shape contract.",
      "transfer": "These data and mathematical tools let you inspect representations, metrics and model behavior instead of treating them as magic."
    },
    "competency": {
      "difficulty": "Core+",
      "time": "30–45 min",
      "artifact": "A worked calculation and a small program whose printed shapes make the multiplication explicit.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Swap matrix dimensions or transpose the wrong operand and diagnose the exact shape contract.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Calculate and interpret vector/matrix operations that appear in model layers, similarity search and embeddings.",
    "usedLater": "You will use these foundations to inspect datasets, embeddings, model inputs, metrics and optimization behavior instead of treating them as magic.",
    "guidedSteps": [
      "Start with a tiny input you can inspect by hand.",
      "Run the operation and inspect types, shapes, values or exceptions.",
      "Change one edge case and observe what breaks.",
      "Record the rule you would reuse in a larger system."
    ],
    "decision": "What engineering choice does vectors, matrices & dot products require, and what evidence would justify that choice?"
  },
  {
    "id": "02-5",
    "phase": "02",
    "phaseName": "Data & Math Foundations",
    "title": "Probability & statistics",
    "summary": "AI decisions involve uncertainty, distributions and noisy measurements; a single average can hide important behavior. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "AI decisions involve uncertainty, distributions and noisy measurements; a single average can hide important behavior.",
    "body": "Use probability, conditional probability, mean/median/variance and sampling intuition to describe uncertainty and data behavior.",
    "example": "Worked example: Compare two datasets with the same mean but different spread and estimate a conditional rate from a contingency table.",
    "takeaways": [
      "Use probability, conditional probability, mean/median/variance and sampling intuition to describe uncertainty and data behavior.",
      "Practice: Compare two datasets with the same mean but different spread and estimate a conditional rate from a contingency table.",
      "Failure to diagnose: Add an outlier or change the sampling process and explain which statistic moved and why.",
      "Proof: A short analysis with calculated statistics and a paragraph explaining what they do and do not support."
    ],
    "code": "import numpy as np\nX = np.array([[1.,2.],[3.,4.]])\nprint(\"shape:\", X.shape)\nprint(\"row means:\", X.mean(axis=1))",
    "practice": "Compare two datasets with the same mean but different spread and estimate a conditional rate from a contingency table.",
    "breakIt": "Add an outlier or change the sampling process and explain which statistic moved and why.",
    "proof": "A short analysis with calculated statistics and a paragraph explaining what they do and do not support.",
    "transfer": "You will use these foundations to inspect datasets, embeddings, model inputs, metrics and optimization behavior instead of treating them as magic.",
    "mistakes": [
      "Ignoring shape, units, data types or population definitions.",
      "Using a metric without checking what it measures.",
      "Treating a numerical result as meaningful without validating the data that produced it."
    ],
    "resources": [
      [
        "NumPy documentation",
        "https://numpy.org/doc/stable/"
      ],
      [
        "pandas documentation",
        "https://pandas.pydata.org/docs/"
      ],
      [
        "scikit-learn User Guide",
        "https://scikit-learn.org/stable/user_guide.html"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "Probability & statistics — applied lab",
      "task": "Compare two datasets with the same mean but different spread and estimate a conditional rate from a contingency table.",
      "evidence": "A short analysis with calculated statistics and a paragraph explaining what they do and do not support.",
      "breakIt": "Add an outlier or change the sampling process and explain which statistic moved and why.",
      "transfer": "These data and mathematical tools let you inspect representations, metrics and model behavior instead of treating them as magic."
    },
    "competency": {
      "difficulty": "Core+",
      "time": "30–45 min",
      "artifact": "A short analysis with calculated statistics and a paragraph explaining what they do and do not support.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Add an outlier or change the sampling process and explain which statistic moved and why.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Summarize uncertain data with distributions, rates and intervals instead of relying on a single misleading average.",
    "usedLater": "You will use these foundations to inspect datasets, embeddings, model inputs, metrics and optimization behavior instead of treating them as magic.",
    "guidedSteps": [
      "Start with a tiny input you can inspect by hand.",
      "Run the operation and inspect types, shapes, values or exceptions.",
      "Change one edge case and observe what breaks.",
      "Record the rule you would reuse in a larger system."
    ],
    "decision": "What engineering choice does probability & statistics require, and what evidence would justify that choice?"
  },
  {
    "id": "02-6",
    "phase": "02",
    "phaseName": "Data & Math Foundations",
    "title": "Gradients & optimization",
    "summary": "Training is repeated adjustment; the useful question is not “what is a gradient?” but “which direction reduces the objective?” This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Training is repeated adjustment; the useful question is not “what is a gradient?” but “which direction reduces the objective?”",
    "body": "Connect derivative, gradient, learning rate and objective to a simple optimization loop.",
    "example": "Worked example: Minimize a one-dimensional quadratic by hand and with a few lines of Python while varying the learning rate.",
    "takeaways": [
      "Connect derivative, gradient, learning rate and objective to a simple optimization loop.",
      "Practice: Minimize a one-dimensional quadratic by hand and with a few lines of Python while varying the learning rate.",
      "Failure to diagnose: Use a learning rate that overshoots and show oscillation/divergence instead of guessing that the optimizer is broken.",
      "Proof: A table/plot of iterations with a short diagnosis of stable versus unstable learning rates."
    ],
    "code": "import numpy as np\nX = np.array([[1.,2.],[3.,4.]])\nprint(\"shape:\", X.shape)\nprint(\"row means:\", X.mean(axis=1))",
    "practice": "Minimize a one-dimensional quadratic by hand and with a few lines of Python while varying the learning rate.",
    "breakIt": "Use a learning rate that overshoots and show oscillation/divergence instead of guessing that the optimizer is broken.",
    "proof": "A table/plot of iterations with a short diagnosis of stable versus unstable learning rates.",
    "transfer": "You will use these foundations to inspect datasets, embeddings, model inputs, metrics and optimization behavior instead of treating them as magic.",
    "mistakes": [
      "Ignoring shape, units, data types or population definitions.",
      "Using a metric without checking what it measures.",
      "Treating a numerical result as meaningful without validating the data that produced it."
    ],
    "resources": [
      [
        "NumPy documentation",
        "https://numpy.org/doc/stable/"
      ],
      [
        "pandas documentation",
        "https://pandas.pydata.org/docs/"
      ],
      [
        "scikit-learn User Guide",
        "https://scikit-learn.org/stable/user_guide.html"
      ]
    ],
    "experience": {
      "type": "Design",
      "title": "Gradients & optimization — applied lab",
      "task": "Minimize a one-dimensional quadratic by hand and with a few lines of Python while varying the learning rate.",
      "evidence": "A table/plot of iterations with a short diagnosis of stable versus unstable learning rates.",
      "breakIt": "Use a learning rate that overshoots and show oscillation/divergence instead of guessing that the optimizer is broken.",
      "transfer": "These data and mathematical tools let you inspect representations, metrics and model behavior instead of treating them as magic."
    },
    "competency": {
      "difficulty": "Core+",
      "time": "30–45 min",
      "artifact": "A table/plot of iterations with a short diagnosis of stable versus unstable learning rates.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Use a learning rate that overshoots and show oscillation/divergence instead of guessing that the optimizer is broken.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Explain how a gradient points toward increasing loss and use an optimization step to move parameters toward a lower objective.",
    "usedLater": "You will use these foundations to inspect datasets, embeddings, model inputs, metrics and optimization behavior instead of treating them as magic.",
    "guidedSteps": [
      "Start with a tiny input you can inspect by hand.",
      "Run the operation and inspect types, shapes, values or exceptions.",
      "Change one edge case and observe what breaks.",
      "Record the rule you would reuse in a larger system."
    ],
    "decision": "What engineering choice does gradients & optimization require, and what evidence would justify that choice?"
  },
  {
    "id": "02-7",
    "phase": "02",
    "phaseName": "Data & Math Foundations",
    "title": "Distance, similarity & embeddings intuition",
    "summary": "Retrieval and semantic matching depend on how representations are compared, not on magic “AI similarity.” This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Retrieval and semantic matching depend on how representations are compared, not on magic “AI similarity.”",
    "body": "Compare Euclidean distance, cosine similarity and dot product; explain how normalization changes interpretation.",
    "example": "Worked example: Create tiny vectors representing documents and rank them against a query using two similarity measures.",
    "takeaways": [
      "Compare Euclidean distance, cosine similarity and dot product; explain how normalization changes interpretation.",
      "Practice: Create tiny vectors representing documents and rank them against a query using two similarity measures.",
      "Failure to diagnose: Scale one vector by a large constant and observe which metrics change; explain why that matters.",
      "Proof: A ranking table plus an explanation of which similarity measure fits the chosen representation."
    ],
    "code": "import numpy as np\nX = np.array([[1.,2.],[3.,4.]])\nprint(\"shape:\", X.shape)\nprint(\"row means:\", X.mean(axis=1))",
    "practice": "Create tiny vectors representing documents and rank them against a query using two similarity measures.",
    "breakIt": "Scale one vector by a large constant and observe which metrics change; explain why that matters.",
    "proof": "A ranking table plus an explanation of which similarity measure fits the chosen representation.",
    "transfer": "You will use these foundations to inspect datasets, embeddings, model inputs, metrics and optimization behavior instead of treating them as magic.",
    "mistakes": [
      "Ignoring shape, units, data types or population definitions.",
      "Using a metric without checking what it measures.",
      "Treating a numerical result as meaningful without validating the data that produced it."
    ],
    "resources": [
      [
        "NumPy documentation",
        "https://numpy.org/doc/stable/"
      ],
      [
        "pandas documentation",
        "https://pandas.pydata.org/docs/"
      ],
      [
        "scikit-learn User Guide",
        "https://scikit-learn.org/stable/user_guide.html"
      ]
    ],
    "experience": {
      "type": "Prove",
      "title": "Distance, similarity & embeddings intuition — applied lab",
      "task": "Create tiny vectors representing documents and rank them against a query using two similarity measures.",
      "evidence": "A ranking table plus an explanation of which similarity measure fits the chosen representation.",
      "breakIt": "Scale one vector by a large constant and observe which metrics change; explain why that matters.",
      "transfer": "These data and mathematical tools let you inspect representations, metrics and model behavior instead of treating them as magic."
    },
    "competency": {
      "difficulty": "Core+",
      "time": "30–45 min",
      "artifact": "A ranking table plus an explanation of which similarity measure fits the chosen representation.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Scale one vector by a large constant and observe which metrics change; explain why that matters.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Compare representations with appropriate distance or similarity measures and explain what the score does and does not mean.",
    "usedLater": "You will use these foundations to inspect datasets, embeddings, model inputs, metrics and optimization behavior instead of treating them as magic.",
    "guidedSteps": [
      "Start with a tiny input you can inspect by hand.",
      "Run the operation and inspect types, shapes, values or exceptions.",
      "Change one edge case and observe what breaks.",
      "Record the rule you would reuse in a larger system."
    ],
    "decision": "What engineering choice does distance, similarity & embeddings intuition require, and what evidence would justify that choice?"
  },
  {
    "id": "02-8",
    "phase": "02",
    "phaseName": "Data & Math Foundations",
    "title": "Data quality & measurement",
    "summary": "Bad labels, missingness and inconsistent measurement can dominate model quality long before architecture matters. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Bad labels, missingness and inconsistent measurement can dominate model quality long before architecture matters.",
    "body": "Define validity, completeness, consistency, uniqueness, freshness and label quality as measurable checks.",
    "example": "Worked example: Create a data-quality checklist and compute at least three checks on a small dataset.",
    "takeaways": [
      "Define validity, completeness, consistency, uniqueness, freshness and label quality as measurable checks.",
      "Practice: Create a data-quality checklist and compute at least three checks on a small dataset.",
      "Failure to diagnose: Inject duplicate IDs, stale records and an invalid label; identify which check catches each defect.",
      "Proof: A data-quality report with thresholds, failures and a decision about whether the dataset is fit for use."
    ],
    "code": "import numpy as np\nX = np.array([[1.,2.],[3.,4.]])\nprint(\"shape:\", X.shape)\nprint(\"row means:\", X.mean(axis=1))",
    "practice": "Create a data-quality checklist and compute at least three checks on a small dataset.",
    "breakIt": "Inject duplicate IDs, stale records and an invalid label; identify which check catches each defect.",
    "proof": "A data-quality report with thresholds, failures and a decision about whether the dataset is fit for use.",
    "transfer": "You will use these foundations to inspect datasets, embeddings, model inputs, metrics and optimization behavior instead of treating them as magic.",
    "mistakes": [
      "Ignoring shape, units, data types or population definitions.",
      "Using a metric without checking what it measures.",
      "Treating a numerical result as meaningful without validating the data that produced it."
    ],
    "resources": [
      [
        "NumPy documentation",
        "https://numpy.org/doc/stable/"
      ],
      [
        "pandas documentation",
        "https://pandas.pydata.org/docs/"
      ],
      [
        "scikit-learn User Guide",
        "https://scikit-learn.org/stable/user_guide.html"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Data quality & measurement — applied lab",
      "task": "Create a data-quality checklist and compute at least three checks on a small dataset.",
      "evidence": "A data-quality report with thresholds, failures and a decision about whether the dataset is fit for use.",
      "breakIt": "Inject duplicate IDs, stale records and an invalid label; identify which check catches each defect.",
      "transfer": "These data and mathematical tools let you inspect representations, metrics and model behavior instead of treating them as magic."
    },
    "competency": {
      "difficulty": "Core+",
      "time": "30–45 min",
      "artifact": "A data-quality report with thresholds, failures and a decision about whether the dataset is fit for use.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Inject duplicate IDs, stale records and an invalid label; identify which check catches each defect.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Define data-quality checks and measurement rules that expose missingness, duplicates, inconsistent labels and ambiguous metrics.",
    "usedLater": "You will use these foundations to inspect datasets, embeddings, model inputs, metrics and optimization behavior instead of treating them as magic.",
    "guidedSteps": [
      "Start with a tiny input you can inspect by hand.",
      "Run the operation and inspect types, shapes, values or exceptions.",
      "Change one edge case and observe what breaks.",
      "Record the rule you would reuse in a larger system."
    ],
    "decision": "What engineering choice does data quality & measurement require, and what evidence would justify that choice?"
  },
  {
    "id": "03-1",
    "phase": "03",
    "phaseName": "Machine Learning Foundations",
    "title": "Datasets, features & targets",
    "summary": "A model cannot learn a well-defined task if inputs and targets are ambiguous. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A model cannot learn a well-defined task if inputs and targets are ambiguous.",
    "body": "Define the prediction unit, feature availability time, target definition and label provenance before choosing an algorithm.",
    "example": "Worked example: Turn a vague “predict churn” request into a concrete row-level dataset contract.",
    "takeaways": [
      "Define the prediction unit, feature availability time, target definition and label provenance before choosing an algorithm.",
      "Practice: Turn a vague “predict churn” request into a concrete row-level dataset contract.",
      "Failure to diagnose: Leak a future event into a feature and explain why the feature would not exist at prediction time.",
      "Proof: A dataset contract showing prediction unit, feature list, target, time semantics and exclusions."
    ],
    "code": "from sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nmodel.fit(X_train, y_train)\nprint(accuracy_score(y_test, model.predict(X_test)))",
    "practice": "Turn a vague “predict churn” request into a concrete row-level dataset contract.",
    "breakIt": "Leak a future event into a feature and explain why the feature would not exist at prediction time.",
    "proof": "A dataset contract showing prediction unit, feature list, target, time semantics and exclusions.",
    "transfer": "These ML habits become the baseline for deep learning, retrieval systems and AI regression work.",
    "mistakes": [
      "Comparing models on inconsistent splits or preprocessing.",
      "Using leakage to create an artificially strong score.",
      "Optimizing a metric without inspecting representative errors."
    ],
    "resources": [
      [
        "scikit-learn User Guide",
        "https://scikit-learn.org/stable/user_guide.html"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Datasets, features & targets — applied lab",
      "task": "Turn a vague “predict churn” request into a concrete row-level dataset contract.",
      "evidence": "A dataset contract showing prediction unit, feature list, target, time semantics and exclusions.",
      "breakIt": "Leak a future event into a feature and explain why the feature would not exist at prediction time.",
      "transfer": "These ML evaluation habits become the baseline for deep learning and AI-system regression work."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A dataset contract showing prediction unit, feature list, target, time semantics and exclusions.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Leak a future event into a feature and explain why the feature would not exist at prediction time.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Turn a real problem into explicit examples, features and targets with a clear unit of prediction.",
    "usedLater": "These ML habits become the baseline for deep learning, retrieval systems and AI regression work.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does datasets, features & targets require, and what evidence would justify that choice?"
  },
  {
    "id": "03-2",
    "phase": "03",
    "phaseName": "Machine Learning Foundations",
    "title": "Splits, leakage & baselines",
    "summary": "A high score can be meaningless when information crosses the train/test boundary or when no simple baseline exists. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A high score can be meaningless when information crosses the train/test boundary or when no simple baseline exists.",
    "body": "Separate train/validation/test roles, identify temporal/group leakage and establish a baseline before tuning.",
    "example": "Worked example: Build a baseline and compare it with a first model using a fixed split strategy.",
    "takeaways": [
      "Separate train/validation/test roles, identify temporal/group leakage and establish a baseline before tuning.",
      "Practice: Build a baseline and compare it with a first model using a fixed split strategy.",
      "Failure to diagnose: Use a future-derived feature or fit preprocessing on all rows; detect the leakage from the evaluation design.",
      "Proof: A split diagram, baseline metric and leakage check."
    ],
    "code": "from sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nmodel.fit(X_train, y_train)\nprint(accuracy_score(y_test, model.predict(X_test)))",
    "practice": "Build a baseline and compare it with a first model using a fixed split strategy.",
    "breakIt": "Use a future-derived feature or fit preprocessing on all rows; detect the leakage from the evaluation design.",
    "proof": "A split diagram, baseline metric and leakage check.",
    "transfer": "These ML habits become the baseline for deep learning, retrieval systems and AI regression work.",
    "mistakes": [
      "Comparing models on inconsistent splits or preprocessing.",
      "Using leakage to create an artificially strong score.",
      "Optimizing a metric without inspecting representative errors."
    ],
    "resources": [
      [
        "scikit-learn User Guide",
        "https://scikit-learn.org/stable/user_guide.html"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Splits, leakage & baselines — applied lab",
      "task": "Build a baseline and compare it with a first model using a fixed split strategy.",
      "evidence": "A split diagram, baseline metric and leakage check.",
      "breakIt": "Use a future-derived feature or fit preprocessing on all rows; detect the leakage from the evaluation design.",
      "transfer": "These ML evaluation habits become the baseline for deep learning and AI-system regression work."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A split diagram, baseline metric and leakage check.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Use a future-derived feature or fit preprocessing on all rows; detect the leakage from the evaluation design.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Create a defensible train/validation/test strategy, detect information leakage and establish a simple baseline before adding complexity.",
    "usedLater": "These ML habits become the baseline for deep learning, retrieval systems and AI regression work.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What evidence shows that the evaluation score represents unseen data rather than leaked information?"
  },
  {
    "id": "03-3",
    "phase": "03",
    "phaseName": "Machine Learning Foundations",
    "title": "Regression",
    "summary": "Regression is about predicting a numeric quantity while understanding residual error and the consequences of being wrong. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Regression is about predicting a numeric quantity while understanding residual error and the consequences of being wrong.",
    "body": "Fit a simple regression, inspect residuals and connect MAE/MSE/RMSE to different error sensitivities.",
    "example": "Worked example: Predict a numeric target and compare a mean baseline with linear regression.",
    "takeaways": [
      "Fit a simple regression, inspect residuals and connect MAE/MSE/RMSE to different error sensitivities.",
      "Practice: Predict a numeric target and compare a mean baseline with linear regression.",
      "Failure to diagnose: Add a few extreme targets and compare MAE with MSE; explain which metric is more affected.",
      "Proof: A model report with baseline, metric comparison and residual/error example."
    ],
    "code": "from sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nmodel.fit(X_train, y_train)\nprint(accuracy_score(y_test, model.predict(X_test)))",
    "practice": "Predict a numeric target and compare a mean baseline with linear regression.",
    "breakIt": "Add a few extreme targets and compare MAE with MSE; explain which metric is more affected.",
    "proof": "A model report with baseline, metric comparison and residual/error example.",
    "transfer": "These ML habits become the baseline for deep learning, retrieval systems and AI regression work.",
    "mistakes": [
      "Comparing models on inconsistent splits or preprocessing.",
      "Using leakage to create an artificially strong score.",
      "Optimizing a metric without inspecting representative errors."
    ],
    "resources": [
      [
        "scikit-learn User Guide",
        "https://scikit-learn.org/stable/user_guide.html"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Regression — applied lab",
      "task": "Predict a numeric target and compare a mean baseline with linear regression.",
      "evidence": "A model report with baseline, metric comparison and residual/error example.",
      "breakIt": "Add a few extreme targets and compare MAE with MSE; explain which metric is more affected.",
      "transfer": "These ML evaluation habits become the baseline for deep learning and AI-system regression work."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A model report with baseline, metric comparison and residual/error example.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Add a few extreme targets and compare MAE with MSE; explain which metric is more affected.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Train a regression model, inspect residuals and choose an error metric that reflects the cost of prediction mistakes.",
    "usedLater": "These ML habits become the baseline for deep learning, retrieval systems and AI regression work.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does regression require, and what evidence would justify that choice?"
  },
  {
    "id": "03-4",
    "phase": "03",
    "phaseName": "Machine Learning Foundations",
    "title": "Classification",
    "summary": "Classification systems trade different error types; the threshold is part of the product decision. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Classification systems trade different error types; the threshold is part of the product decision.",
    "body": "Understand scores/probabilities, thresholds, confusion matrix, precision, recall and class imbalance.",
    "example": "Worked example: Train a binary classifier and choose a threshold based on an explicit false-positive/false-negative cost.",
    "takeaways": [
      "Understand scores/probabilities, thresholds, confusion matrix, precision, recall and class imbalance.",
      "Practice: Train a binary classifier and choose a threshold based on an explicit false-positive/false-negative cost.",
      "Failure to diagnose: Move the threshold and show how precision/recall change; explain why accuracy alone can mislead.",
      "Proof: A confusion matrix and threshold decision backed by stated error costs."
    ],
    "code": "from sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nmodel.fit(X_train, y_train)\nprint(accuracy_score(y_test, model.predict(X_test)))",
    "practice": "Train a binary classifier and choose a threshold based on an explicit false-positive/false-negative cost.",
    "breakIt": "Move the threshold and show how precision/recall change; explain why accuracy alone can mislead.",
    "proof": "A confusion matrix and threshold decision backed by stated error costs.",
    "transfer": "These ML habits become the baseline for deep learning, retrieval systems and AI regression work.",
    "mistakes": [
      "Comparing models on inconsistent splits or preprocessing.",
      "Using leakage to create an artificially strong score.",
      "Optimizing a metric without inspecting representative errors."
    ],
    "resources": [
      [
        "scikit-learn User Guide",
        "https://scikit-learn.org/stable/user_guide.html"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Classification — applied lab",
      "task": "Train a binary classifier and choose a threshold based on an explicit false-positive/false-negative cost.",
      "evidence": "A confusion matrix and threshold decision backed by stated error costs.",
      "breakIt": "Move the threshold and show how precision/recall change; explain why accuracy alone can mislead.",
      "transfer": "These ML evaluation habits become the baseline for deep learning and AI-system regression work."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A confusion matrix and threshold decision backed by stated error costs.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Move the threshold and show how precision/recall change; explain why accuracy alone can mislead.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Train a classifier and examine threshold-dependent false positives and false negatives instead of relying only on accuracy.",
    "usedLater": "These ML habits become the baseline for deep learning, retrieval systems and AI regression work.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does classification require, and what evidence would justify that choice?"
  },
  {
    "id": "03-5",
    "phase": "03",
    "phaseName": "Machine Learning Foundations",
    "title": "Trees & ensembles",
    "summary": "Tree models can expose useful feature interactions and ensembles can reduce variance or improve predictive performance. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Tree models can expose useful feature interactions and ensembles can reduce variance or improve predictive performance.",
    "body": "Understand splits, depth, bagging and boosting at an operational level rather than memorizing algorithm names.",
    "example": "Worked example: Train a shallow tree and an ensemble on the same data; inspect depth and validation behavior.",
    "takeaways": [
      "Understand splits, depth, bagging and boosting at an operational level rather than memorizing algorithm names.",
      "Practice: Train a shallow tree and an ensemble on the same data; inspect depth and validation behavior.",
      "Failure to diagnose: Grow the tree until training accuracy is perfect and diagnose the generalization change.",
      "Proof: A comparison table with complexity, training score, validation score and a diagnosis."
    ],
    "code": "from sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nmodel.fit(X_train, y_train)\nprint(accuracy_score(y_test, model.predict(X_test)))",
    "practice": "Train a shallow tree and an ensemble on the same data; inspect depth and validation behavior.",
    "breakIt": "Grow the tree until training accuracy is perfect and diagnose the generalization change.",
    "proof": "A comparison table with complexity, training score, validation score and a diagnosis.",
    "transfer": "These ML habits become the baseline for deep learning, retrieval systems and AI regression work.",
    "mistakes": [
      "Comparing models on inconsistent splits or preprocessing.",
      "Using leakage to create an artificially strong score.",
      "Optimizing a metric without inspecting representative errors."
    ],
    "resources": [
      [
        "scikit-learn User Guide",
        "https://scikit-learn.org/stable/user_guide.html"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "Trees & ensembles — applied lab",
      "task": "Train a shallow tree and an ensemble on the same data; inspect depth and validation behavior.",
      "evidence": "A comparison table with complexity, training score, validation score and a diagnosis.",
      "breakIt": "Grow the tree until training accuracy is perfect and diagnose the generalization change.",
      "transfer": "These ML evaluation habits become the baseline for deep learning and AI-system regression work."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A comparison table with complexity, training score, validation score and a diagnosis.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Grow the tree until training accuracy is perfect and diagnose the generalization change.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Use tree-based models to inspect nonlinear feature interactions and compare a single tree with an ensemble.",
    "usedLater": "These ML habits become the baseline for deep learning, retrieval systems and AI regression work.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does trees & ensembles require, and what evidence would justify that choice?"
  },
  {
    "id": "03-6",
    "phase": "03",
    "phaseName": "Machine Learning Foundations",
    "title": "Feature engineering & regularization",
    "summary": "The representation and constraints you choose can matter more than swapping algorithms. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "The representation and constraints you choose can matter more than swapping algorithms.",
    "body": "Use transformations, interactions and regularization to control capacity while keeping the evaluation pipeline honest.",
    "example": "Worked example: Add one meaningful feature and compare it with a regularized baseline under the same split.",
    "takeaways": [
      "Use transformations, interactions and regularization to control capacity while keeping the evaluation pipeline honest.",
      "Practice: Add one meaningful feature and compare it with a regularized baseline under the same split.",
      "Failure to diagnose: Add many noise features and show how performance can improve on one split by chance while hurting generalization.",
      "Proof: A controlled experiment showing the feature change, regularization setting and validation result."
    ],
    "code": "from sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nmodel.fit(X_train, y_train)\nprint(accuracy_score(y_test, model.predict(X_test)))",
    "practice": "Add one meaningful feature and compare it with a regularized baseline under the same split.",
    "breakIt": "Add many noise features and show how performance can improve on one split by chance while hurting generalization.",
    "proof": "A controlled experiment showing the feature change, regularization setting and validation result.",
    "transfer": "These ML habits become the baseline for deep learning, retrieval systems and AI regression work.",
    "mistakes": [
      "Comparing models on inconsistent splits or preprocessing.",
      "Using leakage to create an artificially strong score.",
      "Optimizing a metric without inspecting representative errors."
    ],
    "resources": [
      [
        "scikit-learn User Guide",
        "https://scikit-learn.org/stable/user_guide.html"
      ]
    ],
    "experience": {
      "type": "Design",
      "title": "Feature engineering & regularization — applied lab",
      "task": "Add one meaningful feature and compare it with a regularized baseline under the same split.",
      "evidence": "A controlled experiment showing the feature change, regularization setting and validation result.",
      "breakIt": "Add many noise features and show how performance can improve on one split by chance while hurting generalization.",
      "transfer": "These ML evaluation habits become the baseline for deep learning and AI-system regression work."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A controlled experiment showing the feature change, regularization setting and validation result.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Add many noise features and show how performance can improve on one split by chance while hurting generalization.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Change representations or constraints to improve generalization, then verify that the gain survives a held-out evaluation.",
    "usedLater": "These ML habits become the baseline for deep learning, retrieval systems and AI regression work.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does feature engineering & regularization require, and what evidence would justify that choice?"
  },
  {
    "id": "03-7",
    "phase": "03",
    "phaseName": "Machine Learning Foundations",
    "title": "Model evaluation & error analysis",
    "summary": "A single aggregate metric cannot tell you where a model fails or whether the failure matters. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A single aggregate metric cannot tell you where a model fails or whether the failure matters.",
    "body": "Slice errors by meaningful groups, inspect false positives/negatives and distinguish statistical improvement from useful improvement.",
    "example": "Worked example: Build an error table with at least two slices and inspect representative mistakes.",
    "takeaways": [
      "Slice errors by meaningful groups, inspect false positives/negatives and distinguish statistical improvement from useful improvement.",
      "Practice: Build an error table with at least two slices and inspect representative mistakes.",
      "Failure to diagnose: Optimize the headline metric while worsening an important slice; catch the regression through slice analysis.",
      "Proof: An error-analysis report with examples, slice metrics and one prioritized fix."
    ],
    "code": "from sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nmodel.fit(X_train, y_train)\nprint(accuracy_score(y_test, model.predict(X_test)))",
    "practice": "Build an error table with at least two slices and inspect representative mistakes.",
    "breakIt": "Optimize the headline metric while worsening an important slice; catch the regression through slice analysis.",
    "proof": "An error-analysis report with examples, slice metrics and one prioritized fix.",
    "transfer": "These ML habits become the baseline for deep learning, retrieval systems and AI regression work.",
    "mistakes": [
      "Comparing models on inconsistent splits or preprocessing.",
      "Using leakage to create an artificially strong score.",
      "Optimizing a metric without inspecting representative errors."
    ],
    "resources": [
      [
        "scikit-learn User Guide",
        "https://scikit-learn.org/stable/user_guide.html"
      ]
    ],
    "experience": {
      "type": "Prove",
      "title": "Model evaluation & error analysis — applied lab",
      "task": "Build an error table with at least two slices and inspect representative mistakes.",
      "evidence": "An error-analysis report with examples, slice metrics and one prioritized fix.",
      "breakIt": "Optimize the headline metric while worsening an important slice; catch the regression through slice analysis.",
      "transfer": "These ML evaluation habits become the baseline for deep learning and AI-system regression work."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "An error-analysis report with examples, slice metrics and one prioritized fix.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Optimize the headline metric while worsening an important slice; catch the regression through slice analysis.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Break aggregate model performance into meaningful error groups and use examples to decide what to improve next.",
    "usedLater": "These ML habits become the baseline for deep learning, retrieval systems and AI regression work.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "Which error category is important enough to change the next iteration?"
  },
  {
    "id": "03-8",
    "phase": "03",
    "phaseName": "Machine Learning Foundations",
    "title": "Build a small ML system",
    "summary": "The engineering task is to connect data, preprocessing, model, evaluation and reproducibility into one repeatable path. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "The engineering task is to connect data, preprocessing, model, evaluation and reproducibility into one repeatable path.",
    "body": "Assemble a small supervised-learning pipeline with explicit splits, preprocessing, training, evaluation and saved artifacts.",
    "example": "Worked example: Build the smallest end-to-end classifier using a documented dataset contract.",
    "takeaways": [
      "Assemble a small supervised-learning pipeline with explicit splits, preprocessing, training, evaluation and saved artifacts.",
      "Practice: Build the smallest end-to-end classifier using a documented dataset contract.",
      "Failure to diagnose: Delete or alter one preprocessing step and verify that a regression check detects the change.",
      "Proof: A runnable repository with pipeline, evaluation report, test and README."
    ],
    "code": "from sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nmodel.fit(X_train, y_train)\nprint(accuracy_score(y_test, model.predict(X_test)))",
    "practice": "Build the smallest end-to-end classifier using a documented dataset contract.",
    "breakIt": "Delete or alter one preprocessing step and verify that a regression check detects the change.",
    "proof": "A runnable repository with pipeline, evaluation report, test and README.",
    "transfer": "These ML habits become the baseline for deep learning, retrieval systems and AI regression work.",
    "mistakes": [
      "Comparing models on inconsistent splits or preprocessing.",
      "Using leakage to create an artificially strong score.",
      "Optimizing a metric without inspecting representative errors."
    ],
    "resources": [
      [
        "scikit-learn User Guide",
        "https://scikit-learn.org/stable/user_guide.html"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Build a small ML system — applied lab",
      "task": "Build the smallest end-to-end classifier using a documented dataset contract.",
      "evidence": "A runnable repository with pipeline, evaluation report, test and README.",
      "breakIt": "Delete or alter one preprocessing step and verify that a regression check detects the change.",
      "transfer": "These ML evaluation habits become the baseline for deep learning and AI-system regression work."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A runnable repository with pipeline, evaluation report, test and README.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Delete or alter one preprocessing step and verify that a regression check detects the change.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Connect data preparation, training, evaluation and prediction into one repeatable ML workflow with a baseline and test set.",
    "usedLater": "These ML habits become the baseline for deep learning, retrieval systems and AI regression work.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does build a small ml system require, and what evidence would justify that choice?"
  },
  {
    "id": "04-1",
    "phase": "04",
    "phaseName": "Deep Learning with PyTorch",
    "title": "Tensors, datasets & autograd",
    "summary": "Deep learning bugs often start as shape/device/data-contract mistakes before the model ever learns. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Deep learning bugs often start as shape/device/data-contract mistakes before the model ever learns.",
    "body": "Inspect tensor shape, dtype, device and gradient tracking; connect Dataset/DataLoader to model inputs.",
    "example": "Worked example: Create a tiny dataset, batch it and inspect one batch all the way into a model.",
    "takeaways": [
      "Inspect tensor shape, dtype, device and gradient tracking; connect Dataset/DataLoader to model inputs.",
      "Practice: Create a tiny dataset, batch it and inspect one batch all the way into a model.",
      "Failure to diagnose: Feed a tensor with the wrong shape or dtype and diagnose the failure from the first violated contract.",
      "Proof: A tensor inspection log plus a corrected batch pipeline."
    ],
    "code": "import torch\nfrom torch import nn\nx = torch.randn(8, 4)\nmodel = nn.Sequential(nn.Linear(4, 8), nn.ReLU(), nn.Linear(8, 2))\ny = model(x)\nprint(x.shape, y.shape)",
    "practice": "Create a tiny dataset, batch it and inspect one batch all the way into a model.",
    "breakIt": "Feed a tensor with the wrong shape or dtype and diagnose the failure from the first violated contract.",
    "proof": "A tensor inspection log plus a corrected batch pipeline.",
    "transfer": "These training and debugging skills make later Transformer and model-inference behavior easier to diagnose.",
    "mistakes": [
      "Changing architecture before checking data, shapes, gradients and learning rate.",
      "Reporting training loss without a held-out validation signal.",
      "Assuming a training run is reproducible without recording seeds and configuration."
    ],
    "resources": [
      [
        "PyTorch — Learn the Basics",
        "https://docs.pytorch.org/tutorials/beginner/basics/"
      ],
      [
        "PyTorch Autograd",
        "https://docs.pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Tensors, datasets & autograd — applied lab",
      "task": "Create a tiny dataset, batch it and inspect one batch all the way into a model.",
      "evidence": "A tensor inspection log plus a corrected batch pipeline.",
      "breakIt": "Feed a tensor with the wrong shape or dtype and diagnose the failure from the first violated contract.",
      "transfer": "These training/debugging skills prepare you to reason about modern model behavior and inference."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A tensor inspection log plus a corrected batch pipeline.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Feed a tensor with the wrong shape or dtype and diagnose the failure from the first violated contract.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Create tensors with correct shapes and dtypes and use autograd to verify how a computation produces gradients.",
    "usedLater": "These training and debugging skills make later Transformer and model-inference behavior easier to diagnose.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does tensors, datasets & autograd require, and what evidence would justify that choice?"
  },
  {
    "id": "04-2",
    "phase": "04",
    "phaseName": "Deep Learning with PyTorch",
    "title": "Forward pass & loss",
    "summary": "A neural network learns by turning inputs into predictions and measuring how wrong those predictions are. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A neural network learns by turning inputs into predictions and measuring how wrong those predictions are.",
    "body": "Trace a forward pass through layers and connect the chosen loss to the target format.",
    "example": "Worked example: Build a tiny network, print intermediate shapes and compare two loss values for different predictions.",
    "takeaways": [
      "Trace a forward pass through layers and connect the chosen loss to the target format.",
      "Practice: Build a tiny network, print intermediate shapes and compare two loss values for different predictions.",
      "Failure to diagnose: Use the wrong target shape/type and explain why the loss function rejects or misinterprets it.",
      "Proof: A forward-pass trace with correct target contract and a deliberate failure diagnosis."
    ],
    "code": "import torch\nfrom torch import nn\nx = torch.randn(8, 4)\nmodel = nn.Sequential(nn.Linear(4, 8), nn.ReLU(), nn.Linear(8, 2))\ny = model(x)\nprint(x.shape, y.shape)",
    "practice": "Build a tiny network, print intermediate shapes and compare two loss values for different predictions.",
    "breakIt": "Use the wrong target shape/type and explain why the loss function rejects or misinterprets it.",
    "proof": "A forward-pass trace with correct target contract and a deliberate failure diagnosis.",
    "transfer": "These training and debugging skills make later Transformer and model-inference behavior easier to diagnose.",
    "mistakes": [
      "Changing architecture before checking data, shapes, gradients and learning rate.",
      "Reporting training loss without a held-out validation signal.",
      "Assuming a training run is reproducible without recording seeds and configuration."
    ],
    "resources": [
      [
        "PyTorch — Learn the Basics",
        "https://docs.pytorch.org/tutorials/beginner/basics/"
      ],
      [
        "PyTorch Autograd",
        "https://docs.pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Forward pass & loss — applied lab",
      "task": "Build a tiny network, print intermediate shapes and compare two loss values for different predictions.",
      "evidence": "A forward-pass trace with correct target contract and a deliberate failure diagnosis.",
      "breakIt": "Use the wrong target shape/type and explain why the loss function rejects or misinterprets it.",
      "transfer": "These training/debugging skills prepare you to reason about modern model behavior and inference."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A forward-pass trace with correct target contract and a deliberate failure diagnosis.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Use the wrong target shape/type and explain why the loss function rejects or misinterprets it.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Trace inputs through a neural network to predictions and calculate a loss that measures the training objective.",
    "usedLater": "These training and debugging skills make later Transformer and model-inference behavior easier to diagnose.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does forward pass & loss require, and what evidence would justify that choice?"
  },
  {
    "id": "04-3",
    "phase": "04",
    "phaseName": "Deep Learning with PyTorch",
    "title": "Backpropagation",
    "summary": "Backpropagation is the mechanism that tells each parameter how its local change affected the final loss. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Backpropagation is the mechanism that tells each parameter how its local change affected the final loss.",
    "body": "Use the computational-graph intuition and PyTorch autograd to connect loss.backward() to parameter gradients.",
    "example": "Worked example: Run one forward/backward pass and print gradients for selected parameters.",
    "takeaways": [
      "Use the computational-graph intuition and PyTorch autograd to connect loss.backward() to parameter gradients.",
      "Practice: Run one forward/backward pass and print gradients for selected parameters.",
      "Failure to diagnose: Detach part of the graph or forget gradient tracking; diagnose why the expected gradient disappears.",
      "Proof: A gradient table and explanation connecting each gradient to the loss."
    ],
    "code": "import torch\nfrom torch import nn\nx = torch.randn(8, 4)\nmodel = nn.Sequential(nn.Linear(4, 8), nn.ReLU(), nn.Linear(8, 2))\ny = model(x)\nprint(x.shape, y.shape)",
    "practice": "Run one forward/backward pass and print gradients for selected parameters.",
    "breakIt": "Detach part of the graph or forget gradient tracking; diagnose why the expected gradient disappears.",
    "proof": "A gradient table and explanation connecting each gradient to the loss.",
    "transfer": "These training and debugging skills make later Transformer and model-inference behavior easier to diagnose.",
    "mistakes": [
      "Changing architecture before checking data, shapes, gradients and learning rate.",
      "Reporting training loss without a held-out validation signal.",
      "Assuming a training run is reproducible without recording seeds and configuration."
    ],
    "resources": [
      [
        "PyTorch — Learn the Basics",
        "https://docs.pytorch.org/tutorials/beginner/basics/"
      ],
      [
        "PyTorch Autograd",
        "https://docs.pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Backpropagation — applied lab",
      "task": "Run one forward/backward pass and print gradients for selected parameters.",
      "evidence": "A gradient table and explanation connecting each gradient to the loss.",
      "breakIt": "Detach part of the graph or forget gradient tracking; diagnose why the expected gradient disappears.",
      "transfer": "These training/debugging skills prepare you to reason about modern model behavior and inference."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A gradient table and explanation connecting each gradient to the loss.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Detach part of the graph or forget gradient tracking; diagnose why the expected gradient disappears.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Inspect gradients produced by backpropagation and relate each gradient to how a parameter affects the final loss.",
    "usedLater": "These training and debugging skills make later Transformer and model-inference behavior easier to diagnose.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does backpropagation require, and what evidence would justify that choice?"
  },
  {
    "id": "04-4",
    "phase": "04",
    "phaseName": "Deep Learning with PyTorch",
    "title": "Optimizers & activation functions",
    "summary": "Training behavior depends on both how gradients update parameters and where nonlinear transformations occur. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Training behavior depends on both how gradients update parameters and where nonlinear transformations occur.",
    "body": "Compare SGD/Adam at a conceptual level and see how ReLU-like nonlinearities change representational capacity.",
    "example": "Worked example: Train the same tiny model with two optimizer settings and one activation change.",
    "takeaways": [
      "Compare SGD/Adam at a conceptual level and see how ReLU-like nonlinearities change representational capacity.",
      "Practice: Train the same tiny model with two optimizer settings and one activation change.",
      "Failure to diagnose: Use an overly large learning rate or a saturated/poor activation setup and identify the training symptom.",
      "Proof: A small experiment table with loss curves/results and a diagnosis of the failure."
    ],
    "code": "import torch\nfrom torch import nn\nx = torch.randn(8, 4)\nmodel = nn.Sequential(nn.Linear(4, 8), nn.ReLU(), nn.Linear(8, 2))\ny = model(x)\nprint(x.shape, y.shape)",
    "practice": "Train the same tiny model with two optimizer settings and one activation change.",
    "breakIt": "Use an overly large learning rate or a saturated/poor activation setup and identify the training symptom.",
    "proof": "A small experiment table with loss curves/results and a diagnosis of the failure.",
    "transfer": "These training and debugging skills make later Transformer and model-inference behavior easier to diagnose.",
    "mistakes": [
      "Changing architecture before checking data, shapes, gradients and learning rate.",
      "Reporting training loss without a held-out validation signal.",
      "Assuming a training run is reproducible without recording seeds and configuration."
    ],
    "resources": [
      [
        "PyTorch — Learn the Basics",
        "https://docs.pytorch.org/tutorials/beginner/basics/"
      ],
      [
        "PyTorch Autograd",
        "https://docs.pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Optimizers & activation functions — applied lab",
      "task": "Train the same tiny model with two optimizer settings and one activation change.",
      "evidence": "A small experiment table with loss curves/results and a diagnosis of the failure.",
      "breakIt": "Use an overly large learning rate or a saturated/poor activation setup and identify the training symptom.",
      "transfer": "These training/debugging skills prepare you to reason about modern model behavior and inference."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A small experiment table with loss curves/results and a diagnosis of the failure.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Use an overly large learning rate or a saturated/poor activation setup and identify the training symptom.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Compare an optimizer and activation choice by observing how they change gradient flow and training behavior.",
    "usedLater": "These training and debugging skills make later Transformer and model-inference behavior easier to diagnose.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does optimizers & activation functions require, and what evidence would justify that choice?"
  },
  {
    "id": "04-5",
    "phase": "04",
    "phaseName": "Deep Learning with PyTorch",
    "title": "DataLoaders & batching",
    "summary": "Batching affects memory, throughput and the statistical behavior of gradient updates. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Batching affects memory, throughput and the statistical behavior of gradient updates.",
    "body": "Understand Dataset versus DataLoader, batch size, shuffle and worker-related trade-offs without treating them as magic knobs.",
    "example": "Worked example: Run the same training step with two batch sizes and inspect shapes and step counts.",
    "takeaways": [
      "Understand Dataset versus DataLoader, batch size, shuffle and worker-related trade-offs without treating them as magic knobs.",
      "Practice: Run the same training step with two batch sizes and inspect shapes and step counts.",
      "Failure to diagnose: Disable shuffling or use an unsuitable batch size and reason about the observed training behavior.",
      "Proof: A batch comparison with measured batch shape, step count and observed effect."
    ],
    "code": "import torch\nfrom torch import nn\nx = torch.randn(8, 4)\nmodel = nn.Sequential(nn.Linear(4, 8), nn.ReLU(), nn.Linear(8, 2))\ny = model(x)\nprint(x.shape, y.shape)",
    "practice": "Run the same training step with two batch sizes and inspect shapes and step counts.",
    "breakIt": "Disable shuffling or use an unsuitable batch size and reason about the observed training behavior.",
    "proof": "A batch comparison with measured batch shape, step count and observed effect.",
    "transfer": "These training and debugging skills make later Transformer and model-inference behavior easier to diagnose.",
    "mistakes": [
      "Changing architecture before checking data, shapes, gradients and learning rate.",
      "Reporting training loss without a held-out validation signal.",
      "Assuming a training run is reproducible without recording seeds and configuration."
    ],
    "resources": [
      [
        "PyTorch — Learn the Basics",
        "https://docs.pytorch.org/tutorials/beginner/basics/"
      ],
      [
        "PyTorch Autograd",
        "https://docs.pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "DataLoaders & batching — applied lab",
      "task": "Run the same training step with two batch sizes and inspect shapes and step counts.",
      "evidence": "A batch comparison with measured batch shape, step count and observed effect.",
      "breakIt": "Disable shuffling or use an unsuitable batch size and reason about the observed training behavior.",
      "transfer": "These training/debugging skills prepare you to reason about modern model behavior and inference."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A batch comparison with measured batch shape, step count and observed effect.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Disable shuffling or use an unsuitable batch size and reason about the observed training behavior.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Batch training data with PyTorch DataLoaders while reasoning about memory, throughput and shuffle behavior.",
    "usedLater": "These training and debugging skills make later Transformer and model-inference behavior easier to diagnose.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does dataloaders & batching require, and what evidence would justify that choice?"
  },
  {
    "id": "04-6",
    "phase": "04",
    "phaseName": "Deep Learning with PyTorch",
    "title": "Training loops & validation",
    "summary": "A training loop is an experiment controller, not a sacred code template. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A training loop is an experiment controller, not a sacred code template.",
    "body": "Make train/eval modes, optimizer steps, loss aggregation and validation boundaries explicit.",
    "example": "Worked example: Write a compact training loop with separate training and validation phases.",
    "takeaways": [
      "Make train/eval modes, optimizer steps, loss aggregation and validation boundaries explicit.",
      "Practice: Write a compact training loop with separate training and validation phases.",
      "Failure to diagnose: Accidentally update parameters during validation or forget eval mode; show the regression and fix it.",
      "Proof: A training loop plus a validation log that proves parameters are only updated during training."
    ],
    "code": "import torch\nfrom torch import nn\nx = torch.randn(8, 4)\nmodel = nn.Sequential(nn.Linear(4, 8), nn.ReLU(), nn.Linear(8, 2))\ny = model(x)\nprint(x.shape, y.shape)",
    "practice": "Write a compact training loop with separate training and validation phases.",
    "breakIt": "Accidentally update parameters during validation or forget eval mode; show the regression and fix it.",
    "proof": "A training loop plus a validation log that proves parameters are only updated during training.",
    "transfer": "These training and debugging skills make later Transformer and model-inference behavior easier to diagnose.",
    "mistakes": [
      "Changing architecture before checking data, shapes, gradients and learning rate.",
      "Reporting training loss without a held-out validation signal.",
      "Assuming a training run is reproducible without recording seeds and configuration."
    ],
    "resources": [
      [
        "PyTorch — Learn the Basics",
        "https://docs.pytorch.org/tutorials/beginner/basics/"
      ],
      [
        "PyTorch Autograd",
        "https://docs.pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html"
      ]
    ],
    "experience": {
      "type": "Design",
      "title": "Training loops & validation — applied lab",
      "task": "Write a compact training loop with separate training and validation phases.",
      "evidence": "A training loop plus a validation log that proves parameters are only updated during training.",
      "breakIt": "Accidentally update parameters during validation or forget eval mode; show the regression and fix it.",
      "transfer": "These training/debugging skills prepare you to reason about modern model behavior and inference."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A training loop plus a validation log that proves parameters are only updated during training.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Accidentally update parameters during validation or forget eval mode; show the regression and fix it.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Write a training/validation loop that records loss and metrics separately and avoids accidentally training on validation data.",
    "usedLater": "These training and debugging skills make later Transformer and model-inference behavior easier to diagnose.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does training loops & validation require, and what evidence would justify that choice?"
  },
  {
    "id": "04-7",
    "phase": "04",
    "phaseName": "Deep Learning with PyTorch",
    "title": "Debugging training experiments",
    "summary": "When loss does not move, random architecture changes are slower than systematic diagnosis. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "When loss does not move, random architecture changes are slower than systematic diagnosis.",
    "body": "Use tiny-batch overfit, input/label checks, gradient inspection and learning-rate sanity checks as a debugging sequence.",
    "example": "Worked example: Take a deliberately broken network and diagnose it using a fixed checklist.",
    "takeaways": [
      "Use tiny-batch overfit, input/label checks, gradient inspection and learning-rate sanity checks as a debugging sequence.",
      "Practice: Take a deliberately broken network and diagnose it using a fixed checklist.",
      "Failure to diagnose: Change several variables at once and compare it with changing one variable at a time; explain why the latter is easier to debug.",
      "Proof: A training incident report with symptom, evidence, root cause, fix and regression check."
    ],
    "code": "import torch\nfrom torch import nn\nx = torch.randn(8, 4)\nmodel = nn.Sequential(nn.Linear(4, 8), nn.ReLU(), nn.Linear(8, 2))\ny = model(x)\nprint(x.shape, y.shape)",
    "practice": "Take a deliberately broken network and diagnose it using a fixed checklist.",
    "breakIt": "Change several variables at once and compare it with changing one variable at a time; explain why the latter is easier to debug.",
    "proof": "A training incident report with symptom, evidence, root cause, fix and regression check.",
    "transfer": "These training and debugging skills make later Transformer and model-inference behavior easier to diagnose.",
    "mistakes": [
      "Changing architecture before checking data, shapes, gradients and learning rate.",
      "Reporting training loss without a held-out validation signal.",
      "Assuming a training run is reproducible without recording seeds and configuration."
    ],
    "resources": [
      [
        "PyTorch — Learn the Basics",
        "https://docs.pytorch.org/tutorials/beginner/basics/"
      ],
      [
        "PyTorch Autograd",
        "https://docs.pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html"
      ]
    ],
    "experience": {
      "type": "Prove",
      "title": "Debugging training experiments — applied lab",
      "task": "Take a deliberately broken network and diagnose it using a fixed checklist.",
      "evidence": "A training incident report with symptom, evidence, root cause, fix and regression check.",
      "breakIt": "Change several variables at once and compare it with changing one variable at a time; explain why the latter is easier to debug.",
      "transfer": "These training/debugging skills prepare you to reason about modern model behavior and inference."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A training incident report with symptom, evidence, root cause, fix and regression check.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Change several variables at once and compare it with changing one variable at a time; explain why the latter is easier to debug.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Diagnose stalled or unstable training using data, shapes, gradients, learning rate and loss checks before changing architecture.",
    "usedLater": "These training and debugging skills make later Transformer and model-inference behavior easier to diagnose.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does debugging training experiments require, and what evidence would justify that choice?"
  },
  {
    "id": "04-8",
    "phase": "04",
    "phaseName": "Deep Learning with PyTorch",
    "title": "Build a neural network",
    "summary": "The goal is to own the complete training loop rather than only call a high-level helper. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "The goal is to own the complete training loop rather than only call a high-level helper.",
    "body": "Combine tensors, model, loss, optimizer, batching, validation and save/load into a small reproducible network.",
    "example": "Worked example: Train a small classifier and save the model plus evaluation results.",
    "takeaways": [
      "Combine tensors, model, loss, optimizer, batching, validation and save/load into a small reproducible network.",
      "Practice: Train a small classifier and save the model plus evaluation results.",
      "Failure to diagnose: Corrupt one part of the pipeline and recover using the debugging workflow from this phase.",
      "Proof: A runnable project with model code, training log, validation result and saved artifact."
    ],
    "code": "import torch\nfrom torch import nn\nx = torch.randn(8, 4)\nmodel = nn.Sequential(nn.Linear(4, 8), nn.ReLU(), nn.Linear(8, 2))\ny = model(x)\nprint(x.shape, y.shape)",
    "practice": "Train a small classifier and save the model plus evaluation results.",
    "breakIt": "Corrupt one part of the pipeline and recover using the debugging workflow from this phase.",
    "proof": "A runnable project with model code, training log, validation result and saved artifact.",
    "transfer": "These training and debugging skills make later Transformer and model-inference behavior easier to diagnose.",
    "mistakes": [
      "Changing architecture before checking data, shapes, gradients and learning rate.",
      "Reporting training loss without a held-out validation signal.",
      "Assuming a training run is reproducible without recording seeds and configuration."
    ],
    "resources": [
      [
        "PyTorch — Learn the Basics",
        "https://docs.pytorch.org/tutorials/beginner/basics/"
      ],
      [
        "PyTorch Autograd",
        "https://docs.pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Build a neural network — applied lab",
      "task": "Train a small classifier and save the model plus evaluation results.",
      "evidence": "A runnable project with model code, training log, validation result and saved artifact.",
      "breakIt": "Corrupt one part of the pipeline and recover using the debugging workflow from this phase.",
      "transfer": "These training/debugging skills prepare you to reason about modern model behavior and inference."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A runnable project with model code, training log, validation result and saved artifact.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Corrupt one part of the pipeline and recover using the debugging workflow from this phase.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Build and evaluate a small PyTorch network end-to-end, including data, model, training, validation and saved evidence.",
    "usedLater": "These training and debugging skills make later Transformer and model-inference behavior easier to diagnose.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does build a neural network require, and what evidence would justify that choice?"
  },
  {
    "id": "05-1",
    "phase": "05",
    "phaseName": "Computer Vision",
    "title": "Image representation & preprocessing",
    "summary": "An image model receives numbers; resizing, normalization and channel order change those numbers before inference. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "An image model receives numbers; resizing, normalization and channel order change those numbers before inference.",
    "body": "Understand H×W×C versus C×H×W, scaling, normalization and why preprocessing must match training.",
    "example": "Worked example: Inspect a few images, convert them to tensors and compare raw versus normalized ranges.",
    "takeaways": [
      "Understand H×W×C versus C×H×W, scaling, normalization and why preprocessing must match training.",
      "Practice: Inspect a few images, convert them to tensors and compare raw versus normalized ranges.",
      "Failure to diagnose: Swap channel order or normalization and inspect how predictions/features change.",
      "Proof: A preprocessing notebook with shapes, value ranges and a verified preprocessing function."
    ],
    "code": "from PIL import Image\nimg = Image.open(\"sample.jpg\")\nprint(img.size, img.mode)\n# Keep preprocessing identical to training.",
    "practice": "Inspect a few images, convert them to tensors and compare raw versus normalized ranges.",
    "breakIt": "Swap channel order or normalization and inspect how predictions/features change.",
    "proof": "A preprocessing notebook with shapes, value ranges and a verified preprocessing function.",
    "transfer": "These visual-system concepts reappear in multimodal models, document AI and vision evaluation.",
    "mistakes": [
      "Applying preprocessing inconsistently between training and evaluation.",
      "Using augmentation that changes the label semantics.",
      "Reporting one aggregate metric without inspecting visual failure cases."
    ],
    "resources": [
      [
        "PyTorch Computer Vision tutorials",
        "https://docs.pytorch.org/tutorials/"
      ],
      [
        "torchvision documentation",
        "https://pytorch.org/vision/stable/"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Image representation & preprocessing — applied lab",
      "task": "Inspect a few images, convert them to tensors and compare raw versus normalized ranges.",
      "evidence": "A preprocessing notebook with shapes, value ranges and a verified preprocessing function.",
      "breakIt": "Swap channel order or normalization and inspect how predictions/features change.",
      "transfer": "These vision skills transfer to multimodal inputs and image/document evaluation."
    },
    "competency": {
      "difficulty": "Optional",
      "time": "30–45 min",
      "artifact": "A preprocessing notebook with shapes, value ranges and a verified preprocessing function.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Swap channel order or normalization and inspect how predictions/features change.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Inspect image dimensions, channels and value ranges and apply preprocessing without changing the intended label.",
    "usedLater": "These visual-system concepts reappear in multimodal models, document AI and vision evaluation.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does image representation & preprocessing require, and what evidence would justify that choice?"
  },
  {
    "id": "05-2",
    "phase": "05",
    "phaseName": "Computer Vision",
    "title": "Convolution & CNNs",
    "summary": "CNNs exploit local spatial structure instead of treating every pixel as unrelated. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "CNNs exploit local spatial structure instead of treating every pixel as unrelated.",
    "body": "Trace kernel, stride, padding and feature-map dimensions through a small convolution.",
    "example": "Worked example: Apply a hand-sized convolution to an image-like matrix and then inspect a real CNN layer.",
    "takeaways": [
      "Trace kernel, stride, padding and feature-map dimensions through a small convolution.",
      "Practice: Apply a hand-sized convolution to an image-like matrix and then inspect a real CNN layer.",
      "Failure to diagnose: Change padding/stride and predict the output shape before running it; explain any mismatch.",
      "Proof: A shape trace and a short explanation of what a learned filter detects."
    ],
    "code": "from PIL import Image\nimg = Image.open(\"sample.jpg\")\nprint(img.size, img.mode)\n# Keep preprocessing identical to training.",
    "practice": "Apply a hand-sized convolution to an image-like matrix and then inspect a real CNN layer.",
    "breakIt": "Change padding/stride and predict the output shape before running it; explain any mismatch.",
    "proof": "A shape trace and a short explanation of what a learned filter detects.",
    "transfer": "These visual-system concepts reappear in multimodal models, document AI and vision evaluation.",
    "mistakes": [
      "Applying preprocessing inconsistently between training and evaluation.",
      "Using augmentation that changes the label semantics.",
      "Reporting one aggregate metric without inspecting visual failure cases."
    ],
    "resources": [
      [
        "PyTorch Computer Vision tutorials",
        "https://docs.pytorch.org/tutorials/"
      ],
      [
        "torchvision documentation",
        "https://pytorch.org/vision/stable/"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Convolution & CNNs — applied lab",
      "task": "Apply a hand-sized convolution to an image-like matrix and then inspect a real CNN layer.",
      "evidence": "A shape trace and a short explanation of what a learned filter detects.",
      "breakIt": "Change padding/stride and predict the output shape before running it; explain any mismatch.",
      "transfer": "These vision skills transfer to multimodal inputs and image/document evaluation."
    },
    "competency": {
      "difficulty": "Optional",
      "time": "30–45 min",
      "artifact": "A shape trace and a short explanation of what a learned filter detects.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Change padding/stride and predict the output shape before running it; explain any mismatch.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Explain how a convolution filter scans local patterns and build a small CNN that turns image patches into predictions.",
    "usedLater": "These visual-system concepts reappear in multimodal models, document AI and vision evaluation.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does convolution & cnns require, and what evidence would justify that choice?"
  },
  {
    "id": "05-3",
    "phase": "05",
    "phaseName": "Computer Vision",
    "title": "Augmentation & transfer learning",
    "summary": "Limited image data often benefits from realistic variation and pretrained visual representations. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Limited image data often benefits from realistic variation and pretrained visual representations.",
    "body": "Distinguish label-preserving augmentation from transformations that change the task; understand transfer learning as reuse plus adaptation.",
    "example": "Worked example: Train/evaluate with one augmentation change and compare a frozen pretrained baseline with a small fine-tune.",
    "takeaways": [
      "Distinguish label-preserving augmentation from transformations that change the task; understand transfer learning as reuse plus adaptation.",
      "Practice: Train/evaluate with one augmentation change and compare a frozen pretrained baseline with a small fine-tune.",
      "Failure to diagnose: Use an augmentation that changes the label or fine-tune on an incompatible domain; diagnose why the result is misleading.",
      "Proof: A controlled comparison with augmentation rationale and transfer-learning decision."
    ],
    "code": "from PIL import Image\nimg = Image.open(\"sample.jpg\")\nprint(img.size, img.mode)\n# Keep preprocessing identical to training.",
    "practice": "Train/evaluate with one augmentation change and compare a frozen pretrained baseline with a small fine-tune.",
    "breakIt": "Use an augmentation that changes the label or fine-tune on an incompatible domain; diagnose why the result is misleading.",
    "proof": "A controlled comparison with augmentation rationale and transfer-learning decision.",
    "transfer": "These visual-system concepts reappear in multimodal models, document AI and vision evaluation.",
    "mistakes": [
      "Applying preprocessing inconsistently between training and evaluation.",
      "Using augmentation that changes the label semantics.",
      "Reporting one aggregate metric without inspecting visual failure cases."
    ],
    "resources": [
      [
        "PyTorch Computer Vision tutorials",
        "https://docs.pytorch.org/tutorials/"
      ],
      [
        "torchvision documentation",
        "https://pytorch.org/vision/stable/"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Augmentation & transfer learning — applied lab",
      "task": "Train/evaluate with one augmentation change and compare a frozen pretrained baseline with a small fine-tune.",
      "evidence": "A controlled comparison with augmentation rationale and transfer-learning decision.",
      "breakIt": "Use an augmentation that changes the label or fine-tune on an incompatible domain; diagnose why the result is misleading.",
      "transfer": "These vision skills transfer to multimodal inputs and image/document evaluation."
    },
    "competency": {
      "difficulty": "Optional",
      "time": "30–45 min",
      "artifact": "A controlled comparison with augmentation rationale and transfer-learning decision.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Use an augmentation that changes the label or fine-tune on an incompatible domain; diagnose why the result is misleading.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Use augmentation to vary training inputs and transfer learning to reuse a pretrained visual representation without contaminating evaluation data.",
    "usedLater": "These visual-system concepts reappear in multimodal models, document AI and vision evaluation.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does augmentation & transfer learning require, and what evidence would justify that choice?"
  },
  {
    "id": "05-4",
    "phase": "05",
    "phaseName": "Computer Vision",
    "title": "Image classification & detection",
    "summary": "Classification answers “what is here?” while detection also answers “where?”; the evaluation contract changes with the task. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Classification answers “what is here?” while detection also answers “where?”; the evaluation contract changes with the task.",
    "body": "Understand class scores versus boxes, confidence thresholds and the basic idea of IoU.",
    "example": "Worked example: Run a small classifier and inspect a detection example, calculating IoU for two boxes.",
    "takeaways": [
      "Understand class scores versus boxes, confidence thresholds and the basic idea of IoU.",
      "Practice: Run a small classifier and inspect a detection example, calculating IoU for two boxes.",
      "Failure to diagnose: Lower the detection threshold until false positives explode and explain the precision/recall trade-off.",
      "Proof: A mini report with task definition, example predictions and threshold/evaluation reasoning."
    ],
    "code": "from PIL import Image\nimg = Image.open(\"sample.jpg\")\nprint(img.size, img.mode)\n# Keep preprocessing identical to training.",
    "practice": "Run a small classifier and inspect a detection example, calculating IoU for two boxes.",
    "breakIt": "Lower the detection threshold until false positives explode and explain the precision/recall trade-off.",
    "proof": "A mini report with task definition, example predictions and threshold/evaluation reasoning.",
    "transfer": "These visual-system concepts reappear in multimodal models, document AI and vision evaluation.",
    "mistakes": [
      "Applying preprocessing inconsistently between training and evaluation.",
      "Using augmentation that changes the label semantics.",
      "Reporting one aggregate metric without inspecting visual failure cases."
    ],
    "resources": [
      [
        "PyTorch Computer Vision tutorials",
        "https://docs.pytorch.org/tutorials/"
      ],
      [
        "torchvision documentation",
        "https://pytorch.org/vision/stable/"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Image classification & detection — applied lab",
      "task": "Run a small classifier and inspect a detection example, calculating IoU for two boxes.",
      "evidence": "A mini report with task definition, example predictions and threshold/evaluation reasoning.",
      "breakIt": "Lower the detection threshold until false positives explode and explain the precision/recall trade-off.",
      "transfer": "These vision skills transfer to multimodal inputs and image/document evaluation."
    },
    "competency": {
      "difficulty": "Optional",
      "time": "30–45 min",
      "artifact": "A mini report with task definition, example predictions and threshold/evaluation reasoning.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Lower the detection threshold until false positives explode and explain the precision/recall trade-off.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Distinguish image-level classification from object detection and inspect the output contract required by each task.",
    "usedLater": "These visual-system concepts reappear in multimodal models, document AI and vision evaluation.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does image classification & detection require, and what evidence would justify that choice?"
  },
  {
    "id": "05-5",
    "phase": "05",
    "phaseName": "Computer Vision",
    "title": "Vision evaluation & mini-project",
    "summary": "A vision system can look impressive while failing on lighting, viewpoint or class imbalance. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A vision system can look impressive while failing on lighting, viewpoint or class imbalance.",
    "body": "Choose representative slices and metrics, inspect failure images and define what “good” means before tuning.",
    "example": "Worked example: Build a small image classifier and evaluate at least two meaningful slices.",
    "takeaways": [
      "Choose representative slices and metrics, inspect failure images and define what “good” means before tuning.",
      "Practice: Build a small image classifier and evaluate at least two meaningful slices.",
      "Failure to diagnose: Test on a shifted condition such as darker images or unusual viewpoints and document the performance change.",
      "Proof: A mini-project with dataset note, metrics, failure gallery and next-step recommendation."
    ],
    "code": "from PIL import Image\nimg = Image.open(\"sample.jpg\")\nprint(img.size, img.mode)\n# Keep preprocessing identical to training.",
    "practice": "Build a small image classifier and evaluate at least two meaningful slices.",
    "breakIt": "Test on a shifted condition such as darker images or unusual viewpoints and document the performance change.",
    "proof": "A mini-project with dataset note, metrics, failure gallery and next-step recommendation.",
    "transfer": "These visual-system concepts reappear in multimodal models, document AI and vision evaluation.",
    "mistakes": [
      "Applying preprocessing inconsistently between training and evaluation.",
      "Using augmentation that changes the label semantics.",
      "Reporting one aggregate metric without inspecting visual failure cases."
    ],
    "resources": [
      [
        "PyTorch Computer Vision tutorials",
        "https://docs.pytorch.org/tutorials/"
      ],
      [
        "torchvision documentation",
        "https://pytorch.org/vision/stable/"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "Vision evaluation & mini-project — applied lab",
      "task": "Build a small image classifier and evaluate at least two meaningful slices.",
      "evidence": "A mini-project with dataset note, metrics, failure gallery and next-step recommendation.",
      "breakIt": "Test on a shifted condition such as darker images or unusual viewpoints and document the performance change.",
      "transfer": "These vision skills transfer to multimodal inputs and image/document evaluation."
    },
    "competency": {
      "difficulty": "Optional",
      "time": "30–45 min",
      "artifact": "A mini-project with dataset note, metrics, failure gallery and next-step recommendation.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Test on a shifted condition such as darker images or unusual viewpoints and document the performance change.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Evaluate a visual model with task-appropriate metrics and document failure examples instead of reporting only a headline score.",
    "usedLater": "These visual-system concepts reappear in multimodal models, document AI and vision evaluation.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does vision evaluation & mini-project require, and what evidence would justify that choice?"
  },
  {
    "id": "06-1",
    "phase": "06",
    "phaseName": "NLP & Representation",
    "title": "Text normalization & tokenization",
    "summary": "Text that looks identical to a human can be different to a program; representation choices affect downstream behavior. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Text that looks identical to a human can be different to a program; representation choices affect downstream behavior.",
    "body": "Normalize case/whitespace carefully, then understand tokens as model-facing units rather than “words.”",
    "example": "Worked example: Run the same sentences through normalization and tokenization and inspect differences.",
    "takeaways": [
      "Normalize case/whitespace carefully, then understand tokens as model-facing units rather than “words.”",
      "Practice: Run the same sentences through normalization and tokenization and inspect differences.",
      "Failure to diagnose: Over-normalize names, punctuation or casing and show which information was lost.",
      "Proof: A before/after table plus a rule set explaining what was normalized and what was preserved."
    ],
    "code": "from sklearn.feature_extraction.text import TfidfVectorizer\ntexts=[\"refund was fast\",\"refund was delayed\"]\nX=TfidfVectorizer().fit_transform(texts)\nprint(X.shape)",
    "practice": "Run the same sentences through normalization and tokenization and inspect differences.",
    "breakIt": "Over-normalize names, punctuation or casing and show which information was lost.",
    "proof": "A before/after table plus a rule set explaining what was normalized and what was preserved.",
    "transfer": "These language representations explain the tokenization, embeddings and text evaluation used by modern LLM systems.",
    "mistakes": [
      "Changing tokenization without rechecking the model contract.",
      "Confusing lexical similarity with semantic similarity.",
      "Evaluating only easy examples that match the training distribution."
    ],
    "resources": [
      [
        "Hugging Face NLP Course",
        "https://huggingface.co/learn/llm-course/chapter1/1"
      ],
      [
        "scikit-learn text feature extraction",
        "https://scikit-learn.org/stable/modules/feature_extraction.html"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Text normalization & tokenization — applied lab",
      "task": "Run the same sentences through normalization and tokenization and inspect differences.",
      "evidence": "A before/after table plus a rule set explaining what was normalized and what was preserved.",
      "breakIt": "Over-normalize names, punctuation or casing and show which information was lost.",
      "transfer": "These representation and evaluation skills make tokenization, embeddings and Transformers easier to reason about."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A before/after table plus a rule set explaining what was normalized and what was preserved.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Over-normalize names, punctuation or casing and show which information was lost.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Turn raw text into a stable token sequence while understanding how normalization choices change downstream inputs.",
    "usedLater": "These language representations explain the tokenization, embeddings and text evaluation used by modern LLM systems.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does text normalization & tokenization require, and what evidence would justify that choice?"
  },
  {
    "id": "06-2",
    "phase": "06",
    "phaseName": "NLP & Representation",
    "title": "Bag-of-words & TF-IDF",
    "summary": "Simple sparse representations remain useful baselines and reveal what information a representation keeps or throws away. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Simple sparse representations remain useful baselines and reveal what information a representation keeps or throws away.",
    "body": "Build count and TF-IDF vectors and interpret term weighting without treating them as semantic embeddings.",
    "example": "Worked example: Classify a tiny text dataset with TF-IDF and inspect the most influential terms.",
    "takeaways": [
      "Build count and TF-IDF vectors and interpret term weighting without treating them as semantic embeddings.",
      "Practice: Classify a tiny text dataset with TF-IDF and inspect the most influential terms.",
      "Failure to diagnose: Add a frequent but uninformative word or duplicate documents and observe the representation change.",
      "Proof: A baseline model report with feature inspection and one limitation of the representation."
    ],
    "code": "from sklearn.feature_extraction.text import TfidfVectorizer\ntexts=[\"refund was fast\",\"refund was delayed\"]\nX=TfidfVectorizer().fit_transform(texts)\nprint(X.shape)",
    "practice": "Classify a tiny text dataset with TF-IDF and inspect the most influential terms.",
    "breakIt": "Add a frequent but uninformative word or duplicate documents and observe the representation change.",
    "proof": "A baseline model report with feature inspection and one limitation of the representation.",
    "transfer": "These language representations explain the tokenization, embeddings and text evaluation used by modern LLM systems.",
    "mistakes": [
      "Changing tokenization without rechecking the model contract.",
      "Confusing lexical similarity with semantic similarity.",
      "Evaluating only easy examples that match the training distribution."
    ],
    "resources": [
      [
        "Hugging Face NLP Course",
        "https://huggingface.co/learn/llm-course/chapter1/1"
      ],
      [
        "scikit-learn text feature extraction",
        "https://scikit-learn.org/stable/modules/feature_extraction.html"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Bag-of-words & TF-IDF — applied lab",
      "task": "Classify a tiny text dataset with TF-IDF and inspect the most influential terms.",
      "evidence": "A baseline model report with feature inspection and one limitation of the representation.",
      "breakIt": "Add a frequent but uninformative word or duplicate documents and observe the representation change.",
      "transfer": "These representation and evaluation skills make tokenization, embeddings and Transformers easier to reason about."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A baseline model report with feature inspection and one limitation of the representation.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Add a frequent but uninformative word or duplicate documents and observe the representation change.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Represent documents with sparse lexical features and compare term frequency with inverse-document-frequency weighting.",
    "usedLater": "These language representations explain the tokenization, embeddings and text evaluation used by modern LLM systems.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does bag-of-words & tf-idf require, and what evidence would justify that choice?"
  },
  {
    "id": "06-3",
    "phase": "06",
    "phaseName": "NLP & Representation",
    "title": "Embeddings & representation",
    "summary": "Modern NLP systems compare dense representations because semantic relationships are difficult to capture with word counts alone. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Modern NLP systems compare dense representations because semantic relationships are difficult to capture with word counts alone.",
    "body": "Understand embeddings as learned coordinate systems whose geometry is useful only relative to the training objective and task.",
    "example": "Worked example: Compare embeddings for related/unrelated text using cosine similarity and inspect nearest neighbors.",
    "takeaways": [
      "Understand embeddings as learned coordinate systems whose geometry is useful only relative to the training objective and task.",
      "Practice: Compare embeddings for related/unrelated text using cosine similarity and inspect nearest neighbors.",
      "Failure to diagnose: Insert a domain-specific term with poor representation coverage and show how nearest neighbors can fail.",
      "Proof: A nearest-neighbor table with an explanation of where the representation helps and fails."
    ],
    "code": "from sklearn.feature_extraction.text import TfidfVectorizer\ntexts=[\"refund was fast\",\"refund was delayed\"]\nX=TfidfVectorizer().fit_transform(texts)\nprint(X.shape)",
    "practice": "Compare embeddings for related/unrelated text using cosine similarity and inspect nearest neighbors.",
    "breakIt": "Insert a domain-specific term with poor representation coverage and show how nearest neighbors can fail.",
    "proof": "A nearest-neighbor table with an explanation of where the representation helps and fails.",
    "transfer": "These language representations explain the tokenization, embeddings and text evaluation used by modern LLM systems.",
    "mistakes": [
      "Changing tokenization without rechecking the model contract.",
      "Confusing lexical similarity with semantic similarity.",
      "Evaluating only easy examples that match the training distribution."
    ],
    "resources": [
      [
        "Hugging Face NLP Course",
        "https://huggingface.co/learn/llm-course/chapter1/1"
      ],
      [
        "scikit-learn text feature extraction",
        "https://scikit-learn.org/stable/modules/feature_extraction.html"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Embeddings & representation — applied lab",
      "task": "Compare embeddings for related/unrelated text using cosine similarity and inspect nearest neighbors.",
      "evidence": "A nearest-neighbor table with an explanation of where the representation helps and fails.",
      "breakIt": "Insert a domain-specific term with poor representation coverage and show how nearest neighbors can fail.",
      "transfer": "These representation and evaluation skills make tokenization, embeddings and Transformers easier to reason about."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A nearest-neighbor table with an explanation of where the representation helps and fails.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Insert a domain-specific term with poor representation coverage and show how nearest neighbors can fail.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Compare dense text representations and inspect how semantically related inputs map to nearby vectors.",
    "usedLater": "These language representations explain the tokenization, embeddings and text evaluation used by modern LLM systems.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does embeddings & representation require, and what evidence would justify that choice?"
  },
  {
    "id": "06-4",
    "phase": "06",
    "phaseName": "NLP & Representation",
    "title": "Pretrained NLP workflows",
    "summary": "Using a pretrained model is an engineering workflow: tokenize correctly, run inference, inspect outputs and respect model limitations. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Using a pretrained model is an engineering workflow: tokenize correctly, run inference, inspect outputs and respect model limitations.",
    "body": "Trace tokenizer → tensors → model → decoded/output representation and distinguish inference from fine-tuning.",
    "example": "Worked example: Run one pretrained text task locally or in a notebook and inspect token IDs and attention masks.",
    "takeaways": [
      "Trace tokenizer → tensors → model → decoded/output representation and distinguish inference from fine-tuning.",
      "Practice: Run one pretrained text task locally or in a notebook and inspect token IDs and attention masks.",
      "Failure to diagnose: Pass an input longer than the supported context or mismatch tokenizer/model; diagnose the failure.",
      "Proof: A reproducible inference script with model/tokenizer pairing and one inspected example."
    ],
    "code": "from sklearn.feature_extraction.text import TfidfVectorizer\ntexts=[\"refund was fast\",\"refund was delayed\"]\nX=TfidfVectorizer().fit_transform(texts)\nprint(X.shape)",
    "practice": "Run one pretrained text task locally or in a notebook and inspect token IDs and attention masks.",
    "breakIt": "Pass an input longer than the supported context or mismatch tokenizer/model; diagnose the failure.",
    "proof": "A reproducible inference script with model/tokenizer pairing and one inspected example.",
    "transfer": "These language representations explain the tokenization, embeddings and text evaluation used by modern LLM systems.",
    "mistakes": [
      "Changing tokenization without rechecking the model contract.",
      "Confusing lexical similarity with semantic similarity.",
      "Evaluating only easy examples that match the training distribution."
    ],
    "resources": [
      [
        "Hugging Face NLP Course",
        "https://huggingface.co/learn/llm-course/chapter1/1"
      ],
      [
        "scikit-learn text feature extraction",
        "https://scikit-learn.org/stable/modules/feature_extraction.html"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Pretrained NLP workflows — applied lab",
      "task": "Run one pretrained text task locally or in a notebook and inspect token IDs and attention masks.",
      "evidence": "A reproducible inference script with model/tokenizer pairing and one inspected example.",
      "breakIt": "Pass an input longer than the supported context or mismatch tokenizer/model; diagnose the failure.",
      "transfer": "These representation and evaluation skills make tokenization, embeddings and Transformers easier to reason about."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A reproducible inference script with model/tokenizer pairing and one inspected example.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Pass an input longer than the supported context or mismatch tokenizer/model; diagnose the failure.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Load a pretrained NLP model, respect its tokenizer/model contract, and adapt the output to a small application task.",
    "usedLater": "These language representations explain the tokenization, embeddings and text evaluation used by modern LLM systems.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does pretrained nlp workflows require, and what evidence would justify that choice?"
  },
  {
    "id": "06-5",
    "phase": "06",
    "phaseName": "NLP & Representation",
    "title": "Text classification",
    "summary": "Classification quality depends on labels, imbalance, thresholding and representative language—not only model choice. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Classification quality depends on labels, imbalance, thresholding and representative language—not only model choice.",
    "body": "Build a small text classifier and interpret precision/recall plus confusion examples.",
    "example": "Worked example: Train a baseline classifier and inspect false positives and false negatives.",
    "takeaways": [
      "Build a small text classifier and interpret precision/recall plus confusion examples.",
      "Practice: Train a baseline classifier and inspect false positives and false negatives.",
      "Failure to diagnose: Change class balance or threshold and observe metric movement.",
      "Proof: A classification report with representative errors and a threshold decision."
    ],
    "code": "from sklearn.feature_extraction.text import TfidfVectorizer\ntexts=[\"refund was fast\",\"refund was delayed\"]\nX=TfidfVectorizer().fit_transform(texts)\nprint(X.shape)",
    "practice": "Train a baseline classifier and inspect false positives and false negatives.",
    "breakIt": "Change class balance or threshold and observe metric movement.",
    "proof": "A classification report with representative errors and a threshold decision.",
    "transfer": "These language representations explain the tokenization, embeddings and text evaluation used by modern LLM systems.",
    "mistakes": [
      "Changing tokenization without rechecking the model contract.",
      "Confusing lexical similarity with semantic similarity.",
      "Evaluating only easy examples that match the training distribution."
    ],
    "resources": [
      [
        "Hugging Face NLP Course",
        "https://huggingface.co/learn/llm-course/chapter1/1"
      ],
      [
        "scikit-learn text feature extraction",
        "https://scikit-learn.org/stable/modules/feature_extraction.html"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "Text classification — applied lab",
      "task": "Train a baseline classifier and inspect false positives and false negatives.",
      "evidence": "A classification report with representative errors and a threshold decision.",
      "breakIt": "Change class balance or threshold and observe metric movement.",
      "transfer": "These representation and evaluation skills make tokenization, embeddings and Transformers easier to reason about."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A classification report with representative errors and a threshold decision.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Change class balance or threshold and observe metric movement.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Build a text classifier with a clear label contract, baseline and held-out evaluation set.",
    "usedLater": "These language representations explain the tokenization, embeddings and text evaluation used by modern LLM systems.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does text classification require, and what evidence would justify that choice?"
  },
  {
    "id": "06-6",
    "phase": "06",
    "phaseName": "NLP & Representation",
    "title": "NLP evaluation",
    "summary": "Text quality cannot always be captured by one score; the evaluation set must reflect real language and failure costs. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Text quality cannot always be captured by one score; the evaluation set must reflect real language and failure costs.",
    "body": "Separate exact/structured metrics from semantic evaluation and build representative test cases.",
    "example": "Worked example: Create a small evaluation set with normal, ambiguous and adversarial text cases.",
    "takeaways": [
      "Separate exact/structured metrics from semantic evaluation and build representative test cases.",
      "Practice: Create a small evaluation set with normal, ambiguous and adversarial text cases.",
      "Failure to diagnose: Optimize a score while degrading a meaningful slice; detect it through case-level analysis.",
      "Proof: An evaluation table with pass/fail criteria and examples of false confidence."
    ],
    "code": "from sklearn.feature_extraction.text import TfidfVectorizer\ntexts=[\"refund was fast\",\"refund was delayed\"]\nX=TfidfVectorizer().fit_transform(texts)\nprint(X.shape)",
    "practice": "Create a small evaluation set with normal, ambiguous and adversarial text cases.",
    "breakIt": "Optimize a score while degrading a meaningful slice; detect it through case-level analysis.",
    "proof": "An evaluation table with pass/fail criteria and examples of false confidence.",
    "transfer": "These language representations explain the tokenization, embeddings and text evaluation used by modern LLM systems.",
    "mistakes": [
      "Changing tokenization without rechecking the model contract.",
      "Confusing lexical similarity with semantic similarity.",
      "Evaluating only easy examples that match the training distribution."
    ],
    "resources": [
      [
        "Hugging Face NLP Course",
        "https://huggingface.co/learn/llm-course/chapter1/1"
      ],
      [
        "scikit-learn text feature extraction",
        "https://scikit-learn.org/stable/modules/feature_extraction.html"
      ]
    ],
    "experience": {
      "type": "Design",
      "title": "NLP evaluation — applied lab",
      "task": "Create a small evaluation set with normal, ambiguous and adversarial text cases.",
      "evidence": "An evaluation table with pass/fail criteria and examples of false confidence.",
      "breakIt": "Optimize a score while degrading a meaningful slice; detect it through case-level analysis.",
      "transfer": "These representation and evaluation skills make tokenization, embeddings and Transformers easier to reason about."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "An evaluation table with pass/fail criteria and examples of false confidence.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Optimize a score while degrading a meaningful slice; detect it through case-level analysis.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Measure text-system behavior with task-appropriate metrics and inspect representative errors by class and example.",
    "usedLater": "These language representations explain the tokenization, embeddings and text evaluation used by modern LLM systems.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does nlp evaluation require, and what evidence would justify that choice?"
  },
  {
    "id": "06-7",
    "phase": "06",
    "phaseName": "NLP & Representation",
    "title": "Build a small text system",
    "summary": "A useful NLP system connects preprocessing, model inference, evaluation and failure handling. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A useful NLP system connects preprocessing, model inference, evaluation and failure handling.",
    "body": "Assemble a small text classification/search application with a clear input/output contract.",
    "example": "Worked example: Build the smallest system that classifies or retrieves text and exposes its confidence/evidence.",
    "takeaways": [
      "Assemble a small text classification/search application with a clear input/output contract.",
      "Practice: Build the smallest system that classifies or retrieves text and exposes its confidence/evidence.",
      "Failure to diagnose: Feed malformed or out-of-domain text and verify the system responds with a controlled fallback.",
      "Proof: A runnable mini-app with test cases, evaluation results and a documented limitation."
    ],
    "code": "from sklearn.feature_extraction.text import TfidfVectorizer\ntexts=[\"refund was fast\",\"refund was delayed\"]\nX=TfidfVectorizer().fit_transform(texts)\nprint(X.shape)",
    "practice": "Build the smallest system that classifies or retrieves text and exposes its confidence/evidence.",
    "breakIt": "Feed malformed or out-of-domain text and verify the system responds with a controlled fallback.",
    "proof": "A runnable mini-app with test cases, evaluation results and a documented limitation.",
    "transfer": "These language representations explain the tokenization, embeddings and text evaluation used by modern LLM systems.",
    "mistakes": [
      "Changing tokenization without rechecking the model contract.",
      "Confusing lexical similarity with semantic similarity.",
      "Evaluating only easy examples that match the training distribution."
    ],
    "resources": [
      [
        "Hugging Face NLP Course",
        "https://huggingface.co/learn/llm-course/chapter1/1"
      ],
      [
        "scikit-learn text feature extraction",
        "https://scikit-learn.org/stable/modules/feature_extraction.html"
      ]
    ],
    "experience": {
      "type": "Prove",
      "title": "Build a small text system — applied lab",
      "task": "Build the smallest system that classifies or retrieves text and exposes its confidence/evidence.",
      "evidence": "A runnable mini-app with test cases, evaluation results and a documented limitation.",
      "breakIt": "Feed malformed or out-of-domain text and verify the system responds with a controlled fallback.",
      "transfer": "These representation and evaluation skills make tokenization, embeddings and Transformers easier to reason about."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A runnable mini-app with test cases, evaluation results and a documented limitation.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Feed malformed or out-of-domain text and verify the system responds with a controlled fallback.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Combine preprocessing, representation, prediction and evaluation into a small reproducible text application.",
    "usedLater": "These language representations explain the tokenization, embeddings and text evaluation used by modern LLM systems.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does build a small text system require, and what evidence would justify that choice?"
  },
  {
    "id": "07-1",
    "phase": "07",
    "phaseName": "Transformers",
    "title": "Self-attention",
    "summary": "Attention lets a token construct a representation using information from other tokens instead of a fixed local window. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Attention lets a token construct a representation using information from other tokens instead of a fixed local window.",
    "body": "Trace token representations, attention weights and weighted value aggregation conceptually.",
    "example": "Worked example: Compute a tiny attention example by hand or with a short script and inspect the weight matrix.",
    "takeaways": [
      "Trace token representations, attention weights and weighted value aggregation conceptually.",
      "Practice: Compute a tiny attention example by hand or with a short script and inspect the weight matrix.",
      "Failure to diagnose: Change one token and predict which attention weights should move; compare prediction with actual output.",
      "Proof: A small attention matrix with an explanation of one row and what it means."
    ],
    "code": "import torch\nQ=torch.tensor([[1.,0.]])\nK=torch.tensor([[1.,0.],[0.,1.]])\nV=torch.tensor([[2.,0.],[0.,3.]])\nscores=Q @ K.T / (K.shape[-1] ** 0.5)\nweights=torch.softmax(scores,dim=-1)\nprint(weights @ V)",
    "practice": "Compute a tiny attention example by hand or with a short script and inspect the weight matrix.",
    "breakIt": "Change one token and predict which attention weights should move; compare prediction with actual output.",
    "proof": "A small attention matrix with an explanation of one row and what it means.",
    "transfer": "These Transformer mechanics explain what later LLM application layers are actually calling underneath the API.",
    "mistakes": [
      "Explaining attention with intuition but never calculating a concrete example.",
      "Ignoring masking or positional information.",
      "Treating architecture names as interchangeable when their input/output contracts differ."
    ],
    "resources": [
      [
        "The Annotated Transformer",
        "https://nlp.seas.harvard.edu/annotated-transformer/"
      ],
      [
        "Hugging Face Transformers docs",
        "https://huggingface.co/docs/transformers/"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Self-attention — applied lab",
      "task": "Compute a tiny attention example by hand or with a short script and inspect the weight matrix.",
      "evidence": "A small attention matrix with an explanation of one row and what it means.",
      "breakIt": "Change one token and predict which attention weights should move; compare prediction with actual output.",
      "transfer": "These architectural concepts explain how modern LLM inference actually transforms context into tokens."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A small attention matrix with an explanation of one row and what it means.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Change one token and predict which attention weights should move; compare prediction with actual output.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Compute attention weights from token relationships and explain why each token can incorporate information from other positions.",
    "usedLater": "These Transformer mechanics explain what later LLM application layers are actually calling underneath the API.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does self-attention require, and what evidence would justify that choice?"
  },
  {
    "id": "07-2",
    "phase": "07",
    "phaseName": "Transformers",
    "title": "Queries, keys, values & scaled attention",
    "summary": "The Q/K/V split explains what is being asked, what matches, and what information is retrieved. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "The Q/K/V split explains what is being asked, what matches, and what information is retrieved.",
    "body": "Connect dot-product similarity, scaling and softmax to attention weights.",
    "example": "Worked example: Build Q, K and V matrices for a toy example and calculate one attention output.",
    "takeaways": [
      "Connect dot-product similarity, scaling and softmax to attention weights.",
      "Practice: Build Q, K and V matrices for a toy example and calculate one attention output.",
      "Failure to diagnose: Remove scaling or change the query and observe how the score distribution changes.",
      "Proof: A worked calculation showing scores → scaling → weights → weighted values."
    ],
    "code": "import torch\nQ=torch.tensor([[1.,0.]])\nK=torch.tensor([[1.,0.],[0.,1.]])\nV=torch.tensor([[2.,0.],[0.,3.]])\nscores=Q @ K.T / (K.shape[-1] ** 0.5)\nweights=torch.softmax(scores,dim=-1)\nprint(weights @ V)",
    "practice": "Build Q, K and V matrices for a toy example and calculate one attention output.",
    "breakIt": "Remove scaling or change the query and observe how the score distribution changes.",
    "proof": "A worked calculation showing scores → scaling → weights → weighted values.",
    "transfer": "These Transformer mechanics explain what later LLM application layers are actually calling underneath the API.",
    "mistakes": [
      "Explaining attention with intuition but never calculating a concrete example.",
      "Ignoring masking or positional information.",
      "Treating architecture names as interchangeable when their input/output contracts differ."
    ],
    "resources": [
      [
        "The Annotated Transformer",
        "https://nlp.seas.harvard.edu/annotated-transformer/"
      ],
      [
        "Hugging Face Transformers docs",
        "https://huggingface.co/docs/transformers/"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Queries, keys, values & scaled attention — applied lab",
      "task": "Build Q, K and V matrices for a toy example and calculate one attention output.",
      "evidence": "A worked calculation showing scores → scaling → weights → weighted values.",
      "breakIt": "Remove scaling or change the query and observe how the score distribution changes.",
      "transfer": "These architectural concepts explain how modern LLM inference actually transforms context into tokens."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A worked calculation showing scores → scaling → weights → weighted values.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Remove scaling or change the query and observe how the score distribution changes.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Construct Q, K and V matrices and calculate scaled attention step by step so the weighting mechanism is observable.",
    "usedLater": "These Transformer mechanics explain what later LLM application layers are actually calling underneath the API.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does queries, keys, values & scaled attention require, and what evidence would justify that choice?"
  },
  {
    "id": "07-3",
    "phase": "07",
    "phaseName": "Transformers",
    "title": "Multi-head attention & positional information",
    "summary": "One attention head is a limited view; multiple heads and position signals let the model represent different relationships and order. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "One attention head is a limited view; multiple heads and position signals let the model represent different relationships and order.",
    "body": "Understand heads as parallel projections and compare content information with positional information.",
    "example": "Worked example: Inspect a toy multi-head configuration and compare outputs with/without positional information.",
    "takeaways": [
      "Understand heads as parallel projections and compare content information with positional information.",
      "Practice: Inspect a toy multi-head configuration and compare outputs with/without positional information.",
      "Failure to diagnose: Shuffle token order and show what changes and why position encoding matters.",
      "Proof: A diagram/table showing what each head or positional component contributes."
    ],
    "code": "import torch\nQ=torch.tensor([[1.,0.]])\nK=torch.tensor([[1.,0.],[0.,1.]])\nV=torch.tensor([[2.,0.],[0.,3.]])\nscores=Q @ K.T / (K.shape[-1] ** 0.5)\nweights=torch.softmax(scores,dim=-1)\nprint(weights @ V)",
    "practice": "Inspect a toy multi-head configuration and compare outputs with/without positional information.",
    "breakIt": "Shuffle token order and show what changes and why position encoding matters.",
    "proof": "A diagram/table showing what each head or positional component contributes.",
    "transfer": "These Transformer mechanics explain what later LLM application layers are actually calling underneath the API.",
    "mistakes": [
      "Explaining attention with intuition but never calculating a concrete example.",
      "Ignoring masking or positional information.",
      "Treating architecture names as interchangeable when their input/output contracts differ."
    ],
    "resources": [
      [
        "The Annotated Transformer",
        "https://nlp.seas.harvard.edu/annotated-transformer/"
      ],
      [
        "Hugging Face Transformers docs",
        "https://huggingface.co/docs/transformers/"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Multi-head attention & positional information — applied lab",
      "task": "Inspect a toy multi-head configuration and compare outputs with/without positional information.",
      "evidence": "A diagram/table showing what each head or positional component contributes.",
      "breakIt": "Shuffle token order and show what changes and why position encoding matters.",
      "transfer": "These architectural concepts explain how modern LLM inference actually transforms context into tokens."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A diagram/table showing what each head or positional component contributes.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Shuffle token order and show what changes and why position encoding matters.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Explain why multiple attention heads and positional information provide different signals than a single unpositioned attention map.",
    "usedLater": "These Transformer mechanics explain what later LLM application layers are actually calling underneath the API.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does multi-head attention & positional information require, and what evidence would justify that choice?"
  },
  {
    "id": "07-4",
    "phase": "07",
    "phaseName": "Transformers",
    "title": "Transformer blocks",
    "summary": "A Transformer block is a repeatable computation pattern, not a single “attention layer.” This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A Transformer block is a repeatable computation pattern, not a single “attention layer.”",
    "body": "Trace attention, residual connections, normalization and feed-forward transformation at a high level.",
    "example": "Worked example: Draw one block and annotate tensor shapes at each major boundary.",
    "takeaways": [
      "Trace attention, residual connections, normalization and feed-forward transformation at a high level.",
      "Practice: Draw one block and annotate tensor shapes at each major boundary.",
      "Failure to diagnose: Remove a residual/normalization step in a toy implementation and identify the changed behavior/training issue.",
      "Proof: An annotated block diagram with shape and data-flow notes."
    ],
    "code": "import torch\nQ=torch.tensor([[1.,0.]])\nK=torch.tensor([[1.,0.],[0.,1.]])\nV=torch.tensor([[2.,0.],[0.,3.]])\nscores=Q @ K.T / (K.shape[-1] ** 0.5)\nweights=torch.softmax(scores,dim=-1)\nprint(weights @ V)",
    "practice": "Draw one block and annotate tensor shapes at each major boundary.",
    "breakIt": "Remove a residual/normalization step in a toy implementation and identify the changed behavior/training issue.",
    "proof": "An annotated block diagram with shape and data-flow notes.",
    "transfer": "These Transformer mechanics explain what later LLM application layers are actually calling underneath the API.",
    "mistakes": [
      "Explaining attention with intuition but never calculating a concrete example.",
      "Ignoring masking or positional information.",
      "Treating architecture names as interchangeable when their input/output contracts differ."
    ],
    "resources": [
      [
        "The Annotated Transformer",
        "https://nlp.seas.harvard.edu/annotated-transformer/"
      ],
      [
        "Hugging Face Transformers docs",
        "https://huggingface.co/docs/transformers/"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Transformer blocks — applied lab",
      "task": "Draw one block and annotate tensor shapes at each major boundary.",
      "evidence": "An annotated block diagram with shape and data-flow notes.",
      "breakIt": "Remove a residual/normalization step in a toy implementation and identify the changed behavior/training issue.",
      "transfer": "These architectural concepts explain how modern LLM inference actually transforms context into tokens."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "An annotated block diagram with shape and data-flow notes.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Remove a residual/normalization step in a toy implementation and identify the changed behavior/training issue.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Trace attention, residual connections, normalization and feed-forward layers through one Transformer block.",
    "usedLater": "These Transformer mechanics explain what later LLM application layers are actually calling underneath the API.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does transformer blocks require, and what evidence would justify that choice?"
  },
  {
    "id": "07-5",
    "phase": "07",
    "phaseName": "Transformers",
    "title": "Encoder vs decoder architectures",
    "summary": "Architecture follows the task: understanding a whole sequence differs from generating the next token. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Architecture follows the task: understanding a whole sequence differs from generating the next token.",
    "body": "Compare encoder-only, decoder-only and encoder-decoder information flow without memorizing model brands.",
    "example": "Worked example: Given three tasks, choose an architecture and justify the information flow required.",
    "takeaways": [
      "Compare encoder-only, decoder-only and encoder-decoder information flow without memorizing model brands.",
      "Practice: Given three tasks, choose an architecture and justify the information flow required.",
      "Failure to diagnose: Choose an architecture that cannot access the information the task requires and explain the mismatch.",
      "Proof: A decision table mapping tasks to architecture with explicit reasoning."
    ],
    "code": "import torch\nQ=torch.tensor([[1.,0.]])\nK=torch.tensor([[1.,0.],[0.,1.]])\nV=torch.tensor([[2.,0.],[0.,3.]])\nscores=Q @ K.T / (K.shape[-1] ** 0.5)\nweights=torch.softmax(scores,dim=-1)\nprint(weights @ V)",
    "practice": "Given three tasks, choose an architecture and justify the information flow required.",
    "breakIt": "Choose an architecture that cannot access the information the task requires and explain the mismatch.",
    "proof": "A decision table mapping tasks to architecture with explicit reasoning.",
    "transfer": "These Transformer mechanics explain what later LLM application layers are actually calling underneath the API.",
    "mistakes": [
      "Explaining attention with intuition but never calculating a concrete example.",
      "Ignoring masking or positional information.",
      "Treating architecture names as interchangeable when their input/output contracts differ."
    ],
    "resources": [
      [
        "The Annotated Transformer",
        "https://nlp.seas.harvard.edu/annotated-transformer/"
      ],
      [
        "Hugging Face Transformers docs",
        "https://huggingface.co/docs/transformers/"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "Encoder vs decoder architectures — applied lab",
      "task": "Given three tasks, choose an architecture and justify the information flow required.",
      "evidence": "A decision table mapping tasks to architecture with explicit reasoning.",
      "breakIt": "Choose an architecture that cannot access the information the task requires and explain the mismatch.",
      "transfer": "These architectural concepts explain how modern LLM inference actually transforms context into tokens."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A decision table mapping tasks to architecture with explicit reasoning.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Choose an architecture that cannot access the information the task requires and explain the mismatch.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Choose encoder-style, decoder-style or encoder-decoder architectures based on the input/output task rather than model popularity.",
    "usedLater": "These Transformer mechanics explain what later LLM application layers are actually calling underneath the API.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does encoder vs decoder architectures require, and what evidence would justify that choice?"
  },
  {
    "id": "07-6",
    "phase": "07",
    "phaseName": "Transformers",
    "title": "Causal & attention masking",
    "summary": "Masks are control logic over information flow; a wrong mask can leak future information or hide needed context. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Masks are control logic over information flow; a wrong mask can leak future information or hide needed context.",
    "body": "Understand causal masks, padding masks and the difference between blocking attention and deleting tokens.",
    "example": "Worked example: Visualize a small causal mask and verify which positions can attend to which.",
    "takeaways": [
      "Understand causal masks, padding masks and the difference between blocking attention and deleting tokens.",
      "Practice: Visualize a small causal mask and verify which positions can attend to which.",
      "Failure to diagnose: Flip one mask value and show the information leak or missing-context symptom.",
      "Proof: A mask matrix plus a test proving the intended visibility pattern."
    ],
    "code": "import torch\nQ=torch.tensor([[1.,0.]])\nK=torch.tensor([[1.,0.],[0.,1.]])\nV=torch.tensor([[2.,0.],[0.,3.]])\nscores=Q @ K.T / (K.shape[-1] ** 0.5)\nweights=torch.softmax(scores,dim=-1)\nprint(weights @ V)",
    "practice": "Visualize a small causal mask and verify which positions can attend to which.",
    "breakIt": "Flip one mask value and show the information leak or missing-context symptom.",
    "proof": "A mask matrix plus a test proving the intended visibility pattern.",
    "transfer": "These Transformer mechanics explain what later LLM application layers are actually calling underneath the API.",
    "mistakes": [
      "Explaining attention with intuition but never calculating a concrete example.",
      "Ignoring masking or positional information.",
      "Treating architecture names as interchangeable when their input/output contracts differ."
    ],
    "resources": [
      [
        "The Annotated Transformer",
        "https://nlp.seas.harvard.edu/annotated-transformer/"
      ],
      [
        "Hugging Face Transformers docs",
        "https://huggingface.co/docs/transformers/"
      ]
    ],
    "experience": {
      "type": "Design",
      "title": "Causal & attention masking — applied lab",
      "task": "Visualize a small causal mask and verify which positions can attend to which.",
      "evidence": "A mask matrix plus a test proving the intended visibility pattern.",
      "breakIt": "Flip one mask value and show the information leak or missing-context symptom.",
      "transfer": "These architectural concepts explain how modern LLM inference actually transforms context into tokens."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A mask matrix plus a test proving the intended visibility pattern.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Flip one mask value and show the information leak or missing-context symptom.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Apply causal and padding masks and verify which token-to-token information is allowed to flow.",
    "usedLater": "These Transformer mechanics explain what later LLM application layers are actually calling underneath the API.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does causal & attention masking require, and what evidence would justify that choice?"
  },
  {
    "id": "07-7",
    "phase": "07",
    "phaseName": "Transformers",
    "title": "Inference mechanics",
    "summary": "Generation is an iterative process with context growth, token selection and stopping behavior. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Generation is an iterative process with context growth, token selection and stopping behavior.",
    "body": "Trace prefill versus generation at a conceptual level and connect decoding settings to output behavior and latency.",
    "example": "Worked example: Instrument a small generation call to record prompt length, output length and stop condition.",
    "takeaways": [
      "Trace prefill versus generation at a conceptual level and connect decoding settings to output behavior and latency.",
      "Practice: Instrument a small generation call to record prompt length, output length and stop condition.",
      "Failure to diagnose: Allow an unbounded generation or omit a stop condition; diagnose the operational risk.",
      "Proof: A generation trace with token counts, stop reason and a brief cost/latency note."
    ],
    "code": "import torch\nQ=torch.tensor([[1.,0.]])\nK=torch.tensor([[1.,0.],[0.,1.]])\nV=torch.tensor([[2.,0.],[0.,3.]])\nscores=Q @ K.T / (K.shape[-1] ** 0.5)\nweights=torch.softmax(scores,dim=-1)\nprint(weights @ V)",
    "practice": "Instrument a small generation call to record prompt length, output length and stop condition.",
    "breakIt": "Allow an unbounded generation or omit a stop condition; diagnose the operational risk.",
    "proof": "A generation trace with token counts, stop reason and a brief cost/latency note.",
    "transfer": "These Transformer mechanics explain what later LLM application layers are actually calling underneath the API.",
    "mistakes": [
      "Explaining attention with intuition but never calculating a concrete example.",
      "Ignoring masking or positional information.",
      "Treating architecture names as interchangeable when their input/output contracts differ."
    ],
    "resources": [
      [
        "The Annotated Transformer",
        "https://nlp.seas.harvard.edu/annotated-transformer/"
      ],
      [
        "Hugging Face Transformers docs",
        "https://huggingface.co/docs/transformers/"
      ]
    ],
    "experience": {
      "type": "Prove",
      "title": "Inference mechanics — applied lab",
      "task": "Instrument a small generation call to record prompt length, output length and stop condition.",
      "evidence": "A generation trace with token counts, stop reason and a brief cost/latency note.",
      "breakIt": "Allow an unbounded generation or omit a stop condition; diagnose the operational risk.",
      "transfer": "These architectural concepts explain how modern LLM inference actually transforms context into tokens."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A generation trace with token counts, stop reason and a brief cost/latency note.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Allow an unbounded generation or omit a stop condition; diagnose the operational risk.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Trace tokenization, forward passes, KV caching and token-by-token generation to understand where inference work and latency come from.",
    "usedLater": "These Transformer mechanics explain what later LLM application layers are actually calling underneath the API.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does inference mechanics require, and what evidence would justify that choice?"
  },
  {
    "id": "07-8",
    "phase": "07",
    "phaseName": "Transformers",
    "title": "Use and fine-tune a pretrained Transformer",
    "summary": "The engineering choice is often between using a pretrained model as-is, adapting it lightly, or training more deeply. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "The engineering choice is often between using a pretrained model as-is, adapting it lightly, or training more deeply.",
    "body": "Use a pretrained Transformer with correct tokenizer/model pairing and understand the minimum fine-tuning loop.",
    "example": "Worked example: Run inference, then adapt a small model on a tiny labeled dataset if resources permit; compare before/after.",
    "takeaways": [
      "Use a pretrained Transformer with correct tokenizer/model pairing and understand the minimum fine-tuning loop.",
      "Practice: Run inference, then adapt a small model on a tiny labeled dataset if resources permit; compare before/after.",
      "Failure to diagnose: Overfit a tiny dataset and explain why training loss alone is not evidence of useful adaptation.",
      "Proof: A before/after evaluation with dataset note, model choice and limitation."
    ],
    "code": "import torch\nQ=torch.tensor([[1.,0.]])\nK=torch.tensor([[1.,0.],[0.,1.]])\nV=torch.tensor([[2.,0.],[0.,3.]])\nscores=Q @ K.T / (K.shape[-1] ** 0.5)\nweights=torch.softmax(scores,dim=-1)\nprint(weights @ V)",
    "practice": "Run inference, then adapt a small model on a tiny labeled dataset if resources permit; compare before/after.",
    "breakIt": "Overfit a tiny dataset and explain why training loss alone is not evidence of useful adaptation.",
    "proof": "A before/after evaluation with dataset note, model choice and limitation.",
    "transfer": "These Transformer mechanics explain what later LLM application layers are actually calling underneath the API.",
    "mistakes": [
      "Explaining attention with intuition but never calculating a concrete example.",
      "Ignoring masking or positional information.",
      "Treating architecture names as interchangeable when their input/output contracts differ."
    ],
    "resources": [
      [
        "The Annotated Transformer",
        "https://nlp.seas.harvard.edu/annotated-transformer/"
      ],
      [
        "Hugging Face Transformers docs",
        "https://huggingface.co/docs/transformers/"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Use and fine-tune a pretrained Transformer — applied lab",
      "task": "Run inference, then adapt a small model on a tiny labeled dataset if resources permit; compare before/after.",
      "evidence": "A before/after evaluation with dataset note, model choice and limitation.",
      "breakIt": "Overfit a tiny dataset and explain why training loss alone is not evidence of useful adaptation.",
      "transfer": "These architectural concepts explain how modern LLM inference actually transforms context into tokens."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A before/after evaluation with dataset note, model choice and limitation.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Overfit a tiny dataset and explain why training loss alone is not evidence of useful adaptation.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Adapt a pretrained Transformer to a small task while preserving the model/tokenizer contract and evaluating against a baseline.",
    "usedLater": "These Transformer mechanics explain what later LLM application layers are actually calling underneath the API.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does use and fine-tune a pretrained transformer require, and what evidence would justify that choice?"
  },
  {
    "id": "08-1",
    "phase": "08",
    "phaseName": "LLM Foundations & Inference",
    "title": "Autoregressive generation",
    "summary": "LLM text generation is repeated conditional prediction: each new token changes the context for the next decision. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "LLM text generation is repeated conditional prediction: each new token changes the context for the next decision.",
    "body": "Trace logits → token choice → appended token → next step and distinguish training from inference.",
    "example": "Worked example: Generate the same prompt step-by-step and record the first few token probabilities/choices if the API exposes them.",
    "takeaways": [
      "Trace logits → token choice → appended token → next step and distinguish training from inference.",
      "Practice: Generate the same prompt step-by-step and record the first few token probabilities/choices if the API exposes them.",
      "Failure to diagnose: Remove the stopping condition or truncate context unexpectedly and diagnose the resulting behavior.",
      "Proof: A generation trace explaining at least three steps and the stop condition."
    ],
    "code": "request = {\"question\":\"What changed?\"}\n# Build instructions + trusted context + user input\n# Call the model\n# Validate the returned structure before using it\nprint(request)",
    "practice": "Generate the same prompt step-by-step and record the first few token probabilities/choices if the API exposes them.",
    "breakIt": "Remove the stopping condition or truncate context unexpectedly and diagnose the resulting behavior.",
    "proof": "A generation trace explaining at least three steps and the stop condition.",
    "transfer": "These inference concepts become practical controls for model selection, application behavior and evaluation.",
    "mistakes": [
      "Assuming decoding settings change model knowledge rather than sampling behavior.",
      "Ignoring context and latency constraints during model selection.",
      "Treating fluent output as evidence that the answer is correct."
    ],
    "resources": [
      [
        "Hugging Face Transformers docs",
        "https://huggingface.co/docs/transformers/"
      ],
      [
        "Hugging Face generation strategies",
        "https://huggingface.co/docs/transformers/main/en/generation_strategies"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Autoregressive generation — applied lab",
      "task": "Generate the same prompt step-by-step and record the first few token probabilities/choices if the API exposes them.",
      "evidence": "A generation trace explaining at least three steps and the stop condition.",
      "breakIt": "Remove the stopping condition or truncate context unexpectedly and diagnose the resulting behavior.",
      "transfer": "These inference concepts become the foundation for dependable LLM application design."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A generation trace explaining at least three steps and the stop condition.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Remove the stopping condition or truncate context unexpectedly and diagnose the resulting behavior.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Trace how an LLM generates one token at a time and identify why earlier tokens constrain later output.",
    "usedLater": "These inference concepts become practical controls for model selection, application behavior and evaluation.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does autoregressive generation require, and what evidence would justify that choice?"
  },
  {
    "id": "08-2",
    "phase": "08",
    "phaseName": "LLM Foundations & Inference",
    "title": "Decoding: temperature, top-k & top-p",
    "summary": "Decoding settings change how the model samples from its probability distribution; they do not change the model’s learned knowledge. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Decoding settings change how the model samples from its probability distribution; they do not change the model’s learned knowledge.",
    "body": "Compare temperature, top-k and top-p as different ways to reshape or restrict candidate selection.",
    "example": "Worked example: Run the same prompt under controlled decoding settings and record diversity/repetition.",
    "takeaways": [
      "Compare temperature, top-k and top-p as different ways to reshape or restrict candidate selection.",
      "Practice: Run the same prompt under controlled decoding settings and record diversity/repetition.",
      "Failure to diagnose: Use extreme settings and identify when outputs become repetitive, unstable or unexpectedly constrained.",
      "Proof: A controlled decoding table with settings, sample outputs and interpretation."
    ],
    "code": "request = {\"question\":\"What changed?\"}\n# Build instructions + trusted context + user input\n# Call the model\n# Validate the returned structure before using it\nprint(request)",
    "practice": "Run the same prompt under controlled decoding settings and record diversity/repetition.",
    "breakIt": "Use extreme settings and identify when outputs become repetitive, unstable or unexpectedly constrained.",
    "proof": "A controlled decoding table with settings, sample outputs and interpretation.",
    "transfer": "These inference concepts become practical controls for model selection, application behavior and evaluation.",
    "mistakes": [
      "Assuming decoding settings change model knowledge rather than sampling behavior.",
      "Ignoring context and latency constraints during model selection.",
      "Treating fluent output as evidence that the answer is correct."
    ],
    "resources": [
      [
        "Hugging Face Transformers docs",
        "https://huggingface.co/docs/transformers/"
      ],
      [
        "Hugging Face generation strategies",
        "https://huggingface.co/docs/transformers/main/en/generation_strategies"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Decoding: temperature, top-k & top-p — applied lab",
      "task": "Run the same prompt under controlled decoding settings and record diversity/repetition.",
      "evidence": "A controlled decoding table with settings, sample outputs and interpretation.",
      "breakIt": "Use extreme settings and identify when outputs become repetitive, unstable or unexpectedly constrained.",
      "transfer": "These inference concepts become the foundation for dependable LLM application design."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A controlled decoding table with settings, sample outputs and interpretation.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Use extreme settings and identify when outputs become repetitive, unstable or unexpectedly constrained.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Change decoding controls and measure how they alter output diversity, repeatability and failure behavior.",
    "usedLater": "These inference concepts become practical controls for model selection, application behavior and evaluation.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does decoding: temperature, top-k & top-p require, and what evidence would justify that choice?"
  },
  {
    "id": "08-3",
    "phase": "08",
    "phaseName": "LLM Foundations & Inference",
    "title": "Instruction tuning & alignment overview",
    "summary": "A pretrained model and an instruction-following assistant are not the same behaviorally; post-training changes how the model responds to tasks and constraints. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A pretrained model and an instruction-following assistant are not the same behaviorally; post-training changes how the model responds to tasks and constraints.",
    "body": "Separate pretraining, supervised instruction tuning and preference/alignment stages at a conceptual level.",
    "example": "Worked example: Compare a base-style model response with an instruction-tuned response for the same task if accessible.",
    "takeaways": [
      "Separate pretraining, supervised instruction tuning and preference/alignment stages at a conceptual level.",
      "Practice: Compare a base-style model response with an instruction-tuned response for the same task if accessible.",
      "Failure to diagnose: Give conflicting instructions and identify which behavior is model training versus application-level control.",
      "Proof: A short lifecycle diagram plus a limitation note about what application prompts cannot guarantee."
    ],
    "code": "request = {\"question\":\"What changed?\"}\n# Build instructions + trusted context + user input\n# Call the model\n# Validate the returned structure before using it\nprint(request)",
    "practice": "Compare a base-style model response with an instruction-tuned response for the same task if accessible.",
    "breakIt": "Give conflicting instructions and identify which behavior is model training versus application-level control.",
    "proof": "A short lifecycle diagram plus a limitation note about what application prompts cannot guarantee.",
    "transfer": "These inference concepts become practical controls for model selection, application behavior and evaluation.",
    "mistakes": [
      "Assuming decoding settings change model knowledge rather than sampling behavior.",
      "Ignoring context and latency constraints during model selection.",
      "Treating fluent output as evidence that the answer is correct."
    ],
    "resources": [
      [
        "Hugging Face Transformers docs",
        "https://huggingface.co/docs/transformers/"
      ],
      [
        "Hugging Face generation strategies",
        "https://huggingface.co/docs/transformers/main/en/generation_strategies"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Instruction tuning & alignment overview — applied lab",
      "task": "Compare a base-style model response with an instruction-tuned response for the same task if accessible.",
      "evidence": "A short lifecycle diagram plus a limitation note about what application prompts cannot guarantee.",
      "breakIt": "Give conflicting instructions and identify which behavior is model training versus application-level control.",
      "transfer": "These inference concepts become the foundation for dependable LLM application design."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A short lifecycle diagram plus a limitation note about what application prompts cannot guarantee.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Give conflicting instructions and identify which behavior is model training versus application-level control.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Distinguish pretraining, instruction tuning and preference/alignment stages and identify what each stage changes.",
    "usedLater": "These inference concepts become practical controls for model selection, application behavior and evaluation.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does instruction tuning & alignment overview require, and what evidence would justify that choice?"
  },
  {
    "id": "08-4",
    "phase": "08",
    "phaseName": "LLM Foundations & Inference",
    "title": "Context windows & context limits",
    "summary": "More context is not automatically better; long context has cost, latency and relevance trade-offs. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "More context is not automatically better; long context has cost, latency and relevance trade-offs.",
    "body": "Understand context as a finite working set containing instructions, history, retrieved data and tool results.",
    "example": "Worked example: Measure prompt size and output budget for a small application and remove irrelevant context while preserving task performance.",
    "takeaways": [
      "Understand context as a finite working set containing instructions, history, retrieved data and tool results.",
      "Practice: Measure prompt size and output budget for a small application and remove irrelevant context while preserving task performance.",
      "Failure to diagnose: Add large irrelevant chunks and observe cost/latency or answer degradation.",
      "Proof: A context budget table with the selected context and rationale."
    ],
    "code": "request = {\"question\":\"What changed?\"}\n# Build instructions + trusted context + user input\n# Call the model\n# Validate the returned structure before using it\nprint(request)",
    "practice": "Measure prompt size and output budget for a small application and remove irrelevant context while preserving task performance.",
    "breakIt": "Add large irrelevant chunks and observe cost/latency or answer degradation.",
    "proof": "A context budget table with the selected context and rationale.",
    "transfer": "These inference concepts become practical controls for model selection, application behavior and evaluation.",
    "mistakes": [
      "Assuming decoding settings change model knowledge rather than sampling behavior.",
      "Ignoring context and latency constraints during model selection.",
      "Treating fluent output as evidence that the answer is correct."
    ],
    "resources": [
      [
        "Hugging Face Transformers docs",
        "https://huggingface.co/docs/transformers/"
      ],
      [
        "Hugging Face generation strategies",
        "https://huggingface.co/docs/transformers/main/en/generation_strategies"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Context windows & context limits — applied lab",
      "task": "Measure prompt size and output budget for a small application and remove irrelevant context while preserving task performance.",
      "evidence": "A context budget table with the selected context and rationale.",
      "breakIt": "Add large irrelevant chunks and observe cost/latency or answer degradation.",
      "transfer": "These inference concepts become the foundation for dependable LLM application design."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A context budget table with the selected context and rationale.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Add large irrelevant chunks and observe cost/latency or answer degradation.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Measure how input length consumes context budget and design a request that preserves the information the model actually needs.",
    "usedLater": "These inference concepts become practical controls for model selection, application behavior and evaluation.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does context windows & context limits require, and what evidence would justify that choice?"
  },
  {
    "id": "08-5",
    "phase": "08",
    "phaseName": "LLM Foundations & Inference",
    "title": "Model selection, latency & cost",
    "summary": "Choosing an LLM is an engineering decision across quality, latency, cost, context, reliability and operational constraints. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Choosing an LLM is an engineering decision across quality, latency, cost, context, reliability and operational constraints.",
    "body": "Define a model decision matrix instead of selecting by benchmark reputation alone.",
    "example": "Worked example: Compare two accessible models or configurations on the same small task set and record latency/cost proxies.",
    "takeaways": [
      "Define a model decision matrix instead of selecting by benchmark reputation alone.",
      "Practice: Compare two accessible models or configurations on the same small task set and record latency/cost proxies.",
      "Failure to diagnose: Optimize for quality alone and identify the resulting operational constraint.",
      "Proof: A decision matrix with measured evidence and explicit trade-offs."
    ],
    "code": "request = {\"question\":\"What changed?\"}\n# Build instructions + trusted context + user input\n# Call the model\n# Validate the returned structure before using it\nprint(request)",
    "practice": "Compare two accessible models or configurations on the same small task set and record latency/cost proxies.",
    "breakIt": "Optimize for quality alone and identify the resulting operational constraint.",
    "proof": "A decision matrix with measured evidence and explicit trade-offs.",
    "transfer": "These inference concepts become practical controls for model selection, application behavior and evaluation.",
    "mistakes": [
      "Assuming decoding settings change model knowledge rather than sampling behavior.",
      "Ignoring context and latency constraints during model selection.",
      "Treating fluent output as evidence that the answer is correct."
    ],
    "resources": [
      [
        "Hugging Face Transformers docs",
        "https://huggingface.co/docs/transformers/"
      ],
      [
        "Hugging Face generation strategies",
        "https://huggingface.co/docs/transformers/main/en/generation_strategies"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "Model selection, latency & cost — applied lab",
      "task": "Compare two accessible models or configurations on the same small task set and record latency/cost proxies.",
      "evidence": "A decision matrix with measured evidence and explicit trade-offs.",
      "breakIt": "Optimize for quality alone and identify the resulting operational constraint.",
      "transfer": "These inference concepts become the foundation for dependable LLM application design."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A decision matrix with measured evidence and explicit trade-offs.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Optimize for quality alone and identify the resulting operational constraint.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Choose a model using task quality, latency, context, reliability and cost constraints rather than benchmark scores alone.",
    "usedLater": "These inference concepts become practical controls for model selection, application behavior and evaluation.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "Which model satisfies the required quality under the latency and cost constraints?"
  },
  {
    "id": "08-6",
    "phase": "08",
    "phaseName": "LLM Foundations & Inference",
    "title": "LLM capabilities & limitations",
    "summary": "LLMs can produce useful language while remaining uncertain, non-deterministic and sensitive to context. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "LLMs can produce useful language while remaining uncertain, non-deterministic and sensitive to context.",
    "body": "Separate capability demonstrations from guarantees; identify knowledge, reasoning, retrieval and instruction-following limits.",
    "example": "Worked example: Create five prompts designed to probe one capability and one limitation.",
    "takeaways": [
      "Separate capability demonstrations from guarantees; identify knowledge, reasoning, retrieval and instruction-following limits.",
      "Practice: Create five prompts designed to probe one capability and one limitation.",
      "Failure to diagnose: Turn a plausible answer into a factual claim without verification and document the failure.",
      "Proof: A capability/limitation matrix with concrete examples and verification strategy."
    ],
    "code": "request = {\"question\":\"What changed?\"}\n# Build instructions + trusted context + user input\n# Call the model\n# Validate the returned structure before using it\nprint(request)",
    "practice": "Create five prompts designed to probe one capability and one limitation.",
    "breakIt": "Turn a plausible answer into a factual claim without verification and document the failure.",
    "proof": "A capability/limitation matrix with concrete examples and verification strategy.",
    "transfer": "These inference concepts become practical controls for model selection, application behavior and evaluation.",
    "mistakes": [
      "Assuming decoding settings change model knowledge rather than sampling behavior.",
      "Ignoring context and latency constraints during model selection.",
      "Treating fluent output as evidence that the answer is correct."
    ],
    "resources": [
      [
        "Hugging Face Transformers docs",
        "https://huggingface.co/docs/transformers/"
      ],
      [
        "Hugging Face generation strategies",
        "https://huggingface.co/docs/transformers/main/en/generation_strategies"
      ]
    ],
    "experience": {
      "type": "Design",
      "title": "LLM capabilities & limitations — applied lab",
      "task": "Create five prompts designed to probe one capability and one limitation.",
      "evidence": "A capability/limitation matrix with concrete examples and verification strategy.",
      "breakIt": "Turn a plausible answer into a factual claim without verification and document the failure.",
      "transfer": "These inference concepts become the foundation for dependable LLM application design."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A capability/limitation matrix with concrete examples and verification strategy.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Turn a plausible answer into a factual claim without verification and document the failure.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Separate demonstrated capability from unsupported assumptions by testing an LLM on known strengths, weak spots and boundary cases.",
    "usedLater": "These inference concepts become practical controls for model selection, application behavior and evaluation.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does llm capabilities & limitations require, and what evidence would justify that choice?"
  },
  {
    "id": "08-7",
    "phase": "08",
    "phaseName": "LLM Foundations & Inference",
    "title": "Generation failure modes",
    "summary": "Hallucination, omission, repetition, refusal and instruction conflict are observable failure classes, not mysterious model personality. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Hallucination, omission, repetition, refusal and instruction conflict are observable failure classes, not mysterious model personality.",
    "body": "Build a failure taxonomy and connect each failure to an engineering mitigation such as retrieval, validation, constrained output or fallback.",
    "example": "Worked example: Collect one example for three failure classes and classify the root cause.",
    "takeaways": [
      "Build a failure taxonomy and connect each failure to an engineering mitigation such as retrieval, validation, constrained output or fallback.",
      "Practice: Collect one example for three failure classes and classify the root cause.",
      "Failure to diagnose: Change only one control at a time and see which failure remains; avoid claiming one mitigation solves all classes.",
      "Proof: A failure matrix with symptom, likely cause, mitigation and residual risk."
    ],
    "code": "request = {\"question\":\"What changed?\"}\n# Build instructions + trusted context + user input\n# Call the model\n# Validate the returned structure before using it\nprint(request)",
    "practice": "Collect one example for three failure classes and classify the root cause.",
    "breakIt": "Change only one control at a time and see which failure remains; avoid claiming one mitigation solves all classes.",
    "proof": "A failure matrix with symptom, likely cause, mitigation and residual risk.",
    "transfer": "These inference concepts become practical controls for model selection, application behavior and evaluation.",
    "mistakes": [
      "Assuming decoding settings change model knowledge rather than sampling behavior.",
      "Ignoring context and latency constraints during model selection.",
      "Treating fluent output as evidence that the answer is correct."
    ],
    "resources": [
      [
        "Hugging Face Transformers docs",
        "https://huggingface.co/docs/transformers/"
      ],
      [
        "Hugging Face generation strategies",
        "https://huggingface.co/docs/transformers/main/en/generation_strategies"
      ]
    ],
    "experience": {
      "type": "Prove",
      "title": "Generation failure modes — applied lab",
      "task": "Collect one example for three failure classes and classify the root cause.",
      "evidence": "A failure matrix with symptom, likely cause, mitigation and residual risk.",
      "breakIt": "Change only one control at a time and see which failure remains; avoid claiming one mitigation solves all classes.",
      "transfer": "These inference concepts become the foundation for dependable LLM application design."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A failure matrix with symptom, likely cause, mitigation and residual risk.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Change only one control at a time and see which failure remains; avoid claiming one mitigation solves all classes.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Classify common generation failures and build tests that make the failure reproducible rather than anecdotal.",
    "usedLater": "These inference concepts become practical controls for model selection, application behavior and evaluation.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does generation failure modes require, and what evidence would justify that choice?"
  },
  {
    "id": "08-8",
    "phase": "08",
    "phaseName": "LLM Foundations & Inference",
    "title": "Build a small LLM application",
    "summary": "An LLM app is a system around the model: inputs, instructions, context, output handling, evaluation and failure paths all matter. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "An LLM app is a system around the model: inputs, instructions, context, output handling, evaluation and failure paths all matter.",
    "body": "Assemble a minimal application with structured input, model call, output validation and a fallback.",
    "example": "Worked example: Build a small question-answer or summarization tool using an accessible model endpoint or local model.",
    "takeaways": [
      "Assemble a minimal application with structured input, model call, output validation and a fallback.",
      "Practice: Build a small question-answer or summarization tool using an accessible model endpoint or local model.",
      "Failure to diagnose: Return malformed output or simulate a model/API failure and prove the application does not silently accept it.",
      "Proof: A runnable app with validation, one failure test and a short evaluation report."
    ],
    "code": "request = {\"question\":\"What changed?\"}\n# Build instructions + trusted context + user input\n# Call the model\n# Validate the returned structure before using it\nprint(request)",
    "practice": "Build a small question-answer or summarization tool using an accessible model endpoint or local model.",
    "breakIt": "Return malformed output or simulate a model/API failure and prove the application does not silently accept it.",
    "proof": "A runnable app with validation, one failure test and a short evaluation report.",
    "transfer": "These inference concepts become practical controls for model selection, application behavior and evaluation.",
    "mistakes": [
      "Assuming decoding settings change model knowledge rather than sampling behavior.",
      "Ignoring context and latency constraints during model selection.",
      "Treating fluent output as evidence that the answer is correct."
    ],
    "resources": [
      [
        "Hugging Face Transformers docs",
        "https://huggingface.co/docs/transformers/"
      ],
      [
        "Hugging Face generation strategies",
        "https://huggingface.co/docs/transformers/main/en/generation_strategies"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Build a small LLM application — applied lab",
      "task": "Build a small question-answer or summarization tool using an accessible model endpoint or local model.",
      "evidence": "A runnable app with validation, one failure test and a short evaluation report.",
      "breakIt": "Return malformed output or simulate a model/API failure and prove the application does not silently accept it.",
      "transfer": "These inference concepts become the foundation for dependable LLM application design."
    },
    "competency": {
      "difficulty": "Intermediate+",
      "time": "30–45 min",
      "artifact": "A runnable app with validation, one failure test and a short evaluation report.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Return malformed output or simulate a model/API failure and prove the application does not silently accept it.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Build a small LLM-backed application with explicit input/output contracts, failure handling and a repeatable evaluation set.",
    "usedLater": "These inference concepts become practical controls for model selection, application behavior and evaluation.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does build a small llm application require, and what evidence would justify that choice?"
  },
  {
    "id": "09-1",
    "phase": "09",
    "phaseName": "LLM Internals & Training",
    "title": "Tokenization, data & pretraining objectives",
    "summary": "A language model learns from a representation and an objective; understanding both clarifies what “training on text” actually means. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A language model learns from a representation and an objective; understanding both clarifies what “training on text” actually means.",
    "body": "Trace text → tokens → sequences → next-token targets and discuss data quality, duplication and sampling at a high level.",
    "example": "Worked example: Tokenize a tiny corpus, construct next-token training pairs and inspect the resulting examples.",
    "takeaways": [
      "Trace text → tokens → sequences → next-token targets and discuss data quality, duplication and sampling at a high level.",
      "Practice: Tokenize a tiny corpus, construct next-token training pairs and inspect the resulting examples.",
      "Failure to diagnose: Change the tokenizer or shift the target by one position and show how the learning problem changes.",
      "Proof: A small dataset dump with token/target alignment explained."
    ],
    "code": "tokens=[2,5,9,4]\ninputs=tokens[:-1]\ntargets=tokens[1:]\nprint(\"inputs:\",inputs,\"targets:\",targets)",
    "practice": "Tokenize a tiny corpus, construct next-token training pairs and inspect the resulting examples.",
    "breakIt": "Change the tokenizer or shift the target by one position and show how the learning problem changes.",
    "proof": "A small dataset dump with token/target alignment explained.",
    "transfer": "This optional depth helps you reason about model training cost, checkpoints and architecture when you need to go below the API.",
    "mistakes": [
      "Scaling a training run before validating the tiny version.",
      "Ignoring checkpoint and memory behavior.",
      "Confusing a working toy implementation with a production training system."
    ],
    "resources": [
      [
        "Hugging Face LLM Course",
        "https://huggingface.co/learn/llm-course/chapter1/1"
      ],
      [
        "PyTorch tutorials",
        "https://docs.pytorch.org/tutorials/"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Tokenization, data & pretraining objectives — applied lab",
      "task": "Tokenize a tiny corpus, construct next-token training pairs and inspect the resulting examples.",
      "evidence": "A small dataset dump with token/target alignment explained.",
      "breakIt": "Change the tokenizer or shift the target by one position and show how the learning problem changes.",
      "transfer": "This optional track gives you mechanistic intuition for the training systems behind foundation models."
    },
    "competency": {
      "difficulty": "Optional",
      "time": "30–45 min",
      "artifact": "A small dataset dump with token/target alignment explained.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Change the tokenizer or shift the target by one position and show how the learning problem changes.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Trace how text becomes training tokens and connect the data/objective choice to the behavior the model can learn.",
    "usedLater": "This optional depth helps you reason about model training cost, checkpoints and architecture when you need to go below the API.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does tokenization, data & pretraining objectives require, and what evidence would justify that choice?"
  },
  {
    "id": "09-2",
    "phase": "09",
    "phaseName": "LLM Internals & Training",
    "title": "Tiny Transformer implementation",
    "summary": "A small implementation makes architecture concrete because every tensor and operation is visible. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A small implementation makes architecture concrete because every tensor and operation is visible.",
    "body": "Implement only the essential pieces: embeddings, attention, feed-forward, residual/normalization and output projection.",
    "example": "Worked example: Build a tiny forward pass on a toy sequence and print tensor shapes at each stage.",
    "takeaways": [
      "Implement only the essential pieces: embeddings, attention, feed-forward, residual/normalization and output projection.",
      "Practice: Build a tiny forward pass on a toy sequence and print tensor shapes at each stage.",
      "Failure to diagnose: Introduce a shape mismatch or omit a causal mask and diagnose the exact contract violated.",
      "Proof: A readable tiny model with an annotated shape trace."
    ],
    "code": "tokens=[2,5,9,4]\ninputs=tokens[:-1]\ntargets=tokens[1:]\nprint(\"inputs:\",inputs,\"targets:\",targets)",
    "practice": "Build a tiny forward pass on a toy sequence and print tensor shapes at each stage.",
    "breakIt": "Introduce a shape mismatch or omit a causal mask and diagnose the exact contract violated.",
    "proof": "A readable tiny model with an annotated shape trace.",
    "transfer": "This optional depth helps you reason about model training cost, checkpoints and architecture when you need to go below the API.",
    "mistakes": [
      "Scaling a training run before validating the tiny version.",
      "Ignoring checkpoint and memory behavior.",
      "Confusing a working toy implementation with a production training system."
    ],
    "resources": [
      [
        "Hugging Face LLM Course",
        "https://huggingface.co/learn/llm-course/chapter1/1"
      ],
      [
        "PyTorch tutorials",
        "https://docs.pytorch.org/tutorials/"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Tiny Transformer implementation — applied lab",
      "task": "Build a tiny forward pass on a toy sequence and print tensor shapes at each stage.",
      "evidence": "A readable tiny model with an annotated shape trace.",
      "breakIt": "Introduce a shape mismatch or omit a causal mask and diagnose the exact contract violated.",
      "transfer": "This optional track gives you mechanistic intuition for the training systems behind foundation models."
    },
    "competency": {
      "difficulty": "Optional",
      "time": "30–45 min",
      "artifact": "A readable tiny model with an annotated shape trace.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Introduce a shape mismatch or omit a causal mask and diagnose the exact contract violated.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Implement a minimal Transformer component so attention, residual paths and logits are inspectable rather than hidden behind a library.",
    "usedLater": "This optional depth helps you reason about model training cost, checkpoints and architecture when you need to go below the API.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does tiny transformer implementation require, and what evidence would justify that choice?"
  },
  {
    "id": "09-3",
    "phase": "09",
    "phaseName": "LLM Internals & Training",
    "title": "Training loop & checkpoints",
    "summary": "Training is an experiment over time; checkpoints preserve evidence and recovery points. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Training is an experiment over time; checkpoints preserve evidence and recovery points.",
    "body": "Connect batches, loss, backward pass, optimizer step, evaluation and checkpoint state.",
    "example": "Worked example: Train a tiny model for a few steps and save checkpoints containing model/optimizer state.",
    "takeaways": [
      "Connect batches, loss, backward pass, optimizer step, evaluation and checkpoint state.",
      "Practice: Train a tiny model for a few steps and save checkpoints containing model/optimizer state.",
      "Failure to diagnose: Resume from the wrong checkpoint or omit optimizer state and explain the reproducibility difference.",
      "Proof: A checkpoint/resume demonstration with loss before and after resume."
    ],
    "code": "tokens=[2,5,9,4]\ninputs=tokens[:-1]\ntargets=tokens[1:]\nprint(\"inputs:\",inputs,\"targets:\",targets)",
    "practice": "Train a tiny model for a few steps and save checkpoints containing model/optimizer state.",
    "breakIt": "Resume from the wrong checkpoint or omit optimizer state and explain the reproducibility difference.",
    "proof": "A checkpoint/resume demonstration with loss before and after resume.",
    "transfer": "This optional depth helps you reason about model training cost, checkpoints and architecture when you need to go below the API.",
    "mistakes": [
      "Scaling a training run before validating the tiny version.",
      "Ignoring checkpoint and memory behavior.",
      "Confusing a working toy implementation with a production training system."
    ],
    "resources": [
      [
        "Hugging Face LLM Course",
        "https://huggingface.co/learn/llm-course/chapter1/1"
      ],
      [
        "PyTorch tutorials",
        "https://docs.pytorch.org/tutorials/"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Training loop & checkpoints — applied lab",
      "task": "Train a tiny model for a few steps and save checkpoints containing model/optimizer state.",
      "evidence": "A checkpoint/resume demonstration with loss before and after resume.",
      "breakIt": "Resume from the wrong checkpoint or omit optimizer state and explain the reproducibility difference.",
      "transfer": "This optional track gives you mechanistic intuition for the training systems behind foundation models."
    },
    "competency": {
      "difficulty": "Optional",
      "time": "30–45 min",
      "artifact": "A checkpoint/resume demonstration with loss before and after resume.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Resume from the wrong checkpoint or omit optimizer state and explain the reproducibility difference.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Train a tiny language model with checkpoints and enough logging to resume or diagnose a run.",
    "usedLater": "This optional depth helps you reason about model training cost, checkpoints and architecture when you need to go below the API.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does training loop & checkpoints require, and what evidence would justify that choice?"
  },
  {
    "id": "09-4",
    "phase": "09",
    "phaseName": "LLM Internals & Training",
    "title": "Memory, compute & scaling trade-offs",
    "summary": "Model size, sequence length, batch size and precision change resource use; scaling is not free. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Model size, sequence length, batch size and precision change resource use; scaling is not free.",
    "body": "Reason about parameter memory, activation memory, sequence-length effects and why training/inference have different bottlenecks.",
    "example": "Worked example: Estimate memory for a toy model and compare two batch/sequence configurations.",
    "takeaways": [
      "Reason about parameter memory, activation memory, sequence-length effects and why training/inference have different bottlenecks.",
      "Practice: Estimate memory for a toy model and compare two batch/sequence configurations.",
      "Failure to diagnose: Double sequence length or batch size and explain which resource grows and why.",
      "Proof: A resource budget table with assumptions and a scaling explanation."
    ],
    "code": "tokens=[2,5,9,4]\ninputs=tokens[:-1]\ntargets=tokens[1:]\nprint(\"inputs:\",inputs,\"targets:\",targets)",
    "practice": "Estimate memory for a toy model and compare two batch/sequence configurations.",
    "breakIt": "Double sequence length or batch size and explain which resource grows and why.",
    "proof": "A resource budget table with assumptions and a scaling explanation.",
    "transfer": "This optional depth helps you reason about model training cost, checkpoints and architecture when you need to go below the API.",
    "mistakes": [
      "Scaling a training run before validating the tiny version.",
      "Ignoring checkpoint and memory behavior.",
      "Confusing a working toy implementation with a production training system."
    ],
    "resources": [
      [
        "Hugging Face LLM Course",
        "https://huggingface.co/learn/llm-course/chapter1/1"
      ],
      [
        "PyTorch tutorials",
        "https://docs.pytorch.org/tutorials/"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Memory, compute & scaling trade-offs — applied lab",
      "task": "Estimate memory for a toy model and compare two batch/sequence configurations.",
      "evidence": "A resource budget table with assumptions and a scaling explanation.",
      "breakIt": "Double sequence length or batch size and explain which resource grows and why.",
      "transfer": "This optional track gives you mechanistic intuition for the training systems behind foundation models."
    },
    "competency": {
      "difficulty": "Optional",
      "time": "30–45 min",
      "artifact": "A resource budget table with assumptions and a scaling explanation.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Double sequence length or batch size and explain which resource grows and why.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Estimate how parameter count, sequence length, batch size and precision affect memory and compute before launching training.",
    "usedLater": "This optional depth helps you reason about model training cost, checkpoints and architecture when you need to go below the API.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does memory, compute & scaling trade-offs require, and what evidence would justify that choice?"
  },
  {
    "id": "09-5",
    "phase": "09",
    "phaseName": "LLM Internals & Training",
    "title": "Build a tiny language model",
    "summary": "The goal of this optional track is mechanistic understanding, not competing with large-scale training. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "The goal of this optional track is mechanistic understanding, not competing with large-scale training.",
    "body": "Combine tokenization, embeddings, attention, loss, optimizer and checkpointing into a tiny next-token predictor.",
    "example": "Worked example: Train on a tiny corpus and inspect generated sequences plus loss progression.",
    "takeaways": [
      "Combine tokenization, embeddings, attention, loss, optimizer and checkpointing into a tiny next-token predictor.",
      "Practice: Train on a tiny corpus and inspect generated sequences plus loss progression.",
      "Failure to diagnose: Overfit the corpus and show why memorization is not evidence of general language capability.",
      "Proof: A tiny model repository with training log, sample generations and an explicit scope statement."
    ],
    "code": "tokens=[2,5,9,4]\ninputs=tokens[:-1]\ntargets=tokens[1:]\nprint(\"inputs:\",inputs,\"targets:\",targets)",
    "practice": "Train on a tiny corpus and inspect generated sequences plus loss progression.",
    "breakIt": "Overfit the corpus and show why memorization is not evidence of general language capability.",
    "proof": "A tiny model repository with training log, sample generations and an explicit scope statement.",
    "transfer": "This optional depth helps you reason about model training cost, checkpoints and architecture when you need to go below the API.",
    "mistakes": [
      "Scaling a training run before validating the tiny version.",
      "Ignoring checkpoint and memory behavior.",
      "Confusing a working toy implementation with a production training system."
    ],
    "resources": [
      [
        "Hugging Face LLM Course",
        "https://huggingface.co/learn/llm-course/chapter1/1"
      ],
      [
        "PyTorch tutorials",
        "https://docs.pytorch.org/tutorials/"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "Build a tiny language model — applied lab",
      "task": "Train on a tiny corpus and inspect generated sequences plus loss progression.",
      "evidence": "A tiny model repository with training log, sample generations and an explicit scope statement.",
      "breakIt": "Overfit the corpus and show why memorization is not evidence of general language capability.",
      "transfer": "This optional track gives you mechanistic intuition for the training systems behind foundation models."
    },
    "competency": {
      "difficulty": "Optional",
      "time": "30–45 min",
      "artifact": "A tiny model repository with training log, sample generations and an explicit scope statement.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Overfit the corpus and show why memorization is not evidence of general language capability.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Train a tiny language model end-to-end and inspect samples, loss curves and checkpoint behavior.",
    "usedLater": "This optional depth helps you reason about model training cost, checkpoints and architecture when you need to go below the API.",
    "guidedSteps": [
      "Define the input, target and evaluation signal before running the model.",
      "Run a small baseline or toy example that makes the mechanism visible.",
      "Change one meaningful variable and compare the measured behavior.",
      "Inspect a failure case and explain the mechanism behind it."
    ],
    "decision": "What engineering choice does build a tiny language model require, and what evidence would justify that choice?"
  },
  {
    "id": "10-1",
    "phase": "10",
    "phaseName": "LLM Application Engineering",
    "title": "Prompt & instruction architecture",
    "summary": "A reliable instruction is an interface: it defines role, task, constraints, inputs and expected output rather than hoping wording alone solves ambiguity. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A reliable instruction is an interface: it defines role, task, constraints, inputs and expected output rather than hoping wording alone solves ambiguity.",
    "body": "Separate system-level behavior, task instructions, examples, user data and output requirements.",
    "example": "Worked example: Turn an ambiguous request into a structured instruction and compare failure cases before/after.",
    "takeaways": [
      "Separate system-level behavior, task instructions, examples, user data and output requirements.",
      "Practice: Turn an ambiguous request into a structured instruction and compare failure cases before/after.",
      "Failure to diagnose: Add conflicting instructions from an untrusted input and identify which boundary should reject or isolate them.",
      "Proof: A versioned instruction template with three test cases and observed outcomes."
    ],
    "code": "request = {\"question\":\"What changed?\"}\n# Build instructions + trusted context + user input\n# Call the model\n# Validate the returned structure before using it\nprint(request)",
    "practice": "Turn an ambiguous request into a structured instruction and compare failure cases before/after.",
    "breakIt": "Add conflicting instructions from an untrusted input and identify which boundary should reject or isolate them.",
    "proof": "A versioned instruction template with three test cases and observed outcomes.",
    "transfer": "These application controls are reused in RAG, tool calling, agents and production services.",
    "mistakes": [
      "Trusting model output without schema or semantic validation.",
      "Putting all context into the prompt instead of selecting what matters.",
      "Adding retries or caching without considering duplication, freshness or cost."
    ],
    "resources": [
      [
        "OpenAI API documentation",
        "https://platform.openai.com/docs/"
      ],
      [
        "Anthropic context engineering",
        "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Prompt & instruction architecture — applied lab",
      "task": "Turn an ambiguous request into a structured instruction and compare failure cases before/after.",
      "evidence": "A versioned instruction template with three test cases and observed outcomes.",
      "breakIt": "Add conflicting instructions from an untrusted input and identify which boundary should reject or isolate them.",
      "transfer": "These application-engineering controls are reused in RAG, tools, agents and production services."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A versioned instruction template with three test cases and observed outcomes.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Add conflicting instructions from an untrusted input and identify which boundary should reject or isolate them.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Write instructions with explicit task, constraints, output contract and failure behavior instead of relying on vague prompt wording.",
    "usedLater": "These application controls are reused in RAG, tool calling, agents and production services.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does prompt & instruction architecture require, and what evidence would justify that choice?"
  },
  {
    "id": "10-2",
    "phase": "10",
    "phaseName": "LLM Application Engineering",
    "title": "Context engineering",
    "summary": "Useful model context is curated, not merely accumulated; irrelevant history can consume budget and confuse the task. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Useful model context is curated, not merely accumulated; irrelevant history can consume budget and confuse the task.",
    "body": "Treat context as a finite working set composed of instructions, state, tools, retrieved evidence and relevant history.",
    "example": "Worked example: Build a context-selection policy for a small assistant and compare full-history versus curated context.",
    "takeaways": [
      "Treat context as a finite working set composed of instructions, state, tools, retrieved evidence and relevant history.",
      "Practice: Build a context-selection policy for a small assistant and compare full-history versus curated context.",
      "Failure to diagnose: Inject stale or conflicting context and diagnose the answer change.",
      "Proof: A context policy plus before/after examples and a budget estimate."
    ],
    "code": "request = {\"question\":\"What changed?\"}\n# Build instructions + trusted context + user input\n# Call the model\n# Validate the returned structure before using it\nprint(request)",
    "practice": "Build a context-selection policy for a small assistant and compare full-history versus curated context.",
    "breakIt": "Inject stale or conflicting context and diagnose the answer change.",
    "proof": "A context policy plus before/after examples and a budget estimate.",
    "transfer": "These application controls are reused in RAG, tool calling, agents and production services.",
    "mistakes": [
      "Trusting model output without schema or semantic validation.",
      "Putting all context into the prompt instead of selecting what matters.",
      "Adding retries or caching without considering duplication, freshness or cost."
    ],
    "resources": [
      [
        "OpenAI API documentation",
        "https://platform.openai.com/docs/"
      ],
      [
        "Anthropic context engineering",
        "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Context engineering — applied lab",
      "task": "Build a context-selection policy for a small assistant and compare full-history versus curated context.",
      "evidence": "A context policy plus before/after examples and a budget estimate.",
      "breakIt": "Inject stale or conflicting context and diagnose the answer change.",
      "transfer": "These application-engineering controls are reused in RAG, tools, agents and production services."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A context policy plus before/after examples and a budget estimate.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Inject stale or conflicting context and diagnose the answer change.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Select, order and compress instructions, retrieved data, tool results and history so the model receives the information needed for the task.",
    "usedLater": "These application controls are reused in RAG, tool calling, agents and production services.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "Which context should be included, removed, ordered or summarized for this task?"
  },
  {
    "id": "10-3",
    "phase": "10",
    "phaseName": "LLM Application Engineering",
    "title": "Structured outputs & validation",
    "summary": "Generated text is unsafe to treat as a data contract until it is parsed and validated. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Generated text is unsafe to treat as a data contract until it is parsed and validated.",
    "body": "Use schemas, parsing, semantic validation and rejection/repair paths; distinguish syntax validity from business validity.",
    "example": "Worked example: Ask for a structured result and validate required fields/ranges before accepting it.",
    "takeaways": [
      "Use schemas, parsing, semantic validation and rejection/repair paths; distinguish syntax validity from business validity.",
      "Practice: Ask for a structured result and validate required fields/ranges before accepting it.",
      "Failure to diagnose: Return valid JSON with an invalid business value and prove schema validation alone is insufficient.",
      "Proof: A schema, validation code and test cases for malformed and semantically invalid outputs."
    ],
    "code": "request = {\"question\":\"What changed?\"}\n# Build instructions + trusted context + user input\n# Call the model\n# Validate the returned structure before using it\nprint(request)",
    "practice": "Ask for a structured result and validate required fields/ranges before accepting it.",
    "breakIt": "Return valid JSON with an invalid business value and prove schema validation alone is insufficient.",
    "proof": "A schema, validation code and test cases for malformed and semantically invalid outputs.",
    "transfer": "These application controls are reused in RAG, tool calling, agents and production services.",
    "mistakes": [
      "Trusting model output without schema or semantic validation.",
      "Putting all context into the prompt instead of selecting what matters.",
      "Adding retries or caching without considering duplication, freshness or cost."
    ],
    "resources": [
      [
        "OpenAI API documentation",
        "https://platform.openai.com/docs/"
      ],
      [
        "Anthropic context engineering",
        "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Structured outputs & validation — applied lab",
      "task": "Ask for a structured result and validate required fields/ranges before accepting it.",
      "evidence": "A schema, validation code and test cases for malformed and semantically invalid outputs.",
      "breakIt": "Return valid JSON with an invalid business value and prove schema validation alone is insufficient.",
      "transfer": "These application-engineering controls are reused in RAG, tools, agents and production services."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A schema, validation code and test cases for malformed and semantically invalid outputs.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Return valid JSON with an invalid business value and prove schema validation alone is insufficient.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Make model outputs conform to a schema and reject or repair invalid responses before downstream code trusts them.",
    "usedLater": "These application controls are reused in RAG, tool calling, agents and production services.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What must be rejected before downstream code is allowed to trust the model output?"
  },
  {
    "id": "10-4",
    "phase": "10",
    "phaseName": "LLM Application Engineering",
    "title": "Model/tool API integration",
    "summary": "External model and tool APIs fail through timeouts, rate limits, schema drift and partial responses. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "External model and tool APIs fail through timeouts, rate limits, schema drift and partial responses.",
    "body": "Design a small client boundary with timeouts, retries where safe, request IDs and explicit response validation.",
    "example": "Worked example: Wrap one model/tool call behind a client function and log safe metadata.",
    "takeaways": [
      "Design a small client boundary with timeouts, retries where safe, request IDs and explicit response validation.",
      "Practice: Wrap one model/tool call behind a client function and log safe metadata.",
      "Failure to diagnose: Simulate timeout, 429 and malformed response; verify each failure path has a distinct handling strategy.",
      "Proof: A client module plus a failure matrix and tests."
    ],
    "code": "request = {\"question\":\"What changed?\"}\n# Build instructions + trusted context + user input\n# Call the model\n# Validate the returned structure before using it\nprint(request)",
    "practice": "Wrap one model/tool call behind a client function and log safe metadata.",
    "breakIt": "Simulate timeout, 429 and malformed response; verify each failure path has a distinct handling strategy.",
    "proof": "A client module plus a failure matrix and tests.",
    "transfer": "These application controls are reused in RAG, tool calling, agents and production services.",
    "mistakes": [
      "Trusting model output without schema or semantic validation.",
      "Putting all context into the prompt instead of selecting what matters.",
      "Adding retries or caching without considering duplication, freshness or cost."
    ],
    "resources": [
      [
        "OpenAI API documentation",
        "https://platform.openai.com/docs/"
      ],
      [
        "Anthropic context engineering",
        "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Model/tool API integration — applied lab",
      "task": "Wrap one model/tool call behind a client function and log safe metadata.",
      "evidence": "A client module plus a failure matrix and tests.",
      "breakIt": "Simulate timeout, 429 and malformed response; verify each failure path has a distinct handling strategy.",
      "transfer": "These application-engineering controls are reused in RAG, tools, agents and production services."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A client module plus a failure matrix and tests.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Simulate timeout, 429 and malformed response; verify each failure path has a distinct handling strategy.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Integrate a model or tool API with explicit request schemas, timeouts, retries, authentication and response validation.",
    "usedLater": "These application controls are reused in RAG, tool calling, agents and production services.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does model/tool api integration require, and what evidence would justify that choice?"
  },
  {
    "id": "10-5",
    "phase": "10",
    "phaseName": "LLM Application Engineering",
    "title": "Caching & cost-aware design",
    "summary": "Repeated model calls can add latency and cost without adding value; caching only works when freshness and scope are correct. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Repeated model calls can add latency and cost without adding value; caching only works when freshness and scope are correct.",
    "body": "Compare exact, semantic, embedding and retrieval caching conceptually; focus on cache keys, TTL and invalidation.",
    "example": "Worked example: Measure repeated calls and add a safe exact cache to a deterministic demo.",
    "takeaways": [
      "Compare exact, semantic, embedding and retrieval caching conceptually; focus on cache keys, TTL and invalidation.",
      "Practice: Measure repeated calls and add a safe exact cache to a deterministic demo.",
      "Failure to diagnose: Reuse a cached answer after the underlying data changed and diagnose the stale-data risk.",
      "Proof: A cache policy with key, scope, TTL/invalidation rule and measured effect."
    ],
    "code": "request = {\"question\":\"What changed?\"}\n# Build instructions + trusted context + user input\n# Call the model\n# Validate the returned structure before using it\nprint(request)",
    "practice": "Measure repeated calls and add a safe exact cache to a deterministic demo.",
    "breakIt": "Reuse a cached answer after the underlying data changed and diagnose the stale-data risk.",
    "proof": "A cache policy with key, scope, TTL/invalidation rule and measured effect.",
    "transfer": "These application controls are reused in RAG, tool calling, agents and production services.",
    "mistakes": [
      "Trusting model output without schema or semantic validation.",
      "Putting all context into the prompt instead of selecting what matters.",
      "Adding retries or caching without considering duplication, freshness or cost."
    ],
    "resources": [
      [
        "OpenAI API documentation",
        "https://platform.openai.com/docs/"
      ],
      [
        "Anthropic context engineering",
        "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "Caching & cost-aware design — applied lab",
      "task": "Measure repeated calls and add a safe exact cache to a deterministic demo.",
      "evidence": "A cache policy with key, scope, TTL/invalidation rule and measured effect.",
      "breakIt": "Reuse a cached answer after the underlying data changed and diagnose the stale-data risk.",
      "transfer": "These application-engineering controls are reused in RAG, tools, agents and production services."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "30–45 min",
      "artifact": "A cache policy with key, scope, TTL/invalidation rule and measured effect.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Reuse a cached answer after the underlying data changed and diagnose the stale-data risk.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Identify repeatable work that can be cached safely and calculate how caching changes latency, cost and freshness risk.",
    "usedLater": "These application controls are reused in RAG, tool calling, agents and production services.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does caching & cost-aware design require, and what evidence would justify that choice?"
  },
  {
    "id": "10-6",
    "phase": "10",
    "phaseName": "LLM Application Engineering",
    "title": "LLM application testing",
    "summary": "AI outputs vary, so a handful of manual examples cannot protect a changing application. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "AI outputs vary, so a handful of manual examples cannot protect a changing application.",
    "body": "Combine deterministic checks, representative cases, adversarial cases and model-based checks where appropriate.",
    "example": "Worked example: Create a small regression suite for an LLM feature and run it before/after a prompt change.",
    "takeaways": [
      "Combine deterministic checks, representative cases, adversarial cases and model-based checks where appropriate.",
      "Practice: Create a small regression suite for an LLM feature and run it before/after a prompt change.",
      "Failure to diagnose: Change the prompt to improve one case while breaking another and use the suite to catch the regression.",
      "Proof: A versioned test set with pass/fail results and one captured regression."
    ],
    "code": "request = {\"question\":\"What changed?\"}\n# Build instructions + trusted context + user input\n# Call the model\n# Validate the returned structure before using it\nprint(request)",
    "practice": "Create a small regression suite for an LLM feature and run it before/after a prompt change.",
    "breakIt": "Change the prompt to improve one case while breaking another and use the suite to catch the regression.",
    "proof": "A versioned test set with pass/fail results and one captured regression.",
    "transfer": "These application controls are reused in RAG, tool calling, agents and production services.",
    "mistakes": [
      "Trusting model output without schema or semantic validation.",
      "Putting all context into the prompt instead of selecting what matters.",
      "Adding retries or caching without considering duplication, freshness or cost."
    ],
    "resources": [
      [
        "OpenAI API documentation",
        "https://platform.openai.com/docs/"
      ],
      [
        "Anthropic context engineering",
        "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
      ]
    ],
    "experience": {
      "type": "Design",
      "title": "LLM application testing — applied lab",
      "task": "Create a small regression suite for an LLM feature and run it before/after a prompt change.",
      "evidence": "A versioned test set with pass/fail results and one captured regression.",
      "breakIt": "Change the prompt to improve one case while breaking another and use the suite to catch the regression.",
      "transfer": "These application-engineering controls are reused in RAG, tools, agents and production services."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "30–45 min",
      "artifact": "A versioned test set with pass/fail results and one captured regression.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Change the prompt to improve one case while breaking another and use the suite to catch the regression.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Build tests around deterministic contracts and representative model behavior so application changes can be compared consistently.",
    "usedLater": "These application controls are reused in RAG, tool calling, agents and production services.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does llm application testing require, and what evidence would justify that choice?"
  },
  {
    "id": "10-7",
    "phase": "10",
    "phaseName": "LLM Application Engineering",
    "title": "Failure handling & fallbacks",
    "summary": "A model/API failure should become a controlled system state, not an unexplained user error or silent wrong answer. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A model/API failure should become a controlled system state, not an unexplained user error or silent wrong answer.",
    "body": "Separate retryable, non-retryable and validation failures; design fallbacks that preserve correctness rather than merely returning something.",
    "example": "Worked example: Implement one fallback such as cached answer, deterministic response or human escalation.",
    "takeaways": [
      "Separate retryable, non-retryable and validation failures; design fallbacks that preserve correctness rather than merely returning something.",
      "Practice: Implement one fallback such as cached answer, deterministic response or human escalation.",
      "Failure to diagnose: Retry a non-retryable validation failure and show the resulting waste/loop; correct the classification.",
      "Proof: A failure-state table and tests proving each failure reaches the intended path."
    ],
    "code": "request = {\"question\":\"What changed?\"}\n# Build instructions + trusted context + user input\n# Call the model\n# Validate the returned structure before using it\nprint(request)",
    "practice": "Implement one fallback such as cached answer, deterministic response or human escalation.",
    "breakIt": "Retry a non-retryable validation failure and show the resulting waste/loop; correct the classification.",
    "proof": "A failure-state table and tests proving each failure reaches the intended path.",
    "transfer": "These application controls are reused in RAG, tool calling, agents and production services.",
    "mistakes": [
      "Trusting model output without schema or semantic validation.",
      "Putting all context into the prompt instead of selecting what matters.",
      "Adding retries or caching without considering duplication, freshness or cost."
    ],
    "resources": [
      [
        "OpenAI API documentation",
        "https://platform.openai.com/docs/"
      ],
      [
        "Anthropic context engineering",
        "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
      ]
    ],
    "experience": {
      "type": "Prove",
      "title": "Failure handling & fallbacks — applied lab",
      "task": "Implement one fallback such as cached answer, deterministic response or human escalation.",
      "evidence": "A failure-state table and tests proving each failure reaches the intended path.",
      "breakIt": "Retry a non-retryable validation failure and show the resulting waste/loop; correct the classification.",
      "transfer": "These application-engineering controls are reused in RAG, tools, agents and production services."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "30–45 min",
      "artifact": "A failure-state table and tests proving each failure reaches the intended path.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Retry a non-retryable validation failure and show the resulting waste/loop; correct the classification.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Design bounded fallbacks for timeouts, invalid outputs, unavailable models and downstream failures without silently changing the task.",
    "usedLater": "These application controls are reused in RAG, tool calling, agents and production services.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does failure handling & fallbacks require, and what evidence would justify that choice?"
  },
  {
    "id": "10-8",
    "phase": "10",
    "phaseName": "LLM Application Engineering",
    "title": "Build an LLM application",
    "summary": "A production-minded LLM feature needs contracts, context, validation, tests and failure behavior around the model. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A production-minded LLM feature needs contracts, context, validation, tests and failure behavior around the model.",
    "body": "Integrate the previous skills into a small application with an explicit quality boundary.",
    "example": "Worked example: Build a small assistant/search/summarization app with structured input/output and a regression set.",
    "takeaways": [
      "Integrate the previous skills into a small application with an explicit quality boundary.",
      "Practice: Build a small assistant/search/summarization app with structured input/output and a regression set.",
      "Failure to diagnose: Simulate a model timeout, malformed output and wrong-context case; verify all three are observable and controlled.",
      "Proof: A runnable repository, evaluation results, failure matrix and README."
    ],
    "code": "request = {\"question\":\"What changed?\"}\n# Build instructions + trusted context + user input\n# Call the model\n# Validate the returned structure before using it\nprint(request)",
    "practice": "Build a small assistant/search/summarization app with structured input/output and a regression set.",
    "breakIt": "Simulate a model timeout, malformed output and wrong-context case; verify all three are observable and controlled.",
    "proof": "A runnable repository, evaluation results, failure matrix and README.",
    "transfer": "These application controls are reused in RAG, tool calling, agents and production services.",
    "mistakes": [
      "Trusting model output without schema or semantic validation.",
      "Putting all context into the prompt instead of selecting what matters.",
      "Adding retries or caching without considering duplication, freshness or cost."
    ],
    "resources": [
      [
        "OpenAI API documentation",
        "https://platform.openai.com/docs/"
      ],
      [
        "Anthropic context engineering",
        "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Build an LLM application — applied lab",
      "task": "Build a small assistant/search/summarization app with structured input/output and a regression set.",
      "evidence": "A runnable repository, evaluation results, failure matrix and README.",
      "breakIt": "Simulate a model timeout, malformed output and wrong-context case; verify all three are observable and controlled.",
      "transfer": "These application-engineering controls are reused in RAG, tools, agents and production services."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "30–45 min",
      "artifact": "A runnable repository, evaluation results, failure matrix and README.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Simulate a model timeout, malformed output and wrong-context case; verify all three are observable and controlled.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Build an application with model integration, validation, tests, failure handling and an evidence record showing what works.",
    "usedLater": "These application controls are reused in RAG, tool calling, agents and production services.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does build an llm application require, and what evidence would justify that choice?"
  },
  {
    "id": "11-1",
    "phase": "11",
    "phaseName": "RAG Engineering",
    "title": "RAG architecture & data flow",
    "summary": "When the model lacks current/private knowledge, retrieval changes the system by supplying external evidence at runtime. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "When the model lacks current/private knowledge, retrieval changes the system by supplying external evidence at runtime.",
    "body": "Trace documents → ingestion → chunks → embeddings/index → retrieval → context → generation and identify where failures can occur.",
    "example": "Worked example: Draw and implement the smallest RAG flow using a tiny document set.",
    "takeaways": [
      "Trace documents → ingestion → chunks → embeddings/index → retrieval → context → generation and identify where failures can occur.",
      "Practice: Draw and implement the smallest RAG flow using a tiny document set.",
      "Failure to diagnose: Return the correct answer with the wrong source and identify why retrieval correctness and answer correctness are different.",
      "Proof: An architecture diagram with one traced query from document to cited answer."
    ],
    "code": "documents=[\"refunds take 5 days\",\"premium refunds take 2 days\"]\nquery=\"How long does a premium refund take?\"\n# embed -> retrieve -> cite -> answer\nprint(documents[1])",
    "practice": "Draw and implement the smallest RAG flow using a tiny document set.",
    "breakIt": "Return the correct answer with the wrong source and identify why retrieval correctness and answer correctness are different.",
    "proof": "An architecture diagram with one traced query from document to cited answer.",
    "transfer": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems.",
    "mistakes": [
      "Blaming the generator when retrieval returned the wrong evidence.",
      "Choosing chunk size by habit instead of measuring retrieval behavior.",
      "Accepting plausible answers that lack supporting evidence."
    ],
    "resources": [
      [
        "OpenAI retrieval / file search concepts",
        "https://platform.openai.com/docs/"
      ],
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "RAG architecture & data flow — applied lab",
      "task": "Draw and implement the smallest RAG flow using a tiny document set.",
      "evidence": "An architecture diagram with one traced query from document to cited answer.",
      "breakIt": "Return the correct answer with the wrong source and identify why retrieval correctness and answer correctness are different.",
      "transfer": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "An architecture diagram with one traced query from document to cited answer.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Return the correct answer with the wrong source and identify why retrieval correctness and answer correctness are different.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Trace the full RAG path from source documents through retrieval to grounded generation and identify where evidence can be lost.",
    "usedLater": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does rag architecture & data flow require, and what evidence would justify that choice?"
  },
  {
    "id": "11-2",
    "phase": "11",
    "phaseName": "RAG Engineering",
    "title": "Document ingestion & normalization",
    "summary": "Retrieval quality starts before embeddings; messy extraction can create missing, duplicated or misleading evidence. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Retrieval quality starts before embeddings; messy extraction can create missing, duplicated or misleading evidence.",
    "body": "Handle document parsing, metadata, encoding, deduplication and normalization as an explicit ingestion pipeline.",
    "example": "Worked example: Ingest a few documents and record source, version and section metadata.",
    "takeaways": [
      "Handle document parsing, metadata, encoding, deduplication and normalization as an explicit ingestion pipeline.",
      "Practice: Ingest a few documents and record source, version and section metadata.",
      "Failure to diagnose: Corrupt extraction or duplicate a document and show how the ingestion checks detect it.",
      "Proof: An ingestion report with source metadata and a failed-input example."
    ],
    "code": "documents=[\"refunds take 5 days\",\"premium refunds take 2 days\"]\nquery=\"How long does a premium refund take?\"\n# embed -> retrieve -> cite -> answer\nprint(documents[1])",
    "practice": "Ingest a few documents and record source, version and section metadata.",
    "breakIt": "Corrupt extraction or duplicate a document and show how the ingestion checks detect it.",
    "proof": "An ingestion report with source metadata and a failed-input example.",
    "transfer": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems.",
    "mistakes": [
      "Blaming the generator when retrieval returned the wrong evidence.",
      "Choosing chunk size by habit instead of measuring retrieval behavior.",
      "Accepting plausible answers that lack supporting evidence."
    ],
    "resources": [
      [
        "OpenAI retrieval / file search concepts",
        "https://platform.openai.com/docs/"
      ],
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Document ingestion & normalization — applied lab",
      "task": "Ingest a few documents and record source, version and section metadata.",
      "evidence": "An ingestion report with source metadata and a failed-input example.",
      "breakIt": "Corrupt extraction or duplicate a document and show how the ingestion checks detect it.",
      "transfer": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "An ingestion report with source metadata and a failed-input example.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Corrupt extraction or duplicate a document and show how the ingestion checks detect it.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Turn heterogeneous documents into normalized records with source metadata, stable identifiers and measurable ingestion rules.",
    "usedLater": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does document ingestion & normalization require, and what evidence would justify that choice?"
  },
  {
    "id": "11-3",
    "phase": "11",
    "phaseName": "RAG Engineering",
    "title": "Chunking strategies",
    "summary": "Chunk boundaries determine what evidence can be retrieved and what context the model sees. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Chunk boundaries determine what evidence can be retrieved and what context the model sees.",
    "body": "Compare fixed-size, structure-aware and overlap-based chunking; choose based on document structure and query needs.",
    "example": "Worked example: Chunk the same document two ways and compare retrieval of three questions.",
    "takeaways": [
      "Compare fixed-size, structure-aware and overlap-based chunking; choose based on document structure and query needs.",
      "Practice: Chunk the same document two ways and compare retrieval of three questions.",
      "Failure to diagnose: Use chunks that are too small or too large and record which questions become harder to answer.",
      "Proof: A chunking comparison with examples, retrieval results and chosen policy."
    ],
    "code": "documents=[\"refunds take 5 days\",\"premium refunds take 2 days\"]\nquery=\"How long does a premium refund take?\"\n# embed -> retrieve -> cite -> answer\nprint(documents[1])",
    "practice": "Chunk the same document two ways and compare retrieval of three questions.",
    "breakIt": "Use chunks that are too small or too large and record which questions become harder to answer.",
    "proof": "A chunking comparison with examples, retrieval results and chosen policy.",
    "transfer": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems.",
    "mistakes": [
      "Blaming the generator when retrieval returned the wrong evidence.",
      "Choosing chunk size by habit instead of measuring retrieval behavior.",
      "Accepting plausible answers that lack supporting evidence."
    ],
    "resources": [
      [
        "OpenAI retrieval / file search concepts",
        "https://platform.openai.com/docs/"
      ],
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Chunking strategies — applied lab",
      "task": "Chunk the same document two ways and compare retrieval of three questions.",
      "evidence": "A chunking comparison with examples, retrieval results and chosen policy.",
      "breakIt": "Use chunks that are too small or too large and record which questions become harder to answer.",
      "transfer": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A chunking comparison with examples, retrieval results and chosen policy.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Use chunks that are too small or too large and record which questions become harder to answer.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Compare chunking strategies on retrieval tasks and choose boundaries that preserve enough context without flooding the model.",
    "usedLater": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does chunking strategies require, and what evidence would justify that choice?"
  },
  {
    "id": "11-4",
    "phase": "11",
    "phaseName": "RAG Engineering",
    "title": "Embeddings & vector search",
    "summary": "Vector retrieval is useful because semantic similarity can find relevant text beyond exact keyword overlap. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Vector retrieval is useful because semantic similarity can find relevant text beyond exact keyword overlap.",
    "body": "Connect embedding generation, vector storage, similarity search and top-k retrieval; make normalization/metric assumptions explicit.",
    "example": "Worked example: Embed a small corpus and retrieve nearest chunks for several queries.",
    "takeaways": [
      "Connect embedding generation, vector storage, similarity search and top-k retrieval; make normalization/metric assumptions explicit.",
      "Practice: Embed a small corpus and retrieve nearest chunks for several queries.",
      "Failure to diagnose: Use a domain-shifted query or poor embedding model and diagnose the retrieval miss.",
      "Proof: A retrieval table with query, top-k chunks, similarity and relevance judgment."
    ],
    "code": "documents=[\"refunds take 5 days\",\"premium refunds take 2 days\"]\nquery=\"How long does a premium refund take?\"\n# embed -> retrieve -> cite -> answer\nprint(documents[1])",
    "practice": "Embed a small corpus and retrieve nearest chunks for several queries.",
    "breakIt": "Use a domain-shifted query or poor embedding model and diagnose the retrieval miss.",
    "proof": "A retrieval table with query, top-k chunks, similarity and relevance judgment.",
    "transfer": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems.",
    "mistakes": [
      "Blaming the generator when retrieval returned the wrong evidence.",
      "Choosing chunk size by habit instead of measuring retrieval behavior.",
      "Accepting plausible answers that lack supporting evidence."
    ],
    "resources": [
      [
        "OpenAI retrieval / file search concepts",
        "https://platform.openai.com/docs/"
      ],
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Embeddings & vector search — applied lab",
      "task": "Embed a small corpus and retrieve nearest chunks for several queries.",
      "evidence": "A retrieval table with query, top-k chunks, similarity and relevance judgment.",
      "breakIt": "Use a domain-shifted query or poor embedding model and diagnose the retrieval miss.",
      "transfer": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A retrieval table with query, top-k chunks, similarity and relevance judgment.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Use a domain-shifted query or poor embedding model and diagnose the retrieval miss.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Embed a small corpus, retrieve nearest neighbors and inspect whether semantic similarity matches the task’s notion of relevance.",
    "usedLater": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does embeddings & vector search require, and what evidence would justify that choice?"
  },
  {
    "id": "11-5",
    "phase": "11",
    "phaseName": "RAG Engineering",
    "title": "Hybrid retrieval, metadata & reranking",
    "summary": "No single retrieval signal handles every query; lexical, semantic and metadata constraints solve different problems. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "No single retrieval signal handles every query; lexical, semantic and metadata constraints solve different problems.",
    "body": "Combine keyword/semantic retrieval, metadata filters and reranking as separate stages with measurable effects.",
    "example": "Worked example: Run one query through vector-only and hybrid retrieval, then rerank the candidates.",
    "takeaways": [
      "Combine keyword/semantic retrieval, metadata filters and reranking as separate stages with measurable effects.",
      "Practice: Run one query through vector-only and hybrid retrieval, then rerank the candidates.",
      "Failure to diagnose: Remove a metadata filter or reranker and show the wrong candidate entering the final context.",
      "Proof: A stage-by-stage retrieval report with recall/relevance observations."
    ],
    "code": "documents=[\"refunds take 5 days\",\"premium refunds take 2 days\"]\nquery=\"How long does a premium refund take?\"\n# embed -> retrieve -> cite -> answer\nprint(documents[1])",
    "practice": "Run one query through vector-only and hybrid retrieval, then rerank the candidates.",
    "breakIt": "Remove a metadata filter or reranker and show the wrong candidate entering the final context.",
    "proof": "A stage-by-stage retrieval report with recall/relevance observations.",
    "transfer": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems.",
    "mistakes": [
      "Blaming the generator when retrieval returned the wrong evidence.",
      "Choosing chunk size by habit instead of measuring retrieval behavior.",
      "Accepting plausible answers that lack supporting evidence."
    ],
    "resources": [
      [
        "OpenAI retrieval / file search concepts",
        "https://platform.openai.com/docs/"
      ],
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "Hybrid retrieval, metadata & reranking — applied lab",
      "task": "Run one query through vector-only and hybrid retrieval, then rerank the candidates.",
      "evidence": "A stage-by-stage retrieval report with recall/relevance observations.",
      "breakIt": "Remove a metadata filter or reranker and show the wrong candidate entering the final context.",
      "transfer": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "30–45 min",
      "artifact": "A stage-by-stage retrieval report with recall/relevance observations.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Remove a metadata filter or reranker and show the wrong candidate entering the final context.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Combine lexical, vector and metadata signals, then rerank candidates when first-stage retrieval is insufficient.",
    "usedLater": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does hybrid retrieval, metadata & reranking require, and what evidence would justify that choice?"
  },
  {
    "id": "11-6",
    "phase": "11",
    "phaseName": "RAG Engineering",
    "title": "Citations, grounding & answerability",
    "summary": "A fluent answer is not evidence that the retrieved material supports it. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A fluent answer is not evidence that the retrieved material supports it.",
    "body": "Define grounding, citation coverage and answerability; teach the system to abstain when evidence is insufficient.",
    "example": "Worked example: Build answers that cite source chunks and test a question whose answer is absent from the corpus.",
    "takeaways": [
      "Define grounding, citation coverage and answerability; teach the system to abstain when evidence is insufficient.",
      "Practice: Build answers that cite source chunks and test a question whose answer is absent from the corpus.",
      "Failure to diagnose: Prompt the model to “always answer” and show how that defeats an evidence boundary.",
      "Proof: A set of cited answers plus an unanswerable-case result and policy."
    ],
    "code": "documents=[\"refunds take 5 days\",\"premium refunds take 2 days\"]\nquery=\"How long does a premium refund take?\"\n# embed -> retrieve -> cite -> answer\nprint(documents[1])",
    "practice": "Build answers that cite source chunks and test a question whose answer is absent from the corpus.",
    "breakIt": "Prompt the model to “always answer” and show how that defeats an evidence boundary.",
    "proof": "A set of cited answers plus an unanswerable-case result and policy.",
    "transfer": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems.",
    "mistakes": [
      "Blaming the generator when retrieval returned the wrong evidence.",
      "Choosing chunk size by habit instead of measuring retrieval behavior.",
      "Accepting plausible answers that lack supporting evidence."
    ],
    "resources": [
      [
        "OpenAI retrieval / file search concepts",
        "https://platform.openai.com/docs/"
      ],
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ]
    ],
    "experience": {
      "type": "Design",
      "title": "Citations, grounding & answerability — applied lab",
      "task": "Build answers that cite source chunks and test a question whose answer is absent from the corpus.",
      "evidence": "A set of cited answers plus an unanswerable-case result and policy.",
      "breakIt": "Prompt the model to “always answer” and show how that defeats an evidence boundary.",
      "transfer": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "30–45 min",
      "artifact": "A set of cited answers plus an unanswerable-case result and policy.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Prompt the model to “always answer” and show how that defeats an evidence boundary.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Require answers to be supported by retrieved evidence and distinguish “not enough evidence” from a plausible but unsupported answer.",
    "usedLater": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does citations, grounding & answerability require, and what evidence would justify that choice?"
  },
  {
    "id": "11-7",
    "phase": "11",
    "phaseName": "RAG Engineering",
    "title": "RAG evaluation",
    "summary": "RAG has at least two quality surfaces: retrieval quality and generation/grounding quality. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "RAG has at least two quality surfaces: retrieval quality and generation/grounding quality.",
    "body": "Separate retrieval relevance, context usefulness, groundedness and final task success into measurable checks.",
    "example": "Worked example: Create a small golden set with expected evidence and evaluate retrieval before evaluating answers.",
    "takeaways": [
      "Separate retrieval relevance, context usefulness, groundedness and final task success into measurable checks.",
      "Practice: Create a small golden set with expected evidence and evaluate retrieval before evaluating answers.",
      "Failure to diagnose: Improve answer wording while retrieval relevance falls; catch the regression by evaluating both layers.",
      "Proof: An evaluation table with retrieval and answer metrics plus representative failures."
    ],
    "code": "documents=[\"refunds take 5 days\",\"premium refunds take 2 days\"]\nquery=\"How long does a premium refund take?\"\n# embed -> retrieve -> cite -> answer\nprint(documents[1])",
    "practice": "Create a small golden set with expected evidence and evaluate retrieval before evaluating answers.",
    "breakIt": "Improve answer wording while retrieval relevance falls; catch the regression by evaluating both layers.",
    "proof": "An evaluation table with retrieval and answer metrics plus representative failures.",
    "transfer": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems.",
    "mistakes": [
      "Blaming the generator when retrieval returned the wrong evidence.",
      "Choosing chunk size by habit instead of measuring retrieval behavior.",
      "Accepting plausible answers that lack supporting evidence."
    ],
    "resources": [
      [
        "OpenAI retrieval / file search concepts",
        "https://platform.openai.com/docs/"
      ],
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ]
    ],
    "experience": {
      "type": "Prove",
      "title": "RAG evaluation — applied lab",
      "task": "Create a small golden set with expected evidence and evaluate retrieval before evaluating answers.",
      "evidence": "An evaluation table with retrieval and answer metrics plus representative failures.",
      "breakIt": "Improve answer wording while retrieval relevance falls; catch the regression by evaluating both layers.",
      "transfer": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "30–45 min",
      "artifact": "An evaluation table with retrieval and answer metrics plus representative failures.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Improve answer wording while retrieval relevance falls; catch the regression by evaluating both layers.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Evaluate retrieval and answer quality separately so a poor answer can be traced to retrieval, grounding or generation.",
    "usedLater": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "Is the failure caused by retrieval, evidence support or generation?"
  },
  {
    "id": "11-8",
    "phase": "11",
    "phaseName": "RAG Engineering",
    "title": "Build a production-style RAG system",
    "summary": "A usable RAG system needs ingestion, retrieval, generation, citations, evaluation and failure handling as one loop. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A usable RAG system needs ingestion, retrieval, generation, citations, evaluation and failure handling as one loop.",
    "body": "Combine the phase into a small service with reproducible data and a regression set.",
    "example": "Worked example: Build a document QA system with source citations and an unanswerable policy.",
    "takeaways": [
      "Combine the phase into a small service with reproducible data and a regression set.",
      "Practice: Build a document QA system with source citations and an unanswerable policy.",
      "Failure to diagnose: Change chunking or retrieval settings and run the regression suite to identify which behavior changed.",
      "Proof: A runnable RAG repository, architecture diagram, evaluation report and failure cases."
    ],
    "code": "documents=[\"refunds take 5 days\",\"premium refunds take 2 days\"]\nquery=\"How long does a premium refund take?\"\n# embed -> retrieve -> cite -> answer\nprint(documents[1])",
    "practice": "Build a document QA system with source citations and an unanswerable policy.",
    "breakIt": "Change chunking or retrieval settings and run the regression suite to identify which behavior changed.",
    "proof": "A runnable RAG repository, architecture diagram, evaluation report and failure cases.",
    "transfer": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems.",
    "mistakes": [
      "Blaming the generator when retrieval returned the wrong evidence.",
      "Choosing chunk size by habit instead of measuring retrieval behavior.",
      "Accepting plausible answers that lack supporting evidence."
    ],
    "resources": [
      [
        "OpenAI retrieval / file search concepts",
        "https://platform.openai.com/docs/"
      ],
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Build a production-style RAG system — applied lab",
      "task": "Build a document QA system with source citations and an unanswerable policy.",
      "evidence": "A runnable RAG repository, architecture diagram, evaluation report and failure cases.",
      "breakIt": "Change chunking or retrieval settings and run the regression suite to identify which behavior changed.",
      "transfer": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "30–45 min",
      "artifact": "A runnable RAG repository, architecture diagram, evaluation report and failure cases.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Change chunking or retrieval settings and run the regression suite to identify which behavior changed.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Build a small RAG system with ingestion, retrieval, citations, evaluation and observable failure cases.",
    "usedLater": "These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does build a production-style rag system require, and what evidence would justify that choice?"
  },
  {
    "id": "12-1",
    "phase": "12",
    "phaseName": "Multimodal AI",
    "title": "Vision-language models",
    "summary": "Multimodal models map information across text and visual inputs; the interface and failure modes differ from text-only models. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Multimodal models map information across text and visual inputs; the interface and failure modes differ from text-only models.",
    "body": "Understand image preprocessing, visual tokens/features and instruction grounding at a conceptual level.",
    "example": "Worked example: Ask a VLM to describe and extract a constrained set of visual facts from an image.",
    "takeaways": [
      "Understand image preprocessing, visual tokens/features and instruction grounding at a conceptual level.",
      "Practice: Ask a VLM to describe and extract a constrained set of visual facts from an image.",
      "Failure to diagnose: Add a visually ambiguous or unreadable region and test whether the system expresses uncertainty.",
      "Proof: A small visual QA set with expected facts and observed errors."
    ],
    "code": "image=\"invoice.png\"\nquestion=\"What is the invoice total?\"\n# multimodal model receives image + constrained instruction\nprint(image, question)",
    "practice": "Ask a VLM to describe and extract a constrained set of visual facts from an image.",
    "breakIt": "Add a visually ambiguous or unreadable region and test whether the system expresses uncertainty.",
    "proof": "A small visual QA set with expected facts and observed errors.",
    "transfer": "These multimodal patterns extend the same engineering loop across images, documents and audio.",
    "mistakes": [
      "Assuming OCR or vision output is exact.",
      "Ignoring modality-specific preprocessing and failure modes.",
      "Evaluating only successful examples instead of degraded inputs."
    ],
    "resources": [
      [
        "Hugging Face multimodal models",
        "https://huggingface.co/docs/transformers/"
      ],
      [
        "PyTorch tutorials",
        "https://docs.pytorch.org/tutorials/"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Vision-language models — applied lab",
      "task": "Ask a VLM to describe and extract a constrained set of visual facts from an image.",
      "evidence": "A small visual QA set with expected facts and observed errors.",
      "breakIt": "Add a visually ambiguous or unreadable region and test whether the system expresses uncertainty.",
      "transfer": "These multimodal concepts extend the same engineering loop across visual, document and audio inputs."
    },
    "competency": {
      "difficulty": "Optional",
      "time": "30–45 min",
      "artifact": "A small visual QA set with expected facts and observed errors.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Add a visually ambiguous or unreadable region and test whether the system expresses uncertainty.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Design an input contract for image-plus-text tasks and test whether the model uses the visual evidence required by the question.",
    "usedLater": "These multimodal patterns extend the same engineering loop across images, documents and audio.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does vision-language models require, and what evidence would justify that choice?"
  },
  {
    "id": "12-2",
    "phase": "12",
    "phaseName": "Multimodal AI",
    "title": "Document understanding & OCR",
    "summary": "Documents mix layout, text, tables and visual structure; OCR alone can lose the relationships that matter. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Documents mix layout, text, tables and visual structure; OCR alone can lose the relationships that matter.",
    "body": "Compare plain OCR text with layout-aware extraction and identify when each is sufficient.",
    "example": "Worked example: Extract a small document and preserve page/section/table provenance.",
    "takeaways": [
      "Compare plain OCR text with layout-aware extraction and identify when each is sufficient.",
      "Practice: Extract a small document and preserve page/section/table provenance.",
      "Failure to diagnose: Rotate, blur or change layout and inspect which fields are lost.",
      "Proof: A field-extraction table with provenance and failure examples."
    ],
    "code": "image=\"invoice.png\"\nquestion=\"What is the invoice total?\"\n# multimodal model receives image + constrained instruction\nprint(image, question)",
    "practice": "Extract a small document and preserve page/section/table provenance.",
    "breakIt": "Rotate, blur or change layout and inspect which fields are lost.",
    "proof": "A field-extraction table with provenance and failure examples.",
    "transfer": "These multimodal patterns extend the same engineering loop across images, documents and audio.",
    "mistakes": [
      "Assuming OCR or vision output is exact.",
      "Ignoring modality-specific preprocessing and failure modes.",
      "Evaluating only successful examples instead of degraded inputs."
    ],
    "resources": [
      [
        "Hugging Face multimodal models",
        "https://huggingface.co/docs/transformers/"
      ],
      [
        "PyTorch tutorials",
        "https://docs.pytorch.org/tutorials/"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Document understanding & OCR — applied lab",
      "task": "Extract a small document and preserve page/section/table provenance.",
      "evidence": "A field-extraction table with provenance and failure examples.",
      "breakIt": "Rotate, blur or change layout and inspect which fields are lost.",
      "transfer": "These multimodal concepts extend the same engineering loop across visual, document and audio inputs."
    },
    "competency": {
      "difficulty": "Optional",
      "time": "30–45 min",
      "artifact": "A field-extraction table with provenance and failure examples.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Rotate, blur or change layout and inspect which fields are lost.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Extract text and structure from documents while tracking OCR uncertainty, layout loss and source coordinates.",
    "usedLater": "These multimodal patterns extend the same engineering loop across images, documents and audio.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does document understanding & ocr require, and what evidence would justify that choice?"
  },
  {
    "id": "12-3",
    "phase": "12",
    "phaseName": "Multimodal AI",
    "title": "Multimodal embeddings",
    "summary": "Cross-modal retrieval requires representations that make related text/images comparable under a defined embedding space. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Cross-modal retrieval requires representations that make related text/images comparable under a defined embedding space.",
    "body": "Understand paired embeddings, similarity and the limits of assuming semantic alignment.",
    "example": "Worked example: Create a tiny image/text retrieval experiment and inspect nearest matches.",
    "takeaways": [
      "Understand paired embeddings, similarity and the limits of assuming semantic alignment.",
      "Practice: Create a tiny image/text retrieval experiment and inspect nearest matches.",
      "Failure to diagnose: Add a visually similar but semantically wrong item and diagnose the false match.",
      "Proof: A cross-modal retrieval table with relevance judgments."
    ],
    "code": "image=\"invoice.png\"\nquestion=\"What is the invoice total?\"\n# multimodal model receives image + constrained instruction\nprint(image, question)",
    "practice": "Create a tiny image/text retrieval experiment and inspect nearest matches.",
    "breakIt": "Add a visually similar but semantically wrong item and diagnose the false match.",
    "proof": "A cross-modal retrieval table with relevance judgments.",
    "transfer": "These multimodal patterns extend the same engineering loop across images, documents and audio.",
    "mistakes": [
      "Assuming OCR or vision output is exact.",
      "Ignoring modality-specific preprocessing and failure modes.",
      "Evaluating only successful examples instead of degraded inputs."
    ],
    "resources": [
      [
        "Hugging Face multimodal models",
        "https://huggingface.co/docs/transformers/"
      ],
      [
        "PyTorch tutorials",
        "https://docs.pytorch.org/tutorials/"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Multimodal embeddings — applied lab",
      "task": "Create a tiny image/text retrieval experiment and inspect nearest matches.",
      "evidence": "A cross-modal retrieval table with relevance judgments.",
      "breakIt": "Add a visually similar but semantically wrong item and diagnose the false match.",
      "transfer": "These multimodal concepts extend the same engineering loop across visual, document and audio inputs."
    },
    "competency": {
      "difficulty": "Optional",
      "time": "30–45 min",
      "artifact": "A cross-modal retrieval table with relevance judgments.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Add a visually similar but semantically wrong item and diagnose the false match.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Compare image/text representations in a shared embedding space and test whether nearest neighbors match the intended cross-modal task.",
    "usedLater": "These multimodal patterns extend the same engineering loop across images, documents and audio.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does multimodal embeddings require, and what evidence would justify that choice?"
  },
  {
    "id": "12-4",
    "phase": "12",
    "phaseName": "Multimodal AI",
    "title": "Audio & cross-modal retrieval",
    "summary": "Audio can become text, embeddings or acoustic features; the right representation depends on the retrieval task. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Audio can become text, embeddings or acoustic features; the right representation depends on the retrieval task.",
    "body": "Compare transcription-based retrieval with audio-embedding retrieval and note what each preserves.",
    "example": "Worked example: Retrieve relevant clips for a small set of text queries using one representation.",
    "takeaways": [
      "Compare transcription-based retrieval with audio-embedding retrieval and note what each preserves.",
      "Practice: Retrieve relevant clips for a small set of text queries using one representation.",
      "Failure to diagnose: Add an accent/noise or non-speech sound case and record the failure.",
      "Proof: A representation comparison and retrieval failure analysis."
    ],
    "code": "image=\"invoice.png\"\nquestion=\"What is the invoice total?\"\n# multimodal model receives image + constrained instruction\nprint(image, question)",
    "practice": "Retrieve relevant clips for a small set of text queries using one representation.",
    "breakIt": "Add an accent/noise or non-speech sound case and record the failure.",
    "proof": "A representation comparison and retrieval failure analysis.",
    "transfer": "These multimodal patterns extend the same engineering loop across images, documents and audio.",
    "mistakes": [
      "Assuming OCR or vision output is exact.",
      "Ignoring modality-specific preprocessing and failure modes.",
      "Evaluating only successful examples instead of degraded inputs."
    ],
    "resources": [
      [
        "Hugging Face multimodal models",
        "https://huggingface.co/docs/transformers/"
      ],
      [
        "PyTorch tutorials",
        "https://docs.pytorch.org/tutorials/"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Audio & cross-modal retrieval — applied lab",
      "task": "Retrieve relevant clips for a small set of text queries using one representation.",
      "evidence": "A representation comparison and retrieval failure analysis.",
      "breakIt": "Add an accent/noise or non-speech sound case and record the failure.",
      "transfer": "These multimodal concepts extend the same engineering loop across visual, document and audio inputs."
    },
    "competency": {
      "difficulty": "Optional",
      "time": "30–45 min",
      "artifact": "A representation comparison and retrieval failure analysis.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Add an accent/noise or non-speech sound case and record the failure.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Turn audio into searchable representations and evaluate retrieval across audio, text or other modalities.",
    "usedLater": "These multimodal patterns extend the same engineering loop across images, documents and audio.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does audio & cross-modal retrieval require, and what evidence would justify that choice?"
  },
  {
    "id": "12-5",
    "phase": "12",
    "phaseName": "Multimodal AI",
    "title": "Build and evaluate a multimodal application",
    "summary": "Multimodal systems need explicit input preprocessing, provenance and evaluation across each modality. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Multimodal systems need explicit input preprocessing, provenance and evaluation across each modality.",
    "body": "Build a small document/image/audio workflow and define where uncertainty is surfaced.",
    "example": "Worked example: Create a multimodal search or extraction prototype with a compact evaluation set.",
    "takeaways": [
      "Build a small document/image/audio workflow and define where uncertainty is surfaced.",
      "Practice: Create a multimodal search or extraction prototype with a compact evaluation set.",
      "Failure to diagnose: Break one modality and verify the system fails locally rather than fabricating a complete answer.",
      "Proof: A runnable mini-project with modality-specific tests and a cross-modal evaluation report."
    ],
    "code": "image=\"invoice.png\"\nquestion=\"What is the invoice total?\"\n# multimodal model receives image + constrained instruction\nprint(image, question)",
    "practice": "Create a multimodal search or extraction prototype with a compact evaluation set.",
    "breakIt": "Break one modality and verify the system fails locally rather than fabricating a complete answer.",
    "proof": "A runnable mini-project with modality-specific tests and a cross-modal evaluation report.",
    "transfer": "These multimodal patterns extend the same engineering loop across images, documents and audio.",
    "mistakes": [
      "Assuming OCR or vision output is exact.",
      "Ignoring modality-specific preprocessing and failure modes.",
      "Evaluating only successful examples instead of degraded inputs."
    ],
    "resources": [
      [
        "Hugging Face multimodal models",
        "https://huggingface.co/docs/transformers/"
      ],
      [
        "PyTorch tutorials",
        "https://docs.pytorch.org/tutorials/"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "Build and evaluate a multimodal application — applied lab",
      "task": "Create a multimodal search or extraction prototype with a compact evaluation set.",
      "evidence": "A runnable mini-project with modality-specific tests and a cross-modal evaluation report.",
      "breakIt": "Break one modality and verify the system fails locally rather than fabricating a complete answer.",
      "transfer": "These multimodal concepts extend the same engineering loop across visual, document and audio inputs."
    },
    "competency": {
      "difficulty": "Optional",
      "time": "30–45 min",
      "artifact": "A runnable mini-project with modality-specific tests and a cross-modal evaluation report.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Break one modality and verify the system fails locally rather than fabricating a complete answer.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Build a small multimodal workflow with explicit inputs, outputs, evaluation cases and failure analysis.",
    "usedLater": "These multimodal patterns extend the same engineering loop across images, documents and audio.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does build and evaluate a multimodal application require, and what evidence would justify that choice?"
  },
  {
    "id": "13-1",
    "phase": "13",
    "phaseName": "Tools & Protocols",
    "title": "Tool contracts & schemas",
    "summary": "A model can only use a tool reliably when the tool interface is explicit about inputs, outputs and failures. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A model can only use a tool reliably when the tool interface is explicit about inputs, outputs and failures.",
    "body": "Design schemas with names, descriptions, required fields, validation and bounded outputs; treat the tool as an API contract.",
    "example": "Worked example: Define two tools for a small assistant and write tests for valid and invalid inputs.",
    "takeaways": [
      "Design schemas with names, descriptions, required fields, validation and bounded outputs; treat the tool as an API contract.",
      "Practice: Define two tools for a small assistant and write tests for valid and invalid inputs.",
      "Failure to diagnose: Send ambiguous or extra arguments and verify the tool rejects or normalizes them deliberately.",
      "Proof: Tool schemas plus validation tests and an error contract."
    ],
    "code": "tool = {\"name\":\"lookup_order\",\"input_schema\":{\"order_id\":\"string\"},\"output\":\"order status\"}\n# validate input before execution\nprint(tool)",
    "practice": "Define two tools for a small assistant and write tests for valid and invalid inputs.",
    "breakIt": "Send ambiguous or extra arguments and verify the tool rejects or normalizes them deliberately.",
    "proof": "Tool schemas plus validation tests and an error contract.",
    "transfer": "These contracts and authorization boundaries are the foundation for safe tool use and agent autonomy.",
    "mistakes": [
      "Letting the model decide authorization.",
      "Giving tools broader permissions than the task requires.",
      "Returning ambiguous errors that encourage unsafe retries."
    ],
    "resources": [
      [
        "Model Context Protocol specification",
        "https://modelcontextprotocol.io/specification/draft/server/index"
      ],
      [
        "MCP TypeScript SDK",
        "https://ts.sdk.modelcontextprotocol.io/server"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Tool contracts & schemas — applied lab",
      "task": "Define two tools for a small assistant and write tests for valid and invalid inputs.",
      "evidence": "Tool schemas plus validation tests and an error contract.",
      "breakIt": "Send ambiguous or extra arguments and verify the tool rejects or normalizes them deliberately.",
      "transfer": "These contracts and boundaries are the foundation for safe tool use and agent autonomy."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "Tool schemas plus validation tests and an error contract.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Send ambiguous or extra arguments and verify the tool rejects or normalizes them deliberately.",
      "reviewed": "2026-09-21",
      "freshness": "MCP specification 2026-07-28",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Define tools with narrow schemas, clear side effects and validation rules so a model cannot invent arbitrary arguments.",
    "usedLater": "These contracts and authorization boundaries are the foundation for safe tool use and agent autonomy.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does tool contracts & schemas require, and what evidence would justify that choice?"
  },
  {
    "id": "13-2",
    "phase": "13",
    "phaseName": "Tools & Protocols",
    "title": "Tool selection & routing",
    "summary": "More tools can increase ambiguity and attack surface; the system should choose the smallest sufficient capability. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "More tools can increase ambiguity and attack surface; the system should choose the smallest sufficient capability.",
    "body": "Use explicit routing criteria, tool descriptions and conflict resolution rather than giving every task every tool.",
    "example": "Worked example: Create a decision matrix for three tools with overlapping capabilities and route sample requests.",
    "takeaways": [
      "Use explicit routing criteria, tool descriptions and conflict resolution rather than giving every task every tool.",
      "Practice: Create a decision matrix for three tools with overlapping capabilities and route sample requests.",
      "Failure to diagnose: Add two tools with nearly identical descriptions and inspect ambiguous selection; tighten the contracts.",
      "Proof: A routing matrix with examples and an explanation of why each tool is selected."
    ],
    "code": "tool = {\"name\":\"lookup_order\",\"input_schema\":{\"order_id\":\"string\"},\"output\":\"order status\"}\n# validate input before execution\nprint(tool)",
    "practice": "Create a decision matrix for three tools with overlapping capabilities and route sample requests.",
    "breakIt": "Add two tools with nearly identical descriptions and inspect ambiguous selection; tighten the contracts.",
    "proof": "A routing matrix with examples and an explanation of why each tool is selected.",
    "transfer": "These contracts and authorization boundaries are the foundation for safe tool use and agent autonomy.",
    "mistakes": [
      "Letting the model decide authorization.",
      "Giving tools broader permissions than the task requires.",
      "Returning ambiguous errors that encourage unsafe retries."
    ],
    "resources": [
      [
        "Model Context Protocol specification",
        "https://modelcontextprotocol.io/specification/draft/server/index"
      ],
      [
        "MCP TypeScript SDK",
        "https://ts.sdk.modelcontextprotocol.io/server"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Tool selection & routing — applied lab",
      "task": "Create a decision matrix for three tools with overlapping capabilities and route sample requests.",
      "evidence": "A routing matrix with examples and an explanation of why each tool is selected.",
      "breakIt": "Add two tools with nearly identical descriptions and inspect ambiguous selection; tighten the contracts.",
      "transfer": "These contracts and boundaries are the foundation for safe tool use and agent autonomy."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A routing matrix with examples and an explanation of why each tool is selected.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Add two tools with nearly identical descriptions and inspect ambiguous selection; tighten the contracts.",
      "reviewed": "2026-09-21",
      "freshness": "MCP specification 2026-07-28",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Route tasks to tools using explicit descriptions, constraints and fallback behavior rather than giving every tool equal authority.",
    "usedLater": "These contracts and authorization boundaries are the foundation for safe tool use and agent autonomy.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does tool selection & routing require, and what evidence would justify that choice?"
  },
  {
    "id": "13-3",
    "phase": "13",
    "phaseName": "Tools & Protocols",
    "title": "MCP concepts & control model",
    "summary": "Protocols matter because tools, resources and prompts need predictable boundaries between client, server and user-controlled actions. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Protocols matter because tools, resources and prompts need predictable boundaries between client, server and user-controlled actions.",
    "body": "Learn MCP’s primitives and control model, then verify the current specification rather than relying on old diagrams.",
    "example": "Worked example: Map a simple application to MCP prompts/resources/tools and identify who controls each interaction.",
    "takeaways": [
      "Learn MCP’s primitives and control model, then verify the current specification rather than relying on old diagrams.",
      "Practice: Map a simple application to MCP prompts/resources/tools and identify who controls each interaction.",
      "Failure to diagnose: Assume the model directly owns every action; identify the missing authorization/control boundary.",
      "Proof: A primitive map with control ownership and a version/date note for the specification."
    ],
    "code": "tool = {\"name\":\"lookup_order\",\"input_schema\":{\"order_id\":\"string\"},\"output\":\"order status\"}\n# validate input before execution\nprint(tool)",
    "practice": "Map a simple application to MCP prompts/resources/tools and identify who controls each interaction.",
    "breakIt": "Assume the model directly owns every action; identify the missing authorization/control boundary.",
    "proof": "A primitive map with control ownership and a version/date note for the specification.",
    "transfer": "These contracts and authorization boundaries are the foundation for safe tool use and agent autonomy.",
    "mistakes": [
      "Letting the model decide authorization.",
      "Giving tools broader permissions than the task requires.",
      "Returning ambiguous errors that encourage unsafe retries."
    ],
    "resources": [
      [
        "Model Context Protocol specification",
        "https://modelcontextprotocol.io/specification/draft/server/index"
      ],
      [
        "MCP TypeScript SDK",
        "https://ts.sdk.modelcontextprotocol.io/server"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "MCP concepts & control model — applied lab",
      "task": "Map a simple application to MCP prompts/resources/tools and identify who controls each interaction.",
      "evidence": "A primitive map with control ownership and a version/date note for the specification.",
      "breakIt": "Assume the model directly owns every action; identify the missing authorization/control boundary.",
      "transfer": "These contracts and boundaries are the foundation for safe tool use and agent autonomy."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A primitive map with control ownership and a version/date note for the specification.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Assume the model directly owns every action; identify the missing authorization/control boundary.",
      "reviewed": "2026-09-21",
      "freshness": "MCP specification 2026-07-28",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Explain MCP’s client/server control model and distinguish tools, resources and prompts from the authorization decisions around them.",
    "usedLater": "These contracts and authorization boundaries are the foundation for safe tool use and agent autonomy.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does mcp concepts & control model require, and what evidence would justify that choice?"
  },
  {
    "id": "13-4",
    "phase": "13",
    "phaseName": "Tools & Protocols",
    "title": "MCP server basics",
    "summary": "A protocol server should expose a narrow capability with predictable schemas, errors and lifecycle behavior. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A protocol server should expose a narrow capability with predictable schemas, errors and lifecycle behavior.",
    "body": "Build a minimal MCP server and keep protocol plumbing separate from business logic.",
    "example": "Worked example: Expose one safe read-only capability and test valid/invalid requests.",
    "takeaways": [
      "Build a minimal MCP server and keep protocol plumbing separate from business logic.",
      "Practice: Expose one safe read-only capability and test valid/invalid requests.",
      "Failure to diagnose: Return malformed output or leak internal errors; fix the boundary so the client receives a stable contract.",
      "Proof: A minimal server with tests and a short protocol/business-logic separation note."
    ],
    "code": "tool = {\"name\":\"lookup_order\",\"input_schema\":{\"order_id\":\"string\"},\"output\":\"order status\"}\n# validate input before execution\nprint(tool)",
    "practice": "Expose one safe read-only capability and test valid/invalid requests.",
    "breakIt": "Return malformed output or leak internal errors; fix the boundary so the client receives a stable contract.",
    "proof": "A minimal server with tests and a short protocol/business-logic separation note.",
    "transfer": "These contracts and authorization boundaries are the foundation for safe tool use and agent autonomy.",
    "mistakes": [
      "Letting the model decide authorization.",
      "Giving tools broader permissions than the task requires.",
      "Returning ambiguous errors that encourage unsafe retries."
    ],
    "resources": [
      [
        "Model Context Protocol specification",
        "https://modelcontextprotocol.io/specification/draft/server/index"
      ],
      [
        "MCP TypeScript SDK",
        "https://ts.sdk.modelcontextprotocol.io/server"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "MCP server basics — applied lab",
      "task": "Expose one safe read-only capability and test valid/invalid requests.",
      "evidence": "A minimal server with tests and a short protocol/business-logic separation note.",
      "breakIt": "Return malformed output or leak internal errors; fix the boundary so the client receives a stable contract.",
      "transfer": "These contracts and boundaries are the foundation for safe tool use and agent autonomy."
    },
    "competency": {
      "difficulty": "Intermediate",
      "time": "30–45 min",
      "artifact": "A minimal server with tests and a short protocol/business-logic separation note.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Return malformed output or leak internal errors; fix the boundary so the client receives a stable contract.",
      "reviewed": "2026-09-21",
      "freshness": "MCP specification 2026-07-28",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Expose a small capability through an MCP server and verify its schema, lifecycle and error behavior with a client.",
    "usedLater": "These contracts and authorization boundaries are the foundation for safe tool use and agent autonomy.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does mcp server basics require, and what evidence would justify that choice?"
  },
  {
    "id": "13-5",
    "phase": "13",
    "phaseName": "Tools & Protocols",
    "title": "Authentication & authorization boundaries",
    "summary": "Identity proves who is calling; authorization decides what that identity may do. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Identity proves who is calling; authorization decides what that identity may do.",
    "body": "Separate authentication, authorization, tool scope and resource scope; fail closed on denied actions.",
    "example": "Worked example: Design a permission matrix for a user, agent and two tools, then enforce one denied path.",
    "takeaways": [
      "Separate authentication, authorization, tool scope and resource scope; fail closed on denied actions.",
      "Practice: Design a permission matrix for a user, agent and two tools, then enforce one denied path.",
      "Failure to diagnose: Grant a tool broad access and demonstrate the smallest unauthorized action it enables.",
      "Proof: A permission matrix plus a denied-action test."
    ],
    "code": "tool = {\"name\":\"lookup_order\",\"input_schema\":{\"order_id\":\"string\"},\"output\":\"order status\"}\n# validate input before execution\nprint(tool)",
    "practice": "Design a permission matrix for a user, agent and two tools, then enforce one denied path.",
    "breakIt": "Grant a tool broad access and demonstrate the smallest unauthorized action it enables.",
    "proof": "A permission matrix plus a denied-action test.",
    "transfer": "These contracts and authorization boundaries are the foundation for safe tool use and agent autonomy.",
    "mistakes": [
      "Letting the model decide authorization.",
      "Giving tools broader permissions than the task requires.",
      "Returning ambiguous errors that encourage unsafe retries."
    ],
    "resources": [
      [
        "Model Context Protocol specification",
        "https://modelcontextprotocol.io/specification/draft/server/index"
      ],
      [
        "MCP TypeScript SDK",
        "https://ts.sdk.modelcontextprotocol.io/server"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "Authentication & authorization boundaries — applied lab",
      "task": "Design a permission matrix for a user, agent and two tools, then enforce one denied path.",
      "evidence": "A permission matrix plus a denied-action test.",
      "breakIt": "Grant a tool broad access and demonstrate the smallest unauthorized action it enables.",
      "transfer": "These contracts and boundaries are the foundation for safe tool use and agent autonomy."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "30–45 min",
      "artifact": "A permission matrix plus a denied-action test.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Grant a tool broad access and demonstrate the smallest unauthorized action it enables.",
      "reviewed": "2026-09-21",
      "freshness": "MCP specification 2026-07-28",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Separate identity, authentication and authorization and enforce permissions at the tool/service boundary.",
    "usedLater": "These contracts and authorization boundaries are the foundation for safe tool use and agent autonomy.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does authentication & authorization boundaries require, and what evidence would justify that choice?"
  },
  {
    "id": "13-6",
    "phase": "13",
    "phaseName": "Tools & Protocols",
    "title": "Tool security & trust boundaries",
    "summary": "Tool calls can cross from model-generated intent into real systems, so prompts cannot be the only security boundary. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Tool calls can cross from model-generated intent into real systems, so prompts cannot be the only security boundary.",
    "body": "Model untrusted input, trusted application code, external services and privileged operations as separate boundaries.",
    "example": "Worked example: Threat-model two tools and implement one server-side authorization/validation control.",
    "takeaways": [
      "Model untrusted input, trusted application code, external services and privileged operations as separate boundaries.",
      "Practice: Threat-model two tools and implement one server-side authorization/validation control.",
      "Failure to diagnose: Pass attacker-controlled content through a tool parameter and verify the boundary rejects unsafe use.",
      "Proof: A threat model with at least three threats and enforced mitigations."
    ],
    "code": "tool = {\"name\":\"lookup_order\",\"input_schema\":{\"order_id\":\"string\"},\"output\":\"order status\"}\n# validate input before execution\nprint(tool)",
    "practice": "Threat-model two tools and implement one server-side authorization/validation control.",
    "breakIt": "Pass attacker-controlled content through a tool parameter and verify the boundary rejects unsafe use.",
    "proof": "A threat model with at least three threats and enforced mitigations.",
    "transfer": "These contracts and authorization boundaries are the foundation for safe tool use and agent autonomy.",
    "mistakes": [
      "Letting the model decide authorization.",
      "Giving tools broader permissions than the task requires.",
      "Returning ambiguous errors that encourage unsafe retries."
    ],
    "resources": [
      [
        "Model Context Protocol specification",
        "https://modelcontextprotocol.io/specification/draft/server/index"
      ],
      [
        "MCP TypeScript SDK",
        "https://ts.sdk.modelcontextprotocol.io/server"
      ]
    ],
    "experience": {
      "type": "Design",
      "title": "Tool security & trust boundaries — applied lab",
      "task": "Threat-model two tools and implement one server-side authorization/validation control.",
      "evidence": "A threat model with at least three threats and enforced mitigations.",
      "breakIt": "Pass attacker-controlled content through a tool parameter and verify the boundary rejects unsafe use.",
      "transfer": "These contracts and boundaries are the foundation for safe tool use and agent autonomy."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "30–45 min",
      "artifact": "A threat model with at least three threats and enforced mitigations.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Pass attacker-controlled content through a tool parameter and verify the boundary rejects unsafe use.",
      "reviewed": "2026-09-21",
      "freshness": "MCP specification 2026-07-28",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Treat tool inputs, outputs and external content as untrusted and constrain what actions can cross each trust boundary.",
    "usedLater": "These contracts and authorization boundaries are the foundation for safe tool use and agent autonomy.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "Which inputs and actions must be treated as untrusted and enforced outside the model?"
  },
  {
    "id": "13-7",
    "phase": "13",
    "phaseName": "Tools & Protocols",
    "title": "Tool error handling",
    "summary": "Agents need errors that distinguish retryable, invalid, unauthorized and permanent failures. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Agents need errors that distinguish retryable, invalid, unauthorized and permanent failures.",
    "body": "Design structured error categories and recovery hints without exposing secrets or internal implementation details.",
    "example": "Worked example: Implement an error taxonomy for one tool and map each category to agent behavior.",
    "takeaways": [
      "Design structured error categories and recovery hints without exposing secrets or internal implementation details.",
      "Practice: Implement an error taxonomy for one tool and map each category to agent behavior.",
      "Failure to diagnose: Make every error look retryable and observe the resulting loop/cost; fix the classification.",
      "Proof: An error taxonomy plus tests for each recovery path."
    ],
    "code": "tool = {\"name\":\"lookup_order\",\"input_schema\":{\"order_id\":\"string\"},\"output\":\"order status\"}\n# validate input before execution\nprint(tool)",
    "practice": "Implement an error taxonomy for one tool and map each category to agent behavior.",
    "breakIt": "Make every error look retryable and observe the resulting loop/cost; fix the classification.",
    "proof": "An error taxonomy plus tests for each recovery path.",
    "transfer": "These contracts and authorization boundaries are the foundation for safe tool use and agent autonomy.",
    "mistakes": [
      "Letting the model decide authorization.",
      "Giving tools broader permissions than the task requires.",
      "Returning ambiguous errors that encourage unsafe retries."
    ],
    "resources": [
      [
        "Model Context Protocol specification",
        "https://modelcontextprotocol.io/specification/draft/server/index"
      ],
      [
        "MCP TypeScript SDK",
        "https://ts.sdk.modelcontextprotocol.io/server"
      ]
    ],
    "experience": {
      "type": "Prove",
      "title": "Tool error handling — applied lab",
      "task": "Implement an error taxonomy for one tool and map each category to agent behavior.",
      "evidence": "An error taxonomy plus tests for each recovery path.",
      "breakIt": "Make every error look retryable and observe the resulting loop/cost; fix the classification.",
      "transfer": "These contracts and boundaries are the foundation for safe tool use and agent autonomy."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "30–45 min",
      "artifact": "An error taxonomy plus tests for each recovery path.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Make every error look retryable and observe the resulting loop/cost; fix the classification.",
      "reviewed": "2026-09-21",
      "freshness": "MCP specification 2026-07-28",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Return structured, recoverable tool errors that let the caller distinguish invalid input, transient failure and denied action.",
    "usedLater": "These contracts and authorization boundaries are the foundation for safe tool use and agent autonomy.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does tool error handling require, and what evidence would justify that choice?"
  },
  {
    "id": "13-8",
    "phase": "13",
    "phaseName": "Tools & Protocols",
    "title": "Build a safe tool-enabled application",
    "summary": "A tool-enabled app becomes useful only when selection, authorization, validation and recovery work together. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A tool-enabled app becomes useful only when selection, authorization, validation and recovery work together.",
    "body": "Combine the phase skills into a small application with at least two tools and explicit permissions.",
    "example": "Worked example: Build a read-only assistant that can query data and perform one bounded transformation.",
    "takeaways": [
      "Combine the phase skills into a small application with at least two tools and explicit permissions.",
      "Practice: Build a read-only assistant that can query data and perform one bounded transformation.",
      "Failure to diagnose: Attempt an unauthorized action, malformed call and transient failure; capture all three outcomes.",
      "Proof: A runnable app, permission matrix, tool tests and audit evidence."
    ],
    "code": "tool = {\"name\":\"lookup_order\",\"input_schema\":{\"order_id\":\"string\"},\"output\":\"order status\"}\n# validate input before execution\nprint(tool)",
    "practice": "Build a read-only assistant that can query data and perform one bounded transformation.",
    "breakIt": "Attempt an unauthorized action, malformed call and transient failure; capture all three outcomes.",
    "proof": "A runnable app, permission matrix, tool tests and audit evidence.",
    "transfer": "These contracts and authorization boundaries are the foundation for safe tool use and agent autonomy.",
    "mistakes": [
      "Letting the model decide authorization.",
      "Giving tools broader permissions than the task requires.",
      "Returning ambiguous errors that encourage unsafe retries."
    ],
    "resources": [
      [
        "Model Context Protocol specification",
        "https://modelcontextprotocol.io/specification/draft/server/index"
      ],
      [
        "MCP TypeScript SDK",
        "https://ts.sdk.modelcontextprotocol.io/server"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Build a safe tool-enabled application — applied lab",
      "task": "Build a read-only assistant that can query data and perform one bounded transformation.",
      "evidence": "A runnable app, permission matrix, tool tests and audit evidence.",
      "breakIt": "Attempt an unauthorized action, malformed call and transient failure; capture all three outcomes.",
      "transfer": "These contracts and boundaries are the foundation for safe tool use and agent autonomy."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "30–45 min",
      "artifact": "A runnable app, permission matrix, tool tests and audit evidence.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Attempt an unauthorized action, malformed call and transient failure; capture all three outcomes.",
      "reviewed": "2026-09-21",
      "freshness": "MCP specification 2026-07-28",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Build a tool-enabled workflow with narrow permissions, validated arguments, failure handling and an audit trail.",
    "usedLater": "These contracts and authorization boundaries are the foundation for safe tool use and agent autonomy.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does build a safe tool-enabled application require, and what evidence would justify that choice?"
  },
  {
    "id": "14-1",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Harness engineering",
    "summary": "As agents write more code, the engineer’s leverage shifts toward repository knowledge, tests, observability and feedback loops. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "As agents write more code, the engineer’s leverage shifts toward repository knowledge, tests, observability and feedback loops.",
    "body": "Treat the repository as an executable specification: structure, tests, docs, telemetry and cleanup rules make agent work legible and recoverable.",
    "example": "Worked example: Give an agent a small repository task and add tests, a contribution guide and a validation command before allowing broader changes.",
    "takeaways": [
      "Treat the repository as an executable specification: structure, tests, docs, telemetry and cleanup rules make agent work legible and recoverable.",
      "Practice: Give an agent a small repository task and add tests, a contribution guide and a validation command before allowing broader changes.",
      "Failure to diagnose: Remove the tests/architecture checks and observe how quickly an agent can create inconsistent work.",
      "Proof: A repository harness containing checks, guidance and a before/after agent run summary."
    ],
    "code": "state={\"goal\":\"find_order\",\"steps\":0,\"max_steps\":5}\nwhile state[\"steps\"] < state[\"max_steps\"]:\n    state[\"steps\"] += 1\n    # choose tool -> observe result -> update state\n    if state.get(\"done\"): break\nprint(state)",
    "practice": "Give an agent a small repository task and add tests, a contribution guide and a validation command before allowing broader changes.",
    "breakIt": "Remove the tests/architecture checks and observe how quickly an agent can create inconsistent work.",
    "proof": "A repository harness containing checks, guidance and a before/after agent run summary.",
    "transfer": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "mistakes": [
      "Adding autonomy before adding observability and termination controls.",
      "Treating memory as an undifferentiated transcript.",
      "Evaluating only final text while ignoring unsafe or wasteful intermediate actions."
    ],
    "resources": [
      [
        "OpenAI — Harness Engineering",
        "https://openai.com/index/harness-engineering/"
      ],
      [
        "OpenAI — Practical Guide to Building Agents",
        "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/"
      ],
      [
        "MLflow agent evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor/running-evaluation/agents/"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Harness engineering — applied lab",
      "task": "Give an agent a small repository task and add tests, a contribution guide and a validation command before allowing broader changes.",
      "evidence": "A repository harness containing checks, guidance and a before/after agent run summary.",
      "breakIt": "Remove the tests/architecture checks and observe how quickly an agent can create inconsistent work.",
      "transfer": "These agent design skills connect models, tools, context, state, evaluation and human control into one system."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A repository harness containing checks, guidance and a before/after agent run summary.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Remove the tests/architecture checks and observe how quickly an agent can create inconsistent work.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Build the tests, repository instructions, validation commands and observability an agent needs to make reliable changes.",
    "usedLater": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does harness engineering require, and what evidence would justify that choice?"
  },
  {
    "id": "14-2",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Loop engineering & termination",
    "summary": "An agent loop is a control system; without explicit progress and termination rules it can repeat work, spend budget or take unnecessary actions. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "An agent loop is a control system; without explicit progress and termination rules it can repeat work, spend budget or take unnecessary actions.",
    "body": "Model goal → state → action → observation → termination, including max steps, budgets and stop conditions.",
    "example": "Worked example: Implement a tiny tool loop with a step budget and explicit success/failure states.",
    "takeaways": [
      "Model goal → state → action → observation → termination, including max steps, budgets and stop conditions.",
      "Practice: Implement a tiny tool loop with a step budget and explicit success/failure states.",
      "Failure to diagnose: Return an observation that never satisfies the goal and prove the loop terminates safely.",
      "Proof: A state/termination diagram and trace showing bounded execution."
    ],
    "code": "state={\"goal\":\"find_order\",\"steps\":0,\"max_steps\":5}\nwhile state[\"steps\"] < state[\"max_steps\"]:\n    state[\"steps\"] += 1\n    # choose tool -> observe result -> update state\n    if state.get(\"done\"): break\nprint(state)",
    "practice": "Implement a tiny tool loop with a step budget and explicit success/failure states.",
    "breakIt": "Return an observation that never satisfies the goal and prove the loop terminates safely.",
    "proof": "A state/termination diagram and trace showing bounded execution.",
    "transfer": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "mistakes": [
      "Adding autonomy before adding observability and termination controls.",
      "Treating memory as an undifferentiated transcript.",
      "Evaluating only final text while ignoring unsafe or wasteful intermediate actions."
    ],
    "resources": [
      [
        "OpenAI — Harness Engineering",
        "https://openai.com/index/harness-engineering/"
      ],
      [
        "OpenAI — Practical Guide to Building Agents",
        "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/"
      ],
      [
        "MLflow agent evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor/running-evaluation/agents/"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Loop engineering & termination — applied lab",
      "task": "Implement a tiny tool loop with a step budget and explicit success/failure states.",
      "evidence": "A state/termination diagram and trace showing bounded execution.",
      "breakIt": "Return an observation that never satisfies the goal and prove the loop terminates safely.",
      "transfer": "These agent design skills connect models, tools, context, state, evaluation and human control into one system."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A state/termination diagram and trace showing bounded execution.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Return an observation that never satisfies the goal and prove the loop terminates safely.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Design an agent loop with explicit state, step limits, progress checks and termination conditions.",
    "usedLater": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does loop engineering & termination require, and what evidence would justify that choice?"
  },
  {
    "id": "14-3",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Context engineering for agents",
    "summary": "Agent context includes instructions, tools, history, state and retrieved information; poor curation can cause wrong actions even when each component works. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Agent context includes instructions, tools, history, state and retrieved information; poor curation can cause wrong actions even when each component works.",
    "body": "Design context around relevance, freshness, authority and budget rather than dumping everything into the prompt.",
    "example": "Worked example: Create a context policy and compare a curated trace with an overloaded trace.",
    "takeaways": [
      "Design context around relevance, freshness, authority and budget rather than dumping everything into the prompt.",
      "Practice: Create a context policy and compare a curated trace with an overloaded trace.",
      "Failure to diagnose: Inject stale instructions or conflicting state and diagnose which context item caused the behavior change.",
      "Proof: A context budget/policy plus trace comparison."
    ],
    "code": "state={\"goal\":\"find_order\",\"steps\":0,\"max_steps\":5}\nwhile state[\"steps\"] < state[\"max_steps\"]:\n    state[\"steps\"] += 1\n    # choose tool -> observe result -> update state\n    if state.get(\"done\"): break\nprint(state)",
    "practice": "Create a context policy and compare a curated trace with an overloaded trace.",
    "breakIt": "Inject stale instructions or conflicting state and diagnose which context item caused the behavior change.",
    "proof": "A context budget/policy plus trace comparison.",
    "transfer": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "mistakes": [
      "Adding autonomy before adding observability and termination controls.",
      "Treating memory as an undifferentiated transcript.",
      "Evaluating only final text while ignoring unsafe or wasteful intermediate actions."
    ],
    "resources": [
      [
        "OpenAI — Harness Engineering",
        "https://openai.com/index/harness-engineering/"
      ],
      [
        "OpenAI — Practical Guide to Building Agents",
        "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/"
      ],
      [
        "MLflow agent evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor/running-evaluation/agents/"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Context engineering for agents — applied lab",
      "task": "Create a context policy and compare a curated trace with an overloaded trace.",
      "evidence": "A context budget/policy plus trace comparison.",
      "breakIt": "Inject stale instructions or conflicting state and diagnose which context item caused the behavior change.",
      "transfer": "These agent design skills connect models, tools, context, state, evaluation and human control into one system."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A context budget/policy plus trace comparison.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Inject stale instructions or conflicting state and diagnose which context item caused the behavior change.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Control what an agent sees across instructions, history, tool results, retrieved data and summaries as the loop evolves.",
    "usedLater": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does context engineering for agents require, and what evidence would justify that choice?"
  },
  {
    "id": "14-4",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Tool design & recovery",
    "summary": "Agent reliability depends heavily on whether tools expose clear contracts and recoverable errors. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Agent reliability depends heavily on whether tools expose clear contracts and recoverable errors.",
    "body": "Design idempotent-ish, bounded tools with explicit success/failure results and safe retry semantics.",
    "example": "Worked example: Build a tool that returns structured results and distinguish retryable from permanent errors.",
    "takeaways": [
      "Design idempotent-ish, bounded tools with explicit success/failure results and safe retry semantics.",
      "Practice: Build a tool that returns structured results and distinguish retryable from permanent errors.",
      "Failure to diagnose: Force a partial failure after the side effect and reason about duplicate execution; add an idempotency key or recovery strategy.",
      "Proof: A tool contract, failure table and recovery test."
    ],
    "code": "state={\"goal\":\"find_order\",\"steps\":0,\"max_steps\":5}\nwhile state[\"steps\"] < state[\"max_steps\"]:\n    state[\"steps\"] += 1\n    # choose tool -> observe result -> update state\n    if state.get(\"done\"): break\nprint(state)",
    "practice": "Build a tool that returns structured results and distinguish retryable from permanent errors.",
    "breakIt": "Force a partial failure after the side effect and reason about duplicate execution; add an idempotency key or recovery strategy.",
    "proof": "A tool contract, failure table and recovery test.",
    "transfer": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "mistakes": [
      "Adding autonomy before adding observability and termination controls.",
      "Treating memory as an undifferentiated transcript.",
      "Evaluating only final text while ignoring unsafe or wasteful intermediate actions."
    ],
    "resources": [
      [
        "OpenAI — Harness Engineering",
        "https://openai.com/index/harness-engineering/"
      ],
      [
        "OpenAI — Practical Guide to Building Agents",
        "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/"
      ],
      [
        "MLflow agent evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor/running-evaluation/agents/"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Tool design & recovery — applied lab",
      "task": "Build a tool that returns structured results and distinguish retryable from permanent errors.",
      "evidence": "A tool contract, failure table and recovery test.",
      "breakIt": "Force a partial failure after the side effect and reason about duplicate execution; add an idempotency key or recovery strategy.",
      "transfer": "These agent design skills connect models, tools, context, state, evaluation and human control into one system."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A tool contract, failure table and recovery test.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Force a partial failure after the side effect and reason about duplicate execution; add an idempotency key or recovery strategy.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Design agent tools that expose useful capabilities while making failures, retries and partial success explicit.",
    "usedLater": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does tool design & recovery require, and what evidence would justify that choice?"
  },
  {
    "id": "14-5",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Memory architecture",
    "summary": "Memory is not one database; short-lived state, durable facts and retrieval history have different lifetimes and privacy risks. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Memory is not one database; short-lived state, durable facts and retrieval history have different lifetimes and privacy risks.",
    "body": "Define memory classes, write policies, retrieval policies, expiry and deletion semantics.",
    "example": "Worked example: Design a memory policy for an assistant and test what should/should not persist.",
    "takeaways": [
      "Define memory classes, write policies, retrieval policies, expiry and deletion semantics.",
      "Practice: Design a memory policy for an assistant and test what should/should not persist.",
      "Failure to diagnose: Inject sensitive information and show that the memory policy prevents accidental durable storage.",
      "Proof: A memory policy table with examples and a sensitive-data test."
    ],
    "code": "state={\"goal\":\"find_order\",\"steps\":0,\"max_steps\":5}\nwhile state[\"steps\"] < state[\"max_steps\"]:\n    state[\"steps\"] += 1\n    # choose tool -> observe result -> update state\n    if state.get(\"done\"): break\nprint(state)",
    "practice": "Design a memory policy for an assistant and test what should/should not persist.",
    "breakIt": "Inject sensitive information and show that the memory policy prevents accidental durable storage.",
    "proof": "A memory policy table with examples and a sensitive-data test.",
    "transfer": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "mistakes": [
      "Adding autonomy before adding observability and termination controls.",
      "Treating memory as an undifferentiated transcript.",
      "Evaluating only final text while ignoring unsafe or wasteful intermediate actions."
    ],
    "resources": [
      [
        "OpenAI — Harness Engineering",
        "https://openai.com/index/harness-engineering/"
      ],
      [
        "OpenAI — Practical Guide to Building Agents",
        "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/"
      ],
      [
        "MLflow agent evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor/running-evaluation/agents/"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "Memory architecture — applied lab",
      "task": "Design a memory policy for an assistant and test what should/should not persist.",
      "evidence": "A memory policy table with examples and a sensitive-data test.",
      "breakIt": "Inject sensitive information and show that the memory policy prevents accidental durable storage.",
      "transfer": "These agent design skills connect models, tools, context, state, evaluation and human control into one system."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A memory policy table with examples and a sensitive-data test.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Inject sensitive information and show that the memory policy prevents accidental durable storage.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Choose what belongs in working context, short-lived state or durable memory and define how memory is retrieved and updated.",
    "usedLater": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does memory architecture require, and what evidence would justify that choice?"
  },
  {
    "id": "14-6",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Orchestration patterns",
    "summary": "Multiple agents or steps add coordination cost; parallelism only helps when dependencies permit it. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Multiple agents or steps add coordination cost; parallelism only helps when dependencies permit it.",
    "body": "Compare sequential, parallel, planner/worker and handoff patterns using explicit contracts and provenance.",
    "example": "Worked example: Draw a workflow and identify which tasks can safely run in parallel.",
    "takeaways": [
      "Compare sequential, parallel, planner/worker and handoff patterns using explicit contracts and provenance.",
      "Practice: Draw a workflow and identify which tasks can safely run in parallel.",
      "Failure to diagnose: Parallelize dependent work and demonstrate the inconsistency; repair the dependency graph.",
      "Proof: A routing graph with dependency annotations and a failure example."
    ],
    "code": "state={\"goal\":\"find_order\",\"steps\":0,\"max_steps\":5}\nwhile state[\"steps\"] < state[\"max_steps\"]:\n    state[\"steps\"] += 1\n    # choose tool -> observe result -> update state\n    if state.get(\"done\"): break\nprint(state)",
    "practice": "Draw a workflow and identify which tasks can safely run in parallel.",
    "breakIt": "Parallelize dependent work and demonstrate the inconsistency; repair the dependency graph.",
    "proof": "A routing graph with dependency annotations and a failure example.",
    "transfer": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "mistakes": [
      "Adding autonomy before adding observability and termination controls.",
      "Treating memory as an undifferentiated transcript.",
      "Evaluating only final text while ignoring unsafe or wasteful intermediate actions."
    ],
    "resources": [
      [
        "OpenAI — Harness Engineering",
        "https://openai.com/index/harness-engineering/"
      ],
      [
        "OpenAI — Practical Guide to Building Agents",
        "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/"
      ],
      [
        "MLflow agent evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor/running-evaluation/agents/"
      ]
    ],
    "experience": {
      "type": "Design",
      "title": "Orchestration patterns — applied lab",
      "task": "Draw a workflow and identify which tasks can safely run in parallel.",
      "evidence": "A routing graph with dependency annotations and a failure example.",
      "breakIt": "Parallelize dependent work and demonstrate the inconsistency; repair the dependency graph.",
      "transfer": "These agent design skills connect models, tools, context, state, evaluation and human control into one system."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A routing graph with dependency annotations and a failure example.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Parallelize dependent work and demonstrate the inconsistency; repair the dependency graph.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Choose between a simple loop, sequential workflow, parallel branches or handoffs based on dependencies and control requirements.",
    "usedLater": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does orchestration patterns require, and what evidence would justify that choice?"
  },
  {
    "id": "14-7",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Guardrails & permissions",
    "summary": "The safest agent is not the one with the most warnings; it is the one whose high-impact actions are bounded by enforceable controls. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "The safest agent is not the one with the most warnings; it is the one whose high-impact actions are bounded by enforceable controls.",
    "body": "Apply least privilege, allowlists, approval gates and server-side validation to agent actions.",
    "example": "Worked example: Create a permission matrix and block one high-impact action without relying on model instructions.",
    "takeaways": [
      "Apply least privilege, allowlists, approval gates and server-side validation to agent actions.",
      "Practice: Create a permission matrix and block one high-impact action without relying on model instructions.",
      "Failure to diagnose: Modify the prompt to request the blocked action and verify the external policy still rejects it.",
      "Proof: A permission/approval policy and a blocked-action trace."
    ],
    "code": "state={\"goal\":\"find_order\",\"steps\":0,\"max_steps\":5}\nwhile state[\"steps\"] < state[\"max_steps\"]:\n    state[\"steps\"] += 1\n    # choose tool -> observe result -> update state\n    if state.get(\"done\"): break\nprint(state)",
    "practice": "Create a permission matrix and block one high-impact action without relying on model instructions.",
    "breakIt": "Modify the prompt to request the blocked action and verify the external policy still rejects it.",
    "proof": "A permission/approval policy and a blocked-action trace.",
    "transfer": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "mistakes": [
      "Adding autonomy before adding observability and termination controls.",
      "Treating memory as an undifferentiated transcript.",
      "Evaluating only final text while ignoring unsafe or wasteful intermediate actions."
    ],
    "resources": [
      [
        "OpenAI — Harness Engineering",
        "https://openai.com/index/harness-engineering/"
      ],
      [
        "OpenAI — Practical Guide to Building Agents",
        "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/"
      ],
      [
        "MLflow agent evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor/running-evaluation/agents/"
      ]
    ],
    "experience": {
      "type": "Prove",
      "title": "Guardrails & permissions — applied lab",
      "task": "Create a permission matrix and block one high-impact action without relying on model instructions.",
      "evidence": "A permission/approval policy and a blocked-action trace.",
      "breakIt": "Modify the prompt to request the blocked action and verify the external policy still rejects it.",
      "transfer": "These agent design skills connect models, tools, context, state, evaluation and human control into one system."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A permission/approval policy and a blocked-action trace.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Modify the prompt to request the blocked action and verify the external policy still rejects it.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Constrain agent actions with least privilege, explicit allowed operations, approval gates and server-side enforcement.",
    "usedLater": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does guardrails & permissions require, and what evidence would justify that choice?"
  },
  {
    "id": "14-8",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Agent evaluation",
    "summary": "Agents can fail in their final answer, intermediate reasoning, tool use or state transitions; one final score can hide the cause. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Agents can fail in their final answer, intermediate reasoning, tool use or state transitions; one final score can hide the cause.",
    "body": "Separate outcome evaluation from trajectory/tool-call evaluation and preserve traces for diagnosis.",
    "example": "Worked example: Create a small agent eval set with expected outcomes and tool-use assertions.",
    "takeaways": [
      "Separate outcome evaluation from trajectory/tool-call evaluation and preserve traces for diagnosis.",
      "Practice: Create a small agent eval set with expected outcomes and tool-use assertions.",
      "Failure to diagnose: Change a tool description and use the trace to catch a regression even when one final answer still looks acceptable.",
      "Proof: A golden set, trace examples and evaluation report."
    ],
    "code": "state={\"goal\":\"find_order\",\"steps\":0,\"max_steps\":5}\nwhile state[\"steps\"] < state[\"max_steps\"]:\n    state[\"steps\"] += 1\n    # choose tool -> observe result -> update state\n    if state.get(\"done\"): break\nprint(state)",
    "practice": "Create a small agent eval set with expected outcomes and tool-use assertions.",
    "breakIt": "Change a tool description and use the trace to catch a regression even when one final answer still looks acceptable.",
    "proof": "A golden set, trace examples and evaluation report.",
    "transfer": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "mistakes": [
      "Adding autonomy before adding observability and termination controls.",
      "Treating memory as an undifferentiated transcript.",
      "Evaluating only final text while ignoring unsafe or wasteful intermediate actions."
    ],
    "resources": [
      [
        "OpenAI — Harness Engineering",
        "https://openai.com/index/harness-engineering/"
      ],
      [
        "OpenAI — Practical Guide to Building Agents",
        "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/"
      ],
      [
        "MLflow agent evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor/running-evaluation/agents/"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Agent evaluation — applied lab",
      "task": "Create a small agent eval set with expected outcomes and tool-use assertions.",
      "evidence": "A golden set, trace examples and evaluation report.",
      "breakIt": "Change a tool description and use the trace to catch a regression even when one final answer still looks acceptable.",
      "transfer": "These agent design skills connect models, tools, context, state, evaluation and human control into one system."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A golden set, trace examples and evaluation report.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Change a tool description and use the trace to catch a regression even when one final answer still looks acceptable.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Evaluate both the final outcome and important intermediate behavior such as tool selection, arguments and recovery.",
    "usedLater": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "Which intermediate behavior must be constrained even when the final answer looks correct?"
  },
  {
    "id": "14-9",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Human-in-the-loop design",
    "summary": "Human review is most useful when it is placed at the right risk boundary with enough context to make a decision. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Human review is most useful when it is placed at the right risk boundary with enough context to make a decision.",
    "body": "Design approval states, reviewer context, timeout behavior and rejection semantics for high-impact actions.",
    "example": "Worked example: Build a state machine for an approval-required action.",
    "takeaways": [
      "Design approval states, reviewer context, timeout behavior and rejection semantics for high-impact actions.",
      "Practice: Build a state machine for an approval-required action.",
      "Failure to diagnose: Remove the approval gate or hide critical context and identify the new failure mode.",
      "Proof: A human-approval state machine with approve/reject/timeout paths."
    ],
    "code": "state={\"goal\":\"find_order\",\"steps\":0,\"max_steps\":5}\nwhile state[\"steps\"] < state[\"max_steps\"]:\n    state[\"steps\"] += 1\n    # choose tool -> observe result -> update state\n    if state.get(\"done\"): break\nprint(state)",
    "practice": "Build a state machine for an approval-required action.",
    "breakIt": "Remove the approval gate or hide critical context and identify the new failure mode.",
    "proof": "A human-approval state machine with approve/reject/timeout paths.",
    "transfer": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "mistakes": [
      "Adding autonomy before adding observability and termination controls.",
      "Treating memory as an undifferentiated transcript.",
      "Evaluating only final text while ignoring unsafe or wasteful intermediate actions."
    ],
    "resources": [
      [
        "OpenAI — Harness Engineering",
        "https://openai.com/index/harness-engineering/"
      ],
      [
        "OpenAI — Practical Guide to Building Agents",
        "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/"
      ],
      [
        "MLflow agent evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor/running-evaluation/agents/"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Human-in-the-loop design — applied lab",
      "task": "Build a state machine for an approval-required action.",
      "evidence": "A human-approval state machine with approve/reject/timeout paths.",
      "breakIt": "Remove the approval gate or hide critical context and identify the new failure mode.",
      "transfer": "These agent design skills connect models, tools, context, state, evaluation and human control into one system."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A human-approval state machine with approve/reject/timeout paths.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Remove the approval gate or hide critical context and identify the new failure mode.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Place human review at decisions where uncertainty, risk or irreversible side effects justify intervention.",
    "usedLater": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does human-in-the-loop design require, and what evidence would justify that choice?"
  },
  {
    "id": "14-10",
    "phase": "14",
    "phaseName": "Agent Engineering",
    "title": "Observability & tracing",
    "summary": "Without traces, an agent incident becomes a guess about which model call, tool, retry or state transition caused the result. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Without traces, an agent incident becomes a guess about which model call, tool, retry or state transition caused the result.",
    "body": "Capture run IDs, step timing, tool calls, errors, model/version metadata and safe context references.",
    "example": "Worked example: Instrument a small agent run and reconstruct it from its trace without reading the source first.",
    "takeaways": [
      "Capture run IDs, step timing, tool calls, errors, model/version metadata and safe context references.",
      "Practice: Instrument a small agent run and reconstruct it from its trace without reading the source first.",
      "Failure to diagnose: Hide one critical telemetry field and document what diagnosis becomes impossible.",
      "Proof: A trace-style incident report showing the full run and one actionable improvement."
    ],
    "code": "state={\"goal\":\"find_order\",\"steps\":0,\"max_steps\":5}\nwhile state[\"steps\"] < state[\"max_steps\"]:\n    state[\"steps\"] += 1\n    # choose tool -> observe result -> update state\n    if state.get(\"done\"): break\nprint(state)",
    "practice": "Instrument a small agent run and reconstruct it from its trace without reading the source first.",
    "breakIt": "Hide one critical telemetry field and document what diagnosis becomes impossible.",
    "proof": "A trace-style incident report showing the full run and one actionable improvement.",
    "transfer": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "mistakes": [
      "Adding autonomy before adding observability and termination controls.",
      "Treating memory as an undifferentiated transcript.",
      "Evaluating only final text while ignoring unsafe or wasteful intermediate actions."
    ],
    "resources": [
      [
        "OpenAI — Harness Engineering",
        "https://openai.com/index/harness-engineering/"
      ],
      [
        "OpenAI — Practical Guide to Building Agents",
        "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/"
      ],
      [
        "MLflow agent evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor/running-evaluation/agents/"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Observability & tracing — applied lab",
      "task": "Instrument a small agent run and reconstruct it from its trace without reading the source first.",
      "evidence": "A trace-style incident report showing the full run and one actionable improvement.",
      "breakIt": "Hide one critical telemetry field and document what diagnosis becomes impossible.",
      "transfer": "These agent design skills connect models, tools, context, state, evaluation and human control into one system."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A trace-style incident report showing the full run and one actionable improvement.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Hide one critical telemetry field and document what diagnosis becomes impossible.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Instrument production AI requests so latency, errors, model versions, token usage and downstream calls can be correlated.",
    "usedLater": "These agent patterns connect models, tools, context, state, evaluation and human control into one system.",
    "guidedSteps": [
      "Define the system boundary and the contract the component must satisfy.",
      "Build the smallest working path with one representative input.",
      "Inject one realistic failure or adversarial input.",
      "Capture evidence showing both normal behavior and the control that limits the failure."
    ],
    "decision": "What engineering choice does observability & tracing require, and what evidence would justify that choice?"
  },
  {
    "id": "15-1",
    "phase": "15",
    "phaseName": "AI Systems & Reliability",
    "title": "State machines & explicit workflow state",
    "summary": "Long-running AI workflows become safer when state and allowed transitions are explicit instead of hidden in prompts or mutable flags. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Long-running AI workflows become safer when state and allowed transitions are explicit instead of hidden in prompts or mutable flags.",
    "body": "Model states, events, guards and transitions; keep business state separate from transient model output.",
    "example": "Worked example: Design a state machine for a document-processing job with retry and approval states.",
    "takeaways": [
      "Model states, events, guards and transitions; keep business state separate from transient model output.",
      "Practice: Design a state machine for a document-processing job with retry and approval states.",
      "Failure to diagnose: Allow an invalid transition and prove the system rejects it rather than silently skipping a required step.",
      "Proof: A state diagram plus transition tests."
    ],
    "code": "state=\"QUEUED\"\nallowed={\"QUEUED\":{\"RUNNING\"},\"RUNNING\":{\"SUCCEEDED\",\"FAILED\"},\"FAILED\":{\"RETRYING\"}}\nprint(state, allowed[state])",
    "practice": "Design a state machine for a document-processing job with retry and approval states.",
    "breakIt": "Allow an invalid transition and prove the system rejects it rather than silently skipping a required step.",
    "proof": "A state diagram plus transition tests.",
    "transfer": "These reliability patterns keep AI workflows correct when retries, concurrency, long-running work and partial failure occur.",
    "mistakes": [
      "Retrying non-idempotent operations blindly.",
      "Persisting too little state to recover after a restart.",
      "Assuming concurrency bugs will reproduce under one local run."
    ],
    "resources": [
      [
        "Python asyncio documentation",
        "https://docs.python.org/3/library/asyncio.html"
      ],
      [
        "OpenTelemetry",
        "https://opentelemetry.io/"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "State machines & explicit workflow state — applied lab",
      "task": "Design a state machine for a document-processing job with retry and approval states.",
      "evidence": "A state diagram plus transition tests.",
      "breakIt": "Allow an invalid transition and prove the system rejects it rather than silently skipping a required step.",
      "transfer": "These reliability patterns keep AI workflows correct when retries, concurrency and partial failure occur."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A state diagram plus transition tests.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Allow an invalid transition and prove the system rejects it rather than silently skipping a required step.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Represent workflow state explicitly so retries and restarts can resume from a known state rather than replaying blindly.",
    "usedLater": "These reliability patterns keep AI workflows correct when retries, concurrency, long-running work and partial failure occur.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does state machines & explicit workflow state require, and what evidence would justify that choice?"
  },
  {
    "id": "15-2",
    "phase": "15",
    "phaseName": "AI Systems & Reliability",
    "title": "Workflow orchestration",
    "summary": "A multi-step workflow needs durable coordination, not just a chain of function calls. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A multi-step workflow needs durable coordination, not just a chain of function calls.",
    "body": "Define step boundaries, inputs/outputs, retries and durable state; distinguish orchestration from business logic.",
    "example": "Worked example: Implement or sketch a workflow with three steps and one persisted checkpoint.",
    "takeaways": [
      "Define step boundaries, inputs/outputs, retries and durable state; distinguish orchestration from business logic.",
      "Practice: Implement or sketch a workflow with three steps and one persisted checkpoint.",
      "Failure to diagnose: Restart after step two and verify the workflow resumes from known state rather than duplicating completed work.",
      "Proof: A workflow diagram and restart/resume evidence."
    ],
    "code": "state=\"QUEUED\"\nallowed={\"QUEUED\":{\"RUNNING\"},\"RUNNING\":{\"SUCCEEDED\",\"FAILED\"},\"FAILED\":{\"RETRYING\"}}\nprint(state, allowed[state])",
    "practice": "Implement or sketch a workflow with three steps and one persisted checkpoint.",
    "breakIt": "Restart after step two and verify the workflow resumes from known state rather than duplicating completed work.",
    "proof": "A workflow diagram and restart/resume evidence.",
    "transfer": "These reliability patterns keep AI workflows correct when retries, concurrency, long-running work and partial failure occur.",
    "mistakes": [
      "Retrying non-idempotent operations blindly.",
      "Persisting too little state to recover after a restart.",
      "Assuming concurrency bugs will reproduce under one local run."
    ],
    "resources": [
      [
        "Python asyncio documentation",
        "https://docs.python.org/3/library/asyncio.html"
      ],
      [
        "OpenTelemetry",
        "https://opentelemetry.io/"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Workflow orchestration — applied lab",
      "task": "Implement or sketch a workflow with three steps and one persisted checkpoint.",
      "evidence": "A workflow diagram and restart/resume evidence.",
      "breakIt": "Restart after step two and verify the workflow resumes from known state rather than duplicating completed work.",
      "transfer": "These reliability patterns keep AI workflows correct when retries, concurrency and partial failure occur."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A workflow diagram and restart/resume evidence.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Restart after step two and verify the workflow resumes from known state rather than duplicating completed work.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Coordinate multi-step work with explicit dependencies, timeouts and recovery boundaries.",
    "usedLater": "These reliability patterns keep AI workflows correct when retries, concurrency, long-running work and partial failure occur.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does workflow orchestration require, and what evidence would justify that choice?"
  },
  {
    "id": "15-3",
    "phase": "15",
    "phaseName": "AI Systems & Reliability",
    "title": "Queues & background jobs",
    "summary": "Long or bursty AI tasks should not block request/response paths; queues separate producers from workers and absorb uneven load. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Long or bursty AI tasks should not block request/response paths; queues separate producers from workers and absorb uneven load.",
    "body": "Understand enqueue/dequeue, visibility, acknowledgement, backpressure and worker concurrency.",
    "example": "Worked example: Move a simulated slow task behind a queue and observe request latency versus worker throughput.",
    "takeaways": [
      "Understand enqueue/dequeue, visibility, acknowledgement, backpressure and worker concurrency.",
      "Practice: Move a simulated slow task behind a queue and observe request latency versus worker throughput.",
      "Failure to diagnose: Crash a worker before acknowledgement and explain what should happen to the message.",
      "Proof: A queue flow diagram plus duplicate/failure handling decision."
    ],
    "code": "state=\"QUEUED\"\nallowed={\"QUEUED\":{\"RUNNING\"},\"RUNNING\":{\"SUCCEEDED\",\"FAILED\"},\"FAILED\":{\"RETRYING\"}}\nprint(state, allowed[state])",
    "practice": "Move a simulated slow task behind a queue and observe request latency versus worker throughput.",
    "breakIt": "Crash a worker before acknowledgement and explain what should happen to the message.",
    "proof": "A queue flow diagram plus duplicate/failure handling decision.",
    "transfer": "These reliability patterns keep AI workflows correct when retries, concurrency, long-running work and partial failure occur.",
    "mistakes": [
      "Retrying non-idempotent operations blindly.",
      "Persisting too little state to recover after a restart.",
      "Assuming concurrency bugs will reproduce under one local run."
    ],
    "resources": [
      [
        "Python asyncio documentation",
        "https://docs.python.org/3/library/asyncio.html"
      ],
      [
        "OpenTelemetry",
        "https://opentelemetry.io/"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Queues & background jobs — applied lab",
      "task": "Move a simulated slow task behind a queue and observe request latency versus worker throughput.",
      "evidence": "A queue flow diagram plus duplicate/failure handling decision.",
      "breakIt": "Crash a worker before acknowledgement and explain what should happen to the message.",
      "transfer": "These reliability patterns keep AI workflows correct when retries, concurrency and partial failure occur."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A queue flow diagram plus duplicate/failure handling decision.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Crash a worker before acknowledgement and explain what should happen to the message.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Move long or asynchronous work behind a queue with clear job state, ownership and retry behavior.",
    "usedLater": "These reliability patterns keep AI workflows correct when retries, concurrency, long-running work and partial failure occur.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does queues & background jobs require, and what evidence would justify that choice?"
  },
  {
    "id": "15-4",
    "phase": "15",
    "phaseName": "AI Systems & Reliability",
    "title": "Retries, backoff & idempotency",
    "summary": "Retries improve resilience only when repeated work is safe and the retry schedule avoids amplifying an outage. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Retries improve resilience only when repeated work is safe and the retry schedule avoids amplifying an outage.",
    "body": "Classify failures, use exponential backoff/jitter, and design idempotency keys around side effects.",
    "example": "Worked example: Add bounded retries to a transient API call and make a write operation idempotent.",
    "takeaways": [
      "Classify failures, use exponential backoff/jitter, and design idempotency keys around side effects.",
      "Practice: Add bounded retries to a transient API call and make a write operation idempotent.",
      "Failure to diagnose: Retry a non-idempotent side effect after a timeout and show the duplicate outcome.",
      "Proof: A retry policy table plus a test proving duplicate delivery does not duplicate the business effect."
    ],
    "code": "state=\"QUEUED\"\nallowed={\"QUEUED\":{\"RUNNING\"},\"RUNNING\":{\"SUCCEEDED\",\"FAILED\"},\"FAILED\":{\"RETRYING\"}}\nprint(state, allowed[state])",
    "practice": "Add bounded retries to a transient API call and make a write operation idempotent.",
    "breakIt": "Retry a non-idempotent side effect after a timeout and show the duplicate outcome.",
    "proof": "A retry policy table plus a test proving duplicate delivery does not duplicate the business effect.",
    "transfer": "These reliability patterns keep AI workflows correct when retries, concurrency, long-running work and partial failure occur.",
    "mistakes": [
      "Retrying non-idempotent operations blindly.",
      "Persisting too little state to recover after a restart.",
      "Assuming concurrency bugs will reproduce under one local run."
    ],
    "resources": [
      [
        "Python asyncio documentation",
        "https://docs.python.org/3/library/asyncio.html"
      ],
      [
        "OpenTelemetry",
        "https://opentelemetry.io/"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Retries, backoff & idempotency — applied lab",
      "task": "Add bounded retries to a transient API call and make a write operation idempotent.",
      "evidence": "A retry policy table plus a test proving duplicate delivery does not duplicate the business effect.",
      "breakIt": "Retry a non-idempotent side effect after a timeout and show the duplicate outcome.",
      "transfer": "These reliability patterns keep AI workflows correct when retries, concurrency and partial failure occur."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A retry policy table plus a test proving duplicate delivery does not duplicate the business effect.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Retry a non-idempotent side effect after a timeout and show the duplicate outcome.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Retry transient failures safely by combining bounded backoff with idempotent operations and explicit attempt state.",
    "usedLater": "These reliability patterns keep AI workflows correct when retries, concurrency, long-running work and partial failure occur.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "Is this operation safe to retry, and what makes repeated execution harmless?"
  },
  {
    "id": "15-5",
    "phase": "15",
    "phaseName": "AI Systems & Reliability",
    "title": "Long-running tasks & checkpoints",
    "summary": "AI workflows can outlive a request, process or machine; checkpoints turn interruption into resumable state. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "AI workflows can outlive a request, process or machine; checkpoints turn interruption into resumable state.",
    "body": "Store progress at meaningful boundaries and make restart semantics explicit.",
    "example": "Worked example: Split a simulated long job into checkpoints and resume after a forced interruption.",
    "takeaways": [
      "Store progress at meaningful boundaries and make restart semantics explicit.",
      "Practice: Split a simulated long job into checkpoints and resume after a forced interruption.",
      "Failure to diagnose: Corrupt or skip a checkpoint and verify the system detects the invalid state.",
      "Proof: A checkpoint format and resume trace."
    ],
    "code": "state=\"QUEUED\"\nallowed={\"QUEUED\":{\"RUNNING\"},\"RUNNING\":{\"SUCCEEDED\",\"FAILED\"},\"FAILED\":{\"RETRYING\"}}\nprint(state, allowed[state])",
    "practice": "Split a simulated long job into checkpoints and resume after a forced interruption.",
    "breakIt": "Corrupt or skip a checkpoint and verify the system detects the invalid state.",
    "proof": "A checkpoint format and resume trace.",
    "transfer": "These reliability patterns keep AI workflows correct when retries, concurrency, long-running work and partial failure occur.",
    "mistakes": [
      "Retrying non-idempotent operations blindly.",
      "Persisting too little state to recover after a restart.",
      "Assuming concurrency bugs will reproduce under one local run."
    ],
    "resources": [
      [
        "Python asyncio documentation",
        "https://docs.python.org/3/library/asyncio.html"
      ],
      [
        "OpenTelemetry",
        "https://opentelemetry.io/"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "Long-running tasks & checkpoints — applied lab",
      "task": "Split a simulated long job into checkpoints and resume after a forced interruption.",
      "evidence": "A checkpoint format and resume trace.",
      "breakIt": "Corrupt or skip a checkpoint and verify the system detects the invalid state.",
      "transfer": "These reliability patterns keep AI workflows correct when retries, concurrency and partial failure occur."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A checkpoint format and resume trace.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Corrupt or skip a checkpoint and verify the system detects the invalid state.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Persist progress checkpoints so long-running AI work can resume after interruption without duplicating side effects.",
    "usedLater": "These reliability patterns keep AI workflows correct when retries, concurrency, long-running work and partial failure occur.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does long-running tasks & checkpoints require, and what evidence would justify that choice?"
  },
  {
    "id": "15-6",
    "phase": "15",
    "phaseName": "AI Systems & Reliability",
    "title": "Caching & concurrency",
    "summary": "Concurrent AI workloads can waste resources or corrupt shared state when cache and synchronization rules are implicit. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Concurrent AI workloads can waste resources or corrupt shared state when cache and synchronization rules are implicit.",
    "body": "Reason about race conditions, cache keys, locks/leases and safe concurrent updates.",
    "example": "Worked example: Run concurrent requests against a shared cache/store and detect duplicate work or inconsistent state.",
    "takeaways": [
      "Reason about race conditions, cache keys, locks/leases and safe concurrent updates.",
      "Practice: Run concurrent requests against a shared cache/store and detect duplicate work or inconsistent state.",
      "Failure to diagnose: Remove synchronization or use an unsafe cache key and reproduce the race.",
      "Proof: A concurrency test with observed race and mitigation."
    ],
    "code": "state=\"QUEUED\"\nallowed={\"QUEUED\":{\"RUNNING\"},\"RUNNING\":{\"SUCCEEDED\",\"FAILED\"},\"FAILED\":{\"RETRYING\"}}\nprint(state, allowed[state])",
    "practice": "Run concurrent requests against a shared cache/store and detect duplicate work or inconsistent state.",
    "breakIt": "Remove synchronization or use an unsafe cache key and reproduce the race.",
    "proof": "A concurrency test with observed race and mitigation.",
    "transfer": "These reliability patterns keep AI workflows correct when retries, concurrency, long-running work and partial failure occur.",
    "mistakes": [
      "Retrying non-idempotent operations blindly.",
      "Persisting too little state to recover after a restart.",
      "Assuming concurrency bugs will reproduce under one local run."
    ],
    "resources": [
      [
        "Python asyncio documentation",
        "https://docs.python.org/3/library/asyncio.html"
      ],
      [
        "OpenTelemetry",
        "https://opentelemetry.io/"
      ]
    ],
    "experience": {
      "type": "Design",
      "title": "Caching & concurrency — applied lab",
      "task": "Run concurrent requests against a shared cache/store and detect duplicate work or inconsistent state.",
      "evidence": "A concurrency test with observed race and mitigation.",
      "breakIt": "Remove synchronization or use an unsafe cache key and reproduce the race.",
      "transfer": "These reliability patterns keep AI workflows correct when retries, concurrency and partial failure occur."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A concurrency test with observed race and mitigation.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Remove synchronization or use an unsafe cache key and reproduce the race.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Control concurrent work and cache reusable results without creating race conditions, stale reads or duplicate side effects.",
    "usedLater": "These reliability patterns keep AI workflows correct when retries, concurrency, long-running work and partial failure occur.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does caching & concurrency require, and what evidence would justify that choice?"
  },
  {
    "id": "15-7",
    "phase": "15",
    "phaseName": "AI Systems & Reliability",
    "title": "Failure recovery & compensation",
    "summary": "Distributed operations can partially succeed; “retry everything” is not a recovery strategy. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Distributed operations can partially succeed; “retry everything” is not a recovery strategy.",
    "body": "Distinguish rollback, compensation, retry and manual intervention for multi-step work.",
    "example": "Worked example: Design a compensation path for a workflow with two external side effects.",
    "takeaways": [
      "Distinguish rollback, compensation, retry and manual intervention for multi-step work.",
      "Practice: Design a compensation path for a workflow with two external side effects.",
      "Failure to diagnose: Fail after the first side effect and verify the recovery path restores a safe state.",
      "Proof: A failure matrix mapping each failure point to recovery/compensation."
    ],
    "code": "state=\"QUEUED\"\nallowed={\"QUEUED\":{\"RUNNING\"},\"RUNNING\":{\"SUCCEEDED\",\"FAILED\"},\"FAILED\":{\"RETRYING\"}}\nprint(state, allowed[state])",
    "practice": "Design a compensation path for a workflow with two external side effects.",
    "breakIt": "Fail after the first side effect and verify the recovery path restores a safe state.",
    "proof": "A failure matrix mapping each failure point to recovery/compensation.",
    "transfer": "These reliability patterns keep AI workflows correct when retries, concurrency, long-running work and partial failure occur.",
    "mistakes": [
      "Retrying non-idempotent operations blindly.",
      "Persisting too little state to recover after a restart.",
      "Assuming concurrency bugs will reproduce under one local run."
    ],
    "resources": [
      [
        "Python asyncio documentation",
        "https://docs.python.org/3/library/asyncio.html"
      ],
      [
        "OpenTelemetry",
        "https://opentelemetry.io/"
      ]
    ],
    "experience": {
      "type": "Prove",
      "title": "Failure recovery & compensation — applied lab",
      "task": "Design a compensation path for a workflow with two external side effects.",
      "evidence": "A failure matrix mapping each failure point to recovery/compensation.",
      "breakIt": "Fail after the first side effect and verify the recovery path restores a safe state.",
      "transfer": "These reliability patterns keep AI workflows correct when retries, concurrency and partial failure occur."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A failure matrix mapping each failure point to recovery/compensation.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Fail after the first side effect and verify the recovery path restores a safe state.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Design recovery paths for partial failure, including compensation when a multi-step operation cannot be rolled back directly.",
    "usedLater": "These reliability patterns keep AI workflows correct when retries, concurrency, long-running work and partial failure occur.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does failure recovery & compensation require, and what evidence would justify that choice?"
  },
  {
    "id": "15-8",
    "phase": "15",
    "phaseName": "AI Systems & Reliability",
    "title": "Design a reliable AI workflow",
    "summary": "Reliability comes from explicit state, bounded retries, durable work, observability and tested recovery paths working together. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Reliability comes from explicit state, bounded retries, durable work, observability and tested recovery paths working together.",
    "body": "Assemble the phase into one design and identify the operational assumptions that must be true.",
    "example": "Worked example: Design a production-style AI workflow and simulate restart, timeout and partial failure.",
    "takeaways": [
      "Assemble the phase into one design and identify the operational assumptions that must be true.",
      "Practice: Design a production-style AI workflow and simulate restart, timeout and partial failure.",
      "Failure to diagnose: Remove one reliability control at a time and document the resulting failure.",
      "Proof: A reliability review pack: architecture, state model, failure matrix and test evidence."
    ],
    "code": "state=\"QUEUED\"\nallowed={\"QUEUED\":{\"RUNNING\"},\"RUNNING\":{\"SUCCEEDED\",\"FAILED\"},\"FAILED\":{\"RETRYING\"}}\nprint(state, allowed[state])",
    "practice": "Design a production-style AI workflow and simulate restart, timeout and partial failure.",
    "breakIt": "Remove one reliability control at a time and document the resulting failure.",
    "proof": "A reliability review pack: architecture, state model, failure matrix and test evidence.",
    "transfer": "These reliability patterns keep AI workflows correct when retries, concurrency, long-running work and partial failure occur.",
    "mistakes": [
      "Retrying non-idempotent operations blindly.",
      "Persisting too little state to recover after a restart.",
      "Assuming concurrency bugs will reproduce under one local run."
    ],
    "resources": [
      [
        "Python asyncio documentation",
        "https://docs.python.org/3/library/asyncio.html"
      ],
      [
        "OpenTelemetry",
        "https://opentelemetry.io/"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Design a reliable AI workflow — applied lab",
      "task": "Design a production-style AI workflow and simulate restart, timeout and partial failure.",
      "evidence": "A reliability review pack: architecture, state model, failure matrix and test evidence.",
      "breakIt": "Remove one reliability control at a time and document the resulting failure.",
      "transfer": "These reliability patterns keep AI workflows correct when retries, concurrency and partial failure occur."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A reliability review pack: architecture, state model, failure matrix and test evidence.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Remove one reliability control at a time and document the resulting failure.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Design a workflow with explicit state, retries, concurrency controls, checkpoints, observability and recovery tests.",
    "usedLater": "These reliability patterns keep AI workflows correct when retries, concurrency, long-running work and partial failure occur.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does design a reliable ai workflow require, and what evidence would justify that choice?"
  },
  {
    "id": "16-1",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "AI test strategy",
    "summary": "AI systems need layered tests because deterministic code, model behavior and system outcomes fail differently. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "AI systems need layered tests because deterministic code, model behavior and system outcomes fail differently.",
    "body": "Separate unit, contract, integration, evaluation, safety and regression testing; choose the cheapest valid check first.",
    "example": "Worked example: Build a test pyramid for a small RAG/agent feature and classify five test cases by layer.",
    "takeaways": [
      "Separate unit, contract, integration, evaluation, safety and regression testing; choose the cheapest valid check first.",
      "Practice: Build a test pyramid for a small RAG/agent feature and classify five test cases by layer.",
      "Failure to diagnose: Put a semantic failure into a unit test and show why the test passes while the product is still wrong.",
      "Proof: A test strategy matrix mapping risk → test layer → evidence."
    ],
    "code": "cases=[{\"input\":\"case-1\",\"expected\":\"grounded\"}]\nfor case in cases:\n    output=run_system(case[\"input\"])\n    print(case[\"input\"], grade(output, case[\"expected\"]))",
    "practice": "Build a test pyramid for a small RAG/agent feature and classify five test cases by layer.",
    "breakIt": "Put a semantic failure into a unit test and show why the test passes while the product is still wrong.",
    "proof": "A test strategy matrix mapping risk → test layer → evidence.",
    "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "mistakes": [
      "Using a score without validating the grader.",
      "Building eval cases that are unlike real failures.",
      "Changing the system and the evaluation at the same time without a baseline."
    ],
    "resources": [
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ],
      [
        "OpenAI — Trustworthy third-party evaluations",
        "https://openai.com/index/trustworthy-third-party-evaluations-foundations/"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "AI test strategy — applied lab",
      "task": "Build a test pyramid for a small RAG/agent feature and classify five test cases by layer.",
      "evidence": "A test strategy matrix mapping risk → test layer → evidence.",
      "breakIt": "Put a semantic failure into a unit test and show why the test passes while the product is still wrong.",
      "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval or agent change."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A test strategy matrix mapping risk → test layer → evidence.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Put a semantic failure into a unit test and show why the test passes while the product is still wrong.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Map AI system risks to layers of tests so deterministic contracts, model behavior and end-to-end outcomes are all covered.",
    "usedLater": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does ai test strategy require, and what evidence would justify that choice?"
  },
  {
    "id": "16-2",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "Evaluation datasets & golden cases",
    "summary": "Evaluation quality depends on whether the cases represent real work and have clear success criteria. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Evaluation quality depends on whether the cases represent real work and have clear success criteria.",
    "body": "Construct tasks from real requirements/failures, include positive and negative cases, and version the dataset.",
    "example": "Worked example: Create a 15–20 case mini golden set with categories and explicit expected outcomes.",
    "takeaways": [
      "Construct tasks from real requirements/failures, include positive and negative cases, and version the dataset.",
      "Practice: Create a 15–20 case mini golden set with categories and explicit expected outcomes.",
      "Failure to diagnose: Remove difficult cases until the score looks good; identify the resulting coverage problem.",
      "Proof: A versioned golden dataset with category coverage and rationale."
    ],
    "code": "cases=[{\"input\":\"case-1\",\"expected\":\"grounded\"}]\nfor case in cases:\n    output=run_system(case[\"input\"])\n    print(case[\"input\"], grade(output, case[\"expected\"]))",
    "practice": "Create a 15–20 case mini golden set with categories and explicit expected outcomes.",
    "breakIt": "Remove difficult cases until the score looks good; identify the resulting coverage problem.",
    "proof": "A versioned golden dataset with category coverage and rationale.",
    "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "mistakes": [
      "Using a score without validating the grader.",
      "Building eval cases that are unlike real failures.",
      "Changing the system and the evaluation at the same time without a baseline."
    ],
    "resources": [
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ],
      [
        "OpenAI — Trustworthy third-party evaluations",
        "https://openai.com/index/trustworthy-third-party-evaluations-foundations/"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Evaluation datasets & golden cases — applied lab",
      "task": "Create a 15–20 case mini golden set with categories and explicit expected outcomes.",
      "evidence": "A versioned golden dataset with category coverage and rationale.",
      "breakIt": "Remove difficult cases until the score looks good; identify the resulting coverage problem.",
      "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval or agent change."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A versioned golden dataset with category coverage and rationale.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Remove difficult cases until the score looks good; identify the resulting coverage problem.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Build a representative evaluation set from real tasks and failures with explicit inputs, expected behavior and grading rules.",
    "usedLater": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does evaluation datasets & golden cases require, and what evidence would justify that choice?"
  },
  {
    "id": "16-3",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "Outcome vs trajectory evaluation",
    "summary": "An agent can reach the correct outcome through different valid paths, while a harmful intermediate action can be hidden by the final answer. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "An agent can reach the correct outcome through different valid paths, while a harmful intermediate action can be hidden by the final answer.",
    "body": "Evaluate final state separately from tool calls, side effects, policy compliance and trajectory properties.",
    "example": "Worked example: Write one outcome grader and one trajectory grader for the same agent task.",
    "takeaways": [
      "Evaluate final state separately from tool calls, side effects, policy compliance and trajectory properties.",
      "Practice: Write one outcome grader and one trajectory grader for the same agent task.",
      "Failure to diagnose: Create a correct final answer that used an unauthorized tool call and show why outcome-only evaluation misses it.",
      "Proof: A dual evaluation report with outcome and trajectory results."
    ],
    "code": "cases=[{\"input\":\"case-1\",\"expected\":\"grounded\"}]\nfor case in cases:\n    output=run_system(case[\"input\"])\n    print(case[\"input\"], grade(output, case[\"expected\"]))",
    "practice": "Write one outcome grader and one trajectory grader for the same agent task.",
    "breakIt": "Create a correct final answer that used an unauthorized tool call and show why outcome-only evaluation misses it.",
    "proof": "A dual evaluation report with outcome and trajectory results.",
    "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "mistakes": [
      "Using a score without validating the grader.",
      "Building eval cases that are unlike real failures.",
      "Changing the system and the evaluation at the same time without a baseline."
    ],
    "resources": [
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ],
      [
        "OpenAI — Trustworthy third-party evaluations",
        "https://openai.com/index/trustworthy-third-party-evaluations-foundations/"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Outcome vs trajectory evaluation — applied lab",
      "task": "Write one outcome grader and one trajectory grader for the same agent task.",
      "evidence": "A dual evaluation report with outcome and trajectory results.",
      "breakIt": "Create a correct final answer that used an unauthorized tool call and show why outcome-only evaluation misses it.",
      "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval or agent change."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A dual evaluation report with outcome and trajectory results.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Create a correct final answer that used an unauthorized tool call and show why outcome-only evaluation misses it.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Choose whether to grade the final outcome, intermediate trajectory or both based on what the system is required to guarantee.",
    "usedLater": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does outcome vs trajectory evaluation require, and what evidence would justify that choice?"
  },
  {
    "id": "16-4",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "LLM-as-judge: use and limitations",
    "summary": "Model-based judges can scale semantic evaluation but can also share biases, be inconsistent or reward superficial patterns. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Model-based judges can scale semantic evaluation but can also share biases, be inconsistent or reward superficial patterns.",
    "body": "Use rubrics, references and calibration; reserve deterministic checks where possible and validate judges against humans.",
    "example": "Worked example: Compare a rubric judge with a deterministic check and a small human sample.",
    "takeaways": [
      "Use rubrics, references and calibration; reserve deterministic checks where possible and validate judges against humans.",
      "Practice: Compare a rubric judge with a deterministic check and a small human sample.",
      "Failure to diagnose: Give the judge a response with persuasive style but weak evidence and measure whether it over-scores it.",
      "Proof: A judge rubric, calibration sample and limitations note."
    ],
    "code": "cases=[{\"input\":\"case-1\",\"expected\":\"grounded\"}]\nfor case in cases:\n    output=run_system(case[\"input\"])\n    print(case[\"input\"], grade(output, case[\"expected\"]))",
    "practice": "Compare a rubric judge with a deterministic check and a small human sample.",
    "breakIt": "Give the judge a response with persuasive style but weak evidence and measure whether it over-scores it.",
    "proof": "A judge rubric, calibration sample and limitations note.",
    "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "mistakes": [
      "Using a score without validating the grader.",
      "Building eval cases that are unlike real failures.",
      "Changing the system and the evaluation at the same time without a baseline."
    ],
    "resources": [
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ],
      [
        "OpenAI — Trustworthy third-party evaluations",
        "https://openai.com/index/trustworthy-third-party-evaluations-foundations/"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "LLM-as-judge: use and limitations — applied lab",
      "task": "Compare a rubric judge with a deterministic check and a small human sample.",
      "evidence": "A judge rubric, calibration sample and limitations note.",
      "breakIt": "Give the judge a response with persuasive style but weak evidence and measure whether it over-scores it.",
      "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval or agent change."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A judge rubric, calibration sample and limitations note.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Give the judge a response with persuasive style but weak evidence and measure whether it over-scores it.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Use model-based grading with a rubric, calibration cases and validity checks instead of treating a judge score as ground truth.",
    "usedLater": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does llm-as-judge: use and limitations require, and what evidence would justify that choice?"
  },
  {
    "id": "16-5",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "RAG & grounding evaluation",
    "summary": "A RAG answer can be fluent but unsupported; evaluation must separate retrieval, evidence use and final response quality. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A RAG answer can be fluent but unsupported; evaluation must separate retrieval, evidence use and final response quality.",
    "body": "Measure retrieval relevance, citation correctness, groundedness and answerability as distinct signals.",
    "example": "Worked example: Evaluate a small golden set at retrieval and answer levels.",
    "takeaways": [
      "Measure retrieval relevance, citation correctness, groundedness and answerability as distinct signals.",
      "Practice: Evaluate a small golden set at retrieval and answer levels.",
      "Failure to diagnose: Force an answer for an unanswerable query and show how the grounding metric catches it.",
      "Proof: A RAG evaluation report with failure categories."
    ],
    "code": "cases=[{\"input\":\"case-1\",\"expected\":\"grounded\"}]\nfor case in cases:\n    output=run_system(case[\"input\"])\n    print(case[\"input\"], grade(output, case[\"expected\"]))",
    "practice": "Evaluate a small golden set at retrieval and answer levels.",
    "breakIt": "Force an answer for an unanswerable query and show how the grounding metric catches it.",
    "proof": "A RAG evaluation report with failure categories.",
    "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "mistakes": [
      "Using a score without validating the grader.",
      "Building eval cases that are unlike real failures.",
      "Changing the system and the evaluation at the same time without a baseline."
    ],
    "resources": [
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ],
      [
        "OpenAI — Trustworthy third-party evaluations",
        "https://openai.com/index/trustworthy-third-party-evaluations-foundations/"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "RAG & grounding evaluation — applied lab",
      "task": "Evaluate a small golden set at retrieval and answer levels.",
      "evidence": "A RAG evaluation report with failure categories.",
      "breakIt": "Force an answer for an unanswerable query and show how the grounding metric catches it.",
      "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval or agent change."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A RAG evaluation report with failure categories.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Force an answer for an unanswerable query and show how the grounding metric catches it.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Separate retrieval relevance, evidence support and answer correctness so RAG regressions have an identifiable cause.",
    "usedLater": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does rag & grounding evaluation require, and what evidence would justify that choice?"
  },
  {
    "id": "16-6",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "Agent/tool-call testing",
    "summary": "Tools create stateful side effects and multi-step behavior that ordinary output tests cannot fully cover. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Tools create stateful side effects and multi-step behavior that ordinary output tests cannot fully cover.",
    "body": "Test tool selection, argument correctness, permissions, retries, ordering and final outcome.",
    "example": "Worked example: Create tests for two tools including one denied action and one transient failure.",
    "takeaways": [
      "Test tool selection, argument correctness, permissions, retries, ordering and final outcome.",
      "Practice: Create tests for two tools including one denied action and one transient failure.",
      "Failure to diagnose: Return a successful final answer after an incorrect tool call and prove the trace test catches it.",
      "Proof: A tool-call test suite with trace assertions."
    ],
    "code": "cases=[{\"input\":\"case-1\",\"expected\":\"grounded\"}]\nfor case in cases:\n    output=run_system(case[\"input\"])\n    print(case[\"input\"], grade(output, case[\"expected\"]))",
    "practice": "Create tests for two tools including one denied action and one transient failure.",
    "breakIt": "Return a successful final answer after an incorrect tool call and prove the trace test catches it.",
    "proof": "A tool-call test suite with trace assertions.",
    "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "mistakes": [
      "Using a score without validating the grader.",
      "Building eval cases that are unlike real failures.",
      "Changing the system and the evaluation at the same time without a baseline."
    ],
    "resources": [
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ],
      [
        "OpenAI — Trustworthy third-party evaluations",
        "https://openai.com/index/trustworthy-third-party-evaluations-foundations/"
      ]
    ],
    "experience": {
      "type": "Design",
      "title": "Agent/tool-call testing — applied lab",
      "task": "Create tests for two tools including one denied action and one transient failure.",
      "evidence": "A tool-call test suite with trace assertions.",
      "breakIt": "Return a successful final answer after an incorrect tool call and prove the trace test catches it.",
      "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval or agent change."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A tool-call test suite with trace assertions.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Return a successful final answer after an incorrect tool call and prove the trace test catches it.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Test tool choice, arguments, permissions, recovery and final outcomes across representative agent tasks.",
    "usedLater": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does agent/tool-call testing require, and what evidence would justify that choice?"
  },
  {
    "id": "16-7",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "Regression & change detection",
    "summary": "Prompts, models, retrieval settings and code can change behavior even when the application still “works.” This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Prompts, models, retrieval settings and code can change behavior even when the application still “works.”",
    "body": "Version evaluation inputs and compare current results to a baseline with explicit release thresholds.",
    "example": "Worked example: Run a baseline eval, make one controlled change and compare results by category.",
    "takeaways": [
      "Version evaluation inputs and compare current results to a baseline with explicit release thresholds.",
      "Practice: Run a baseline eval, make one controlled change and compare results by category.",
      "Failure to diagnose: Improve the average score while a critical safety slice regresses; make the release gate catch it.",
      "Proof: A regression report with baseline/current deltas and release decision criteria."
    ],
    "code": "cases=[{\"input\":\"case-1\",\"expected\":\"grounded\"}]\nfor case in cases:\n    output=run_system(case[\"input\"])\n    print(case[\"input\"], grade(output, case[\"expected\"]))",
    "practice": "Run a baseline eval, make one controlled change and compare results by category.",
    "breakIt": "Improve the average score while a critical safety slice regresses; make the release gate catch it.",
    "proof": "A regression report with baseline/current deltas and release decision criteria.",
    "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "mistakes": [
      "Using a score without validating the grader.",
      "Building eval cases that are unlike real failures.",
      "Changing the system and the evaluation at the same time without a baseline."
    ],
    "resources": [
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ],
      [
        "OpenAI — Trustworthy third-party evaluations",
        "https://openai.com/index/trustworthy-third-party-evaluations-foundations/"
      ]
    ],
    "experience": {
      "type": "Prove",
      "title": "Regression & change detection — applied lab",
      "task": "Run a baseline eval, make one controlled change and compare results by category.",
      "evidence": "A regression report with baseline/current deltas and release decision criteria.",
      "breakIt": "Improve the average score while a critical safety slice regresses; make the release gate catch it.",
      "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval or agent change."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A regression report with baseline/current deltas and release decision criteria.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Improve the average score while a critical safety slice regresses; make the release gate catch it.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Compare a changed system against a baseline and identify meaningful quality, cost or reliability regressions.",
    "usedLater": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does regression & change detection require, and what evidence would justify that choice?"
  },
  {
    "id": "16-8",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "Evaluation validity, reward hacking & contamination",
    "summary": "A test can be precise yet invalid if the task is broken, the answer is leaked, or the system learns to exploit the grader. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A test can be precise yet invalid if the task is broken, the answer is leaked, or the system learns to exploit the grader.",
    "body": "Check task solvability, leakage, contamination, grader loopholes and distribution coverage before trusting a score.",
    "example": "Worked example: Audit a deliberately flawed eval and identify at least three validity threats.",
    "takeaways": [
      "Check task solvability, leakage, contamination, grader loopholes and distribution coverage before trusting a score.",
      "Practice: Audit a deliberately flawed eval and identify at least three validity threats.",
      "Failure to diagnose: Create a grader that can be gamed by adding irrelevant text; demonstrate the exploit and fix the grader.",
      "Proof: An eval-validity checklist plus an exploit/fix example."
    ],
    "code": "cases=[{\"input\":\"case-1\",\"expected\":\"grounded\"}]\nfor case in cases:\n    output=run_system(case[\"input\"])\n    print(case[\"input\"], grade(output, case[\"expected\"]))",
    "practice": "Audit a deliberately flawed eval and identify at least three validity threats.",
    "breakIt": "Create a grader that can be gamed by adding irrelevant text; demonstrate the exploit and fix the grader.",
    "proof": "An eval-validity checklist plus an exploit/fix example.",
    "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "mistakes": [
      "Using a score without validating the grader.",
      "Building eval cases that are unlike real failures.",
      "Changing the system and the evaluation at the same time without a baseline."
    ],
    "resources": [
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ],
      [
        "OpenAI — Trustworthy third-party evaluations",
        "https://openai.com/index/trustworthy-third-party-evaluations-foundations/"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Evaluation validity, reward hacking & contamination — applied lab",
      "task": "Audit a deliberately flawed eval and identify at least three validity threats.",
      "evidence": "An eval-validity checklist plus an exploit/fix example.",
      "breakIt": "Create a grader that can be gamed by adding irrelevant text; demonstrate the exploit and fix the grader.",
      "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval or agent change."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "An eval-validity checklist plus an exploit/fix example.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Create a grader that can be gamed by adding irrelevant text; demonstrate the exploit and fix the grader.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Audit an evaluation for broken cases, leakage, contamination and graders that can be gamed without improving the real task.",
    "usedLater": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What evidence shows that the evaluation measures the intended capability rather than a shortcut?"
  },
  {
    "id": "16-9",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "Safety, hallucination & adversarial testing",
    "summary": "AI systems face failure inputs that ordinary happy-path tests never exercise. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "AI systems face failure inputs that ordinary happy-path tests never exercise.",
    "body": "Design tests for unsupported claims, prompt injection, sensitive-data exposure, unsafe tool use and adversarial inputs.",
    "example": "Worked example: Build a small adversarial suite and classify outcomes by risk.",
    "takeaways": [
      "Design tests for unsupported claims, prompt injection, sensitive-data exposure, unsafe tool use and adversarial inputs.",
      "Practice: Build a small adversarial suite and classify outcomes by risk.",
      "Failure to diagnose: Add one attack that bypasses a weak control and move the mitigation outside the prompt.",
      "Proof: A safety test report with attack, observed behavior, mitigation and residual risk."
    ],
    "code": "cases=[{\"input\":\"case-1\",\"expected\":\"grounded\"}]\nfor case in cases:\n    output=run_system(case[\"input\"])\n    print(case[\"input\"], grade(output, case[\"expected\"]))",
    "practice": "Build a small adversarial suite and classify outcomes by risk.",
    "breakIt": "Add one attack that bypasses a weak control and move the mitigation outside the prompt.",
    "proof": "A safety test report with attack, observed behavior, mitigation and residual risk.",
    "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "mistakes": [
      "Using a score without validating the grader.",
      "Building eval cases that are unlike real failures.",
      "Changing the system and the evaluation at the same time without a baseline."
    ],
    "resources": [
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ],
      [
        "OpenAI — Trustworthy third-party evaluations",
        "https://openai.com/index/trustworthy-third-party-evaluations-foundations/"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Safety, hallucination & adversarial testing — applied lab",
      "task": "Build a small adversarial suite and classify outcomes by risk.",
      "evidence": "A safety test report with attack, observed behavior, mitigation and residual risk.",
      "breakIt": "Add one attack that bypasses a weak control and move the mitigation outside the prompt.",
      "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval or agent change."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A safety test report with attack, observed behavior, mitigation and residual risk.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Add one attack that bypasses a weak control and move the mitigation outside the prompt.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Create adversarial and safety cases that probe unsupported claims, unsafe behavior, prompt attacks and boundary conditions.",
    "usedLater": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does safety, hallucination & adversarial testing require, and what evidence would justify that choice?"
  },
  {
    "id": "16-10",
    "phase": "16",
    "phaseName": "AI Quality Engineering",
    "title": "Build an AI evaluation harness",
    "summary": "A harness turns scattered test cases into a repeatable engineering process with tasks, trials, traces, graders and reports. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A harness turns scattered test cases into a repeatable engineering process with tasks, trials, traces, graders and reports.",
    "body": "Define a minimal harness interface and keep datasets, execution, grading and reporting separate.",
    "example": "Worked example: Build a small harness that runs tasks, captures outputs/traces, applies deterministic/model-based checks and emits a report.",
    "takeaways": [
      "Define a minimal harness interface and keep datasets, execution, grading and reporting separate.",
      "Practice: Build a small harness that runs tasks, captures outputs/traces, applies deterministic/model-based checks and emits a report.",
      "Failure to diagnose: Break one grader or fixture and prove the harness reports the evaluation infrastructure failure rather than a false model score.",
      "Proof: A runnable evaluation harness with dataset, graders, report and one regression gate."
    ],
    "code": "cases=[{\"input\":\"case-1\",\"expected\":\"grounded\"}]\nfor case in cases:\n    output=run_system(case[\"input\"])\n    print(case[\"input\"], grade(output, case[\"expected\"]))",
    "practice": "Build a small harness that runs tasks, captures outputs/traces, applies deterministic/model-based checks and emits a report.",
    "breakIt": "Break one grader or fixture and prove the harness reports the evaluation infrastructure failure rather than a false model score.",
    "proof": "A runnable evaluation harness with dataset, graders, report and one regression gate.",
    "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "mistakes": [
      "Using a score without validating the grader.",
      "Building eval cases that are unlike real failures.",
      "Changing the system and the evaluation at the same time without a baseline."
    ],
    "resources": [
      [
        "MLflow GenAI evaluation",
        "https://mlflow.org/docs/latest/genai/eval-monitor"
      ],
      [
        "OpenAI — Trustworthy third-party evaluations",
        "https://openai.com/index/trustworthy-third-party-evaluations-foundations/"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Build an AI evaluation harness — applied lab",
      "task": "Build a small harness that runs tasks, captures outputs/traces, applies deterministic/model-based checks and emits a report.",
      "evidence": "A runnable evaluation harness with dataset, graders, report and one regression gate.",
      "breakIt": "Break one grader or fixture and prove the harness reports the evaluation infrastructure failure rather than a false model score.",
      "transfer": "These evaluation practices become the quality gate for every model, prompt, retrieval or agent change."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A runnable evaluation harness with dataset, graders, report and one regression gate.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Break one grader or fixture and prove the harness reports the evaluation infrastructure failure rather than a false model score.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Build a repeatable harness that runs tasks, captures traces, applies graders and compares results against a baseline.",
    "usedLater": "These evaluation practices become the quality gate for every model, prompt, retrieval, tool or agent change.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does build an ai evaluation harness require, and what evidence would justify that choice?"
  },
  {
    "id": "17-1",
    "phase": "17",
    "phaseName": "Production & LLMOps",
    "title": "Serving architecture & APIs",
    "summary": "A model feature becomes a service only when request boundaries, concurrency, timeouts and versioning are explicit. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A model feature becomes a service only when request boundaries, concurrency, timeouts and versioning are explicit.",
    "body": "Compare synchronous APIs, async jobs and streaming at a high level; define request/response contracts.",
    "example": "Worked example: Design a serving endpoint for an LLM feature including timeout, request ID and model version metadata.",
    "takeaways": [
      "Compare synchronous APIs, async jobs and streaming at a high level; define request/response contracts.",
      "Practice: Design a serving endpoint for an LLM feature including timeout, request ID and model version metadata.",
      "Failure to diagnose: Send an oversized or malformed request and prove the service rejects it before expensive model work.",
      "Proof: An API contract plus one load/failure scenario."
    ],
    "code": "request_id=\"req-123\"\nstart=time.monotonic()\nresult=handle_request()\nlatency=time.monotonic()-start\nprint(request_id, latency)",
    "practice": "Design a serving endpoint for an LLM feature including timeout, request ID and model version metadata.",
    "breakIt": "Send an oversized or malformed request and prove the service rejects it before expensive model work.",
    "proof": "An API contract plus one load/failure scenario.",
    "transfer": "These production practices turn an AI prototype into an observable, recoverable and operable service.",
    "mistakes": [
      "Optimizing before measuring the bottleneck.",
      "Deploying configuration changes without a rollback path.",
      "Logging sensitive data while trying to improve observability."
    ],
    "resources": [
      [
        "OpenTelemetry",
        "https://opentelemetry.io/"
      ],
      [
        "OpenTelemetry GenAI observability",
        "https://opentelemetry.io/blog/2026/genai-observability/"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Serving architecture & APIs — applied lab",
      "task": "Design a serving endpoint for an LLM feature including timeout, request ID and model version metadata.",
      "evidence": "An API contract plus one load/failure scenario.",
      "breakIt": "Send an oversized or malformed request and prove the service rejects it before expensive model work.",
      "transfer": "These production practices turn an AI prototype into an observable, recoverable service."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "An API contract plus one load/failure scenario.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Send an oversized or malformed request and prove the service rejects it before expensive model work.",
      "reviewed": "2026-09-21",
      "freshness": "OpenTelemetry GenAI conventions; verify current docs",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Expose an AI capability through a service boundary with clear request/response contracts, timeouts and health behavior.",
    "usedLater": "These production practices turn an AI prototype into an observable, recoverable and operable service.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does serving architecture & apis require, and what evidence would justify that choice?"
  },
  {
    "id": "17-2",
    "phase": "17",
    "phaseName": "Production & LLMOps",
    "title": "Containers & dependency control",
    "summary": "Reproducible AI services need the same runtime and dependencies in development and deployment. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Reproducible AI services need the same runtime and dependencies in development and deployment.",
    "body": "Use container images, dependency lock/constraints and environment-specific configuration without baking secrets into images.",
    "example": "Worked example: Containerize a tiny service and record its build/runtime versions.",
    "takeaways": [
      "Use container images, dependency lock/constraints and environment-specific configuration without baking secrets into images.",
      "Practice: Containerize a tiny service and record its build/runtime versions.",
      "Failure to diagnose: Change a dependency or base image and identify the resulting reproducibility risk.",
      "Proof: A container build plus dependency/version inventory."
    ],
    "code": "request_id=\"req-123\"\nstart=time.monotonic()\nresult=handle_request()\nlatency=time.monotonic()-start\nprint(request_id, latency)",
    "practice": "Containerize a tiny service and record its build/runtime versions.",
    "breakIt": "Change a dependency or base image and identify the resulting reproducibility risk.",
    "proof": "A container build plus dependency/version inventory.",
    "transfer": "These production practices turn an AI prototype into an observable, recoverable and operable service.",
    "mistakes": [
      "Optimizing before measuring the bottleneck.",
      "Deploying configuration changes without a rollback path.",
      "Logging sensitive data while trying to improve observability."
    ],
    "resources": [
      [
        "OpenTelemetry",
        "https://opentelemetry.io/"
      ],
      [
        "OpenTelemetry GenAI observability",
        "https://opentelemetry.io/blog/2026/genai-observability/"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Containers & dependency control — applied lab",
      "task": "Containerize a tiny service and record its build/runtime versions.",
      "evidence": "A container build plus dependency/version inventory.",
      "breakIt": "Change a dependency or base image and identify the resulting reproducibility risk.",
      "transfer": "These production practices turn an AI prototype into an observable, recoverable service."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A container build plus dependency/version inventory.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Change a dependency or base image and identify the resulting reproducibility risk.",
      "reviewed": "2026-09-21",
      "freshness": "OpenTelemetry GenAI conventions; verify current docs",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Package an AI service with controlled dependencies and verify that the same image behaves consistently across environments.",
    "usedLater": "These production practices turn an AI prototype into an observable, recoverable and operable service.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does containers & dependency control require, and what evidence would justify that choice?"
  },
  {
    "id": "17-3",
    "phase": "17",
    "phaseName": "Production & LLMOps",
    "title": "CI/CD for AI applications",
    "summary": "AI releases change code, prompts, models and evaluation behavior; CI must test more than compilation. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "AI releases change code, prompts, models and evaluation behavior; CI must test more than compilation.",
    "body": "Design a pipeline that runs unit/contract tests, evaluation gates and deployment checks before promotion.",
    "example": "Worked example: Create a CI flow for the capstone with a small regression suite.",
    "takeaways": [
      "Design a pipeline that runs unit/contract tests, evaluation gates and deployment checks before promotion.",
      "Practice: Create a CI flow for the capstone with a small regression suite.",
      "Failure to diagnose: Make a known-bad prompt/model/config change and verify the pipeline blocks promotion.",
      "Proof: A CI diagram and sample gate result."
    ],
    "code": "request_id=\"req-123\"\nstart=time.monotonic()\nresult=handle_request()\nlatency=time.monotonic()-start\nprint(request_id, latency)",
    "practice": "Create a CI flow for the capstone with a small regression suite.",
    "breakIt": "Make a known-bad prompt/model/config change and verify the pipeline blocks promotion.",
    "proof": "A CI diagram and sample gate result.",
    "transfer": "These production practices turn an AI prototype into an observable, recoverable and operable service.",
    "mistakes": [
      "Optimizing before measuring the bottleneck.",
      "Deploying configuration changes without a rollback path.",
      "Logging sensitive data while trying to improve observability."
    ],
    "resources": [
      [
        "OpenTelemetry",
        "https://opentelemetry.io/"
      ],
      [
        "OpenTelemetry GenAI observability",
        "https://opentelemetry.io/blog/2026/genai-observability/"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "CI/CD for AI applications — applied lab",
      "task": "Create a CI flow for the capstone with a small regression suite.",
      "evidence": "A CI diagram and sample gate result.",
      "breakIt": "Make a known-bad prompt/model/config change and verify the pipeline blocks promotion.",
      "transfer": "These production practices turn an AI prototype into an observable, recoverable service."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A CI diagram and sample gate result.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Make a known-bad prompt/model/config change and verify the pipeline blocks promotion.",
      "reviewed": "2026-09-21",
      "freshness": "OpenTelemetry GenAI conventions; verify current docs",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Automate build, unit tests, evaluation gates and deployment checks so AI changes are repeatable and reviewable.",
    "usedLater": "These production practices turn an AI prototype into an observable, recoverable and operable service.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does ci/cd for ai applications require, and what evidence would justify that choice?"
  },
  {
    "id": "17-4",
    "phase": "17",
    "phaseName": "Production & LLMOps",
    "title": "Observability & tracing",
    "summary": "Production debugging needs traces, metrics and logs that connect user-visible failures to internal work. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Production debugging needs traces, metrics and logs that connect user-visible failures to internal work.",
    "body": "Capture latency, errors, token/cost signals, model/version metadata and component spans while respecting sensitive-data constraints.",
    "example": "Worked example: Instrument a small AI request and inspect one trace end-to-end.",
    "takeaways": [
      "Capture latency, errors, token/cost signals, model/version metadata and component spans while respecting sensitive-data constraints.",
      "Practice: Instrument a small AI request and inspect one trace end-to-end.",
      "Failure to diagnose: Remove one critical span and show which diagnosis becomes impossible.",
      "Proof: A trace plus metric snapshot and one actionable incident finding."
    ],
    "code": "request_id=\"req-123\"\nstart=time.monotonic()\nresult=handle_request()\nlatency=time.monotonic()-start\nprint(request_id, latency)",
    "practice": "Instrument a small AI request and inspect one trace end-to-end.",
    "breakIt": "Remove one critical span and show which diagnosis becomes impossible.",
    "proof": "A trace plus metric snapshot and one actionable incident finding.",
    "transfer": "These production practices turn an AI prototype into an observable, recoverable and operable service.",
    "mistakes": [
      "Optimizing before measuring the bottleneck.",
      "Deploying configuration changes without a rollback path.",
      "Logging sensitive data while trying to improve observability."
    ],
    "resources": [
      [
        "OpenTelemetry",
        "https://opentelemetry.io/"
      ],
      [
        "OpenTelemetry GenAI observability",
        "https://opentelemetry.io/blog/2026/genai-observability/"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Observability & tracing — applied lab",
      "task": "Instrument a small AI request and inspect one trace end-to-end.",
      "evidence": "A trace plus metric snapshot and one actionable incident finding.",
      "breakIt": "Remove one critical span and show which diagnosis becomes impossible.",
      "transfer": "These production practices turn an AI prototype into an observable, recoverable service."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A trace plus metric snapshot and one actionable incident finding.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Remove one critical span and show which diagnosis becomes impossible.",
      "reviewed": "2026-09-21",
      "freshness": "OpenTelemetry GenAI conventions; verify current docs",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Instrument production AI requests so latency, errors, model versions, token usage and downstream calls can be correlated.",
    "usedLater": "These production practices turn an AI prototype into an observable, recoverable and operable service.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does observability & tracing require, and what evidence would justify that choice?"
  },
  {
    "id": "17-5",
    "phase": "17",
    "phaseName": "Production & LLMOps",
    "title": "Latency & performance",
    "summary": "Users experience the whole path, not just model inference time; retrieval, tools, queues and serialization all contribute. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Users experience the whole path, not just model inference time; retrieval, tools, queues and serialization all contribute.",
    "body": "Break latency into components and reason about p50/p95/p99, concurrency and throughput.",
    "example": "Worked example: Measure a small AI request path and identify its dominant component.",
    "takeaways": [
      "Break latency into components and reason about p50/p95/p99, concurrency and throughput.",
      "Practice: Measure a small AI request path and identify its dominant component.",
      "Failure to diagnose: Optimize the wrong component and show why total latency barely changes.",
      "Proof: A latency budget with measurements and prioritized optimization."
    ],
    "code": "request_id=\"req-123\"\nstart=time.monotonic()\nresult=handle_request()\nlatency=time.monotonic()-start\nprint(request_id, latency)",
    "practice": "Measure a small AI request path and identify its dominant component.",
    "breakIt": "Optimize the wrong component and show why total latency barely changes.",
    "proof": "A latency budget with measurements and prioritized optimization.",
    "transfer": "These production practices turn an AI prototype into an observable, recoverable and operable service.",
    "mistakes": [
      "Optimizing before measuring the bottleneck.",
      "Deploying configuration changes without a rollback path.",
      "Logging sensitive data while trying to improve observability."
    ],
    "resources": [
      [
        "OpenTelemetry",
        "https://opentelemetry.io/"
      ],
      [
        "OpenTelemetry GenAI observability",
        "https://opentelemetry.io/blog/2026/genai-observability/"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "Latency & performance — applied lab",
      "task": "Measure a small AI request path and identify its dominant component.",
      "evidence": "A latency budget with measurements and prioritized optimization.",
      "breakIt": "Optimize the wrong component and show why total latency barely changes.",
      "transfer": "These production practices turn an AI prototype into an observable, recoverable service."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A latency budget with measurements and prioritized optimization.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Optimize the wrong component and show why total latency barely changes.",
      "reviewed": "2026-09-21",
      "freshness": "OpenTelemetry GenAI conventions; verify current docs",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Measure latency across system components and optimize the actual bottleneck instead of guessing from end-to-end response time.",
    "usedLater": "These production practices turn an AI prototype into an observable, recoverable and operable service.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does latency & performance require, and what evidence would justify that choice?"
  },
  {
    "id": "17-6",
    "phase": "17",
    "phaseName": "Production & LLMOps",
    "title": "Caching & cost controls",
    "summary": "Operational cost can grow through retries, large contexts, repeated embeddings and unnecessary model calls. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Operational cost can grow through retries, large contexts, repeated embeddings and unnecessary model calls.",
    "body": "Build a cost model around calls, tokens, storage and concurrency; use caching and budgets where safe.",
    "example": "Worked example: Estimate cost per request and add one control that reduces repeated work.",
    "takeaways": [
      "Build a cost model around calls, tokens, storage and concurrency; use caching and budgets where safe.",
      "Practice: Estimate cost per request and add one control that reduces repeated work.",
      "Failure to diagnose: Allow an agent retry loop to consume unlimited calls and show the need for budgets/circuit breakers.",
      "Proof: A cost model with before/after estimate and control policy."
    ],
    "code": "request_id=\"req-123\"\nstart=time.monotonic()\nresult=handle_request()\nlatency=time.monotonic()-start\nprint(request_id, latency)",
    "practice": "Estimate cost per request and add one control that reduces repeated work.",
    "breakIt": "Allow an agent retry loop to consume unlimited calls and show the need for budgets/circuit breakers.",
    "proof": "A cost model with before/after estimate and control policy.",
    "transfer": "These production practices turn an AI prototype into an observable, recoverable and operable service.",
    "mistakes": [
      "Optimizing before measuring the bottleneck.",
      "Deploying configuration changes without a rollback path.",
      "Logging sensitive data while trying to improve observability."
    ],
    "resources": [
      [
        "OpenTelemetry",
        "https://opentelemetry.io/"
      ],
      [
        "OpenTelemetry GenAI observability",
        "https://opentelemetry.io/blog/2026/genai-observability/"
      ]
    ],
    "experience": {
      "type": "Design",
      "title": "Caching & cost controls — applied lab",
      "task": "Estimate cost per request and add one control that reduces repeated work.",
      "evidence": "A cost model with before/after estimate and control policy.",
      "breakIt": "Allow an agent retry loop to consume unlimited calls and show the need for budgets/circuit breakers.",
      "transfer": "These production practices turn an AI prototype into an observable, recoverable service."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A cost model with before/after estimate and control policy.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Allow an agent retry loop to consume unlimited calls and show the need for budgets/circuit breakers.",
      "reviewed": "2026-09-21",
      "freshness": "OpenTelemetry GenAI conventions; verify current docs",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Measure token and infrastructure cost per workload and introduce caching, limits or model routing where they reduce cost without breaking correctness.",
    "usedLater": "These production practices turn an AI prototype into an observable, recoverable and operable service.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does caching & cost controls require, and what evidence would justify that choice?"
  },
  {
    "id": "17-7",
    "phase": "17",
    "phaseName": "Production & LLMOps",
    "title": "Configuration, secrets & rollout",
    "summary": "Production changes fail when configuration, credentials and rollout state are mixed together. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Production changes fail when configuration, credentials and rollout state are mixed together.",
    "body": "Separate deploy-time config, runtime secrets, feature flags and versioned releases; plan rollback before rollout.",
    "example": "Worked example: Design a configuration matrix for dev/staging/prod and a safe rollout switch.",
    "takeaways": [
      "Separate deploy-time config, runtime secrets, feature flags and versioned releases; plan rollback before rollout.",
      "Practice: Design a configuration matrix for dev/staging/prod and a safe rollout switch.",
      "Failure to diagnose: Deploy a configuration incompatible with the service and show how the readiness check blocks it.",
      "Proof: A config matrix and rollout/rollback checklist."
    ],
    "code": "import os\napi_key = os.environ.get(\"API_KEY\")\nif not api_key:\n    raise RuntimeError(\"API_KEY is not configured\")\nprint(\"key loaded; value not printed\")",
    "practice": "Design a configuration matrix for dev/staging/prod and a safe rollout switch.",
    "breakIt": "Deploy a configuration incompatible with the service and show how the readiness check blocks it.",
    "proof": "A config matrix and rollout/rollback checklist.",
    "transfer": "These production practices turn an AI prototype into an observable, recoverable and operable service.",
    "mistakes": [
      "Optimizing before measuring the bottleneck.",
      "Deploying configuration changes without a rollback path.",
      "Logging sensitive data while trying to improve observability."
    ],
    "resources": [
      [
        "OpenTelemetry",
        "https://opentelemetry.io/"
      ],
      [
        "OpenTelemetry GenAI observability",
        "https://opentelemetry.io/blog/2026/genai-observability/"
      ]
    ],
    "experience": {
      "type": "Prove",
      "title": "Configuration, secrets & rollout — applied lab",
      "task": "Design a configuration matrix for dev/staging/prod and a safe rollout switch.",
      "evidence": "A config matrix and rollout/rollback checklist.",
      "breakIt": "Deploy a configuration incompatible with the service and show how the readiness check blocks it.",
      "transfer": "These production practices turn an AI prototype into an observable, recoverable service."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A config matrix and rollout/rollback checklist.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Deploy a configuration incompatible with the service and show how the readiness check blocks it.",
      "reviewed": "2026-09-21",
      "freshness": "OpenTelemetry GenAI conventions; verify current docs",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Separate configuration from code and roll out changes with versioning, staged exposure and a safe rollback path.",
    "usedLater": "These production practices turn an AI prototype into an observable, recoverable and operable service.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does configuration, secrets & rollout require, and what evidence would justify that choice?"
  },
  {
    "id": "17-8",
    "phase": "17",
    "phaseName": "Production & LLMOps",
    "title": "Incident response, rollback & recovery",
    "summary": "A production incident is an engineering workflow: detect, contain, diagnose, recover and learn. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A production incident is an engineering workflow: detect, contain, diagnose, recover and learn.",
    "body": "Create incident severity, evidence collection, rollback criteria and post-incident regression actions.",
    "example": "Worked example: Run a simulated AI incident and document the response timeline.",
    "takeaways": [
      "Create incident severity, evidence collection, rollback criteria and post-incident regression actions.",
      "Practice: Run a simulated AI incident and document the response timeline.",
      "Failure to diagnose: Rollback only the model while the real issue is a retrieval regression; use evidence to choose the correct recovery.",
      "Proof: An incident report, recovery decision and new regression test."
    ],
    "code": "request_id=\"req-123\"\nstart=time.monotonic()\nresult=handle_request()\nlatency=time.monotonic()-start\nprint(request_id, latency)",
    "practice": "Run a simulated AI incident and document the response timeline.",
    "breakIt": "Rollback only the model while the real issue is a retrieval regression; use evidence to choose the correct recovery.",
    "proof": "An incident report, recovery decision and new regression test.",
    "transfer": "These production practices turn an AI prototype into an observable, recoverable and operable service.",
    "mistakes": [
      "Optimizing before measuring the bottleneck.",
      "Deploying configuration changes without a rollback path.",
      "Logging sensitive data while trying to improve observability."
    ],
    "resources": [
      [
        "OpenTelemetry",
        "https://opentelemetry.io/"
      ],
      [
        "OpenTelemetry GenAI observability",
        "https://opentelemetry.io/blog/2026/genai-observability/"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Incident response, rollback & recovery — applied lab",
      "task": "Run a simulated AI incident and document the response timeline.",
      "evidence": "An incident report, recovery decision and new regression test.",
      "breakIt": "Rollback only the model while the real issue is a retrieval regression; use evidence to choose the correct recovery.",
      "transfer": "These production practices turn an AI prototype into an observable, recoverable service."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "An incident report, recovery decision and new regression test.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Rollback only the model while the real issue is a retrieval regression; use evidence to choose the correct recovery.",
      "reviewed": "2026-09-21",
      "freshness": "OpenTelemetry GenAI conventions; verify current docs",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Respond to an AI incident with detection, containment, rollback, root-cause evidence and a regression test for the fix.",
    "usedLater": "These production practices turn an AI prototype into an observable, recoverable and operable service.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does incident response, rollback & recovery require, and what evidence would justify that choice?"
  },
  {
    "id": "18-1",
    "phase": "18",
    "phaseName": "Security & Responsible AI",
    "title": "Threat modeling for AI systems",
    "summary": "AI introduces trust boundaries around models, prompts, retrieved data, tools and users that ordinary diagrams can hide. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "AI introduces trust boundaries around models, prompts, retrieved data, tools and users that ordinary diagrams can hide.",
    "body": "Identify assets, actors, entry points, trust boundaries, threats and mitigations using a simple threat model.",
    "example": "Worked example: Threat-model a small RAG/agent application and rank three risks.",
    "takeaways": [
      "Identify assets, actors, entry points, trust boundaries, threats and mitigations using a simple threat model.",
      "Practice: Threat-model a small RAG/agent application and rank three risks.",
      "Failure to diagnose: Add an untrusted data source and trace how it can cross into a privileged action.",
      "Proof: A threat model with assets, boundaries, threats and enforced mitigations."
    ],
    "code": "untrusted_text = retrieved_chunk\n# Never treat untrusted text as authorization.\nif action not in ALLOWED_ACTIONS:\n    raise PermissionError(\"blocked\")",
    "practice": "Threat-model a small RAG/agent application and rank three risks.",
    "breakIt": "Add an untrusted data source and trace how it can cross into a privileged action.",
    "proof": "A threat model with assets, boundaries, threats and enforced mitigations.",
    "transfer": "These controls reduce the blast radius of model and application failures and define where human authority remains necessary.",
    "mistakes": [
      "Treating the model as the security boundary.",
      "Testing only direct attacks and ignoring indirect or tool-mediated attacks.",
      "Granting permissions because a workflow “might need them later.”"
    ],
    "resources": [
      [
        "OWASP GenAI / LLM Top 10",
        "https://genai.owasp.org/llm-top-10/"
      ],
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Threat modeling for AI systems — applied lab",
      "task": "Threat-model a small RAG/agent application and rank three risks.",
      "evidence": "A threat model with assets, boundaries, threats and enforced mitigations.",
      "breakIt": "Add an untrusted data source and trace how it can cross into a privileged action.",
      "transfer": "These controls constrain the real-world blast radius of model and application failures."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A threat model with assets, boundaries, threats and enforced mitigations.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Add an untrusted data source and trace how it can cross into a privileged action.",
      "reviewed": "2026-09-21",
      "freshness": "OWASP GenAI LLM Top 10 2026; verify current guidance",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Map assets, actors, trust boundaries and abuse paths before choosing controls for an AI system.",
    "usedLater": "These controls reduce the blast radius of model and application failures and define where human authority remains necessary.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does threat modeling for ai systems require, and what evidence would justify that choice?"
  },
  {
    "id": "18-2",
    "phase": "18",
    "phaseName": "Security & Responsible AI",
    "title": "Prompt injection & indirect injection",
    "summary": "Untrusted text can contain instructions that conflict with the application’s intended behavior. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Untrusted text can contain instructions that conflict with the application’s intended behavior.",
    "body": "Separate data from instructions, minimize authority, validate tool calls and enforce policy outside the model.",
    "example": "Worked example: Create direct and indirect injection test cases against a small RAG/tool workflow.",
    "takeaways": [
      "Separate data from instructions, minimize authority, validate tool calls and enforce policy outside the model.",
      "Practice: Create direct and indirect injection test cases against a small RAG/tool workflow.",
      "Failure to diagnose: Place an injection in retrieved content and verify server-side authorization prevents the unsafe action.",
      "Proof: An injection test report showing attack, observed behavior and boundary control."
    ],
    "code": "untrusted_text = retrieved_chunk\n# Never treat untrusted text as authorization.\nif action not in ALLOWED_ACTIONS:\n    raise PermissionError(\"blocked\")",
    "practice": "Create direct and indirect injection test cases against a small RAG/tool workflow.",
    "breakIt": "Place an injection in retrieved content and verify server-side authorization prevents the unsafe action.",
    "proof": "An injection test report showing attack, observed behavior and boundary control.",
    "transfer": "These controls reduce the blast radius of model and application failures and define where human authority remains necessary.",
    "mistakes": [
      "Treating the model as the security boundary.",
      "Testing only direct attacks and ignoring indirect or tool-mediated attacks.",
      "Granting permissions because a workflow “might need them later.”"
    ],
    "resources": [
      [
        "OWASP GenAI / LLM Top 10",
        "https://genai.owasp.org/llm-top-10/"
      ],
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Prompt injection & indirect injection — applied lab",
      "task": "Create direct and indirect injection test cases against a small RAG/tool workflow.",
      "evidence": "An injection test report showing attack, observed behavior and boundary control.",
      "breakIt": "Place an injection in retrieved content and verify server-side authorization prevents the unsafe action.",
      "transfer": "These controls constrain the real-world blast radius of model and application failures."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "An injection test report showing attack, observed behavior and boundary control.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Place an injection in retrieved content and verify server-side authorization prevents the unsafe action.",
      "reviewed": "2026-09-21",
      "freshness": "OWASP GenAI LLM Top 10 2026; verify current guidance",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Test whether untrusted instructions can influence model behavior and verify that authorization is enforced outside the model.",
    "usedLater": "These controls reduce the blast radius of model and application failures and define where human authority remains necessary.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "Where is authorization enforced if untrusted content tries to change the model’s instructions?"
  },
  {
    "id": "18-3",
    "phase": "18",
    "phaseName": "Security & Responsible AI",
    "title": "Sensitive information & privacy",
    "summary": "AI systems can expose sensitive data through prompts, logs, retrieval, memory or outputs even when the model itself is not malicious. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "AI systems can expose sensitive data through prompts, logs, retrieval, memory or outputs even when the model itself is not malicious.",
    "body": "Map sensitive data flows, minimize collection, control retention and redact telemetry where appropriate.",
    "example": "Worked example: Create a data-flow map for one feature and identify where sensitive fields should be filtered.",
    "takeaways": [
      "Map sensitive data flows, minimize collection, control retention and redact telemetry where appropriate.",
      "Practice: Create a data-flow map for one feature and identify where sensitive fields should be filtered.",
      "Failure to diagnose: Log a prompt containing a sensitive value and demonstrate the telemetry control that prevents persistence.",
      "Proof: A privacy/data-flow map plus a redaction test."
    ],
    "code": "untrusted_text = retrieved_chunk\n# Never treat untrusted text as authorization.\nif action not in ALLOWED_ACTIONS:\n    raise PermissionError(\"blocked\")",
    "practice": "Create a data-flow map for one feature and identify where sensitive fields should be filtered.",
    "breakIt": "Log a prompt containing a sensitive value and demonstrate the telemetry control that prevents persistence.",
    "proof": "A privacy/data-flow map plus a redaction test.",
    "transfer": "These controls reduce the blast radius of model and application failures and define where human authority remains necessary.",
    "mistakes": [
      "Treating the model as the security boundary.",
      "Testing only direct attacks and ignoring indirect or tool-mediated attacks.",
      "Granting permissions because a workflow “might need them later.”"
    ],
    "resources": [
      [
        "OWASP GenAI / LLM Top 10",
        "https://genai.owasp.org/llm-top-10/"
      ],
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Sensitive information & privacy — applied lab",
      "task": "Create a data-flow map for one feature and identify where sensitive fields should be filtered.",
      "evidence": "A privacy/data-flow map plus a redaction test.",
      "breakIt": "Log a prompt containing a sensitive value and demonstrate the telemetry control that prevents persistence.",
      "transfer": "These controls constrain the real-world blast radius of model and application failures."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A privacy/data-flow map plus a redaction test.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Log a prompt containing a sensitive value and demonstrate the telemetry control that prevents persistence.",
      "reviewed": "2026-09-21",
      "freshness": "OWASP GenAI LLM Top 10 2026; verify current guidance",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Identify sensitive data flows and enforce minimization, access control, retention and safe logging boundaries.",
    "usedLater": "These controls reduce the blast radius of model and application failures and define where human authority remains necessary.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does sensitive information & privacy require, and what evidence would justify that choice?"
  },
  {
    "id": "18-4",
    "phase": "18",
    "phaseName": "Security & Responsible AI",
    "title": "Improper output handling",
    "summary": "Model output becomes dangerous when it is treated as trusted code, HTML, SQL or a business decision without validation. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Model output becomes dangerous when it is treated as trusted code, HTML, SQL or a business decision without validation.",
    "body": "Apply output encoding, parsing, allowlists and domain validation at the boundary where output becomes an action.",
    "example": "Worked example: Build a safe parser for a structured model output and reject unexpected commands.",
    "takeaways": [
      "Apply output encoding, parsing, allowlists and domain validation at the boundary where output becomes an action.",
      "Practice: Build a safe parser for a structured model output and reject unexpected commands.",
      "Failure to diagnose: Return an output containing an injection payload and prove the downstream boundary neutralizes it.",
      "Proof: A validation/encoding test with a malicious output case."
    ],
    "code": "untrusted_text = retrieved_chunk\n# Never treat untrusted text as authorization.\nif action not in ALLOWED_ACTIONS:\n    raise PermissionError(\"blocked\")",
    "practice": "Build a safe parser for a structured model output and reject unexpected commands.",
    "breakIt": "Return an output containing an injection payload and prove the downstream boundary neutralizes it.",
    "proof": "A validation/encoding test with a malicious output case.",
    "transfer": "These controls reduce the blast radius of model and application failures and define where human authority remains necessary.",
    "mistakes": [
      "Treating the model as the security boundary.",
      "Testing only direct attacks and ignoring indirect or tool-mediated attacks.",
      "Granting permissions because a workflow “might need them later.”"
    ],
    "resources": [
      [
        "OWASP GenAI / LLM Top 10",
        "https://genai.owasp.org/llm-top-10/"
      ],
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Improper output handling — applied lab",
      "task": "Build a safe parser for a structured model output and reject unexpected commands.",
      "evidence": "A validation/encoding test with a malicious output case.",
      "breakIt": "Return an output containing an injection payload and prove the downstream boundary neutralizes it.",
      "transfer": "These controls constrain the real-world blast radius of model and application failures."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A validation/encoding test with a malicious output case.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Return an output containing an injection payload and prove the downstream boundary neutralizes it.",
      "reviewed": "2026-09-21",
      "freshness": "OWASP GenAI LLM Top 10 2026; verify current guidance",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Treat model output as untrusted input and validate, encode or constrain it before it reaches code, queries or external systems.",
    "usedLater": "These controls reduce the blast radius of model and application failures and define where human authority remains necessary.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does improper output handling require, and what evidence would justify that choice?"
  },
  {
    "id": "18-5",
    "phase": "18",
    "phaseName": "Security & Responsible AI",
    "title": "Supply chain & dependency risk",
    "summary": "AI systems depend on models, packages, containers, datasets and external services that can change or introduce risk. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "AI systems depend on models, packages, containers, datasets and external services that can change or introduce risk.",
    "body": "Track dependencies, provenance, versions and update paths; distinguish trusted artifacts from downloaded content.",
    "example": "Worked example: Create a dependency/model inventory and choose update verification checks.",
    "takeaways": [
      "Track dependencies, provenance, versions and update paths; distinguish trusted artifacts from downloaded content.",
      "Practice: Create a dependency/model inventory and choose update verification checks.",
      "Failure to diagnose: Replace one dependency/model artifact with an unverified version and identify what evidence is missing.",
      "Proof: An inventory with provenance and update verification policy."
    ],
    "code": "untrusted_text = retrieved_chunk\n# Never treat untrusted text as authorization.\nif action not in ALLOWED_ACTIONS:\n    raise PermissionError(\"blocked\")",
    "practice": "Create a dependency/model inventory and choose update verification checks.",
    "breakIt": "Replace one dependency/model artifact with an unverified version and identify what evidence is missing.",
    "proof": "An inventory with provenance and update verification policy.",
    "transfer": "These controls reduce the blast radius of model and application failures and define where human authority remains necessary.",
    "mistakes": [
      "Treating the model as the security boundary.",
      "Testing only direct attacks and ignoring indirect or tool-mediated attacks.",
      "Granting permissions because a workflow “might need them later.”"
    ],
    "resources": [
      [
        "OWASP GenAI / LLM Top 10",
        "https://genai.owasp.org/llm-top-10/"
      ],
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "Supply chain & dependency risk — applied lab",
      "task": "Create a dependency/model inventory and choose update verification checks.",
      "evidence": "An inventory with provenance and update verification policy.",
      "breakIt": "Replace one dependency/model artifact with an unverified version and identify what evidence is missing.",
      "transfer": "These controls constrain the real-world blast radius of model and application failures."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "An inventory with provenance and update verification policy.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Replace one dependency/model artifact with an unverified version and identify what evidence is missing.",
      "reviewed": "2026-09-21",
      "freshness": "OWASP GenAI LLM Top 10 2026; verify current guidance",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Assess model, package, container and tool dependencies for provenance, version control and exploitable trust assumptions.",
    "usedLater": "These controls reduce the blast radius of model and application failures and define where human authority remains necessary.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does supply chain & dependency risk require, and what evidence would justify that choice?"
  },
  {
    "id": "18-6",
    "phase": "18",
    "phaseName": "Security & Responsible AI",
    "title": "Permissions, excessive agency & tool security",
    "summary": "Giving an agent more permissions than its task needs turns model mistakes into larger system incidents. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Giving an agent more permissions than its task needs turns model mistakes into larger system incidents.",
    "body": "Apply least privilege, capability boundaries, approval gates and scoped credentials to agent actions.",
    "example": "Worked example: Design a permission matrix for read/write/admin operations and grant only the minimum needed.",
    "takeaways": [
      "Apply least privilege, capability boundaries, approval gates and scoped credentials to agent actions.",
      "Practice: Design a permission matrix for read/write/admin operations and grant only the minimum needed.",
      "Failure to diagnose: Give a tool broad write access and enumerate the additional harmful actions now possible.",
      "Proof: A least-privilege matrix and blocked-action evidence."
    ],
    "code": "untrusted_text = retrieved_chunk\n# Never treat untrusted text as authorization.\nif action not in ALLOWED_ACTIONS:\n    raise PermissionError(\"blocked\")",
    "practice": "Design a permission matrix for read/write/admin operations and grant only the minimum needed.",
    "breakIt": "Give a tool broad write access and enumerate the additional harmful actions now possible.",
    "proof": "A least-privilege matrix and blocked-action evidence.",
    "transfer": "These controls reduce the blast radius of model and application failures and define where human authority remains necessary.",
    "mistakes": [
      "Treating the model as the security boundary.",
      "Testing only direct attacks and ignoring indirect or tool-mediated attacks.",
      "Granting permissions because a workflow “might need them later.”"
    ],
    "resources": [
      [
        "OWASP GenAI / LLM Top 10",
        "https://genai.owasp.org/llm-top-10/"
      ],
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework"
      ]
    ],
    "experience": {
      "type": "Design",
      "title": "Permissions, excessive agency & tool security — applied lab",
      "task": "Design a permission matrix for read/write/admin operations and grant only the minimum needed.",
      "evidence": "A least-privilege matrix and blocked-action evidence.",
      "breakIt": "Give a tool broad write access and enumerate the additional harmful actions now possible.",
      "transfer": "These controls constrain the real-world blast radius of model and application failures."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "A least-privilege matrix and blocked-action evidence.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Give a tool broad write access and enumerate the additional harmful actions now possible.",
      "reviewed": "2026-09-21",
      "freshness": "OWASP GenAI LLM Top 10 2026; verify current guidance",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Apply least privilege and bounded capabilities so an agent can complete its task without unnecessary authority.",
    "usedLater": "These controls reduce the blast radius of model and application failures and define where human authority remains necessary.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What is the minimum authority this workflow needs to complete its task?"
  },
  {
    "id": "18-7",
    "phase": "18",
    "phaseName": "Security & Responsible AI",
    "title": "Abuse cases, incident response & human oversight",
    "summary": "Responsible AI is operational: teams need abuse scenarios, escalation paths and human accountability where automation can cause harm. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "Responsible AI is operational: teams need abuse scenarios, escalation paths and human accountability where automation can cause harm.",
    "body": "Combine abuse-case analysis, monitoring, escalation, review and post-incident learning without treating “human in the loop” as a magic phrase.",
    "example": "Worked example: Write abuse cases for the capstone and define detection, response and human decision points.",
    "takeaways": [
      "Combine abuse-case analysis, monitoring, escalation, review and post-incident learning without treating “human in the loop” as a magic phrase.",
      "Practice: Write abuse cases for the capstone and define detection, response and human decision points.",
      "Failure to diagnose: Remove a human gate or make it context-free and identify which risk is no longer controlled.",
      "Proof: An abuse/response plan with explicit human responsibilities and residual risk."
    ],
    "code": "untrusted_text = retrieved_chunk\n# Never treat untrusted text as authorization.\nif action not in ALLOWED_ACTIONS:\n    raise PermissionError(\"blocked\")",
    "practice": "Write abuse cases for the capstone and define detection, response and human decision points.",
    "breakIt": "Remove a human gate or make it context-free and identify which risk is no longer controlled.",
    "proof": "An abuse/response plan with explicit human responsibilities and residual risk.",
    "transfer": "These controls reduce the blast radius of model and application failures and define where human authority remains necessary.",
    "mistakes": [
      "Treating the model as the security boundary.",
      "Testing only direct attacks and ignoring indirect or tool-mediated attacks.",
      "Granting permissions because a workflow “might need them later.”"
    ],
    "resources": [
      [
        "OWASP GenAI / LLM Top 10",
        "https://genai.owasp.org/llm-top-10/"
      ],
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework"
      ]
    ],
    "experience": {
      "type": "Prove",
      "title": "Abuse cases, incident response & human oversight — applied lab",
      "task": "Write abuse cases for the capstone and define detection, response and human decision points.",
      "evidence": "An abuse/response plan with explicit human responsibilities and residual risk.",
      "breakIt": "Remove a human gate or make it context-free and identify which risk is no longer controlled.",
      "transfer": "These controls constrain the real-world blast radius of model and application failures."
    },
    "competency": {
      "difficulty": "Advanced",
      "time": "45–75 min",
      "artifact": "An abuse/response plan with explicit human responsibilities and residual risk.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Remove a human gate or make it context-free and identify which risk is no longer controlled.",
      "reviewed": "2026-09-21",
      "freshness": "OWASP GenAI LLM Top 10 2026; verify current guidance",
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Design abuse scenarios, escalation paths and human controls for failures that cannot be safely handled automatically.",
    "usedLater": "These controls reduce the blast radius of model and application failures and define where human authority remains necessary.",
    "guidedSteps": [
      "Define the failure or risk condition before implementing the control.",
      "Build the smallest reproducible test or workflow.",
      "Trigger the failure under controlled conditions and capture the signal.",
      "Verify the mitigation and add a regression or monitoring check."
    ],
    "decision": "What engineering choice does abuse cases, incident response & human oversight require, and what evidence would justify that choice?"
  },
  {
    "id": "19-1",
    "phase": "19",
    "phaseName": "Capstone & Portfolio",
    "title": "Choose the problem & define success",
    "summary": "A strong AI project starts with a measurable problem, not a model or framework. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A strong AI project starts with a measurable problem, not a model or framework.",
    "body": "Define user, job-to-be-done, constraints, baseline, success metrics and explicit non-goals.",
    "example": "Worked example: Write a one-page problem brief and create a 10–20 case initial evaluation set.",
    "takeaways": [
      "Define user, job-to-be-done, constraints, baseline, success metrics and explicit non-goals.",
      "Practice: Write a one-page problem brief and create a 10–20 case initial evaluation set.",
      "Failure to diagnose: Choose a metric that can improve without improving the user outcome and explain why it is insufficient.",
      "Proof: A problem brief with baseline, success criteria, failure costs and initial eval set."
    ],
    "code": "# Capstone evidence\nproblem.md\narchitecture.md\nevals/\nrunbook.md\nsrc/\ntests/\nREADME.md",
    "practice": "Write a one-page problem brief and create a 10–20 case initial evaluation set.",
    "breakIt": "Choose a metric that can improve without improving the user outcome and explain why it is insufficient.",
    "proof": "A problem brief with baseline, success criteria, failure costs and initial eval set.",
    "transfer": "The capstone turns the curriculum into evidence you can reproduce, explain and defend in a technical review.",
    "mistakes": [
      "Choosing a broad problem with no measurable success condition.",
      "Building features before proving the smallest end-to-end path.",
      "Documenting claims without attaching the evidence that supports them."
    ],
    "resources": [
      [
        "OpenAI — Harness Engineering",
        "https://openai.com/index/harness-engineering/"
      ],
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework"
      ]
    ],
    "experience": {
      "type": "Experiment",
      "title": "Choose the problem & define success — applied lab",
      "task": "Write a one-page problem brief and create a 10–20 case initial evaluation set.",
      "evidence": "A problem brief with baseline, success criteria, failure costs and initial eval set.",
      "breakIt": "Choose a metric that can improve without improving the user outcome and explain why it is insufficient.",
      "transfer": "This capstone turns the curriculum into evidence you can explain, reproduce and defend."
    },
    "competency": {
      "difficulty": "Capstone",
      "time": "2–6 hours",
      "artifact": "A problem brief with baseline, success criteria, failure costs and initial eval set.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Choose a metric that can improve without improving the user outcome and explain why it is insufficient.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Choose a narrow user problem, define the system boundary and write measurable success and failure criteria before coding.",
    "usedLater": "The capstone turns the curriculum into evidence you can reproduce, explain and defend in a technical review.",
    "guidedSteps": [
      "Write the requirement and success condition first.",
      "Build the smallest vertical slice that can be executed end-to-end.",
      "Challenge one important assumption or failure mode.",
      "Attach evidence and explain the engineering decision."
    ],
    "decision": "What measurable outcome would make this project worth keeping, and what result would count as failure?"
  },
  {
    "id": "19-2",
    "phase": "19",
    "phaseName": "Capstone & Portfolio",
    "title": "Architecture & threat model",
    "summary": "The capstone architecture should make data flow, model boundaries, tools, storage, evaluation and security assumptions visible. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "The capstone architecture should make data flow, model boundaries, tools, storage, evaluation and security assumptions visible.",
    "body": "Draw components and trust boundaries, then connect each important risk to a control and owner.",
    "example": "Worked example: Create an architecture diagram and threat model before building the full system.",
    "takeaways": [
      "Draw components and trust boundaries, then connect each important risk to a control and owner.",
      "Practice: Create an architecture diagram and threat model before building the full system.",
      "Failure to diagnose: Add a new tool or data source and update the threat model before implementing it.",
      "Proof: An architecture + threat-model pack with decisions and trade-offs."
    ],
    "code": "# Capstone evidence\nproblem.md\narchitecture.md\nevals/\nrunbook.md\nsrc/\ntests/\nREADME.md",
    "practice": "Create an architecture diagram and threat model before building the full system.",
    "breakIt": "Add a new tool or data source and update the threat model before implementing it.",
    "proof": "An architecture + threat-model pack with decisions and trade-offs.",
    "transfer": "The capstone turns the curriculum into evidence you can reproduce, explain and defend in a technical review.",
    "mistakes": [
      "Choosing a broad problem with no measurable success condition.",
      "Building features before proving the smallest end-to-end path.",
      "Documenting claims without attaching the evidence that supports them."
    ],
    "resources": [
      [
        "OpenAI — Harness Engineering",
        "https://openai.com/index/harness-engineering/"
      ],
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework"
      ]
    ],
    "experience": {
      "type": "Debug",
      "title": "Architecture & threat model — applied lab",
      "task": "Create an architecture diagram and threat model before building the full system.",
      "evidence": "An architecture + threat-model pack with decisions and trade-offs.",
      "breakIt": "Add a new tool or data source and update the threat model before implementing it.",
      "transfer": "This capstone turns the curriculum into evidence you can explain, reproduce and defend."
    },
    "competency": {
      "difficulty": "Capstone",
      "time": "2–6 hours",
      "artifact": "An architecture + threat-model pack with decisions and trade-offs.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Add a new tool or data source and update the threat model before implementing it.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Turn the capstone problem into a component architecture with data flows, trust boundaries, risks and explicit non-goals.",
    "usedLater": "The capstone turns the curriculum into evidence you can reproduce, explain and defend in a technical review.",
    "guidedSteps": [
      "Write the requirement and success condition first.",
      "Build the smallest vertical slice that can be executed end-to-end.",
      "Challenge one important assumption or failure mode.",
      "Attach evidence and explain the engineering decision."
    ],
    "decision": "What engineering choice does architecture & threat model require, and what evidence would justify that choice?"
  },
  {
    "id": "19-3",
    "phase": "19",
    "phaseName": "Capstone & Portfolio",
    "title": "Build the smallest end-to-end system",
    "summary": "The goal is a thin vertical slice that proves the core value before adding advanced features. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "The goal is a thin vertical slice that proves the core value before adding advanced features.",
    "body": "Connect input → processing/model → output → evaluation with minimal dependencies and a reproducible run path.",
    "example": "Worked example: Build a working end-to-end slice and capture one successful and one failed case.",
    "takeaways": [
      "Connect input → processing/model → output → evaluation with minimal dependencies and a reproducible run path.",
      "Practice: Build a working end-to-end slice and capture one successful and one failed case.",
      "Failure to diagnose: Add a feature that increases complexity without improving the defined success metric; document why it was rejected or removed.",
      "Proof: A runnable repository with one-command run/test and end-to-end evidence."
    ],
    "code": "# Capstone evidence\nproblem.md\narchitecture.md\nevals/\nrunbook.md\nsrc/\ntests/\nREADME.md",
    "practice": "Build a working end-to-end slice and capture one successful and one failed case.",
    "breakIt": "Add a feature that increases complexity without improving the defined success metric; document why it was rejected or removed.",
    "proof": "A runnable repository with one-command run/test and end-to-end evidence.",
    "transfer": "The capstone turns the curriculum into evidence you can reproduce, explain and defend in a technical review.",
    "mistakes": [
      "Choosing a broad problem with no measurable success condition.",
      "Building features before proving the smallest end-to-end path.",
      "Documenting claims without attaching the evidence that supports them."
    ],
    "resources": [
      [
        "OpenAI — Harness Engineering",
        "https://openai.com/index/harness-engineering/"
      ],
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework"
      ]
    ],
    "experience": {
      "type": "Build",
      "title": "Build the smallest end-to-end system — applied lab",
      "task": "Build a working end-to-end slice and capture one successful and one failed case.",
      "evidence": "A runnable repository with one-command run/test and end-to-end evidence.",
      "breakIt": "Add a feature that increases complexity without improving the defined success metric; document why it was rejected or removed.",
      "transfer": "This capstone turns the curriculum into evidence you can explain, reproduce and defend."
    },
    "competency": {
      "difficulty": "Capstone",
      "time": "2–6 hours",
      "artifact": "A runnable repository with one-command run/test and end-to-end evidence.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Add a feature that increases complexity without improving the defined success metric; document why it was rejected or removed.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Implement the smallest vertical slice that proves the core workflow before adding optimization or optional features.",
    "usedLater": "The capstone turns the curriculum into evidence you can reproduce, explain and defend in a technical review.",
    "guidedSteps": [
      "Write the requirement and success condition first.",
      "Build the smallest vertical slice that can be executed end-to-end.",
      "Challenge one important assumption or failure mode.",
      "Attach evidence and explain the engineering decision."
    ],
    "decision": "What engineering choice does build the smallest end-to-end system require, and what evidence would justify that choice?"
  },
  {
    "id": "19-4",
    "phase": "19",
    "phaseName": "Capstone & Portfolio",
    "title": "Evaluation, regression & failure analysis",
    "summary": "A capstone becomes defensible when its quality claims are backed by repeatable evidence and known failure modes. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A capstone becomes defensible when its quality claims are backed by repeatable evidence and known failure modes.",
    "body": "Run the golden set, inspect failures, classify root causes and protect important behavior with regression tests.",
    "example": "Worked example: Execute the evaluation before and after a controlled change and write a failure analysis.",
    "takeaways": [
      "Run the golden set, inspect failures, classify root causes and protect important behavior with regression tests.",
      "Practice: Execute the evaluation before and after a controlled change and write a failure analysis.",
      "Failure to diagnose: Improve the aggregate score while degrading a critical case; use slice/regression gates to catch it.",
      "Proof: An evaluation report with regression deltas, failure taxonomy and prioritized fixes."
    ],
    "code": "# Capstone evidence\nproblem.md\narchitecture.md\nevals/\nrunbook.md\nsrc/\ntests/\nREADME.md",
    "practice": "Execute the evaluation before and after a controlled change and write a failure analysis.",
    "breakIt": "Improve the aggregate score while degrading a critical case; use slice/regression gates to catch it.",
    "proof": "An evaluation report with regression deltas, failure taxonomy and prioritized fixes.",
    "transfer": "The capstone turns the curriculum into evidence you can reproduce, explain and defend in a technical review.",
    "mistakes": [
      "Choosing a broad problem with no measurable success condition.",
      "Building features before proving the smallest end-to-end path.",
      "Documenting claims without attaching the evidence that supports them."
    ],
    "resources": [
      [
        "OpenAI — Harness Engineering",
        "https://openai.com/index/harness-engineering/"
      ],
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework"
      ]
    ],
    "experience": {
      "type": "Break",
      "title": "Evaluation, regression & failure analysis — applied lab",
      "task": "Execute the evaluation before and after a controlled change and write a failure analysis.",
      "evidence": "An evaluation report with regression deltas, failure taxonomy and prioritized fixes.",
      "breakIt": "Improve the aggregate score while degrading a critical case; use slice/regression gates to catch it.",
      "transfer": "This capstone turns the curriculum into evidence you can explain, reproduce and defend."
    },
    "competency": {
      "difficulty": "Capstone",
      "time": "2–6 hours",
      "artifact": "An evaluation report with regression deltas, failure taxonomy and prioritized fixes.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Improve the aggregate score while degrading a critical case; use slice/regression gates to catch it.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Run representative evaluations, compare against a baseline and convert important failures into permanent regression cases.",
    "usedLater": "The capstone turns the curriculum into evidence you can reproduce, explain and defend in a technical review.",
    "guidedSteps": [
      "Write the requirement and success condition first.",
      "Build the smallest vertical slice that can be executed end-to-end.",
      "Challenge one important assumption or failure mode.",
      "Attach evidence and explain the engineering decision."
    ],
    "decision": "What engineering choice does evaluation, regression & failure analysis require, and what evidence would justify that choice?"
  },
  {
    "id": "19-5",
    "phase": "19",
    "phaseName": "Capstone & Portfolio",
    "title": "Production readiness & runbook",
    "summary": "A demo is not production-ready until an operator can deploy, observe, recover and roll it back. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A demo is not production-ready until an operator can deploy, observe, recover and roll it back.",
    "body": "Define dependencies, configuration, monitoring, alerts, cost controls, rollback and incident steps.",
    "example": "Worked example: Write a lightweight runbook and test the most important recovery procedure.",
    "takeaways": [
      "Define dependencies, configuration, monitoring, alerts, cost controls, rollback and incident steps.",
      "Practice: Write a lightweight runbook and test the most important recovery procedure.",
      "Failure to diagnose: Simulate a model/API outage or bad release and follow the runbook without improvising missing steps.",
      "Proof: A production-readiness checklist plus a tested runbook."
    ],
    "code": "# Capstone evidence\nproblem.md\narchitecture.md\nevals/\nrunbook.md\nsrc/\ntests/\nREADME.md",
    "practice": "Write a lightweight runbook and test the most important recovery procedure.",
    "breakIt": "Simulate a model/API outage or bad release and follow the runbook without improvising missing steps.",
    "proof": "A production-readiness checklist plus a tested runbook.",
    "transfer": "The capstone turns the curriculum into evidence you can reproduce, explain and defend in a technical review.",
    "mistakes": [
      "Choosing a broad problem with no measurable success condition.",
      "Building features before proving the smallest end-to-end path.",
      "Documenting claims without attaching the evidence that supports them."
    ],
    "resources": [
      [
        "OpenAI — Harness Engineering",
        "https://openai.com/index/harness-engineering/"
      ],
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework"
      ]
    ],
    "experience": {
      "type": "Compare",
      "title": "Production readiness & runbook — applied lab",
      "task": "Write a lightweight runbook and test the most important recovery procedure.",
      "evidence": "A production-readiness checklist plus a tested runbook.",
      "breakIt": "Simulate a model/API outage or bad release and follow the runbook without improvising missing steps.",
      "transfer": "This capstone turns the curriculum into evidence you can explain, reproduce and defend."
    },
    "competency": {
      "difficulty": "Capstone",
      "time": "2–6 hours",
      "artifact": "A production-readiness checklist plus a tested runbook.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Simulate a model/API outage or bad release and follow the runbook without improvising missing steps.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Prepare the system to be operated by someone else with deployment instructions, monitoring, limits, rollback and incident steps.",
    "usedLater": "The capstone turns the curriculum into evidence you can reproduce, explain and defend in a technical review.",
    "guidedSteps": [
      "Write the requirement and success condition first.",
      "Build the smallest vertical slice that can be executed end-to-end.",
      "Challenge one important assumption or failure mode.",
      "Attach evidence and explain the engineering decision."
    ],
    "decision": "What engineering choice does production readiness & runbook require, and what evidence would justify that choice?"
  },
  {
    "id": "19-6",
    "phase": "19",
    "phaseName": "Capstone & Portfolio",
    "title": "Portfolio documentation & technical defense",
    "summary": "A portfolio should show engineering judgment, not just a screenshot of an AI answer. This lesson gives you a concrete way to see the problem, change one variable, and verify the result.",
    "why": "A portfolio should show engineering judgment, not just a screenshot of an AI answer.",
    "body": "Document problem, architecture, implementation, evaluation, failures, trade-offs, security and what you would improve next.",
    "example": "Worked example: Prepare a technical walkthrough that lets another engineer reproduce the result and challenge your claims.",
    "takeaways": [
      "Document problem, architecture, implementation, evaluation, failures, trade-offs, security and what you would improve next.",
      "Practice: Prepare a technical walkthrough that lets another engineer reproduce the result and challenge your claims.",
      "Failure to diagnose: Ask a skeptical reviewer to identify an unsupported claim; strengthen it with evidence or explicitly narrow the claim.",
      "Proof: A public-ready project README/portfolio page with links to code, evidence, evaluation and design decisions."
    ],
    "code": "# Reproduce\n# 1. Create environment\n# 2. Install dependencies\n# 3. Run tests\n# 4. Run the example\n# 5. Compare expected output",
    "practice": "Prepare a technical walkthrough that lets another engineer reproduce the result and challenge your claims.",
    "breakIt": "Ask a skeptical reviewer to identify an unsupported claim; strengthen it with evidence or explicitly narrow the claim.",
    "proof": "A public-ready project README/portfolio page with links to code, evidence, evaluation and design decisions.",
    "transfer": "The capstone turns the curriculum into evidence you can reproduce, explain and defend in a technical review.",
    "mistakes": [
      "Choosing a broad problem with no measurable success condition.",
      "Building features before proving the smallest end-to-end path.",
      "Documenting claims without attaching the evidence that supports them."
    ],
    "resources": [
      [
        "OpenAI — Harness Engineering",
        "https://openai.com/index/harness-engineering/"
      ],
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework"
      ]
    ],
    "experience": {
      "type": "Design",
      "title": "Portfolio documentation & technical defense — applied lab",
      "task": "Prepare a technical walkthrough that lets another engineer reproduce the result and challenge your claims.",
      "evidence": "A public-ready project README/portfolio page with links to code, evidence, evaluation and design decisions.",
      "breakIt": "Ask a skeptical reviewer to identify an unsupported claim; strengthen it with evidence or explicitly narrow the claim.",
      "transfer": "This capstone turns the curriculum into evidence you can explain, reproduce and defend."
    },
    "competency": {
      "difficulty": "Capstone",
      "time": "2–6 hours",
      "artifact": "A public-ready project README/portfolio page with links to code, evidence, evaluation and design decisions.",
      "prerequisites": [],
      "success": [
        "The explanation matches the observed mechanism or system behavior.",
        "The hands-on task produces the expected artifact, output or measurement.",
        "The deliberate failure is reproduced and its violated assumption is identified.",
        "The final evidence supports the engineering decision recorded for this lesson."
      ],
      "failureMode": "Ask a skeptical reviewer to identify an unsupported claim; strengthen it with evidence or explicitly narrow the claim.",
      "reviewed": "2026-09-21",
      "freshness": null,
      "editorial": "V9 — multi-level editorial pass"
    },
    "skillTarget": "Document the engineering decisions, evidence, trade-offs and known limitations so another engineer can reproduce and challenge the work.",
    "usedLater": "The capstone turns the curriculum into evidence you can reproduce, explain and defend in a technical review.",
    "guidedSteps": [
      "Write the requirement and success condition first.",
      "Build the smallest vertical slice that can be executed end-to-end.",
      "Challenge one important assumption or failure mode.",
      "Attach evidence and explain the engineering decision."
    ],
    "decision": "What engineering choice does portfolio documentation & technical defense require, and what evidence would justify that choice?"
  }
];

const assessmentBank = {
  '00': [
    ['Why use a virtual environment?', ['To isolate project dependencies','To increase monitor brightness','To replace Git','To store passwords'], 0],
    ['What does Git primarily track?', ['Project history and changes','Internet speed','CPU temperature','Cloud billing'], 0],
    ['Which file should normally stay out of Git?', ['A source file','A README','A file containing API secrets','A test'], 2],
    ['What is a good first step when a library example fails?', ['Add more abstractions','Check version, docs and reproduce the smallest example','Delete the project','Ignore the error'], 1],
    ['What is the recommended learning loop on this platform?', ['Learn → Practice → Prove → Progress','Skip → Copy → Ship','Deploy → Guess → Repeat','Read → Forget → Move on'], 0]
  ],
  '01': [
    ['Which structure is naturally key/value based?', ['List','Dictionary','Tuple only','String'], 1],
    ['Why use functions?', ['To make code less testable','To create reusable units with clear inputs and outputs','To avoid variables','To hide errors'], 1],
    ['What does a NumPy array shape describe?', ['Its file name','Its dimensions','Its Git branch','Its API key'], 1],
    ['What should you do with a traceback?', ['Ignore it','Read it to locate the failure and reproduce the problem','Commit it as code','Delete Python'], 1],
    ['What is Pandas commonly used for?', ['Tabular data manipulation and inspection','GPU driver installation','DNS configuration','Video editing'], 0]
  ],
  '02': [
    ['What does a dot product combine?', ['Two vectors into a scalar','Two files into a ZIP','Two models into a server','Two passwords into a key'], 0],
    ['What does a derivative describe?', ['How a quantity changes with respect to another','How to store JSON','How to create a Git branch','How to encrypt a file'], 0],
    ['What is a gradient?', ['A vector of partial derivatives','A database table','A tokenizer','A deployment manifest'], 0],
    ['Why is optimization important in ML?', ['It helps find model parameters that reduce an objective','It replaces testing','It removes training data','It disables inference'], 0],
    ['Why learn probability and statistics for AI?', ['They provide tools for uncertainty and data reasoning','They are only useful for UI design','They replace Python','They are unrelated to evaluation'], 0]
  ],
  '03': [
    ['Why split data into train and test sets?', ['To estimate generalization on unseen data','To make files smaller','To remove all features','To avoid validation'], 0],
    ['What does overfitting mean?', ['A model fits training data too closely and generalizes poorly','A model has no parameters','A dataset has no rows','A model cannot train'], 0],
    ['What is regularization used for?', ['Controlling model complexity','Creating Git commits','Compressing images','Serving HTTP'], 0],
    ['Which task is logistic regression commonly used for?', ['Classification','Image rendering','File compression','Container orchestration'], 0],
    ['Why use a validation set?', ['To guide model or hyperparameter choices before final testing','To replace the training set','To store secrets','To deploy APIs'], 0]
  ],
  '04': [
    ['What does forward propagation do?', ['Computes predictions through the network','Deletes gradients','Creates a Git branch','Indexes a database'], 0],
    ['What is backpropagation used to compute?', ['Gradients of the loss with respect to parameters','HTTP status codes','File paths','Vector database indexes'], 0],
    ['Why use an activation function?', ['To introduce useful nonlinear behavior','To save passwords','To create containers','To replace datasets'], 0],
    ['What does an optimizer update?', ['Model parameters using gradient information','The operating system','The training dataset filename','The API URL'], 0],
    ['What is a training loop?', ['A repeated process of forward pass, loss, backward pass and parameter update','A network cable','A Git workflow only','A database migration'], 0]
  ],
  '05': [
    ['What does a convolution learn from an image?', ['Local spatial patterns','Git history','API credentials','Database schemas'], 0],
    ['Why use pooling in CNNs?', ['To reduce spatial dimensions and summarize features','To create tokens','To encrypt images','To install Python'], 0],
    ['What is data augmentation?', ['Creating varied training examples from existing data','Deleting labels','Replacing the model','Compressing Git history'], 0],
    ['What is transfer learning?', ['Starting from a model trained on a related task or dataset','Moving files between folders','Transferring Git ownership','Changing image formats only'], 0],
    ['What should vision evaluation measure?', ['Performance on representative unseen visual data','Only training loss','CPU temperature','Number of Git commits'], 0]
  ],
  '06': [
    ['What is tokenization?', ['Splitting text into model-friendly units','Encrypting a database','Deploying a container','Compressing images'], 0],
    ['What does TF-IDF estimate?', ['The importance of terms in documents','GPU temperature','Network latency','Model parameter count'], 0],
    ['What is an embedding?', ['A learned numeric representation of an item','A Git commit','A password file','A deployment script'], 0],
    ['What does attention help a model do?', ['Weight relationships between tokens or representations','Install packages','Store secrets','Create DNS records'], 0],
    ['Why evaluate NLP systems on representative text?', ['To measure behavior on the language and tasks they will actually encounter','To avoid test data','To replace tokenization','To increase file size'], 0]
  ],
  '07': [
    ['What are queries, keys and values used for?', ['Computing attention relationships','Managing Git branches','Encrypting files','Starting containers'], 0],
    ['Why use multi-head attention?', ['To learn different relationship patterns in parallel','To reduce all inputs to one token','To replace embeddings','To avoid training'], 0],
    ['Why does a Transformer need positional information?', ['Attention alone does not inherently encode token order','It stores API keys','It replaces the tokenizer','It compresses weights'], 0],
    ['What does causal masking prevent?', ['A token from attending to future tokens during autoregressive training','A model from using embeddings','A server from logging','A user from reading docs'], 0],
    ['What is a Transformer block?', ['A repeated neural architecture containing attention and feed-forward components','A Git repository','A vector database','A Python package manager'], 0]
  ],
  '08': [
    ['What does temperature influence in generation?', ['The randomness of token selection','The CPU temperature','The model file size','The network port'], 0],
    ['What is top-k sampling?', ['Restricting sampling to the k highest-probability candidates','Selecting k database rows','Training k models','Creating k containers'], 0],
    ['Why use structured outputs?', ['To make generated results conform to a predictable schema','To hide prompts','To replace testing','To remove context'], 0],
    ['What is tool calling?', ['Allowing a model to request an external function or capability','Calling a human by phone','Calling Git commands automatically','Calling a database without validation'], 0],
    ['What is a common generative AI failure mode?', ['Plausible but incorrect output','A faster keyboard','A shorter README','A larger monitor'], 0]
  ],
  '09': [
    ['Why build a tiny language model from scratch?', ['To understand the mechanisms underneath larger models','To avoid learning Python','To replace evaluation','To create a web browser'], 0],
    ['What do token embeddings represent?', ['Tokens as learned numeric vectors','Passwords as hashes','Files as URLs','Images as HTML'], 0],
    ['What is the training target in autoregressive language modeling?', ['Predict the next token from prior context','Predict CPU usage','Predict Git branches','Predict file permissions'], 0],
    ['Why save checkpoints during training?', ['To resume or inspect training from known model states','To store user passwords','To replace datasets','To disable inference'], 0],
    ['What is inference?', ['Using a trained model to produce outputs','Updating Git','Creating a dataset','Installing a package'], 0]
  ],
  '10': [
    ['What is prompt architecture?', ['Designing instructions, context and outputs systematically','Designing CSS only','Creating Git branches','Choosing monitor settings'], 0],
    ['Why chunk documents for retrieval?', ['To create useful searchable units that fit retrieval and context constraints','To delete information','To reduce security','To avoid embeddings'], 0],
    ['What is caching useful for in LLM applications?', ['Reducing repeated work, latency and sometimes cost','Increasing hallucinations','Replacing evaluation','Deleting context'], 0],
    ['Why test an LLM application beyond a few examples?', ['Model outputs are variable and need systematic evaluation','Because prompts never change','Because tests are optional','Because APIs cannot fail'], 0],
    ['What makes an LLM application production-oriented?', ['Reliability, evaluation, observability and clear failure handling','Only a polished UI','Only a long prompt','Only a large model'], 0]
  ],
  '11': [
    ['What is the purpose of RAG?', ['Ground generation using retrieved external information','Replace all databases','Remove documents','Train every model from scratch'], 0],
    ['What does vector search retrieve?', ['Items with similar representations','Only exact filenames','Git commits','HTTP headers'], 0],
    ['Why use metadata filters?', ['To restrict retrieval to relevant subsets','To change model weights','To encrypt embeddings','To replace chunking'], 0],
    ['What does reranking do?', ['Reorders retrieved candidates using a stronger relevance signal','Deletes all candidates','Trains the tokenizer','Starts the API'], 0],
    ['Why evaluate grounding?', ['To verify that answers are supported by retrieved evidence','To measure screen size','To avoid citations','To increase token count'], 0]
  ],
  '12': [
    ['What is multimodal AI?', ['AI systems that work across multiple input or output modalities','AI that uses multiple Git branches','AI with multiple passwords','AI that only processes text'], 0],
    ['What can OCR provide?', ['Text extracted from images or documents','Audio generation','Git history','Vector database credentials'], 0],
    ['Why use multimodal embeddings?', ['To represent different modalities in spaces useful for similarity or retrieval','To replace APIs','To delete images','To store secrets'], 0],
    ['What is cross-modal retrieval?', ['Retrieving information across different modalities','Retrieving Git commits','Retrieving CPU metrics only','Retrieving passwords'], 0],
    ['Why evaluate multimodal systems carefully?', ['Different modalities introduce different failure modes','Images never fail','Audio needs no testing','Documents are always correct'], 0]
  ],
  '13': [
    ['What is a tool schema?', ['A defined interface describing tool inputs and outputs','A CSS theme','A Git branch','A database password'], 0],
    ['What is MCP designed to standardize?', ['Connections between AI applications and tools/resources','Image compression','Python syntax','Model training only'], 0],
    ['Why are authentication boundaries important for tools?', ['Tools can expose real capabilities and data','They make prompts shorter','They remove testing','They replace logging'], 0],
    ['What should a tool do when an external operation fails?', ['Return a clear, bounded error the caller can reason about','Silently invent success','Delete the request','Expose secrets'], 0],
    ['Why validate tool inputs?', ['To reduce misuse, unexpected operations and security risk','To increase hallucinations','To avoid schemas','To disable observability'], 0]
  ],
  '14': [
    ['What is an agent loop?', ['A cycle of reasoning or planning, action, observation and continuation','A Git commit loop','A CPU benchmark','A database backup'], 0],
    ['Why does agent state matter?', ['It lets the system retain relevant information across steps','It removes all context','It replaces tools','It prevents evaluation'], 0],
    ['What is human-in-the-loop useful for?', ['Adding human judgment to sensitive or uncertain decisions','Avoiding all testing','Replacing APIs','Increasing token count'], 0],
    ['Why implement retries carefully?', ['Unbounded retries can duplicate work or amplify failures','Retries always fix every error','Retries remove latency','Retries replace validation'], 0],
    ['Why evaluate agents with tasks and traces?', ['Their behavior depends on multi-step actions and tool use','Because agents have no outputs','Because prompts are irrelevant','Because logs are unnecessary'], 0]
  ],
  '15': [
    ['What is idempotency?', ['Repeating an operation does not unintentionally change the result beyond the first successful application','Running code faster','Encrypting a queue','Deleting retries'], 0],
    ['Why use queues for long-running AI work?', ['They decouple producers and workers and help absorb bursts','They remove all failures','They replace databases','They guarantee perfect ordering'], 0],
    ['What is a state machine useful for?', ['Making workflow states and transitions explicit','Generating embeddings','Rendering images','Storing API keys'], 0],
    ['Why design failure handling explicitly?', ['Distributed workflows can fail partially and need recovery paths','Failures never happen','It removes observability','It replaces testing'], 0],
    ['What is concurrency?', ['Multiple operations making progress during overlapping time periods','A model tokenizer','A database index','A Git tag'], 0]
  ],
  '16': [
    ['Why test AI systems with evaluation datasets?', ['To compare behavior consistently across versions and cases','To avoid regression testing','To replace all monitoring','To remove prompts'], 0],
    ['What is hallucination testing?', ['Checking for unsupported or fabricated claims','Testing monitor brightness','Testing Git branches','Testing network cables'], 0],
    ['What is an LLM-as-judge limitation?', ['The judge can share biases or errors with the system being evaluated','It is always deterministic and perfect','It cannot read text','It removes the need for humans'], 0],
    ['What is a quality gate?', ['A condition that must be met before a change progresses','A physical door','A GitHub password','A model architecture'], 0],
    ['Why test agents differently from simple functions?', ['Agents can have multi-step, stateful and tool-dependent behavior','Agents have no observable behavior','Agents cannot fail','Agents never change'], 0]
  ],
  '17': [
    ['Why use observability in production AI?', ['To understand health, latency, errors and behavior after deployment','To replace source control','To remove logs','To avoid testing'], 0],
    ['What does tracing help show?', ['The path and timing of work across components','Only CPU model name','Git commit count','Image resolution'], 0],
    ['Why containerize services?', ['To package applications and dependencies consistently','To replace monitoring','To store secrets publicly','To eliminate APIs'], 0],
    ['Why track AI latency?', ['User experience and infrastructure cost can depend on response time','Latency never matters','It replaces accuracy','It removes retries'], 0],
    ['What belongs in a production release checklist?', ['Tests, configuration, observability, rollback and operational readiness','Only the logo','Only a prompt','Only the README'], 0]
  ],
  '18': [
    ['What is prompt injection?', ['An attempt to manipulate an AI system through untrusted instructions or content','A Python import','A Git merge','A database backup'], 0],
    ['Why protect sensitive data from model inputs?', ['AI systems can expose or transform data in unintended ways','Privacy never matters','Models automatically secure everything','It only affects UI'], 0],
    ['What does least privilege mean?', ['Give users and tools only the access required for their task','Give every tool admin access','Disable all authentication','Store credentials in prompts'], 0],
    ['Why use human oversight for high-impact decisions?', ['Some decisions require accountability and contextual judgment','Humans are never useful','It removes documentation','It guarantees model accuracy'], 0],
    ['What is threat modeling?', ['Systematically identifying assets, threats, attack paths and mitigations','Writing marketing copy','Training a tokenizer','Optimizing CSS'], 0]
  ],
  '19': [
    ['What makes a capstone valuable?', ['It combines multiple skills into a working, documented system','It only contains screenshots','It avoids testing','It uses the largest model available'], 0],
    ['Why document architecture?', ['It helps others understand decisions, boundaries and trade-offs','It replaces code','It hides failures','It makes tests unnecessary'], 0],
    ['What should a portfolio AI project demonstrate?', ['Problem definition, implementation, evaluation and engineering decisions','Only a logo','Only API calls','Only generated text'], 0],
    ['Why include an evaluation harness in an AI project?', ['To measure behavior systematically as the system changes','To make the UI darker','To avoid regression tests','To remove datasets'], 0],
    ['What is the goal of the final capstone?', ['Demonstrate an end-to-end AI engineering workflow from design through validation','Memorize terminology only','Avoid production concerns','Skip testing'], 0]
  ]
};

function buildAppliedAssessments(){
  const out={};
  const templates=[
    (l)=>`A learner is facing this situation: ${l.why} Which action best demonstrates the skill taught in “${l.title}”?`,
    (l)=>`Which result would be the strongest evidence that the learner actually mastered “${l.title}”?`,
    (l)=>`The learner deliberately creates this failure: ${l.breakIt} What should they do next?`,
    (l)=>`For “${l.title}”, which engineering decision most directly follows the lesson’s mental model?`,
    (l)=>`Which transfer statement is most accurate for “${l.title}”?`
  ];
  for(const p of phases){
    const ls=lessonSpecs.filter(x=>x.phase===p[0]);
    const picks=[0,Math.max(0,Math.floor((ls.length-1)*.25)),Math.max(0,Math.floor((ls.length-1)*.5)),Math.max(0,Math.floor((ls.length-1)*.75)),ls.length-1].map(i=>ls[i]);
    out[p[0]]=picks.map((l,qi)=>{
      const correct=[l.practice,l.proof,`Reproduce the failure, identify the violated assumption, then verify the recovery.`,l.body, l.transfer][qi];
      const others=ls.filter(x=>x.id!==l.id).slice(0,3).map(x=>x.proof||x.practice);
      const opts=[correct,...others];
      const answer=qi%4;
      const rotated=opts.map((_,i)=>opts[(i-answer+4)%4]);
      return {q:templates[qi](l),options:rotated,answer};
    });
  }
  return out;
}
const assessments = buildAppliedAssessments();

const optionalPhases = new Set(["05","09","12"]);

function lessonData(id){ return lessonSpecs.filter(x=>x.id===id); }

function phaseLessons(phaseId){ return lessonSpecs.filter(x=>x.phase===phaseId); }

function phaseAssessment(id){ return assessments[id] || []; }

const glossary = [
['API','A defined interface through which software exchanges requests and responses.'],
['Autograd','Automatic differentiation that computes gradients through a recorded computation graph.'],
['Backpropagation','The process of propagating loss derivatives backward through a neural network to obtain parameter gradients.'],
['Baseline','A simple reference system used to judge whether additional complexity creates useful improvement.'],
['Batch','A group of examples processed together in one model step.'],
['Batch size','The number of examples processed together before a training update.'],
['Causal mask','An attention mask that prevents a token from using information from future positions during autoregressive generation.'],
['Chunking','Splitting source documents into retrievable units for a retrieval system.'],
['Context window','The finite amount of model input context available for a request or generation process.'],
['Embedding','A learned numeric representation whose geometry can be useful for similarity or downstream tasks.'],
['Evaluation dataset','A versioned collection of representative tasks or examples used to measure system behavior.'],
['Grounding','Constraining or supporting a generated answer with relevant evidence or external information.'],
['Hallucination','A model output that presents unsupported or fabricated information as if it were reliable.'],
['Idempotency','A property where repeating the same operation does not create unintended additional effects.'],
['Inference','Using a trained model to produce outputs for new inputs.'],
['LLM','Large language model: a model trained on large-scale text/token data to predict or generate language.'],
['MCP','Model Context Protocol, a protocol for connecting AI applications with tools and contextual resources through defined interfaces.'],
['RAG','Retrieval-Augmented Generation: retrieving external information and supplying it to a model at runtime.'],
['Reranking','Reordering retrieved candidates with a stronger relevance signal before final context selection.'],
['Regression test','A repeatable check that protects behavior that previously worked from breaking after a change.'],
['Retrieval','Selecting potentially relevant information from a larger collection for a task.'],
['Schema','A machine-readable contract describing the expected structure and constraints of data.'],
['Temperature','A decoding control that changes how probability mass is distributed during sampling; it does not retrain the model.'],
['Token','A model-facing unit of text or other serialized input used by a tokenizer.'],
['Tool calling','A model/application interaction where the model requests a defined external function or capability.'],
['Trace','A recorded execution path showing steps, timing, calls, errors and other telemetry for one operation.'],
['Vector search','Searching for items using similarity between vector representations.'],
['Virtual environment','An isolated Python environment containing project-specific installed packages.'],
['Golden case','A representative evaluation case with explicit success criteria used as a stable quality reference.'],
['Prompt injection','An attempt to manipulate an AI system by placing instructions in input or untrusted content that conflict with intended behavior.'],
['Least privilege','Granting a user, service or tool only the permissions required for its task.'],
['Guardrail','An enforceable control that constrains system behavior, data access or actions.'],
['Agent','A system that uses a model and other components to pursue a goal through multiple controlled steps.'],
['Agent loop','The repeated cycle of state/context, model decision, action, observation and termination.'],
['Harness','The surrounding repository, tests, tooling, documentation and feedback mechanisms that make automated engineering work inspectable.'],
['Observability','The ability to understand system behavior from emitted telemetry such as logs, metrics and traces.'],
['Latency','Elapsed time between a request and a defined response or processing milestone.'],
['Idempotency key','A unique identifier used to recognize repeated attempts of the same side-effecting operation.'],
['Data leakage','Information entering training or evaluation that would not legitimately be available at the prediction or decision time.'],
['Overfitting','When a model fits training data well but generalizes poorly to relevant unseen data.'],
['Precision','Among predicted positives, the fraction that are actually positive.'],
['Recall','Among actual positives, the fraction that the system correctly identifies.'],
['Regularization','A technique or constraint that discourages overly complex model behavior and can improve generalization.'],
['Gradient','A vector of partial derivatives indicating how an objective changes with respect to parameters.'],
['Vectorization','Expressing numerical operations over arrays so they can be executed efficiently without explicit Python loops for each element.'],
['Normalization','Transforming values into a chosen scale or distribution; the exact operation depends on the task.'],
['OCR','Optical character recognition: extracting machine-readable text from visual document content.'],
['Multimodal','An AI system that processes or generates information across more than one modality, such as text, images or audio.'],
['CI/CD','Continuous integration and continuous delivery/deployment practices that automate validation and release workflows.'],
['Rollback','Returning a system to a previously known-good version or configuration after a bad change.'],
['Threat model','A structured description of assets, actors, trust boundaries, threats and mitigations.'],
['Supply chain risk','Risk introduced through dependencies, models, containers, datasets or external artifacts used by a system.'],
['Human-in-the-loop','A design where a person has a defined review or approval role at an identified decision boundary.']
];

// Phase 14 uses original diagrams created for this project.
lessonSpecs.filter(x=>x.phase==='14').forEach(x=>{const n=x.id.split('-')[1];x.originalVisual=`assets/agent-systems-original/agent-${String(n).padStart(2,'0')}.svg`;});
