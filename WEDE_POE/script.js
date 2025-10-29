// Highlight the active page in the nav
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Update footer year automatically
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Enquiry form validation and success message
  const enquiryForm = document.querySelector("form");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent form from reloading the page

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert("Please fill in all required fields before submitting.");
        return;
      }

      // Display success message
      alert("Thank you, " + name.value + "! Your enquiry has been received. We will get back to you soon.");

      // Clear the form after submission
      enquiryForm.reset();
    });
  }
});
