const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("part-transition");
      return;
    }

    entry.target.classList.remove("part-transition");
  });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const parts = document.querySelectorAll(".part");

// Loop over the elements and add each one to the observer
parts.forEach((element) => observer.observe(element));
