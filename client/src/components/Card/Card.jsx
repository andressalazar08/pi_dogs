//Este componente debe mostrar la info de cada usuario mapeado
//y además darnos un link para ir al detalle de cada usuario en cuestión

const Card = (props)=>{

    return(
        <div>
            <p>Id: {props.id}</p>
            <p>Name: {props.name}</p>
            <p>Life Span: {props.life_span}</p>

        </div>
    )
}


export default Card;