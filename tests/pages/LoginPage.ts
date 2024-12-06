import { Page, Locator } from '@playwright/test';

class LoginPage {
    private page: Page;
    private buttonSignUp: Locator;
    private userNameLocator: Locator;
    private userLastnameLocator: Locator;
    private emailLocator: Locator;
    private passwordLocator: Locator;
    private repeatPasswordLocator: Locator;
    private buttonRegister: Locator;

    constructor(page: Page) {
        this.page = page;

        this.buttonSignUp = page.locator('button.hero-descriptor_btn.btn.btn-primary');
        this.userNameLocator = page.locator('#signupName');
        this.userLastnameLocator = page.locator('#signupLastName');
        this.emailLocator = page.locator('#signupEmail');
        this.passwordLocator = page.locator('#signupPassword');
        this.repeatPasswordLocator = page.locator('#signupRepeatPassword');
        this.buttonRegister = page.locator('.modal-content button.btn.btn-primary');
    }

    async navigate(): Promise<void> {
        await this.page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    }

    async openSignUpForm(): Promise<void> {
        await this.buttonSignUp.click();
    }

    async fillRegistrationForm(firstName: string, lastName: string, email: string, password: string, confirmPassword: string): Promise<void> {
        await this.userNameLocator.fill(firstName);
        await this.userLastnameLocator.fill(lastName);
        await this.emailLocator.fill(email);
        await this.passwordLocator.fill(password);
        await this.repeatPasswordLocator.fill(confirmPassword);
    }

    async submitRegistrationForm(): Promise<void> {
        await this.buttonRegister.click();
    }

    getErrorLocator(field: string): Locator {
        return this.page.locator(`#signup${field} + .invalid-feedback p`);
    }
}

export default LoginPage;
