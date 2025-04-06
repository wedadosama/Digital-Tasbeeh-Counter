"use strict";
document.addEventListener("DOMContentLoaded", function () {
    let counter = 0;
    const btnCounter = document.getElementById("btn_counter");
    const btnReset = document.getElementById("btn_reset");
    const counterDisplay = document.getElementById("counter");
    btnCounter.addEventListener("click", function () {
        counterDisplay.innerText = (++counter).toString();
    });
    btnReset.addEventListener("click", function () {
        counter = 0;
        counterDisplay.innerText = counter.toString();
    });
});
