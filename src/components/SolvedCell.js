import { useContext } from "react";
import { Context } from "../context";

const SolvedCell = (props) => {
  const { state } = useContext(Context);
  //   console.log(playedNum);
  const playedNum = state.playedNum;
  let className = props.num === playedNum ? "highlight" : "";
  className += props.c === 2 || props.c === 5 ? " mr-1" : "";
  className += props.r === 2 || props.r === 5 ? " mb-1" : "";
  return <div className={`solved ${className}`}>{props.num}</div>;
};
export default SolvedCell;
