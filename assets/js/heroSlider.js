const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active");
    if (idx === i) slide.classList.add("active");
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, 6000);

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("mainNavbar");
  navbar.classList.toggle("sticky", window.scrollY > 50);
});

function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

function toggleDropdown(event) {
  event.preventDefault();
  const dropdown = event.target.nextElementSibling;
  dropdown.classList.toggle("show");
}
