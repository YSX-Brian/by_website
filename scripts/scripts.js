function toggleMobileMenu() {
  const menu = document.querySelector(".mobile-links");
  menu.classList.toggle("mobile-links--expand");
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("part-transition");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

const parts = document.querySelectorAll(".part");

parts.forEach((element) => observer.observe(element));
