const VisitedItem = ({country, onClickRemove}) => {
  const {id, imageUrl, name} = country
  const removeClicked = () => {
    onClickRemove(id)
  }

  return (
    <li>
      <img src={imageUrl} alt="thumbnail" />
      <div>
        <p>{name}</p>
        <button onClick={removeClicked}>Remove</button>
      </div>
    </li>
  )
}
export default VisitedItem
