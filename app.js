const container = document.getElementById("container");
container.classList.add("container");

let size = prompt("Enter desired board size");
container.style.setProperty("--size", size);

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    /*
    div.addEventListener("click", () => {
      div.style.backgroundColor = "black";
    });
*/
    div.addEventListener("mousemove", () => {
      div.style.backgroundColor = "blue";
    });
    container.appendChild(div);
  }
}

document.body.appendChild(container);
