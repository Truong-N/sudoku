const checkRegion = (rl, rh, cl, ch, row, col, value) => {
  for (let r = rl; r < rh; r++) {
    for (let c = cl; c < ch; c++) {
      if (row >= rl && row < rh && col >= cl && col < ch) {
        // alert(`r: ${r}, c: ${c}`);
        if (solvedArray[r][c] === value) {
          return false;
        }
      }
    }
  }
  return true;
};
const checkOk = (row, col, value) => {
  // check row
  for (let c = 0; c < 9; c++) {
    if (solvedArray[row][c] === value) {
      return false;
    }
  }
  // check cols
  for (let r = 0; r < 9; r++) {
    if (solvedArray[r][col] === value) {
      return false;
    }
  }

  return (
    checkRegion(0, 3, 0, 3, row, col, value) &&
    checkRegion(0, 3, 3, 6, row, col, value) &&
    checkRegion(0, 3, 6, 9, row, col, value) &&
    checkRegion(3, 6, 0, 3, row, col, value) &&
    checkRegion(3, 6, 3, 6, row, col, value) &&
    checkRegion(3, 6, 6, 9, row, col, value) &&
    checkRegion(6, 9, 0, 3, row, col, value) &&
    checkRegion(6, 9, 3, 6, row, col, value) &&
    checkRegion(6, 9, 6, 9, row, col, value)
  );
};
