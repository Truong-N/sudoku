import { useState } from "react";
import CellSolvedArray from "./CellSolvedArray";
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
const group_3row_3col = (arr1, rLwr, rUppr, cLwr, cUppr, x, y, z) => {
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
  const [currentNum, setCurrentNum] = useState(0);
  const [pencil, setPencil] = useState(false);
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
        group_3row_3col(arr1, 0, 3, 0, 3, x, y, z);
        group_3row_3col(arr1, 0, 3, 3, 6, x, y, z);
        group_3row_3col(arr1, 0, 3, 6, 9, x, y, z);
        group_3row_3col(arr1, 3, 6, 0, 3, x, y, z);
        group_3row_3col(arr1, 3, 6, 3, 6, x, y, z);
        group_3row_3col(arr1, 3, 6, 6, 9, x, y, z);
        group_3row_3col(arr1, 6, 9, 0, 3, x, y, z);
        group_3row_3col(arr1, 6, 9, 3, 6, x, y, z);
        group_3row_3col(arr1, 6, 9, 6, 9, x, y, z);
      }
    });
  });
  // find lone cell in a row
  // arr1.forEach((arr1x, x) => {
  //   console.log(arr1x);
  // });
  const el = arrGiven
    .map((a0, x) =>
      a0.map((item, y) => (
        <section key={y}>
          {item ? (
            <CellSolvedArray currentNum={currentNum} num={item} />
          ) : (
            <TOuter2
              currentNum={currentNum}
              x={x}
              y={y}
              arr={arr1}
              pencil={pencil}
            />
          )}
        </section>
      ))
    )
    .map((item, i) => (
      <div key={i} className="row">
        {item}
      </div>
    ));
  function currentNumChange(e) {
    setCurrentNum(Number(e.target.value));
  }
  function handleChanged(e) {
    console.log(e.target.id);
    if (e.target.id === "pencil") {
      setPencil(!pencil);
    } else setCurrentNum(Number(e.target.value));
  }
  return (
    <>
      {el}
      <form>
        <input
          type="radio"
          id="one"
          name="curNum"
          value="1"
          onChange={handleChanged}
        ></input>
        <label htmlFor="one">1</label>
        <input
          type="radio"
          id="two"
          name="curNum"
          value="2"
          onChange={handleChanged}
        ></input>
        <label htmlFor="two">2</label>
        <input
          type="radio"
          id="three"
          name="curNum"
          value="3"
          onChange={handleChanged}
        ></input>
        <label htmlFor="three">3</label>
        <input
          type="radio"
          id="four"
          name="curNum"
          value="4"
          onChange={handleChanged}
        ></input>
        <label htmlFor="four">4</label>
        <input
          type="radio"
          id="five"
          name="curNum"
          value="5"
          onChange={handleChanged}
        ></input>
        <label htmlFor="five">5</label>
        <input
          type="radio"
          id="six"
          name="curNum"
          value="6"
          onChange={handleChanged}
        ></input>
        <label htmlFor="six">6</label>
        <input
          type="radio"
          id="seven"
          name="curNum"
          value="7"
          onChange={handleChanged}
        ></input>
        <label htmlFor="seven">7</label>
        <input
          type="radio"
          id="eight"
          name="curNum"
          value="8"
          onChange={handleChanged}
        ></input>
        <label htmlFor="eight">8</label>
        <input
          type="radio"
          id="nine"
          name="curNum"
          value="9"
          onChange={handleChanged}
        ></input>
        <label htmlFor="nine">9</label>
        <input type="checkbox" id="pencil" onChange={handleChanged}></input>
        <label htmlFor="pencil">Pencil</label>
      </form>
    </>
  );
};
export default TOuter;
