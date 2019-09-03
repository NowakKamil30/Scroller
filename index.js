document.addEventListener("DOMContentLoaded", () => {
  const scroller = new Scroller(".main");

  document.addEventListener("mousewheel", scroller.listemStroll);
  document.addEventListener("swipeUp", () => scroller.scroll(1));
  document.addEventListener("swipeDown", () => scroller.scroll(-1));
  document.addEventListener("keydown", e => {
    switch (e.keyCode) {
      case 38:
        return scroller.scroll(-1);
        break;
      case 40:
        return scroller.scroll(1);
        break;
      default:
        return;
        break;
    }
  });
});
