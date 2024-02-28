import { Link } from 'react-router-dom';
import heroes from '../../../data/heroes.json';

const Tarjeta = () => {
    return ( 
        <>
            {heroes.length >= 1 &&
                heroes.map( (heroe) => {
                    return(
                        <div className="card" key={heroe.nombre}>
                            <img className="card-img-top border-0" src={heroe.img} alt={heroe.nombre} />
                            <div className="card-body">
                                <h5 className="card-title">{heroe.nombre}</h5>
                                <p className="card-text">{heroe.bio}</p>
                                <p className="card-text"><small className="text-muted"><strong>Año:</strong> {heroe.aparicion}</small></p>
                                <Link to={`/heroe/${heroe.nombre}`} className="btn btn-4 btn-block" >Ver mas...</Link>
                            </div>                                
                        </div>
                    );
                })
            }
        </>
    );
}
    
export default Tarjeta;