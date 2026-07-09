const { test } = require("@playwright/test");

test("Login once", async ({ page }) => {
  await page.goto("https://demo.smart-hospital.in/site/login");

  await page.locator('a[onclick*="superadmin@gmail.com"]').click();

  await page.click('button[type="submit"]');

  await page.context().storageState({
    path: "auth/user.json",
  });
});
