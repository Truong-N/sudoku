const assigned = () => {
  solvedArray.forEach((aGItem, x) => {
    aGItem.forEach((item, y) => {
      if (item > 0) {
        const z = item - 1;
        for (let i = 0; i < 9; i++) {
          unsolved[x][i][z] = 0; // set 0 to horizontal or row
          unsolved[i][y][z] = 0; // set 0 to vertical or column
          unsolved[x][y][i] = 0; // set 0 to all numbers in cell
        }
        group_3row_3col(unsolved, 0, 3, 0, 3, x, y, z);
        group_3row_3col(unsolved, 0, 3, 3, 6, x, y, z);
        group_3row_3col(unsolved, 0, 3, 6, 9, x, y, z);
        group_3row_3col(unsolved, 3, 6, 0, 3, x, y, z);
        group_3row_3col(unsolved, 3, 6, 3, 6, x, y, z);
        group_3row_3col(unsolved, 3, 6, 6, 9, x, y, z);
        group_3row_3col(unsolved, 6, 9, 0, 3, x, y, z);
        group_3row_3col(unsolved, 6, 9, 3, 6, x, y, z);
        group_3row_3col(unsolved, 6, 9, 6, 9, x, y, z);
      }
    });
  });
  let solved_id;
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      solved_id = `sr${r}c${c}`;
      document.getElementById(solved_id).textContent = solvedArray[r][c];
      for (let z = 0; z < 9; z++) {
        const unsolved_row_col_z = `ur${r}c${c}z${z}`;

        if (unsolved[r][c][z] === eliminated[r][c][z]) {
          if (unsolved[r][c][z]) {
            document.getElementById(unsolved_row_col_z).textContent =
              unsolved[r][c][z];
          } else {
            document.getElementById(unsolved_row_col_z).textContent = "";
          }
        }
      }
    }
  }
};
