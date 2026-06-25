const { test, expect } = require("@playwright/test");

// TC01 Invalid Username
test("Login with invalid username", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.fill('input[name="username"]', "WrongUser");
  await page.fill('input[name="password"]', "admin123");

  await page.click('button[type="submit"]');

  await expect(page.locator(".oxd-alert-content-text")).toContainText(
    "Invalid credentials",
  );
});

// TC02 Invalid Password
test("Login with invalid password", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.fill('input[name="username"]', "Admin");
  await page.fill('input[name="password"]', "wrong123");

  await page.click('button[type="submit"]');

  await expect(page.locator(".oxd-alert-content-text")).toContainText(
    "Invalid credentials",
  );
});

// TC03 Invalid Username + Password
test("Invalid username and password", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.fill('input[name="username"]', "abc");
  await page.fill('input[name="password"]', "abc");

  await page.click('button[type="submit"]');
});

// TC04 Empty Username
test("Empty username", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.fill('input[name="password"]', "admin123");

  await page.click('button[type="submit"]');
});

// TC05 Empty Password
test("Empty password", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.fill('input[name="username"]', "Admin");

  await page.click('button[type="submit"]');
});

// TC06 Both Empty
test("Both fields empty", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.click('button[type="submit"]');
});

// TC07 Username with Spaces
test("Username spaces", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.fill('input[name="username"]', "   ");
  await page.fill('input[name="password"]', "admin123");

  await page.click('button[type="submit"]');
});

// TC08 Password with Spaces
test("Password spaces", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.fill('input[name="username"]', "Admin");
  await page.fill('input[name="password"]', "   ");

  await page.click('button[type="submit"]');
});

// TC09 SQL Input
test("SQL injection", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.fill('input[name="username"]', "' OR 1=1 --");
  await page.fill('input[name="password"]', "test");

  await page.click('button[type="submit"]');
});

// TC10 Script Input
test("Script input", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.fill('input[name="username"]', "<script>");
  await page.fill('input[name="password"]', "123");

  await page.click('button[type="submit"]');
});

// TC11 VALID LOGIN
test("Valid Login", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.fill('input[name="username"]', "Admin");
  await page.fill('input[name="password"]', "admin123");

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);
});
