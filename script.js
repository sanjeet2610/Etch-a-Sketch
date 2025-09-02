
const parent = document.createElement("div");
parent.classList.add("parent");
const body = document.querySelector("body");
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