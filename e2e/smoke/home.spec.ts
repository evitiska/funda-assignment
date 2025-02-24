import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { MijnHuisPage } from "../pages/MijnHuisPage";

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await homePage.goto("/");
  await homePage.acceptCookies();
});

test.describe("Tests for home view", () => {
  test("Verify that main elements are presented on the page ", async ({
    page,
  }) => {
    // Navigation elements
    await homePage.verifyIsVisibleWithText(homePage.kopenButton, "Kopen");
    await homePage.verifyIsVisibleWithText(homePage.hurenButton, "Huren");
    await homePage.verifyIsVisibleWithText(homePage.verkopenButton, "Verkopen");
    await homePage.verifyIsVisibleWithText(homePage.mijnHuisLink, "Mijn Huis");
    await homePage.verifyIsVisibleWithText(homePage.loginButton, "Inloggen");
    await homePage.verifyIsVisibleWithText(homePage.favorietenLink, "Favorieten");

    // Static elements
    await expect(homePage.fundaLogo).toBeVisible();
    await expect(homePage.searchField).toBeVisible();
  });

  test("Verify that user can navigate to 'mijn huis' page", async ({
    page,
  }) => {
    const mijnHuisPage = new MijnHuisPage(page);

    await homePage.navigateViaLinkName("Mijn Huis");
    await mijnHuisPage.assertURLContains("/mijn-huis/");
    await expect(mijnHuisPage.mijnHuisHeader).toBeVisible();
    await expect(mijnHuisPage.mijnHuisHeader).toHaveText(
      "Weet jij wat je huis waard is?"
    );
    await expect(mijnHuisPage.mijnHuisForm).toBeVisible();
  });
});
