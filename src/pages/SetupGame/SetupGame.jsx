//CSS
import "./SetupGame.css"


const SetupGame = ({startGame}) => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-evenly setupContainer'>
      <div className="d-flex flex-column align-items-center justify-content-center w-100">
        <h1 className="text-uppercase fst-italic text-primary fw-bolder worldleTitle fs-1">WorldleCup</h1>
        <p className="font-monospace text-center fs-6 w-75 text-muted">Tenta adivinhar o nome dos jogadores que participaram no campeonato do mundo!</p>
      </div>
      <img src="fifa-world-cup-2022-seeklogo.com.svg" alt="fifa world cup 2022" className="h-50" />
      <button className="btn btn-primary btn-lg" onClick={startGame}>Começar o jogo!</button>
    </div>
  )
}

export default SetupGame