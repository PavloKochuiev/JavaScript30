"use strict";

document.body.addEventListener("keydown", (event) => {
    const audio = document.querySelector(`audio[code=${event.code}]`);
    const key = document.querySelector(`.key[code=${event.code}]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
});

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
