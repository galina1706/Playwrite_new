import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test.describe('Registration Pop-up Tests', () => {
    test('Registration, positive scenario', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.openSignUpForm();
        await loginPage.fillRegistrationForm('First', 'Last', 'halina@mail.com', 'Rtyuehe17!', 'Rtyuehe17!');
        await loginPage.submitRegistrationForm();

        // Add an assertion for success message or navigation
        await expect(page).toHaveURL('https://qauto.forstudy.space/');
    });

    test('Registration, User name - wrong data', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.openSignUpForm();
        await loginPage.fillRegistrationForm('First name', 'Last', 'halina@mail.com', 'Rtyuehe17!', 'Rtyuehe17!');
        await page.click('body'); // Trigger validation

        const errorMessage = loginPage.getErrorLocator('Name');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Name is invalid');
    });

    test('Registration, User name empty field', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.openSignUpForm();
        await loginPage.fillRegistrationForm('', 'Last', 'halina@mail.com', 'Rtyuehe17!', 'Rtyuehe17!');
        await page.click('body'); // Trigger validation

        const errorMessage = loginPage.getErrorLocator('Name');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Name required');
    });

    test('Registration, User last name wrong data', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.openSignUpForm();
        await loginPage.fillRegistrationForm('First', 'Last name', 'halina@mail.com', 'Rtyuehe17!', 'Rtyuehe17!');
        await page.click('body'); // Trigger validation

        const errorMessage = loginPage.getErrorLocator('LastName');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Last name is invalid');
    });

    test('Registration, User last name empty field', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.openSignUpForm();
        await loginPage.fillRegistrationForm('First', '', 'halina@mail.com', 'Rtyuehe17!', 'Rtyuehe17!');
        await page.click('body'); // Trigger validation

        const errorMessage = loginPage.getErrorLocator('LastName');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Last name required');
    });

    test('Registration, last name wrong length', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.openSignUpForm();
        await loginPage.fillRegistrationForm('First', 'h', 'halina@mail.com', 'Rtyuehe17!', 'Rtyuehe17!');
        await page.click('body'); // Trigger validation

        const errorMessage = loginPage.getErrorLocator('LastName');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Last name has to be from 2 to 20 characters long');
    });
});
