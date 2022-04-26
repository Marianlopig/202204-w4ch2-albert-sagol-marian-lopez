import { PropTypes } from "prop-types";
import "./UsedLetters.css";

const UsedLetters = ({ lettersUsed }) => {
  return (
    <section className="used-letters-container">
      <h2>Used letters</h2>
      <ul className="used-letters">
        {lettersUsed.map((letter) => {
          return <li className="used-letter">{letter}, </li>;
        })}
      </ul>
    </section>
  );
};

export default UsedLetters;

UsedLetters.propTypes = {
  lettersUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
};
