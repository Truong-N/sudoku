import "./TOuter.css";
import TOuter2 from "./TOuter2";
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
const r3x3 = (arr1, rLwr, rUppr, cLwr, cUppr, x, y, z) => {
  if (x >= rLwr && x < rUppr && y >= cLwr && y < cUppr) {
    for (let r = rLwr; r < rUppr; r++) {
      for (let c = cLwr; c < cUppr; c++) {
        arr1[r][c][z] = 0;
        // console.log("r: ", r, " c: ", c, " z: ", z);
      }
    }
  }
  return arr1;
};
const TOuter = () => {
  const arrGiven = [
    [0, 4, 3, 0, 0, 0, 0, 0, 0],
    [2, 6, 9, 5, 0, 0, 0, 0, 0],
    [0, 0, 0, 7, 0, 9, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 6, 0, 0],
    [6, 0, 0, 4, 0, 1, 0, 0, 7],
    [0, 0, 2, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 8, 0, 7, 0, 0, 0],
    [8, 0, 0, 0, 0, 2, 7, 1, 5],
    [0, 0, 0, 0, 0, 0, 4, 3, 0],
  ];
  let arr1 = createArray3D();
  arrGiven.forEach((aGItem, x) => {
    aGItem.forEach((item, y) => {
      if (item > 0) {
        const z = item - 1;
        for (let i = 0; i < 9; i++) {
          arr1[x][i][z] = 0; // set 0 to horizontal or row
          arr1[i][y][z] = 0; // set 0 to vertical or column
          arr1[x][y][i] = 0; // set 0 to all numbers in cell
        }
        let lwr = 0;
        let uppr = 3;
        r3x3(arr1, 0, 3, 0, 3, x, y, z);
        r3x3(arr1, 0, 3, 3, 6, x, y, z);
        r3x3(arr1, 0, 3, 6, 9, x, y, z);
        r3x3(arr1, 3, 6, 0, 3, x, y, z);
        r3x3(arr1, 3, 6, 3, 6, x, y, z);
        r3x3(arr1, 3, 6, 6, 9, x, y, z);
        r3x3(arr1, 6, 9, 0, 3, x, y, z);
        r3x3(arr1, 6, 9, 3, 6, x, y, z);
        r3x3(arr1, 6, 9, 6, 9, x, y, z);
      }
    });
  });
  // find lone cell in a row
  arr1.forEach((arr1x, x) => {
    console.log(arr1x);
  });
  const el = arrGiven
    .map((a0, index) =>
      a0.map((item, i) => (
        <section key={i}>
          {item ? (
            <div className="s2rem">{item}</div>
          ) : (
            <TOuter2 arr={arr1[index][i]} />
          )}
        </section>
      ))
    )
    .map((item, i) => (
      <div key={i} className="row">
        {item}
      </div>
    ));
  return <>{el}</>;
};
export default TOuter;
