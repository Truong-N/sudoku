const handleClickRadio = (value) => {
  currentNumber = Number(value);
  render();
};
const handleClickPencil = () => {
  pencil = !pencil;
};

const unsolvedClick = (unsolve_id) => {
  const row = Number(unsolve_id[2]);
  const col = Number(unsolve_id[4]);
  if (pencil) {
    eliminated[row][col][currentNumber - 1] = 0;
  } else {
    // console.log("a")
    if (checkOk(row, col, currentNumber)) {
      solvedArray[row][col] = currentNumber;
      render();
    } else {
      alert("Error");
    }
  }
};
const arrGiven = [
  [0, 4, 3, 0, 0, 0, 0, 0, 0],
  [2, 6, 9, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 7, 0, 9, 0, 0, 0],
  [4, 0, 0, 0, 0, 0, 6, 0, 0],
  [6, 0, 0, 4, 0, 1, 0, 0, 7],
  [0, 0, 2, 0, 0, 0, 0, 0, 4],
  [0, 0, 0, 8, 0, 7, 0, 0, 0],
  [8, 0, 0, 0, 0, 2, 7, 1, 5],
  [0, 0, 0, 0, 0, 0, 4, 3, 0],
];
const solvedArray = [...arrGiven];
// console.log(solvedArray);
let pencil = false;
let currentNumber = 0;
let unsolved = createArray3D();
let eliminated = [...unsolved];
const render = () => {
  assigned();
  displayAll();
  styleAll();
  highlight();
};
render();
