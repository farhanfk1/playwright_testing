const { test, expect } = require("@playwright/test");

const LoginPage = require("../pages/LoginPage");

const data = require("../test-data/loginData");

data.forEach((user, index) => {
  test(`Login Test ${index + 1}`, async ({ page }) => {
    const login = new LoginPage(page);

    // OPEN WEBSITE
    await login.open();

    await login.login(user.username, user.password);

    if (user.valid) {
      await expect(page).toHaveURL(
        "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
      );
    } else {
      await expect(page.locator(".oxd-alert-content-text")).toBeVisible();
    }
  });
});
