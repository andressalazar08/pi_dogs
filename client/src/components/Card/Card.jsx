//Este componente debe mostrar la info de cada usuario mapeado
//y además darnos un link para ir al detalle de cada usuario en cuestión
//card es un componente dumb, es solo presentacional
import style from "./Card.module.css"
import { Link } from "react-router-dom";


const Card = (props)=>{

    return(
        <div className={style.doggieCard}>
            <p>Id: {props.id}</p>
            <Link to={'/dogs/'+props.id}>
            <p>Name: {props.name}</p>
            </Link>
            <p>Life Span: {props.life_span}</p>
            <p>Min Weight: {props.min_weight}</p>
            <p>Max Weight: {props.max_weight}</p>
            <p>Temperament: {props.temperament}</p>
            <img src={props.image} alt={props.id} className={style.dogImage}/>

        </div>
    )
}


export default Card;