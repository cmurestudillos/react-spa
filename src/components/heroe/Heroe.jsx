import {useState, useEffect, Fragment} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
// Datos a cargar
import superheroes from '../../data/heroes.json';
// Imagenes
import imgDc from '../../assets/img/dc.svg';
import imgMarvel from '../../assets/img/marvel.svg';

const Heroes = () => {

    // State del componente
    const [heroe, getHeroeData] = useState();
    const { nombre } = useParams();

    useEffect(() => {
        const getHeroe = () => {
            var heroeNombre = nombre;
            for (let index = 0; index < superheroes.length; index++) {
                if (heroeNombre === superheroes[index].nombre){
                    getHeroeData(superheroes[index]);
                }
            }
        }
        getHeroe();
        // eslint-disable-next-line
    },[]);

    return ( 
        <>
            {heroe &&
                <div className="bg-white p-3 rounded">
                    <h1 className="animated fadeIn slow text-dark">{heroe.nombre} <small>( {heroe.aparicion} )</small></h1>
                    <hr className="bg-dark"></hr>  
                    <div className="row animated fadeIn slow">
                        <div className="col-md-4">
                            {heroe.nombre === 'Aquaman' &&
                                    <img src={`../../assets/img/aquaman.svg`}  alt={heroe.nombre} title={heroe.nombre} className="img-fluid shadow"></img>
                            }
                            {heroe.nombre === 'Batman' &&
                                    <img src={`../../assets/img/batman.svg`}  alt={heroe.nombre} title={heroe.nombre} className="img-fluid shadow"></img>
                            }
                            {heroe.nombre === 'Hulk' &&
                                    <img src={`../../assets/img/hulk.svg`}  alt={heroe.nombre} title={heroe.nombre} className="img-fluid shadow"></img>
                            }    
                            {heroe.nombre === 'Daredevil' &&
                                    <img src={`../../assets/img/daredevil.svg`}  alt={heroe.nombre} title={heroe.nombre} className="img-fluid shadow"></img>
                            }     
                            {heroe.nombre === 'Linterna Verde' &&
                                    <img src={`../../assets/img/linterna-verde.svg`}  alt={heroe.nombre} title={heroe.nombre} className="img-fluid shadow"></img>
                            } 
                            {heroe.nombre === 'Spider-Man' &&
                                    <img src={`../../assets/img/spiderman.svg`}  alt={heroe.nombre} title={heroe.nombre} className="img-fluid shadow"></img>
                            }    
                            {heroe.nombre === 'Wolverine' &&
                                    <img src={`../../assets/img/wolverine.svg`}  alt={heroe.nombre} title={heroe.nombre} className="img-fluid shadow"></img>
                            }                                                                                                                                            
                            <br/><br/>
                            <Link to={`/heroes`} type="button" className="btn btn-4 btn-block" ><i>Volver</i></Link>
                        </div>
                        <div className="col-md-8">
                            <h3>{heroe.nombre}</h3>
                            <hr/>
                            <p>{heroe.bio}</p>
                            <div>
                                {heroe.casa === 'DC' &&
                                    <img src={imgDc} title={heroe.casa} alt={heroe.casa} className="img-fluid" width="150" height="150"></img>
                                }
                                {heroe.casa === 'Marvel' &&
                                    <img src={imgMarvel} title={heroe.casa} alt={heroe.casa} className="img-fluid" width="150" height="150"></img>
                                }
                            </div>
                        </div>
                    </div>
                </div>            
            }

        </>
    );
}
 
export default Heroes;