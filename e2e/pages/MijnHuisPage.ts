import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MijnHuisPage extends BasePage {
  readonly page: Page;
  readonly mijnHuisHeader: Locator;
  readonly mijnHuisForm: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.mijnHuisHeader = page.locator("h1").first();
    this.mijnHuisForm = page.locator(".mx-auto > .bg-white");
  }
}
