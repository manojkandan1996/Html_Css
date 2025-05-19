document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.getElementById("contactBtn");
  const modal = document.getElementById("contactModal");
  const closeBtn = document.querySelector(".modal .close");
  const form = document.getElementById("contactForm");
  const response = document.getElementById("form-response");

  if (contactBtn && modal) {
    contactBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      form.reset();
      response.textContent = "";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        form.reset();
        response.textContent = "";
      }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        response.textContent = `Thanks, ${name}! Your message has been sent.`;
        form.reset();
      } else {
        response.textContent = "Please fill in all fields.";
      }
    });
  }
});