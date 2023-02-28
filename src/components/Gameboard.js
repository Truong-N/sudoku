import { useContext } from "react";
import { Context } from "../context";
import SolvedCell from "./SolvedCell";
import UnsolvedRowCol from "./UnsolvedRowCol";
import unsolvedSolved from "../unsolvedSolved";

const Gameboard = () => {
  const { state, dispatch } = useContext(Context);
  const newUnsolved = unsolvedSolved(state.solved, state.unsolved);
  // dispatch({
  //   type: "UNSOLVED_UPDATE",
  //   payload: unsolvedSolved(state.solved, state.unsolved),
  // });
  const solvedEl = state.solved
    .map((row, r) =>
      row.map((col, c) => {
        const className = col === state.playedNum ? "highlight" : "";
        return (
          <section key={c}>
            {col ? (
              <SolvedCell num={col} r={r} c={c} />
            ) : (
              <UnsolvedRowCol r={r} c={c} />
            )}
          </section>
        );
      })
    )
    .map((board, i) => (
      <div key={i} className="row">
        {board}
      </div>
    ));
  const handlePlayedNum = (val) => {
    dispatch({ type: "PLAYEDNUM", payload: val });
  };
  const handlePencil = () => {
    dispatch({ type: "ISPENCIL", payload: state.isPencil });
  };
  return (
    <div className="flex">
      <div>{solvedEl}</div>
      <form>
        <input
          type="radio"
          id="one"
          name="curNum"
          value="1"
          onChange={() => handlePlayedNum(1)}
        ></input>
        <label htmlFor="one">1</label>
        <input
          type="radio"
          id="two"
          name="curNum"
          value="2"
          onChange={() => handlePlayedNum(2)}
        ></input>
        <label htmlFor="two">2</label>
        <input
          type="radio"
          id="three"
          name="curNum"
          value="3"
          onChange={() => handlePlayedNum(3)}
        ></input>
        <label htmlFor="three">3</label>
        <input
          type="radio"
          id="four"
          name="curNum"
          value="4"
          onChange={() => handlePlayedNum(4)}
        ></input>
        <label htmlFor="four">4</label>
        <input
          type="radio"
          id="five"
          name="curNum"
          value="5"
          onChange={() => handlePlayedNum(5)}
        ></input>
        <label htmlFor="five">5</label>
        <input
          type="radio"
          id="six"
          name="curNum"
          value="6"
          onChange={() => handlePlayedNum(6)}
        ></input>
        <label htmlFor="six">6</label>
        <input
          type="radio"
          id="seven"
          name="curNum"
          value="7"
          onChange={() => handlePlayedNum(7)}
        ></input>
        <label htmlFor="seven">7</label>
        <input
          type="radio"
          id="eight"
          name="curNum"
          value="8"
          onChange={() => handlePlayedNum(8)}
        ></input>
        <label htmlFor="eight">8</label>
        <input
          type="radio"
          id="nine"
          name="curNum"
          value="9"
          onChange={() => handlePlayedNum(9)}
        ></input>
        <label htmlFor="nine">9</label>
        <input type="checkbox" id="pencil" onChange={handlePencil}></input>
        <label htmlFor="pencil">Pencil</label>
      </form>
    </div>
  );
};
export default Gameboard;
