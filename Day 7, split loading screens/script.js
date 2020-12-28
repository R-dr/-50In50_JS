const left = document.querySelector('.left')
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () =>
  // mouse enters the div
  container.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  // mouse leaves the div
  container.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  // mouse enters the div
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  // mouse leaves the div
  container.classList.remove("hover-right")
);