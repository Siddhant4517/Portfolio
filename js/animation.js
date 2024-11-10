document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, observerOptions);

  // Select all elements to be observed
  const elements = document.querySelectorAll(".fade-in, .slide-up");
  elements.forEach((el) => observer.observe(el));
});
