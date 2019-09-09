class Swiper {
  constructor() {
    this.initialX = null;
    this.initialY = null;

    document.addEventListener("touchstart", e => this.startTouch(e));
    document.addEventListener("touchmove", e => this.moveTouch(e));

    this.events = {
      swipeUp: new Event("swipeUp"),
      swipeDown: new Event("swipeDown"),
      swipeLeft: new Event("swipeLeft"),
      swipeRight: new Event("swipeRight")
    };
  }

  startTouch(e) {
    //e.preventDefault();
    this.initialX = e.touches[0].clientX;
    this.initialY = e.touches[0].clientY;
  }

  moveTouch(e) {
    const { initialX, initialY } = this;
    const { swipeUp, swipeDown, swipeLeft, swipeRight } = this.events;
    if (!initialX || !initialY) {
      return;
    }
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const diffX = initialX - currentX;
    const diffY = initialY - currentY;
    this.initialX = null;
    this.initialY = null;
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        document.dispatchEvent(swipeLeft);
      } else {
        document.dispatchEvent(swipeRight);
      }
    } else {
      if (diffY > 0) {
        document.dispatchEvent(swipeUp);
      } else {
        document.dispatchEvent(swipeDown);
      }
    }
  }
}

new Swiper();
