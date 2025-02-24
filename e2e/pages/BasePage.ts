import { expect, type Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string) {
    await this.page.goto(path);
  }

  /**
   * Finds the cookie banner and clicks the accept button if it is visible
   */
  async acceptCookies() {
    const cookieBanner = this.page.locator('[data-testid="notice"]');
    const acceptButton = this.page.locator("#didomi-notice-agree-button");

    if (await cookieBanner.isVisible()) {
      await acceptButton.click();
    }
  }

  /**
   * Asserts that a given page has the provided query in its URL
   * @param {any} expectedPath:string query to be checked in the URL
   */
  async assertURLContains(expectedPath: string) {
    await expect(this.page).toHaveURL(new RegExp(expectedPath));
  }
}
