import {useParams} from 'react-router-dom'; 
import Collapsible from '../../components/Collapse';
import Slideshow from '../../components/Slideshow';
import logements from "../../datas/logements"


const Logement = () => {

    const {logementId} = useParams();

    const logement = logements.find(el => el.id === logementId)

    const description = {
        name: 'description',
        description : logement.description,
    };

    const equipments = {
        name: 'équipement',
        description : (logement.equipments).map(equipment => <p key={equipment.toString()}>{equipment}</p>),
    };
    
    return(
        <main className='logement'>
            {Slideshow(logement.pictures)}
                <div className='lodgement'>
                    <div className='lodgement__title'>{logement.title}</div>
                    <div className='lodgement__location'>{logement.location}</div>
                    <div className='tags'>
                        {(logement.tags).map(tag => {
                            return (
                                <span className='tags__tag' key={tag.toString()}>
                                    {tag}
                                </span>
                            )
                        })}
                    </div>
                    <div className='host-and-ratings'>
                        <div className='host-and-ratings__host'>
                            <span className='host-and-ratings__host--name'>{logement.host.name}</span>
                            <img className='host-and-ratings__host--img' src= {logement.host.picture} alt= {logement.host.name} />
                        </div>
                        <div className='host-and-ratings__ratings'>
                            {function() {
                                let ratings = []
                                for (let i = 0; i < logement.rating; i++){
                                    ratings.push(<i key={ratings.toString()} className="fa-solid fa-star" aria-hidden="true"></i>)
                                }
                            return ratings
                                }()
                            }
                            {function() {
                                let noRatings = []
                                for (let i = logement.rating; i < 5; i++){
                                    noRatings.push(<i key={noRatings.toString()} className="fa-solid fa-star neutralStar" aria-hidden="true"></i>)
                                }
                                return noRatings
                                }()
                            }
                        </div>
                    </div>
                </div>
                <div className='furtherInfos'>
                    <div className=''>{Collapsible(description)}</div>
                    <div className=''>{Collapsible(equipments)}</div>
                </div>
        </main>
    )
}

export default Logement