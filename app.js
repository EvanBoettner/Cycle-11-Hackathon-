import strings from "./src/strings.js";

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

console.log(
  strings("I am calling this function and passing this text as an argument")
);
