function toggleMobileMenu() {
  const menu = document.querySelector(".mobile-links");
  menu.classList.toggle("mobile-links--expand");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("part-transition");
      return;
    }

    entry.target.classList.remove("part-transition");
  });
});

const parts = document.querySelectorAll(".part");

parts.forEach((element) => observer.observe(element));
