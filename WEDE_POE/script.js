document.addEventListener("DOMContentLoaded", function () {
  // Highlight active page
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Update footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Fade-in animation for sections
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  });
  fadeElements.forEach(el => observer.observe(el));

  // Form validation and success popup
  const enquiryForm = document.querySelector("form");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      const popup = document.getElementById("success-popup");

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert("Please fill in all required fields.");
        return;
      }

      popup.style.display = "block";
      popup.textContent = `Thank you, ${name.value}! Your enquiry has been received.`;
      enquiryForm.reset();

      setTimeout(() => { popup.style.display = "none"; }, 4000);
    });
  }
});
