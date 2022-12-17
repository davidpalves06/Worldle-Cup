const ScoreBoard = ({score}) => {
  return (
    <div className='d-flex flex-column align-items-center w-100'>
      <p className='text-primary fw-bold fs-2'>Score: {score}</p>
    </div>
  )
}

export default ScoreBoard