import { useContext } from "react";
import { Context } from "../context";

const UnsolvedCell = (props) => {
  const { state } = useContext(Context);
  const playedNum = state.playedNum;
  const className = props.num === playedNum ? "highlight" : "";
  return (
    <div className={`unsolved-z ${className}`}>
      {props.num ? props.num : " "}
    </div>
  );
};
export default UnsolvedCell;
