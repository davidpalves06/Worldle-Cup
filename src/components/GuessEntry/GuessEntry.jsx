const GuessEntry = ({submitResponse,setGuess,guessName,inputGuessRef}) => {
  return (
    <form onSubmit={submitResponse} className="w-100 d-flex flex-column align-items-center justify-content-between gap-3 ">
        <input type="text" id="guess" value={guessName} 
        onChange={(e) => setGuess(e.target.value)} placeholder="Try to guess the player name!"
        className='form-control input-lg p-2 w-75' required ref={inputGuessRef}/>
        <input type={"submit"} value="Guess" className='btn btn-primary align-self-center btn-lg'/>
    </form>
  )
}

export default GuessEntry