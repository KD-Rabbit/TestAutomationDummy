import { Page, expect } from "@playwright/test";

export async function login(page: Page, username: string, password: string) {
    // Navigate to the login page
    await page.goto('https://your-website.com/login');

    // Fill in the username
    await page.locator('input#identifier').fill(username);

    // Click the 'Next' button or equivalent to proceed
    await page.locator('button#next').click();

    // Wait for the password field to be visible
    await page.locator('input#password').waitFor();

    // Fill in the password
    await page.locator('input#password').fill(password);

    // Click the 'Login' button or equivalent to submit the form
    await page.locator('button#login').click();

    // Optionally, wait for some element that indicates a successful login
    await expect(page.locator('selector-for-success-indicator')).toBeVisible();
}
