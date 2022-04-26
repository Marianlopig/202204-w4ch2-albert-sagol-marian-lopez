import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";
import alphabet from "./data/alphabet";

function App() {
  const handleClick = (clickOnLetter) => {
    clickOnLetter.preventDefault();
    return clickOnLetter.target.textContent;
  };
  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters lettersUsed={["a", "b", "c"]} />
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
