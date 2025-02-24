import { expect, type Locator, type Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LogInPage extends BasePage {
  readonly page: Page;
  readonly emailField: Locator;
  readonly emailError: Locator;
  readonly passwordField: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.emailField = page.locator("#UserName");
    this.emailError = page.locator("#UserName-error");
    this.passwordField = page.locator("#Password");
    this.signInButton = page.locator("button[type='submit']");
  }

  /**
   * Fills in email field with the given email
   * @param {any} email:string
   */
  async enterEmail(email: string) {
    await expect(this.emailField).toBeVisible();
    await expect(this.emailField).toBeEditable();
    await this.emailField.fill(email);
    await this.emailField.blur();
  }

  /**
   * Fills in password field with the given password
   * @param {any} password:string
   */
  async enterPassword(password: string) {
    await expect(this.passwordField).toBeVisible();
    await expect(this.passwordField).toBeEditable();
    await this.passwordField.fill(password);
    await this.passwordField.blur();
  }
}
