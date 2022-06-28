"use strict";

const pressed = [];
const secretCode = "dagilis";

addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.lenght - 1, pressed.length - secretCode.length);
    if (pressed.join("").includes(secretCode)) {
        console.log("done!");
    }
    console.log(pressed);
})