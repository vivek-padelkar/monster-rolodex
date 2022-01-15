import './card.css'

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}
        alt={`picture of ${props.monster.name} `}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  )
}

export default Card
