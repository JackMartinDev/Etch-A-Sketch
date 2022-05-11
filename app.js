const container = document.getElementById("container");
container.classList.add("container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
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
