import { useState, useEffect } from "react";
import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";
import alphabet from "./data/alphabet";
import words from "./data/words";

function App() {
  const [lettersClicked, setLettersClicked] = useState([]);
  const [randomWord, setRandomWord] = useState("");

  useEffect(() => {
    const randomWord = getRandomWord();
    setRandomWord(randomWord);
  }, []);

  const handleClick = (clickOnLetter) => {
    clickOnLetter.preventDefault();
    const clicked = clickOnLetter.target.textContent;

    const letterWasClicked = lettersClicked.findIndex(
      (letter) => letter === clicked
    );
    if (letterWasClicked === -1) {
      setLettersClicked([...lettersClicked, clicked]);
    }
  };
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * (words.length - 1));
    return words[randomIndex];
  };

  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters lettersUsed={lettersClicked} />
          <Hangman />
        </div>
        <GuessLetters word={randomWord} chossenLetters={lettersClicked} />
        <Result text="You are dead" />
        <Letters alphabet={alphabet} action={handleClick} />
      </div>
    </>
  );
}

export default App;
