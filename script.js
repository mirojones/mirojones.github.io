const yearsElements = document.getElementsByClassName("years");
function checkYear() {
  const currentYear = new Date().getFullYear();
  if (currentYear >= 2025) {
    for (let i = 0; i < yearsElements.length; i++) {
      yearsElements[i].textContent = "2024-";
    }
  }
}
checkYear();
