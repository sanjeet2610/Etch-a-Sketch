
const header = document.createElement("div");
const body = document.querySelector("body");
header.style.marginBottom = "12px";
body.appendChild(header);

const span = document.createElement("span");
span.textContent = "Click this button to change grid size =>";
span.style.color = "brown";
span.style.fontWeight = "bold";
header.appendChild(span);
span.style.marginRight = "4px";


const button = document.createElement("button");
button.textContent = "Click here";
button.style.fontWeight = "bold";
header.appendChild(button);


const parent = document.createElement("div");
parent.classList.add("parent");

body.appendChild(parent);

let n = 16;

for (let i = 0; i < n * n; i++) {
    const child = document.createElement("div");
    child.classList.add("child");
    parent.appendChild(child);
}
parent.style.height = "500px";
parent.style.width = "500px";

const size = 500 / n;

const children = document.querySelectorAll(".child");
children.forEach(function (child) {
    child.style.height = size + "px";
    child.style.width = size + "px";
});

colorize(children);

function colorize(children) {
    let colors = ['yellow', 'brown', 'green', 'blue', 'red', 'orange', 'gray', 'indigo', 'deepOrange'];
    children.forEach(child => {
        child.addEventListener("mouseenter", () => {
            const color = colors[parseInt(Math.random() * 9)];
            child.style.backgroundColor = color;
        });
    });
}

button.addEventListener("click", () => {
    const new_n = prompt("Enter the size of grid (under 100) :");
    const curr_children = document.querySelectorAll(".child");
    curr_children.forEach(child => {
        parent.removeChild(child);
    });
    const newSize = 500 / new_n;
    for (let i = 0; i < new_n * new_n; i++) {
        const child = document.createElement("div");
        child.classList.add("child");
        parent.appendChild(child);
    }
    const newChildren = document.querySelectorAll(".child");
    newChildren.forEach(child => {
        child.style.width = newSize + "px";
        child.style.height = newSize + "px";
    });

    colorize(newChildren);
});


