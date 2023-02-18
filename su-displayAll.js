const displayAll = () => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      document.getElementById(`sr${row}c${col}`).style.display = "block";
      document.getElementById(`ur${row}c${col}`).style.display = "block";
    }
  }
};
