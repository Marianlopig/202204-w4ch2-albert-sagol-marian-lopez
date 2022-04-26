import "./GuessLetters.css";

const GuessLetters = ({ word, chossenLetters }) => {
  return (
    <ul className="guess-letters">
      {word.split("").map((letter) => (
        <li className="guess-letter empty">-</li>
      ))}

      {/* <li className="guess-letter empty"></li>
      <li className="guess-letter">A</li> */}
    </ul>
  );
};

export default GuessLetters;
