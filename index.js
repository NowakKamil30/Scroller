document.addEventListener("DOMContentLoaded", () => {
  const scroller = new Scroller(".main");

  document.addEventListener("mousewheel", scroller.listemStroll);
});
