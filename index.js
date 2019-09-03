document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".main");
  let currentSectionIndex = 0;
  let isFrezz = false;
  const sections = document.querySelectorAll(".section");
  document.addEventListener("mousewheel", e => {
    const direction = e.wheelDelta < 0 ? 1 : -1;
    const sectionsLenght = sections.length;
    if (isFrezz) return;
    isFrezz = true;
    setTimeout(() => {
      isFrezz = false;
    }, 600);

    if (direction === 1) {
      const isLastSection = currentSectionIndex === sectionsLenght - 1;
      if (!isLastSection) {
        currentSectionIndex += direction;
      }
    } else if (direction === -1) {
      const isFirstSection = currentSectionIndex === 0;
      if (!isFirstSection) {
        currentSectionIndex += direction;
      }
    }
    sections[currentSectionIndex].scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  });
});
