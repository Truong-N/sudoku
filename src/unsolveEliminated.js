const unsolvedEliminated = (unsolved, eliminated) => {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      for (let z = 0; z < 9; z++) {
        if (unsolved[r][c][z] === eliminated[r][c][z]) {
          unsolved[r][c][z] = 0;
        }
      }
    }
  }
};
export default unsolvedEliminated;
