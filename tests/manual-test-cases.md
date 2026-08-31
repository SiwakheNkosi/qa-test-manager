# QA Test Case Manager - Manual Test Cases

## TC001 - Add a Valid Test Case

**Feature:** Add Test Case

**Precondition:** Application is open.

**Steps:**

1. Click "Add Test Case".
2. Enter a test case name.
3. Enter a description.
4. Select "Pass".
5. Select "High".
6. Click "Save Test Case".

**Expected Result:**
The new test case should appear once in the test case list.

**Actual Result:**
The new test case appeared once in the list

**Status:**
Pass

---

## TC002 - Open Add form after editing another test

**Feature:** Adding Test Case on a clear form

**Precondition:** Atleast one test case created

**Steps:**

1. Click "Edit" on existing test case.
2. Click "Save".
3. Clcik "Add Test Case".

**Expected Result:**
The form should be blank and not include previous test case information.

**Actual Result:**
A blank form opens

**Status:**
Pass

---

## TC003 - Edit a test case

**Feature:** Edit button

**Precondition:** Atleast one test case created

**Steps:**

1. Click "Edit" on a test case.
2. Change description field.
3. Change priority field.
4. Click "Save Test Case"

**Expected Result:**
Only the selected test case changes to edited version.

**Actual Result:**
The selected test case has been edited

**Status:**
Pass

---

## TC004 - Delete a Test Case

**Feature:** Delete Test Case

**Precondition:** At least one test case exists.

**Steps:**

1. Click "Delete" on a test case.

**Expected Result:**
Only the selected test case should be removed.

**Actual Result:**
Selected test case is removed

**Status:**
Pass

---

## TC005 - Search by Test Case Name

**Feature:** Search

**Precondition:** Multiple test cases exist.

**Steps:**

1. Click inside the search field.
2. Enter part of a test case name.

**Expected Result:**
Only matching test cases should be displayed.

**Actual Result:**
Only test cases that match what i typed appeared

**Status:**
Pass

---

## TC006 - Search by Test Case ID

**Feature:** Search

**Precondition:** Multiple test cases exist.

**Steps:**

1. Enter a valid test case ID into the search field.

**Expected Result:**
The matching test case should be displayed.

**Actual Result:**
Matching test case is displayed

**Status:**
Pass

---

## TC007 - Filter by Failed Status

**Feature:** Status Filter

**Precondition:** Test cases with different statuses exist.

**Steps:**

1. Open the status filter.
2. Select "Failed".

**Expected Result:**
Only failed test cases should be displayed.

**Actual Result:**
Only failed test cases appeared

**Status:**
Pass

---

## TC008 - Combine Search and Status Filter

**Feature:** Search and Status Filter

**Precondition:** Multiple test cases with different names and statuses exist.

**Steps:**

1. Enter text into the search field.
2. Select a status.

**Expected Result:**
Only test cases matching both the search text and selected status should be displayed.

**Actual Result:**
Test cases that matched both values appeared

**Status:**
Pass

---

## TC009 - Saved Test Case Persists After Refresh

**Feature:** Local Storage

**Precondition:** Application is open.

**Steps:**

1. Add a new test case.
2. Refresh the browser.

**Expected Result:**
The newly added test case should still be displayed.

**Actual Result:**
The new test case is still displayed after browser refresh

**Status:**
Pass

---

## TC010 - Deleted Test Case Remains Deleted After Refresh

**Feature:** Local Storage

**Precondition:** At least one test case exists.

**Steps:**

1. Delete a test case.
2. Refresh the browser.

**Expected Result:**
The deleted test case should not reappear.

**Actual Result:**
Deleted test case did not reappear

**Status:**
Pass

---

## TC011 - Statistics Update After Adding a Passed Test

**Feature:** Dashboard Statistics

**Precondition:** Application is open.

**Steps:**

1. Record the current Total and Passed values.
2. Add a new test case with status "Pass".
3. Save the test case.

**Expected Result:**
Total should increase by 1 and Passed should increase by 1.

**Actual Result:**
Both statistics have increased by 1

**Status:**
Pass

---

## TC012 - Statistics Update After Editing Status

**Feature:** Dashboard Statistics

**Precondition:** A failed test case exists.

**Steps:**

1. Record the current Failed and Passed values.
2. Edit a failed test case.
3. Change the status from "Fail" to "Pass".
4. Save the test case.

**Expected Result:**
Failed should decrease by 1 and Passed should increase by 1.

**Actual Result:**
The Failed statistics decreased by 1 and Passed increased by 1

**Status:**
Pass

---

## TC013 - Search and Status Filter Return No Results When Criteria Do Not Match

**Feature:** Search test cases and status filter

**Precondition:** Multiple test cases exist

**Steps:**

1. Enter "password" in the Search Test Cases field.
2. Select "Failed" from the status filter.

**Expected Result:**
No test case should appear

**Actual Result:**
No test cases were displayed because no test case matched both the search text and selected status.

**Status:**
Pass

**\*Previous result** FAIL - BUG-001
