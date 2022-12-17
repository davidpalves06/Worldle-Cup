const TipBoard = ({player,numberOfGuesses}) => {
  return (
    <div className='d-flex flex-column align-items-center'>
      <p className='fs-2 fw-bold text-primary '>Tips</p>
      <ul className='list-group list-group-horizontal list-group-flush'>
        {numberOfGuesses > 0 && <li className='list-group-item text-center'>Club: {player.club}</li>}
        {numberOfGuesses > 1 && <li className='list-group-item text-center'>Age: {player.age}</li>}
        {numberOfGuesses > 2 && <li className='list-group-item text-center'>Country: {player.country}</li>}
      </ul>
    </div>
  )
}

export default TipBoard