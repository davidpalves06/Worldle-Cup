//CSS
import "./Game.css"

//Components
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import TipBoard from '../../components/TipBoard/TipBoard';
import NameBoard from '../../components/NameBoard/NameBoard';
import GuessEntry from '../../components/GuessEntry/GuessEntry';

//Hooks
import { usePlayer } from '../../hooks/usePlayer';
import { useRef, useEffect, useState } from 'react';


const Game = ({endGame,score,changeScore}) => {
    const maxAttempts = 5;
    const {selectedPlayer,playerNames,success,checkGuess,setGuessed} = usePlayer();
    const [guesses,setGuesses] = useState(0)
    const [guessedPlayers,setGuessedPlayers] = useState([])
    const [guessName,setGuessName] = useState("")
    const inputGuessRef = useRef()
    const remainingAttempts = maxAttempts - guesses;

    useEffect(() => {
      if (remainingAttempts === 0) {
        endGame();
      }
    }, [remainingAttempts])
    

    const submitResponse = (e) => {
      e.preventDefault()
      const guessNames = guessName.normalize("NFD").replace(/\p{Diacritic}/gu, "").split(" ");
      const found = checkGuess(guessNames);

      if (found === true) {
        changeScore(100);
        setGuesses(0);
      } else {
        setGuesses((prev) => prev + 1);
        setGuessedPlayers((prev) => [guessName,...prev]);
        inputGuessRef.current.focus();
      }
      setGuessName("");
    }

    const nextPlayer = () => {
      setGuessed()
      setGuessedPlayers([])
    }

  return (
    <div className='gameContainer d-flex flex-column align-items-center justify-content-around w-100'>
        <ScoreBoard score={score} guesses={guesses}/>

        {!success && guesses !== 0 && <TipBoard player={selectedPlayer} numberOfGuesses={guesses}/>}
        {!success && <p className='fs-6 text-dark'>Remaining guesses: {remainingAttempts}</p>}

        <NameBoard playerNames={playerNames} guessed={success}/>

        {!success && (
          <>
            <GuessEntry submitResponse={submitResponse} guessName={guessName} setGuess={setGuessName} inputGuessRef={inputGuessRef}/>
            <div className='w-100 d-flex align-items-center gap-1 flex-wrap'>
              {guessedPlayers.map((player,i) => {
                return <p key={i} className="fs-6 fw-bold">| {player}</p>
              })}
            </div>
          </>)}

        {success && (
          <div className="d-flex justify-content-between w-75 align-items-center">
            <button className='btn btn-primary btn-lg' onClick={endGame}>Stop!</button>
            <button className='btn btn-primary btn-lg' onClick={nextPlayer}>Next!</button>
          </div>
        )}
    </div>
  )
}

export default Game