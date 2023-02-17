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
let unsolvedArray = createArray3D();
arrGiven.forEach((aGItem, x) => {
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
    document.getElementById(solved_id).textContent = arrGiven[r][c];
    unsolved_row_col = `ur${r}c${c}`;
    if (arrGiven[r][c] > 0) {
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
      document.getElementById(unsolved_row_col_z).textContent =
        unsolvedArray[r][c][z] > 0 ? unsolvedArray[r][c][z] : "-";
    }
  }
}
