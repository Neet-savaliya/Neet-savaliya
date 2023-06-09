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

drums.forEach((element, i) => {
  element.addEventListener("click", () => {
    new Audio(audios[i]).play();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() == element.innerText.toLowerCase()) {
      new Audio(audios[i]).play();
    }
  });
});
