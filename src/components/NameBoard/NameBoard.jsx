const NameBoard = ({playerNames,guessed}) => {

  return (
    <div className='d-flex flex-column align-items-center w-100 gap-3'>
          {!guessed && playerNames && playerNames.map((playerName) => (
            <div className='d-flex align-items-center gap-0' key={playerName.name}>
                {playerName.name.split("").map((letra,i) => (
                  playerName.guesses.includes(i) ? (
                    <span key={i} className="rightLetter fs-2 fw-bold text-primary text-center">{letra}</span>
                  ) : (
                    <span key={i} className="blankLetter fs-2 fw-bold text-primary text-center">{letra}</span>
                  )
                ))}  
              </div>
          ))}
          {guessed && playerNames.map((playerName) => (
            <div className='w-100 text-center text-capitalize' key={playerName.name}>
              <span className="fw-bold text-primary text-center bg-transparent border-0 playerName h1">{playerName.name}</span>
            </div>
          ))}
        </div>
  )
}

export default NameBoard