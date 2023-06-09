//Este componente debe mostrar la info de cada usuario mapeado
//y además darnos un link para ir al detalle de cada usuario en cuestión
//card es un componente dumb, es solo presentacional
import style from "./Card.module.css"
import { Link } from "react-router-dom";


const Card = (props)=>{

    return(
        <div className={style.doggieCard}>
            <p className={style.headInfo}>Id: {props.id}</p>
            <Link to={'/dogs/'+props.id} className={style.cardLink}>
            <p className={style.headInfo}>Name: {props.name}</p>
            </Link>

            <p className={style.headInfo}>Min Weight: {props.min_weight}</p>
            <p className={style.headInfo}>Max Weight: {props.max_weight}</p>

            <div className={style.subsection}>
                <img src={props.image} alt={props.id} className={style.dogImage}/>

                <div className={style.temperamentInfo}>
                    <h4>Temperaments: </h4>

                    <div className={style.gridtemps}>{props.temperament.split(",").map((doggie,index)=>{
                        return <p>{doggie} </p>
                    })}</div>




                </div>

            </div>


        </div>
    )
}


export default Card;