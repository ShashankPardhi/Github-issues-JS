const issuesList = document.getElementById("list_issues");
const pageNumber = document.getElementById("page_number");
const loadPrev = document.getElementById("load_prev");
const loadNext = document.getElementById("load_next");

let currentPage = 1;

function displayIssues(issues) {
  issuesList.innerHTML = "";
  for (const issue of issues) {
    const listItem = document.createElement("li");
    listItem.innerText = issue.title;
    issuesList.appendChild(listItem);
  }
}

async function getIssues(pageNumberHere) {
  const response = await fetch(
`https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`  );
  const issues = await response.json();
  displayIssues(issues);
  pageNumber.innerText = `Page number ${pageNumberHere}`;
}

loadNext.addEventListener("click", () => {
  console.log("loadNext")
  currentPage++;
  getIssues(currentPage);
});

loadPrev.addEventListener("click", () => {
  console.log("loadPrev")
  if (currentPage > 1) {
    currentPage--;
    getIssues(currentPage);
  }
});

getIssues(currentPage);
