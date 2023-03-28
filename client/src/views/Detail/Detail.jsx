import { useParams } from "react-router-dom";

const Detail = ({name}) =>{
const { id } = useParams()

    return(
        <>
            <h1> Esta es la vista de Detail {name}</h1>


        </>
    )
}


export default Detail;