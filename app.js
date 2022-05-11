const container = document.getElementById("container");
container.classList.add("container");
const clearButton = document.createElement("button");
clearButton.textContent = "Clear Board";
let size = prompt("Enter desired board size");
container.style.setProperty("--size", size);

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    const div = document.createElement("div");
    div.classList.add("grid");

    div.addEventListener("mousemove", () => {
      div.style.backgroundColor = "blue";
    });
    container.appendChild(div);
  }
}

clearButton.addEventListener("click", () => {
  let grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.style.backgroundColor = "white";
  });
});

document.body.appendChild(container);
document.body.appendChild(clearButton);
