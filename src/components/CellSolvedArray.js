const CellSolvedArray = ({ currentNum, num }) => {
  const highlight = currentNum === num ? "highlight" : "";
  return <div className={`s2rem ${highlight}`}>{num}</div>;
};
export default CellSolvedArray;
