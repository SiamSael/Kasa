import {useParams} from 'react-router-dom'; 
import Collapsible from '../../components/Collapse';
import Slideshow from '../../components/Slideshow';


const Logement = () => {
    const logement = {
		"id": "b9123946",
		"title": "Magnifique appartement proche Canal Saint Martin",
		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
		"pictures": [
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg"
		],
		"description": "Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture.",
		"host": {
			"name": "Della Case",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg"
		},
		"rating": "4",
		"location": "Ile de France - Paris 10e",
		"equipments": [
			"Parking",
			"Sèche Cheveux",
			"Machine à laver",
			"Wi-fi",
			"Cuisine équipée",
			"Télévision"
		],
		"tags": [
			"Canal Saint Martin",
			"République",
			"Appartement"
		]
	}

    
    const {logementId} = useParams();

    const description = {
        name: 'description',
        description : logement.description,
    };

    const equipments = {
        name: 'équipement',
        description : (logement.equipments).map(equipment => <p key={equipment.toString()}>{equipment}</p>),
    };

    return(
        <main key={logementId} className='logement'>

            {Slideshow(logement.pictures[0])}
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