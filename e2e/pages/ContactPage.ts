import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ContactPage extends BasePage {
    readonly page: Page;
    readonly listingDetailCardContainer: Locator;
    readonly contactContainer: Locator;
    
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.listingDetailCardContainer = page.locator('[data-testid="listing-detail-card-container"]');
        this.contactContainer = page.locator('[data-testid="contact-block-container"]');
    }
}