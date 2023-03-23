import { useState } from "react";
import axios from "axios";


const Form = () =>{

    //creo y capturo el estado del formulario
    const [form,setForm] = useState({
        name: "",
        temperament: "",
        life_span: ""
    })

    //creamos un estado de errores para hacer validaciones
    const [errors, setErrors] = useState({
            name: "",
            temperament: "",
            life_span: ""
    })

    //esta función se encarga de validar los campos del formulario
    const validate = (form) =>{
        // if(typeof form.name!=="string"){
        //     setErrors({...errors, name:""})
        // }else{
        //     setErrors({...errors, name:"hay un error en el name, debe ser un string"})
        // }

        if(form.name===""){
            setErrors({...errors, name:"nombre vacío"})
        }else{
            setErrors({...errors, name:""})
        }

    }

    // cuando el usuario ingrese algo al input quiero que se ejecute una función que pueda modificar el estado
    const changeHandler = (event) =>{
        //lee lo que está en el input y lo guarda en el estado en la propiedad que corresponda
        //event.target me indica quién dispara el evento
        const property = event.target.name;
        const value = event.target.value;
        //indico que valide el estado form
        validate({...form, [property]:value}) //debido a la demora, antes de modificar el estado se lo doy primero al validate
        //seteo el estado al valor ingresado por el usuario donde corresponda
        setForm({...form, [property]:value}) //la operación de cambiar el estado demora
        // console.log("quiero hacer un cambio")
    }


    const submitHandler=(event)=>{
        event.preventDefault()
        // alert("se apretó el botón submit")
        //con esto reemplazo el post
        axios.post("http://localhost:3001/dogs",form) //se le envía el estado del formulario
        .then(res=>alert(res))
        .catch(err=>alert(err))
    }

    return(
        <div>


            <form onSubmit={submitHandler}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={form.name} onChange={changeHandler} name="name"></input>
                    {errors.name && <span>{errors.name}</span>}
                </div>

                <div>
                    <label>Temperament: </label>
                    <input type="text" value={form.temperament} onChange={changeHandler}  name="temperament" />
                </div>

                <div>
                    <label>Life Span: </label>
                    <input type="text" value={form.life_span} onChange={changeHandler} name="life_span" />
                </div>

                <button type="submit">ENVIAR</button>

            </form>


        </div>
    )
}


export default Form;
/*
"id": "1",
"name": "Affenpinscher",
"min_weight": 3,
"max_weight": 6,
"min_height": 23,
"max_height": 29,
"life_span": "10 - 12 years",
"image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
"temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving"
*/


/* ruta POST
{
    "name":"Dog test3",
    "min_height": 10,
    "min_weight": 10,
    "max_height":20,
    "max_weight":30,
    "temperament":"Agile",
    "life_span":"15 years",
    "image":"https://cdn2.thedogapi.com/images/BJa4kx25X.jpg"
}*/