const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("square-transition");
      return;
    }

    entry.target.classList.remove("square-transition");
  });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const squares = document.querySelectorAll(".square");

// Loop over the elements and add each one to the observer
squares.forEach((element) => observer.observe(element));
