const menuBtn = document.querySelector(".menu--icon");
const closeBtn = document.querySelector(".menu--close");
const header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
  header.classList.add("menu-active");
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("menu-active");
});
