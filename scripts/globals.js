function delay (milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function fadeIn(element, display) {
  element.style.opacity = 0;
  element.style.display = display;
  await delay(30);
  element.style.opacity = 1;
  await delay(200);
}

async function fadeOut(element) {
  element.style.opacity = 0;

  await delay(500);
  element.style.display = 'none';
}

(async () => {
  const loaderElement = document.querySelector('.loader');
  return setTimeout(() => {
    return fadeOut(loaderElement);
  }, 500);
})();