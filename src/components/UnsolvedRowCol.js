import { useContext } from "react";
import { Context } from "../context";
import unsolvedEliminated from "../unsolveEliminated";
import UnsolvedCell from "./UnsolvedCell";

const checkRegion = (rl, rh, cl, ch, row, col, value, solvedArray) => {
  for (let r = rl; r < rh; r++) {
    for (let c = cl; c < ch; c++) {
      if (row >= rl && row < rh && col >= cl && col < ch) {
        // alert(`r: ${r}, c: ${c}`);
        if (solvedArray[r][c] === value) {
          return false;
        }
      }
    }
  }
  return true;
};

const safeCheck = (row, col, value, solvedArray) => {
  // check row
  for (let c = 0; c < 9; c++) {
    if (solvedArray[row][c] === value) {
      return false;
    }
  }
  // check cols
  for (let r = 0; r < 9; r++) {
    if (solvedArray[r][col] === value) {
      return false;
    }
  }
  return (
    checkRegion(0, 3, 0, 3, row, col, value, solvedArray) &&
    checkRegion(0, 3, 3, 6, row, col, value, solvedArray) &&
    checkRegion(0, 3, 6, 9, row, col, value, solvedArray) &&
    checkRegion(3, 6, 0, 3, row, col, value, solvedArray) &&
    checkRegion(3, 6, 3, 6, row, col, value, solvedArray) &&
    checkRegion(3, 6, 6, 9, row, col, value, solvedArray) &&
    checkRegion(6, 9, 0, 3, row, col, value, solvedArray) &&
    checkRegion(6, 9, 3, 6, row, col, value, solvedArray) &&
    checkRegion(6, 9, 6, 9, row, col, value, solvedArray)
  );
};
const UnsolvedRowCol = ({ r, c }) => {
  const { state, dispatch } = useContext(Context);
  //   console.log(unsolved);
  const unsolved = state.unsolved;
  function handleClick() {
    console.log(state.isPencil);
    if (state.isPencil) {
      const newEliminated = [...state.eliminated];
      //   console.log(newEliminated);
      newEliminated[r][c][state.playedNum - 1] = state.playedNum;
      unsolvedEliminated(state.unsolved, newEliminated);
      dispatch({ type: "UNSOLVED_UPDATE", payload: state.unsolved });
      //   console.log(state.unsolved);
    } else {
      if (safeCheck(r, c, state.playedNum, state.solved)) {
        const newSolved = [...state.solved];
        newSolved[r][c] = state.playedNum;
        dispatch({ type: "SOLVED_UPDATE", payload: newSolved });
      }
    }
  }
  let className = c === 2 || c === 5 ? `unsolved-r-c mr-1` : `unsolved-r-c`;
  className += r === 2 || r === 5 ? " mb-1" : "";
  return (
    <div>
      <div className={className} onClick={handleClick}>
        <div className="row3">
          <UnsolvedCell num={unsolved[r][c][0]} />
          <UnsolvedCell num={unsolved[r][c][1]} />
          <UnsolvedCell num={unsolved[r][c][2]} />
        </div>
        <div className="row3">
          <UnsolvedCell num={unsolved[r][c][3]} />
          <UnsolvedCell num={unsolved[r][c][4]} />
          <UnsolvedCell num={unsolved[r][c][5]} />
        </div>
        <div className="row3">
          <UnsolvedCell num={unsolved[r][c][6]} />
          <UnsolvedCell num={unsolved[r][c][7]} />
          <UnsolvedCell num={unsolved[r][c][8]} />
        </div>
      </div>
    </div>
  );
};
export default UnsolvedRowCol;
