# QA Test Case Manager - Bug Reports

## BUG-001 - Status Filter Ignores Search Criteria

**Related Test Case:** TC013

**Feature:** Search Test Cases and Status Filter

**Severity:** Medium

**Priority:** High

**Environment:** Web browser

**Precondition:** Multiple test cases with different names and statuses exist.

**Steps to Reproduce:**

1. Open the QA Test Case Manager.
2. Enter `"password"` in the Search Test Cases field.
3. Select `"Failed"` from the status filter.

**Expected Result:**

No test cases should be displayed when there are no test cases that both contain `"password"` and have a status of `"Fail"`.

**Actual Result:**

A test case with status `"Fail"` is displayed even though it does not contain `"password"`.

**Status:** Open

**Notes:**

The search and status filter appear to be working independently instead of applying both conditions together.
