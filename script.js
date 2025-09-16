// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  document.getElementById("formMessage").textContent = "Thank you! Your message has been sent.";
  document.getElementById("formMessage").style.color = "green";

  // Clear the form
  this.reset();
});