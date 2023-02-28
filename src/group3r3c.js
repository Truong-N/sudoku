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
export default group_3row_3col;
