//CSS
import { useEffect } from "react";
import { useState } from "react";
import "./PostGame.css"

const PostGame = ({restartGame,score}) => {

  const [bestScore,setBestScore] = useState(localStorage.getItem("BestScore"))

  useEffect(() => {
    if (bestScore < score) {
      localStorage.setItem("BestScore",score);
    }
  },[bestScore,score])

  return (
    <div className='postGameContainer d-flex flex-column align-items-center justify-content-evenly w-100'>
      <h2 className="text-primary fw-bold fs-1">Game finished!</h2>
      <h4> You can try again!</h4>
      <p className="text-dark fs-4 ">You got {score} points.</p>
      {(bestScore === null || score > bestScore) && <p className="text-dark fs-3 text-center">Congratulations! You got a now best score of {score} points.</p>}
      {bestScore >= score && <p className="text-dark fs-3 text-center">Your best score yet was {bestScore} points.</p>}
      <button onClick={restartGame} className="btn btn-primary btn-lg">Click to start another game!</button>
    </div>
  )
}

export default PostGame