 const Card = (prop) => {
/*
    function handleClick() {
        
    }
*/    
    return (
        <div key={prop.id} className="card">
            <img className="card__img" src={prop.cover} alt={prop.title}/>
            <p className="card__text">{prop.title}</p>
        </div>
    )
 
}

export default Card