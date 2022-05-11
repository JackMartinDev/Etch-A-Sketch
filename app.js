const container = document.getElementById("container");

for (let i = 0; i < 16; i++) {
  const wrapperDiv = document.createElement("div");
  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    wrapperDiv.appendChild(div);
  }
  container.appendChild(wrapperDiv);
}

document.body.appendChild(container);
