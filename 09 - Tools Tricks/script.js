"use strict";

const dogs = [
    { name: "Snickers", age: 2 },
    { name: "Hugo", age: 8 },
];

function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

console.log("hello");

const p = document.querySelector("p");

console.log(p);
console.dir(p);

dogs.forEach((dog) => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} age is ${dog.age}`);
    console.groupEnd(`${dog.name}`);
});

console.time("fetching data");
fetch("https://api.github.com/users/pavlokochuiev")
    .then((data) => data.json())
    .then((data) => {
        console.timeEnd("fetching data");
        console.log(data);
    });
