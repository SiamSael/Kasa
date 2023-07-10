import { Link } from 'react-router-dom';
import Logement from '../../pages/Logement';
import { useState } from 'react';
   
const Card = (logement) => {

    const [datas, setData] = useState('');

    function sendDatas(logement) {
        setData(logement)
    }
    return (
        <Link key={logement.id} className="card" to={`logement/${logement.id}`} onClick={() => sendDatas(logement)}>
            <Logement sendDatas={datas} />
            <img className="card__img" src={logement.cover} alt={logement.title}/>
            <p className="card__text">{logement.title}</p> 
            {}
        </Link>
    )
}

export default Card