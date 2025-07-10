document.addEventListener("DOMContentLoaded", function () {
  const scrollTopBtn = document.querySelector(".scroll-top");
  const scrollTopIcon = document.querySelector(".scroll-top-icon");
  const header = document.querySelector(".hero-content");

  // Scroll to top smoothly
  if (scrollTopIcon) {
    scrollTopIcon.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Show/hide scroll button depending on header visibility
  if (header && scrollTopBtn) {
    window.addEventListener("scroll", function () {
      const headerBottom = header.getBoundingClientRect().bottom;

      if (headerBottom <= 0) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });
  } else if (scrollTopBtn) {
    // Fallback: Show the scroll button after some scroll for other pages
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });
  }
});
