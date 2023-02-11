import { useState } from "react";
import CellUnsolvedArray from "./CellUnsolvedArray";
import "./TOuter.css";
const TOuter2 = ({ currentNum, arr }) => {
  return (
    <div>
      <div className="touter">
        <div className="row3">
          <CellUnsolvedArray currentNum={currentNum} num={arr[0]} />
          <CellUnsolvedArray currentNum={currentNum} num={arr[1]} />
          <CellUnsolvedArray currentNum={currentNum} num={arr[2]} />
        </div>
        <div className="row3">
          <CellUnsolvedArray currentNum={currentNum} num={arr[3]} />
          <CellUnsolvedArray currentNum={currentNum} num={arr[4]} />
          <CellUnsolvedArray currentNum={currentNum} num={arr[5]} />
        </div>
        <div className="row3">
          <CellUnsolvedArray currentNum={currentNum} num={arr[6]} />
          <CellUnsolvedArray currentNum={currentNum} num={arr[7]} />
          <CellUnsolvedArray currentNum={currentNum} num={arr[8]} />
        </div>
      </div>
    </div>
  );
};
export default TOuter2;
