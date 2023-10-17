import "./Card.css";


function Card({title="Sin titulo", descriptions="Sin descripción"}) {
  return (
    <div className="Card">
        <h2>{title}</h2>
        <p>{descriptions}</p>
    </div>
  )
}

export default Card