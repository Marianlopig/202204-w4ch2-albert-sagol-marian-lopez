import "./Result.css";
import PropTypes from "prop-types";

const Result = ({ text }) => {
  return <section className="game-result">{text}</section>;
};

Result.propTypes = { text: PropTypes.string.isRequired };

export default Result;
