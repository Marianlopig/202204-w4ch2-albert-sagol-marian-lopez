import "./GuessLetters.css";

const GuessLetters = ({ word, chossenLetters }) => {
  return (
    <ul className="guess-letters">
      {word.split("").map((letter) => {
        if (chossenLetters.includes(letter.toUpperCase())) {
          return <li className="guess-letter">{letter.toUpperCase()}</li>;
        }
        return <li className="guess-letter empty">*</li>;
      })}
    </ul>
  );
};

export default GuessLetters;
