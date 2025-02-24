import { test, expect } from "@playwright/test";
import { LogInPage } from "e2e/pages/LogInPage";
import { HomePage } from "e2e/pages/HomePage";
import { validAccountEmail, validAccountPassword } from "../../Secrets";

let logInPage: LogInPage;
let homePage: HomePage;

test.describe(
  "Tests for the Login page",
  {
    tag: "@smoke",
  },
  () => {
    test.beforeEach(async ({ page }) => {
      homePage = new HomePage(page);
      logInPage = new LogInPage(page);
      await homePage.goto("https://login.funda.nl/account/login");
      await homePage.acceptCookies();
    });

    test("Verify that a user can log in", async ({ page }) => {
      await logInPage.enterEmail("invalid_email_because_no_at_sign");
      await expect(logInPage.emailError).toBeVisible();
      await expect(logInPage.emailError).toHaveText(
        "Dit e-mailadres is niet geldig.")
      await expect(logInPage.emailField).toHaveAttribute(
        "aria-invalid",
        "true"
      );

      await logInPage.enterEmail(validAccountEmail);
      await expect(logInPage.emailError).toBeHidden();
      await expect(logInPage.emailField).toHaveAttribute(
        "aria-invalid",
        "false"
      );

      await logInPage.enterPassword(validAccountPassword);

      await logInPage.signInButton.click();

      await expect(homePage.loginButton).toBeHidden();
      await expect(homePage.accountButton).toBeVisible();
    });
  }
);
