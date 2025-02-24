import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ListingDetailsPage extends BasePage {
    readonly page: Page;
    readonly mediaGrid: Locator;
    readonly aboutSection: Locator;

    readonly contactButton: Locator;
    
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.mediaGrid = page.locator("#media").first();
        this.aboutSection = page.locator('#about').first();
        this.contactButton = page.locator('a:has-text("Neem contact op")').first();;
    }
}