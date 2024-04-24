const CountriesList = ({country, onClickVisit}) => {
  const {id, name, isVisited} = country
  const onCLickTriggered = () => {
    onClickVisit(id)
  }

  return (
    <li>
      <p>{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button onClick={onCLickTriggered}>Visit</button>
      )}
    </li>
  )
}
export default CountriesList
