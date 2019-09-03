document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".main");
  const sections = document.querySelectorAll(".section");
  document.addEventListener("mousewheel", e => {
    console.log(e.wheelDelta);
  });
});
