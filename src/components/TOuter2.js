import { useState } from "react";
import CellUnsolvedArray from "./CellUnsolvedArray";
import "./TOuter.css";
const TOuter2 = ({ currentNum, x, y, arr, pencil }) => {
  function handleClick(e) {
    if (pencil) {
      arr[x][y][currentNum - 1] = 0;
    }
    console.log(
      "x: ",
      x,
      " y: ",
      y,
      " z: ",
      currentNum - 1,
      "/",
      currentNum,
      pencil
    );
  }
  return (
    <div>
      <div className="touter" onClick={handleClick}>
        <div className="row3">
          <CellUnsolvedArray currentNum={currentNum} num={arr[x][y][0]} />
          <CellUnsolvedArray currentNum={currentNum} num={arr[x][y][1]} />
          <CellUnsolvedArray currentNum={currentNum} num={arr[x][y][2]} />
        </div>
        <div className="row3">
          <CellUnsolvedArray currentNum={currentNum} num={arr[x][y][3]} />
          <CellUnsolvedArray currentNum={currentNum} num={arr[x][y][4]} />
          <CellUnsolvedArray currentNum={currentNum} num={arr[x][y][5]} />
        </div>
        <div className="row3">
          <CellUnsolvedArray currentNum={currentNum} num={arr[x][y][6]} />
          <CellUnsolvedArray currentNum={currentNum} num={arr[x][y][7]} />
          <CellUnsolvedArray currentNum={currentNum} num={arr[x][y][8]} />
        </div>
      </div>
    </div>
  );
};
export default TOuter2;
