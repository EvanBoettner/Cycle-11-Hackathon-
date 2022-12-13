import { strings, concatenated, templateLiterals } from "./src/strings.js";
import { arrays, compareArrays, stringToArray } from './src/arrays.js';

document.title = "Hackathon";

// H1 Element
const divv = document.createElement("div");
document.body.appendChild(divv);
divv.setAttribute("id", "div1");
const h1 = document.createElement("h1");
divv.appendChild(h1);
h1.setAttribute("id", "mainHeading");
const node = document.createTextNode("Cycle 11 Hackathon");
h1.appendChild(node);

divv.style.textAlign = "center";
divv.style.color = "blue";

let y = "I am calling this function and passing this text as an argument.";
console.log(strings(y));

console.log(concatenated(y));

console.log(templateLiterals());

console.log(arrays([1,2,3,4]));

let arr1 = [1,2,3,4]

console.log(compareArrays(arr1, [1,2,3,4,5]));

console.log([...Array(26)].map((_, i) => String.fromCharCode(i + 97)));

console.log([...Array(26)].map((_, i) => String.fromCharCode(i + 97)).toString());
