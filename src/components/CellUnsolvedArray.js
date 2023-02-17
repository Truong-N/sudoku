import "./CellUnsolvedArray.css";
const CellUnsolvedArray = ({ currentNum, num }) => {
  const highlight = currentNum === num ? "highlight" : "";
  return <div className={`tinner ${highlight}`}>{num}</div>;
};
export default CellUnsolvedArray;
