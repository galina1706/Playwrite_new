import { test, expect, BrowserContext } from '@playwright/test';

test.describe('User Garage Page Tests', () => {
    const loginUrl = 'https://guest:welcome2qauto@qauto.forstudy.space/';

    // Фікстура для збереження storage state після логіну
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();

        // Перехід на сторінку з логіном через URL
        await page.goto(loginUrl);

        // Чекаємо, поки користувач успішно залогінується
        await page.waitForSelector('text=Welcome');

        // Зберігаємо storage state
        await context.storageState({ path: 'storageState.json' });
        await context.close();
    });

    // Фікстура для використання збереженого storage state
    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext({
            storageState: 'storageState.json'  // Завантажуємо збережений storage state
        });
        const page = await context.newPage();
        await page.goto('https://qauto.forstudy.space/garage');  // Перехід на сторінку гаража
        await page.close();
    });

    // Тест на перевірку доступу до сторінки гаража
    test('User can see the garage page', async ({ page }) => {
        // Перевіряємо, чи ми на сторінці гаража і чи є необхідний контент
        await expect(page).toHaveURL('https://qauto.forstudy.space/garage');
        await expect(page.locator('text=Garage')).toBeVisible();
    });

    // Інший тест, який перевіряє взаємодію з елементами гаража
    test('User can interact with the garage', async ({ page }) => {
        await expect(page.locator('button#add-car')).toBeVisible();
        await page.click('button#add-car');
        await expect(page.locator('text=Car added')).toBeVisible();
    });
});
