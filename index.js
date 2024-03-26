const grids = document.querySelector(".grids");
const numbers = document.querySelector(".numbers");
let numselected = null;
let add;
let result = document.getElementById("score");
let score = 0;
const sudoku = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];
const answer = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];
window.onload = function () {
  notepad();
  easySudoku();
};
numbers.style.display = "flex";
numbers.style.flexDirection = "row";
numbers.style.alignItems = "center";
grids.style.display = "flex";
grids.style.flexDirection = "column";
function notepad() {
  for (let i = 0; i < 9; i++) {
    const elem = document.createElement("div");
    elem.innerHTML = i + 1;
    elem.classList.add("keys");
    numbers.appendChild(elem);
    elem.addEventListener("click", numSelect);
  }
}
function easySudoku() {
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.flexDirection = "row";

    for (let cellIndex = 0; cellIndex < 9; cellIndex++) {
      const grid = document.createElement("div");
      grid.id = "" + rowIndex + cellIndex;
      if (sudoku[rowIndex][cellIndex] != 0) {
        grid.innerHTML = sudoku[rowIndex][cellIndex];
      }
      grid.classList.add("grid");
      row.appendChild(grid);
      grid.addEventListener("click", hello);
    }
    grids.appendChild(row);
  }
}
function numSelect() {
  if (numselected != null) {
    numselected.classList.remove("number-selected");
  }
  numselected = this;
  numselected.classList.add("number-selected");
}
function hello() {
  add = this;
  if (numselected) {
    if (this.innerText != "") {
      return;
    }
  }
  let coords = add.id;
  let r = coords[0];
  let c = coords[1];
  if (answer[r][c] == numselected.innerHTML) {
    this.innerText = numselected.innerHTML;
    score++;
    result.innerHTML = score;
  }
}