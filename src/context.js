import React, { useReducer } from "react";
import { createArray3D, createArray9x9x9empty } from "./createArray3d";
import data from "./data";
const initialState = {
  isPencil: false,
  playedNum: 0,
  solved: [],
  unsolved: [],
  eliminated: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ISPENCIL":
      return { ...state, isPencil: !action.payload };
    case "SOLVED_UPDATE":
      return { ...state, solved: action.payload };
    case "UNSOLVED_UPDATE":
      return { ...state, unsolved: action.payload };
    case "ELIMINATED_UPDATE":
      return { ...state, eliminated: action.payload };
    case "PLAYEDNUM":
      return { ...state, playedNum: action.payload };
    default:
      return state;
  }
};
const Context = React.createContext();
function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  React.useEffect(() => {
    dispatch({ type: "SOLVED_UPDATE", payload: data });
    dispatch({ type: "UNSOLVED_UPDATE", payload: createArray3D() });
    const eliminated = createArray9x9x9empty();
    // console.log(eliminated);
    dispatch({ type: "ELIMINATED_UPDATE", payload: createArray9x9x9empty() });
  }, []);
  // console.log(state.eliminated);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
