import Card from "../Card"

const Cards = (logements) => {
    return (
    <div className="cards">
        {logements.map(logement =>
            Card(logement)
        )}
    </div>
    )
}

export default Cards