const addTestBtn = document.querySelector("#addTestBtn");
const testForm = document.querySelector("#testForm");

addTestBtn.addEventListener("click", function () {
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

const testCaseContainer = document.querySelector("#testCases");

testCases.forEach(function (testCase) {
  const testCaseElement = document.createElement("div");
  testCaseElement.classList.add("test-case");
  testCaseElement.innerHTML = `
    <h2>${testCase.id} - ${testCase.name}</h2>
    <p>${testCase.description}</p>
    <p>Status: ${testCase.status}</p>
    <p>Priority: ${testCase.priority}</p>
    `;

  testCaseContainer.appendChild(testCaseElement);
});

const saveTestBtn = document.querySelector("#saveTestBtn");

saveTestBtn.addEventListener("click", function () {
  const testName = document.querySelector("#testName").value;
  const testDescription = document.querySelector("#testDescription").value;
  const testStatus = document.querySelector("#testStatus").value;
  const testPriority = document.querySelector("#testPriority").value;

  console.log(testName);
  console.log(testDescription);
  console.log(testStatus);
  console.log(testPriority);
});
