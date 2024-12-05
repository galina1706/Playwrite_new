import { test, expect } from '@playwright/test';

test.describe('Registration pop up', () => {
    test('Registration, positive scenario', async ({ page }) => {

        await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

        const buttonSignUp = page.locator('button.hero-descriptor_btn.btn.btn-primary');
        await buttonSignUp.click();

        const userNameLocator = page.locator('#signupName');
        await userNameLocator.fill('First');

        const userLastnameLocator = page.locator('#signupLastName');
        await userLastnameLocator.fill('Last');

        const emailLocator = page.locator('#signupEmail');
        await emailLocator.fill('halina@mail.com');

        const passwordLocator = page.locator('#signupPassword');
        await passwordLocator.fill('Rtyuehe17!');

        const repeatPasswordLocator = page.locator('#signupRepeatPassword');
        await repeatPasswordLocator.fill('Rtyuehe17!');

        const buttonRegister = page.locator('.modal-content button.btn.btn-primary');
        await buttonRegister.click();
    })

    test('Registration, User name -wrong data', async ({ page }) => {
        // Перехід на сторінку
        await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

        // Натискання на кнопку "Sign Up"
        const buttonSignUp = page.locator('button.hero-descriptor_btn.btn.btn-primary');
        await buttonSignUp.click();

        // Введення імені у форму
        const userNameLocator = page.locator('#signupName');
        await userNameLocator.type('First name');

        // Додатково натиснути поза полем, щоб викликати валідацію (опціонально)
        await page.click('body');

        // Перевірка, що з'явилося повідомлення про помилку
        const errorMessage = page.locator('#signupName + .invalid-feedback p');
        await expect(errorMessage).toBeVisible({ timeout: 5000 }); // Очікування, що елемент стане видимим
        await expect(errorMessage).toHaveText('Name is invalid');
    });

    test('Registration, User name empty field', async ({ page }) => {
        // Перехід на сторінку
        await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

        // Натискання на кнопку "Sign Up"
        const buttonSignUp = page.locator('button.hero-descriptor_btn.btn.btn-primary');
        await buttonSignUp.click();

        // Введення імені у форму
        const userNameLocator = page.locator('#signupName');
        await userNameLocator.type('');

        // Додатково натиснути поза полем, щоб викликати валідацію (опціонально)
        await page.click('body');

        // Перевірка, що з'явилося повідомлення про помилку
        const errorMessage = page.locator('#signupName + .invalid-feedback p');
        await expect(errorMessage).toBeVisible({ timeout: 5000 }); // Очікування, що елемент стане видимим
        await expect(errorMessage).toHaveText('Name required');
    });

    test('Registration, User last name wrong data', async ({ page }) => {
        // Перехід на сторінку
        await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

        // Натискання на кнопку "Sign Up"
        const buttonSignUp = page.locator('button.hero-descriptor_btn.btn.btn-primary');
        await buttonSignUp.click();

        // Введення прізвища у форму
        const userNameLocator = page.locator('#signupLastName');
        await userNameLocator.type('Last name');

        // Додатково натиснути поза полем, щоб викликати валідацію (опціонально)
        await page.click('body');

        // Перевірка, що з'явилося повідомлення про помилку
        const errorMessage = page.locator('#signupLastName + .invalid-feedback p');
        await expect(errorMessage).toBeVisible({ timeout: 5000 }); // Очікування, що елемент стане видимим
        await expect(errorMessage).toHaveText('Last name is invalid');
    });

    test('Registration, User last name empty field', async ({ page }) => {
        // Перехід на сторінку
        await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

        // Натискання на кнопку "Sign Up"
        const buttonSignUp = page.locator('button.hero-descriptor_btn.btn.btn-primary');
        await buttonSignUp.click();

        // Введення прізвища у форму
        const userNameLocator = page.locator('#signupLastName');
        await userNameLocator.type('');

        // Додатково натиснути поза полем, щоб викликати валідацію (опціонально)
        await page.click('body');

        // Перевірка, що з'явилося повідомлення про помилку
        const errorMessage = page.locator('#signupLastName + .invalid-feedback p');
        await expect(errorMessage).toBeVisible({ timeout: 5000 }); // Очікування, що елемент стане видимим
        await expect(errorMessage).toHaveText('Last name required');
    });

    test('Registration, last name wrong lenght', async ({ page }) => {
        // Перехід на сторінку
        await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

        // Натискання на кнопку "Sign Up"
        const buttonSignUp = page.locator('button.hero-descriptor_btn.btn.btn-primary');
        await buttonSignUp.click();

        // Введення прізвища у форму
        const userNameLocator = page.locator('#signupLastName');
        await userNameLocator.type('h');

        // Додатково натиснути поза полем, щоб викликати валідацію (опціонально)
        await page.click('body');

        // Перевірка, що з'явилося повідомлення про помилку
        const errorMessage = page.locator('#signupLastName + .invalid-feedback p');
        await expect(errorMessage).toBeVisible({ timeout: 5000 }); // Очікування, що елемент стане видимим
        await expect(errorMessage).toHaveText('Last name has to be from 2 to 20 characters long');
    });
})
