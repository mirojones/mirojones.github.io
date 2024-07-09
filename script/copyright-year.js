  const targetDate = new Date("2025-01-01");

  function displayYear() {
    const currentDate = new Date();
    if (currentDate >= targetDate) {
      const year = currentDate.getFullYear();
      document.getElementById("year").textContent = "-" + year;
    }
  }

  window.addEventListener("load", displayYear);
