let image = document.querySelector("img"),
  CountDown = document.getElementById("CountDown");
window.addEventListener("load", () => {
  let counter = 0;
  const interval = (20 * 200) / 100;

  const loop = setInterval(function () {
    CountDown.innerHTML = `${counter}%`;
    if (counter === 100) {
      stopLoop(loop);
    }
    counter++;
  }, interval);

  let Filtercounter = 10;

  const Filterinterval = (20 * 2000) / 100;

  const Filterloop = setInterval(function () {
    image.style = `filter: blur(${Filtercounter}px);`;
    if (Filtercounter === 0) {
      stopLoop(Filterloop);
    }
    Filtercounter--;
  }, Filterinterval);

  function stopLoop(Theloop) {
    clearInterval(Theloop);
  }
});
