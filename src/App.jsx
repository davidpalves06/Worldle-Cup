//CSS
import './App.css'

//Components
import Footer from './components/Footer/Footer';

//Pages
import Game from './pages/Game/Game';
import SetupGame from './pages/SetupGame/SetupGame';
import PostGame from './pages/PostGame/PostGame';

//Hooks
import { useState } from 'react'

function App() {
  const [gameStage, setGameStage] = useState(0)
  const [score,setScore] = useState(0)
  

  const startGame = () => {
    setGameStage(1);
  }

  const endGame = () => {
    setGameStage(2);
  }

  const restartGame = () => {
    setGameStage(1);
    setScore(0)
  }

  const changeScore = (points) => {
    setScore((prev) => prev + points)
  }

  return (
    <div className='App'>
      {gameStage === 0 && (
        <SetupGame startGame={startGame}/>
      )}
      {gameStage === 1 && (
        <Game endGame={endGame} score={score} changeScore={changeScore}/>
      )}
      {gameStage === 2 && (
        <PostGame restartGame={restartGame} score={score}/>
      )}
      <Footer/>
    </div>
  )
}

export default App
