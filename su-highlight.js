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
        if (unsolved[row][col][z] === currentNumber)
          document.getElementById(`ur${row}c${col}z${z}`).style.background =
            "yellow";
      }
    }
  }
};
