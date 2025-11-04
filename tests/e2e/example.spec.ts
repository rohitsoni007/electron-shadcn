import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Electron/);
});

test('navigation works', async ({ page }) => {
    await page.goto('/');

    // Click the About link
    await page.click('text=About');

    // Expects the URL to contain about
    await expect(page).toHaveURL(/.*about/);
});