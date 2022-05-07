"use strict";

const play = document.querySelectorAll(".string");

play.forEach((string) => {
  string.addEventListener("click", () => playNote(string));
});

function playNote(string) {
  const noteAudio = document.getElementById(string.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  string.classList.add("active");
  noteAudio.addEventListener("ended", () => {
    string.classList.remove("active");
  });
}
