import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchPage extends BasePage {
  readonly page: Page;
  readonly mapButton: Locator;
  readonly saveButton: Locator;
  readonly filterPanel: Locator;
  readonly searchResults: Locator;
  readonly firstSearchResult: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.mapButton = page.locator('a:has-text("Kaart")').last();
    this.saveButton = page.locator('[data-testid="popper"]').last();
    this.filterPanel = page.locator('[data-testid="ButtonBarFilterButton"]').last();
    this.searchResults = page.locator('#PageListings');
    this.firstSearchResult = page.locator('[data-testid="listingDetailsAddress"]').first();
  }
}