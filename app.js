import { strings, concatenated, templateLiterals } from "./src/strings.js";
import { arrays, compareArrays, stringToArray } from "./src/arrays.js";
import { forLoop, indexOfAlphabetsArray } from "./src/loops.js";

document.title = "Hackathon";

// H1 Element
const divv = document.createElement("div");
document.body.prepend(divv);
divv.setAttribute("id", "div1");
const h1 = document.createElement("h1");
divv.appendChild(h1);
h1.setAttribute("id", "mainHeading");
const node = document.createTextNode("Cycle 11 Hackathon");
h1.appendChild(node);

const divv2 = document.createElement("div");
divv.after(divv2)
divv2.setAttribute('id', 'picture');

const button = document.createElement('button');
divv.appendChild(button);
const buttext = document.createTextNode('Picture')
button.appendChild(buttext);




const img = document.createElement('img');
divv2.appendChild(img)
img.setAttribute('id', 'image')
img.src = "https://bit.ly/3FIkEjn";
img.style.display = 'none';
img.style.margin = 'auto';
img.style.height = '75vh';
img.style.paddingTop = '30px'

button.addEventListener("click", () => {
  document.getElementById("image").style.display = "block";
});

divv.style.textAlign = "center";
divv.style.color = "blue";
divv.style.width = '60%';
divv.style.height = '50%';
divv.style.margin = 'auto';
divv.style.border = '1px solid grey';
divv.style.boxShadow = 'grey 2px 2px';

h1.style.textAlign = 'center';
h1.style.color = 'blue';

button.style.width = '20%'
button.style.height = '50%'
button.style.marginBottom = '20px'

divv2.style.textAlign = 'center';

document.body.style.backgroundColor = 'yellow';

let y = "I am calling this function and passing this text as an argument.";
console.log(strings(y));

console.log(concatenated(y));

console.log(templateLiterals());

console.log(arrays([1, 2, 3, 4]));

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5];

console.log(compareArrays(arr1, arr2));

console.log(
  stringToArray([...Array(26)].map((_, i) => String.fromCharCode(i + 97)))
);

// const alphabet = "a,b,c,d,e,f,g"
// const a = stringToArray(alphabet)
console.log(
  stringToArray(
    [...Array(26)].map((_, i) => String.fromCharCode(i + 97)).toString()
  )
);

let x = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

// console.log(forLoop(x));
const whatever = forLoop(x);
console.log(whatever);

console.log(indexOfAlphabetsArray(whatever, x));
