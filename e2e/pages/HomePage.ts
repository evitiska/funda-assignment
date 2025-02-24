import { expect, type Locator, type Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  readonly page: Page;
  readonly kopenButton: Locator;
  readonly hurenButton: Locator;
  readonly verkopenButton: Locator;
  readonly fundaLogo: Locator;
  readonly searchField: Locator;
  readonly mijnHuisLink: Locator;
  readonly loginButton: Locator;
  readonly favorietenLink: Locator;
  readonly accountButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.kopenButton = page.locator("#headlessui-menu-button-v-0-17");
    this.hurenButton = page.locator("#headlessui-menu-button-v-0-23");
    this.verkopenButton = page.locator("#headlessui-menu-button-v-0-26");
    this.fundaLogo = page.locator("nav > a");
    this.searchField = page.locator('[data-testid="search-box"]');
    this.mijnHuisLink = page.locator(
      'a[href="https://www.funda.nl/mijn-huis/"]'
    );
    this.loginButton = page.locator('button[type="submit"]', {
      hasText: "Inloggen",
    });
    this.favorietenLink = page.locator(
      'a[href="https://www.funda.nl/favorieten"]'
    );
    this.accountButton = page.locator("button", { hasText: "Account" }).last();
  }

  /**
   * Clicks on a link (in the home page header) with the given name
   * @param {any} name:string the link to click on
   */
  async navigateViaLinkName(name: string) {
    await this.page.locator(`header>nav>div>a`, { hasText: name }).click();
  }

  /**
   * Activates the search field, types a term and presses Enter on the keyboard
   * @param {any} searchTerm:string - query to search for
   */
  async searchForLocation(searchTerm: string) {
    await this.searchField.click();
    await this.searchField.fill(searchTerm);
    await this.page.keyboard.press("Enter");
  }

  /**
   * Verifies that the element is visible and has the expected text (with PlayWright expect)
   * @param {any} locator:Locator to be checked
   * @param {any} expectedText:string case sensitive text to verified
   */
  async verifyIsVisibleWithText(locator: Locator, expectedText: string) {
    await expect(locator).toBeVisible();
    await expect(locator).toHaveText(expectedText);
  }
}
