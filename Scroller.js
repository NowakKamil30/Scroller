class Scroller {
  constructor(rootSelector) {
    const root = document.querySelector(rootSelector);
    this.sections = [...document.querySelectorAll(".section")];
    const currentSectionIndex = this.sections.findIndex(item =>
      this.isScrolledIntoView(item)
    );
    this.currentSectionIndex = Math.max(currentSectionIndex, 0);
    this.isFrezz = false;
    this.isScrolledIntoView(this.sections[0]);
  }

  isScrolledIntoView = element => {
    const rect = element.getBoundingClientRect();
    const topElement = rect.top;
    const bottomElement = Math.floor(rect.bottom);
    const isVissible = topElement >= 0 && bottomElement <= window.innerHeight;
    return isVissible;
  };

  listemStroll = e => {
    if (this.isFrezz) return;
    this.isFrezz = true;
    setTimeout(() => {
      this.isFrezz = false;
    }, 600);

    const direction = e.wheelDelta < 0 ? 1 : -1;
    this.scroll(direction);
  };
  scroll = direction => {
    const sectionsLenght = this.sections.length;
    if (direction === 1) {
      const isLastSection = this.currentSectionIndex === sectionsLenght - 1;
      if (!isLastSection) {
        this.currentSectionIndex += direction;
      }
    } else if (direction === -1) {
      const isFirstSection = this.currentSectionIndex === 0;
      if (!isFirstSection) {
        this.currentSectionIndex += direction;
      }
    }
    this.scrollToSection();
  };
  scrollToSection = () => {
    this.sections[this.currentSectionIndex].scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };
}
