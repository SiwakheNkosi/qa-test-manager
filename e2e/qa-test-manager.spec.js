const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("http://127.0.0.1:8080");

  await page.evaluate(() => {
    localStorage.clear();
  });

  await page.reload();
});

//TC001
test("user can add a new test case", async ({ page }) => {
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

//TC003
test("user can edit an existing test case", async ({ page }) => {
  await page.locator("#addTestBtn").click();

  await page.locator("#testName").fill("Test case to edit");
  await page.locator("#testDescription").fill("This test case will be edited");
  await page.locator("#testStatus").selectOption("Pass");
  await page.locator("#testPriority").selectOption("Low");

  await page.locator("#saveTestBtn").click();

  const testCase = page.locator(".test-case", {
    hasText: "Test case to edit",
  });

  await testCase.locator(".edit-btn").click();

  await page.locator("#testName").fill("Updated login test");
  await page.locator("#testStatus").selectOption("Blocked");
  await page.locator("#testPriority").selectOption("Medium");

  await page.locator("#saveTestBtn").click();

  await expect(page.locator("#testCases")).toContainText("Updated login test");

  await expect(page.locator("#testCases")).toContainText("Blocked");

  await expect(page.locator("#testCases")).toContainText("Medium");
});

//TC004
test("user can delete a test case", async ({ page }) => {
  await page.locator("#addTestBtn").click();

  await page.locator("#testName").fill("Test case to delete");
  await page.locator("#testDescription").fill("This test case will be deleted");
  await page.locator("#testStatus").selectOption("Pass");
  await page.locator("#testPriority").selectOption("Low");

  await page.locator("#saveTestBtn").click();

  const testCase = page.locator(".test-case", {
    hasText: "Test case to delete",
  });

  await expect(testCase).toBeVisible();

  await testCase.locator(".delete-btn").click();

  await expect(testCase).toHaveCount(0);
});

//TC005
test("user can search for a test case", async ({ page }) => {
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

//TC007
test("user can filter test cases by status", async ({ page }) => {
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

//TC013

test("search and status filter return no results when criteria do not match", async ({
  page,
}) => {
  await page.locator("#addTestBtn").click();

  await page.locator("#testName").fill("Export customer report");
  await page
    .locator("#testDescription")
    .fill("Verify user can export a customer report");
  await page.locator("#testStatus").selectOption("Pass");
  await page.locator("#testPriority").selectOption("Medium");

  await page.locator("#saveTestBtn").click();

  await page.locator("#addTestBtn").click();

  await page.locator("#testName").fill("Invalid username");
  await page
    .locator("#testDescription")
    .fill("Verify invalid username is rejected");
  await page.locator("#testStatus").selectOption("Fail");
  await page.locator("#testPriority").selectOption("High");

  await page.locator("#saveTestBtn").click();

  await page.locator("#searchInput").fill("customer report");

  await page.locator("#statusFilter").selectOption("fail");

  await expect(page.locator(".test-case")).toHaveCount(0);
});
