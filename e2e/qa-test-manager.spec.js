const { test, expect } = require("@playwright/test");

test("user can add a new test case", async ({ page }) => {
  await page.goto("http://127.0.0.1:8080");
  await page.locator("#addTestBtn").click();
  await page.locator("#testName").fill("Login with empty password");
  await page
    .locator("#testDescription")
    .fill("Verify login fails when password is empty");
  await page.locator("#testStatus").selectOption("Fail");
  await page.locator("#testPriority").selectOption("High");
  await page.locator("#saveTestBtn").click();
  await expect(page.locator("#testCases")).toContainText(
    "Login with empty password",
  );
});

test("user can search for a test case", async ({ page }) => {
  await page.goto("http://127.0.0.1:8080");

  await page.locator("#addTestBtn").click();
  await page.locator("#testName").fill("Login with empty password");
  await page
    .locator("#testDescription")
    .fill("Verify login fails when password is empty");
  await page.locator("#testStatus").selectOption("Fail");
  await page.locator("#testPriority").selectOption("High");
  await page.locator("#saveTestBtn").click();
  await expect(page.locator("#testCases")).toContainText(
    "Login with empty password",
  );

  await page.locator("#searchInput").fill("Login with empty password");
  await expect(page.locator("#testCases")).toContainText(
    "Login with empty password",
  );
});

test("user can filter test cases by status", async ({ page }) => {
  await page.goto("http://127.0.0.1:8080");

  await page.locator("#addTestBtn").click();
  await page.locator("#testName").fill("Login with empty password");
  await page
    .locator("#testDescription")
    .fill("Verify login fails when password is empty");
  await page.locator("#testStatus").selectOption("Fail");
  await page.locator("#testPriority").selectOption("High");
  await page.locator("#saveTestBtn").click();
  await expect(page.locator("#testCases")).toContainText(
    "Login with empty password",
  );

  await page.locator("#statusFilter").selectOption("fail");
  await expect(page.locator("#testCases")).toContainText("fail");
});
