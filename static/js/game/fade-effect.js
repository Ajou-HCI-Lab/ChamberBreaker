export const fadeOut = (element) => {
  let op = 1; // initial opacity
  let timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = 'none';
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ')';
    op -= op * 0.1;
  }, 50);
};

export const fadeIn = (element) => {
  let op = 0.1; // initial opacity
  element.style.opacity = op;
  element.style.display = 'block';
  let timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ')';
    op += op * 0.1;
  }, 50);
};