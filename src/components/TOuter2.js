import { useState } from "react";
import TInner from "./TInner";
import "./TOuter.css";
const TOuter2 = ({ arr }) => {
  return (
    <div>
      <div className="touter">
        <div className="row3">
          <TInner num={arr[0]} />
          <TInner num={arr[1]} />
          <TInner num={arr[2]} />
        </div>
        <div className="row3">
          <TInner num={arr[3]} />
          <TInner num={arr[4]} />
          <TInner num={arr[5]} />
        </div>
        <div className="row3">
          <TInner num={arr[6]} />
          <TInner num={arr[7]} />
          <TInner num={arr[8]} />
        </div>
      </div>
    </div>
  );
};
export default TOuter2;
