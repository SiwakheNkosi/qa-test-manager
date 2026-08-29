let editingTestId = null;
const addTestBtn = document.querySelector("#addTestBtn");
const testForm = document.querySelector("#testForm");

addTestBtn.addEventListener("click", function () {
  editingTestId = null;

  document.querySelector("#testName").value = "";
  document.querySelector("#testDescription").value = "";
  document.querySelector("#testStatus").value = "Pass";
  document.querySelector("#testPriority").value = "Low";

  testForm.style.display = "block";
});

const testCases = [
  {
    id: "TC001",
    name: "Login with valid credentials",
    description: "Verify that a user can log in with valid credentials.",
    status: "Pass",
    priority: "High",
  },
  {
    id: "TC002",
    name: "Login with incorrect password",
    description:
      "Verify that the user cannot log in with an incorrect password.",
    status: "Fail",
    priority: "High",
  },
  {
    id: "TC003",
    name: "Forgot password",
    description: "Verify that the user can reset their password.",
    status: "Blocked",
    priority: "Medium",
  },
];

function displayTestCases() {
  const testCaseContainer = document.querySelector("#testCases");

  testCaseContainer.innerHTML = "";

  testCases.forEach(function (testCase) {
    const testCaseElement = document.createElement("div");

    testCaseElement.classList.add("test-case");

    testCaseElement.innerHTML = `
            <h2>${testCase.id} - ${testCase.name}</h2>
            <p>${testCase.description}</p>
            <p>Status: ${testCase.status}</p>
            <p>Priority: ${testCase.priority}</p>

            <button class="edit-btn" data-id = "${testCase.id}"> Edit </button>

            <button class="delete-btn" data-id ="${testCase.id}"> Delete </button>
        `;

    testCaseContainer.appendChild(testCaseElement);
  });

  function updateStatistics() {
    const total = testCases.length;

    const passed = testCases.filter(function (testCase) {
      return testCase.status === "Pass";
    }).length;

    const failed = testCases.filter(function (testCase) {
      return testCase.status === "Fail";
    }).length;

    const blocked = testCases.filter(function (testCase) {
      return testCase.status === "Blocked";
    }).length;

    document.querySelector("#totalTests").textContent = total;
    document.querySelector("#passedTests").textContent = passed;
    document.querySelector("#failedTests").textContent = failed;
    document.querySelector("#blockedTests").textContent = blocked;
  }
  updateStatistics();

  const editButtons = document.querySelectorAll(".edit-btn");

  editButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const testId = button.dataset.id;
      editingTestId = testId;

      const testCase = testCases.find(function (testCase) {
        return testCase.id === testId;
      });
      document.querySelector("#testName").value = testCase.name;
      document.querySelector("#testDescription").value = testCase.description;
      document.querySelector("#testStatus").value = testCase.status;
      document.querySelector("#testPriority").value = testCase.priority;

      testForm.style.display = "block";
    });
  });
  const deleteButtons = document.querySelectorAll(".delete-btn");

  deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const testId = button.dataset.id;

      const updatedTestCases = testCases.filter(function (testCase) {
        return testCase.id !== testId;
      });

      testCases.length = 0;

      testCases.push(...updatedTestCases);

      displayTestCases();
    });
  });
}
displayTestCases();

const saveTestBtn = document.querySelector("#saveTestBtn");

saveTestBtn.addEventListener("click", function () {
  const testName = document.querySelector("#testName").value;
  const testDescription = document.querySelector("#testDescription").value;
  const testStatus = document.querySelector("#testStatus").value;
  const testPriority = document.querySelector("#testPriority").value;

  if (editingTestId !== null) {
    const testCase = testCases.find(function (testCase) {
      return testCase.id === editingTestId;
    });
    testCase.name = testName;
    testCase.description = testDescription;
    testCase.status = testStatus;
    testCase.priority = testPriority;

    editingTestId = null;
  } else {
    const newTestCase = {
      id: `TC00${testCases.length + 1}`,
      name: testName,
      description: testDescription,
      status: testStatus,
      priority: testPriority,
    };

    testCases.push(newTestCase);
  }

  displayTestCases();

  testForm.style.display = "none";

  testCases.push(newTestCase);
  displayTestCases();
  testForm.style.display = "none";
});
