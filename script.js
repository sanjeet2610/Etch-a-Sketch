
const header = document.createElement("div");
const body = document.querySelector("body");
header.style.marginBottom = "12px";
body.appendChild(header);

const span = document.createElement("span");
span.textContent = "Click this button to change grid size =>";
span.style.color = "brown";
header.appendChild(span);
span.style.marginRight = "4px";


const button = document.createElement("button");
button.textContent = "Click here";
header.appendChild(button);


const parent = document.createElement("div");
parent.classList.add("parent");

body.appendChild(parent);



for (let i = 0; i < 256; i++) {
    const child = document.createElement("div");
    child.classList.add("child");
    parent.appendChild(child);
}
parent.style.height = "500px";
parent.style.width = "500px";

const size = 500 / 16;

const children = document.querySelectorAll(".child");
children.forEach(function (child) {
    child.style.height = size + "px";
    child.style.width = size + "px";
});

children.forEach(child => {
    child.addEventListener("mouseover", () => {
        child.style.backgroundColor = "orange";
    });
});


