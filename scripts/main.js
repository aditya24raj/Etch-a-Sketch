const maxSize = 100;
const fallbackSize = 16;
let currentSize = fallbackSize;

function createGrid(gridHeight, gridWidth) {
  const container = document.getElementById("container");
  container.innerHTML = null;

  container.style.flexDirection = "column";
  container.style.border = "1px solid black";

  for (let i = 0; i < gridHeight; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.flex = 1;
    row.backgroundColor = "red";
    container.appendChild(row);

    for (let j = 0; j < gridWidth; j++) {
      const cell = document.createElement("div");
      cell.style.flex = 1;
      cell.style.border = "1px solid black";

      cell.style.opacity = "0.1";
      cell.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )})`;

        event.target.style.opacity =
          event.target.style.opacity >= 1
            ? event.target.style.opacity
            : parseFloat(event.target.style.opacity) + 0.1;
      });
      row.appendChild(cell);
    }
  }
}

function createSquareGrid(size) {
  document.getElementById(
    "current-size"
  ).textContent = `Current grid size is ${size}x${size}`;
  createGrid(size, size);
}

document.getElementById("create-new-grid").addEventListener("click", () => {
  let currentSize = parseInt(prompt("Enter grid size"));
  if (currentSize > maxSize) {
    currentSize = maxSize;
    alert(`Max size is ${maxSize}`);
  }
  if (!currentSize || !Number.isInteger(currentSize) || currentSize < 0) {
    currentSize = fallbackSize;
    alert(`Invalid size. Using fallback size ${fallbackSize}`);
  }

  createSquareGrid(currentSize);
});

createSquareGrid(currentSize);
