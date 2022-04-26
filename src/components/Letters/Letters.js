import "./Letters.css";
import PropTypes from "prop-types";

const Letters = ({ alphabet, action }) => {
  return (
    <ul className="letters">
      {alphabet.map((letter) => (
        <li key={letter} className="letter" onClick={action}>
          <a href={letter}>{letter.toUpperCase()}</a>
        </li>
      ))}
    </ul>
  );
};

Letters.propTypes = {
  alphabet: PropTypes.arrayOf(PropTypes.string).isRequired,
  action: PropTypes.func.isRequired,
};

export default Letters;
