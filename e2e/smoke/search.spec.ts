import { test, expect } from "@playwright/test";
import { HomePage } from "e2e/pages/HomePage";
import { SearchPage } from "e2e/pages/SearchPage";
import { ListingDetailsPage } from "e2e/pages/ListingDetailsPage";
import { ContactPage } from "e2e/pages/ContactPage";

let homePage: HomePage;
let searchPage: SearchPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  searchPage = new SearchPage(page);
  await homePage.goto("/");
  await homePage.acceptCookies();
});

test.describe("Tests for search flow", () => {
  test("Verify that user can search for an area and see results", async ({
    page,
  }) => {
    await homePage.searchForLocation("Amsterdam");
    await searchPage.assertURLContains("/zoeken/");
    await expect(searchPage.mapButton).toBeVisible();
    await expect(searchPage.saveButton).toBeVisible();
    await expect(searchPage.filterPanel).toBeVisible();
    await expect(searchPage.searchResults).toBeVisible();
  });

  test("Verify that user can click a listing from the search page to see details and reach out", async ({
    page,
  }) => {
    searchPage.goto("/zoeken/koop/");

    await expect(searchPage.searchResults).not.toBeEmpty();
    await expect(searchPage.searchResults).toBeVisible();
    await expect(searchPage.firstSearchResult).toBeVisible();
    await searchPage.firstSearchResult.click();

    const listingDetailsPage = new ListingDetailsPage(page);
    await expect(listingDetailsPage.mediaGrid).toBeVisible();
    await expect(listingDetailsPage.aboutSection).toBeVisible();

    await expect(listingDetailsPage.contactButton).toBeVisible();
    await expect(listingDetailsPage.contactButton).toBeEnabled();

    await listingDetailsPage.contactButton.click();

    const contactPage = new ContactPage(page);
    await expect(contactPage.listingDetailCardContainer).toBeVisible();
    await expect(contactPage.contactContainer).toBeVisible();
  });
});
