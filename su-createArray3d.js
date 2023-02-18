// const createArray3D = (arr) => {
//   for (let r = 0; r < 9; r++) {
//     const col = [];
//     for (let c = 0; c < 9; c++) {
//       const z = new Array(9);
//       col.push(z);
//     }
//     arr.push(col);
//   }
// };
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
