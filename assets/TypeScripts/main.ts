document.addEventListener("DOMContentLoaded", function () {
  let counter: number = 0;

  const btnCounter = document.getElementById("btn_counter") as HTMLElement;
  const btnReset = document.getElementById("btn_reset") as HTMLElement;
  const counterDisplay = document.getElementById("counter") as HTMLElement;

  btnCounter.addEventListener("click", function () {
    counterDisplay.innerText = (counter++).toString();
  });

  btnReset.addEventListener("click", function () {
    counter = 0;
    counterDisplay.innerText = counter.toString();
  });
});
