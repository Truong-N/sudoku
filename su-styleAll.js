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
