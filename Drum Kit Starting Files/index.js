"use strict";

const drums = document.querySelectorAll(".drum");
const audios = [
  "./sounds/tom-1.mp3",
  "./sounds/tom-2.mp3",
  "./sounds/tom-3.mp3",
  "./sounds/tom-4.mp3",
  "./sounds/kick-bass.mp3",
  "./sounds/snare.mp3",
  "./sounds/crash.mp3",
];

const animateButton = (i) => {
  drums[i].classList.add("pressed");
  setTimeout(() => {
    drums[i].classList.remove("pressed");
  }, 100);
};

drums.forEach((element, i) => {
  element.addEventListener("click", () => {
    new Audio(audios[i]).play();
    animateButton(i);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() == element.innerText.toLowerCase()) {
      new Audio(audios[i]).play();
      animateButton(i);
    }
  });
});
