import { Link } from 'react-router-dom';
   
const Card = (logement) => {
    
   return (
        <Link key={logement.id} className="card" to={`logement/${logement.id}`}>
            <img className="card__img" src={logement.cover} alt={logement.title}/>
            <p className="card__text">{logement.title}</p> 
        </Link>
    )

}

export default Card