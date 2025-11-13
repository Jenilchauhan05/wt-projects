let links = document.querySelectorAll(".box a");
for (let link of links) {
  link.style.color = "green";
  link.style.backgroundColor = "blue";
}

let para1 = document.createElement("p");
para1.innerHTML = "my name is <b>Jenil Chauhan</b>";
document.querySelector("body").append(para1);

let h3 = document.createElement("h3");
h3.innerText = "I am blue h3";
h3.classList.add("blue");
document.querySelector("body").append(h3);

let div = document.createElement("div");
div.classList.add("extra");

let h1 = document.createElement("h1");
h1.innerHTML = "<u>dom practice</u>";
h1.classList.add("purple");

let para2 = document.createElement("p");
para2.innerText = "I am also";

div.append(h1);
div.append(para2);
document.querySelector("body").append(div);

document.getElementById("input").setAttribute("placeholder", "username");
document.getElementById("button").setAttribute("id", "btn");

let input = document.createElement("input");
input.placeholder = "new input";

let btn = document.createElement("button");
btn.innerText = "click me";
btn.classList.add("btn");

document.querySelector("body").append(input);
document.querySelector("body").append(btn);
