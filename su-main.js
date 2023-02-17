const createArray3D = () => {
  const arr3D = [];
  for (let outrow = 0; outrow < 9; outrow++) {
    const arrRow = [];
    for (let r = 0; r < 9; r++) {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      arrRow.push(arr);
    }

    arr3D.push(arrRow);
  }
  return arr3D;
};
const group_3row_3col = (unsolvedArray, rLwr, rUppr, cLwr, cUppr, x, y, z) => {
  if (x >= rLwr && x < rUppr && y >= cLwr && y < cUppr) {
    for (let r = rLwr; r < rUppr; r++) {
      for (let c = cLwr; c < cUppr; c++) {
        unsolvedArray[r][c][z] = 0;
        // console.log("r: ", r, " c: ", c, " z: ", z);
      }
    }
  }
  return unsolvedArray;
};
const handleClickRadio = (value) => {
  currentNumber = Number(value);
  render();
  //   arrGiven.forEach((arrGivenRow, r) => {
  //     arrGivenRow.forEach((arrGivenRowCol, c) => {
  //       document.getElementById(`sr${r}c${c}`).style.background = "white";
  //       if (arrGivenRowCol === Number(value)) {
  //         document.getElementById(`sr${r}c${c}`).style.background = "yellow";
  //       }
  //       for (let z = 0; z < 9; z++) {
  //         document.getElementById(`ur${r}c${c}z${z}`).style.background = "white";
  //         if (unsolvedArray[r][c][z] === Number(value)) {
  //           document.getElementById(`ur${r}c${c}z${z}`).style.background =
  //             "yellow";
  //         }
  //       }
  //     });
  //   });
};
const highlight = () => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      document.getElementById(`sr${row}c${col}`).style.background = "white";
      for (let z = 0; z < 9; z++) {
        document.getElementById(`ur${row}c${col}z${z}`).style.background =
          "white";
      }
    }
  }
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (solvedArray[row][col] === currentNumber) {
        document.getElementById(`sr${row}c${col}`).style.background = "yellow";
      }
      for (let z = 0; z < 9; z++) {
        if (unsolvedArray[row][col][z] === currentNumber)
          document.getElementById(`ur${row}c${col}z${z}`).style.background =
            "yellow";
      }
    }
  }
};
const handleClickPencil = () => {
  pencil = !pencil;
};
const unsolvedClick = (unsolve_id) => {
  const row = Number(unsolve_id[2]);
  const col = Number(unsolve_id[4]);
  if (pencil) {
    unsolvedEliminated[row][col][currentNumber - 1] = 0;
  } else {
    solvedArray[row][col] = currentNumber;
  }
  render();

  console.log("row: ", row);
  console.log("col: ", col);
  console.log(solvedArray);
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
console.log(solvedArray);
let pencil = false;
let currentNumber = 0;
let unsolvedArray = createArray3D();
let unsolvedEliminated = [...unsolvedArray];
const displayAll = () => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      document.getElementById(`sr${row}c${col}`).style.display = "block";
      document.getElementById(`ur${row}c${col}`).style.display = "block";
    }
  }
};

const styleAll = () => {
  let solved_id;
  for (let r = 0; r < 9; r++) {
    document.getElementById(`sr${r}c2`).style.marginRight = "10px";
    document.getElementById(`ur${r}c2`).style.marginRight = "10px";
    document.getElementById(`sr${r}c5`).style.marginRight = "10px";
    document.getElementById(`ur${r}c5`).style.marginRight = "10px";
    for (let c = 0; c < 9; c++) {
      document.getElementById(`sr2c${c}`).style.marginBottom = "10px";
      document.getElementById(`ur2c${c}`).style.marginBottom = "10px";
      document.getElementById(`sr5c${c}`).style.marginBottom = "10px";
      document.getElementById(`ur5c${c}`).style.marginBottom = "10px";
      solved_id = `sr${r}c${c}`;
      unsolved_row_col = `ur${r}c${c}`;
      if (solvedArray[r][c] > 0) {
        document.getElementById(unsolved_row_col).style.display = "none";
        document.getElementById(solved_id).style.textAlign = "center";
        document.getElementById(solved_id).style.border = "1px solid black";
        document.getElementById(solved_id).style.width = "45px";
      } else {
        document.getElementById(solved_id).style.display = "none";
        document.getElementById(unsolved_row_col).style.textAlign = "center";
        document.getElementById(unsolved_row_col).style.border =
          "1px solid black";
        document.getElementById(unsolved_row_col).style.width = "45px";
      }
      for (let z = 0; z < 9; z++) {
        const unsolved_row_col_z = `ur${r}c${c}z${z}`;
        document.getElementById(unsolved_row_col_z).style.width = "15px";
      }
    }
  }
};

const assigned = () => {
  solvedArray.forEach((aGItem, x) => {
    aGItem.forEach((item, y) => {
      if (item > 0) {
        const z = item - 1;
        for (let i = 0; i < 9; i++) {
          unsolvedArray[x][i][z] = 0; // set 0 to horizontal or row
          unsolvedArray[i][y][z] = 0; // set 0 to vertical or column
          unsolvedArray[x][y][i] = 0; // set 0 to all numbers in cell
        }
        group_3row_3col(unsolvedArray, 0, 3, 0, 3, x, y, z);
        group_3row_3col(unsolvedArray, 0, 3, 3, 6, x, y, z);
        group_3row_3col(unsolvedArray, 0, 3, 6, 9, x, y, z);
        group_3row_3col(unsolvedArray, 3, 6, 0, 3, x, y, z);
        group_3row_3col(unsolvedArray, 3, 6, 3, 6, x, y, z);
        group_3row_3col(unsolvedArray, 3, 6, 6, 9, x, y, z);
        group_3row_3col(unsolvedArray, 6, 9, 0, 3, x, y, z);
        group_3row_3col(unsolvedArray, 6, 9, 3, 6, x, y, z);
        group_3row_3col(unsolvedArray, 6, 9, 6, 9, x, y, z);
      }
    });
  });
  let solved_id;
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      solved_id = `sr${r}c${c}`;
      document.getElementById(solved_id).textContent = solvedArray[r][c];
      //   unsolved_row_col = `ur${r}c${c}`;
      //   document.getElementById(solved_id).style.display = "block";
      //   document.getElementById(unsolved_row_col).style.display = "block";
      //   if (solvedArray[r][c] > 0) {
      //     document.getElementById(unsolved_row_col).style.display = "none";
      //     document.getElementById(solved_id).style.textAlign = "center";
      //     document.getElementById(solved_id).style.border = "1px solid black";
      //     document.getElementById(solved_id).style.width = "45px";
      //   } else {
      //     document.getElementById(solved_id).style.display = "none";
      //     document.getElementById(unsolved_row_col).style.textAlign = "center";
      //     document.getElementById(unsolved_row_col).style.border =
      //       "1px solid black";
      //     document.getElementById(unsolved_row_col).style.width = "45px";
      //   }
      for (let z = 0; z < 9; z++) {
        const unsolved_row_col_z = `ur${r}c${c}z${z}`;
        // document.getElementById(unsolved_row_col_z).style.width = "15px";
        document.getElementById(unsolved_row_col_z).textContent =
          unsolvedArray[r][c][z] > unsolvedEliminated[r][c][z]
            ? unsolvedArray[r][c][z]
            : "-";
      }
    }
  }
};
const render = () => {
  assigned();
  displayAll();
  styleAll();
  highlight();
};
render();
