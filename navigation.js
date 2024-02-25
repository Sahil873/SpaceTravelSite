const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  let visibility = nav.getAttribute("data-visible");

  // Convert the attribute value to a boolean
  let isVisible = visibility === "true";

  // Toggle the visibility
  isVisible = !isVisible;

  // Set the updated visibility attribute
  nav.setAttribute("data-visible", isVisible);

  // Set the aria-expanded attribute based on the updated visibility
  navToggle.setAttribute("aria-expanded", isVisible);
});
