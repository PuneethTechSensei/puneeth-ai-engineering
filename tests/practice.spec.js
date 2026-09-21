import { test, expect } from '@playwright/test';

test('learner can use applied practice and move forward', async ({ page }) => {
  await page.goto('https://puneeth-ai-engineering.vercel.app/assessment.html?phase=00');
  await expect(page.locator('#assessmentContent')).toBeVisible();

  // The practice renderer should expose five questions.
  await expect(page.locator('.practice-question')).toHaveCount(5);

  // Current UI reveals explanations after submission; this test selects a deliberately
  // wrong option, submits, and verifies the correction feedback.
  const first = page.locator('.practice-question').first();
  await first.locator('input[type="radio"]').last().check();
  await page.getByRole('button', { name: /check practice answers/i }).click();

  await expect(first.locator('.practice-explanation')).toBeVisible();
  await expect(page.locator('#practiceResult')).toContainText(/Review|Practice complete/);

  // Phase navigation should remain available after practice.
  await page.goto('https://puneeth-ai-engineering.vercel.app/curriculum.html');
  await expect(page.locator('body')).toContainText('Python for AI');
});
