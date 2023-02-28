import group_3row_3col from "./group3r3c";

const unsolvedSolved = (solvedArray, unsolved) => {
  // console.log("unsolvedAfterSolved called");
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
  //   return unsolved;
};
export default unsolvedSolved;
