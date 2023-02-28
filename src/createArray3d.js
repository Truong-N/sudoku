export const createArray3D = () => {
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

export const createArray9x9x9empty = () => {
  const arr = new Array(9);
  for (let r = 0; r < 9; r++) {
    arr[r] = new Array(9);
    for (let c = 0; c < 9; c++) {
      arr[r][c] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }
  return arr;
};
