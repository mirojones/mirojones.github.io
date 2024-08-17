const yearsElement = document.getElementById("years");
var copyrightBeginYear = 2024;
const currentYear = new Date().getFullYear();
function checkYear() {
  if (currentYear >= copyrightBeginYear + 1) {
    yearsElement.innerHTML = copyrightBeginYear + "-" + currentYear;
  } else
    yearsElement.innerHTML = copyrightBeginYear;
}
checkYear();
