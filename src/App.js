import { useState } from "react";
import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";
import alphabet from "./data/alphabet";

function App() {
  const [lettersClicked, setLettersClicked] = useState([]);

  const handleClick = (clickOnLetter) => {
    clickOnLetter.preventDefault();
    const clicked = clickOnLetter.target.textContent;
    if (lettersClicked.filter((letter) => letter === clicked).length < 1) {
      setLettersClicked(lettersClicked.push(clicked));
    }
  };
  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters />
          <Hangman />
        </div>
        <GuessLetters />
        <Result text="You are dead" />
        <Letters alphabet={alphabet} action={handleClick} />
      </div>
    </>
  );
}

export default App;
