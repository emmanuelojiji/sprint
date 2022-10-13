window.onload = () => {
  const first = document.querySelector(".first");
  const second = document.querySelector(".second");

  const firstChange = () => {
    setTimeout(() => {
      first.style.transform = "translateY(0%)";
    }, 400);

    setTimeout(() => {
      first.style.transform = "translateY(300%)";
    }, 5000);

    setTimeout(() => {
      second.style.transform = "translateY(0%)";
    }, 5500);

    setTimeout(() => {
      second.style.transform = "translateY(300%)";
    }, 9500);

  };

  firstChange();

  setInterval(() => {
    firstChange();
  }, 10000);
};
