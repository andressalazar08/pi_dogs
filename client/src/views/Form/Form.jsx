import { useState } from "react";

const Form = () =>{

        //capturo el estado del formulario

        const [form,setForm] = useState({
            name: "",
            temperament: "",
            life_span: ""
        })


    // cuando el usuario ingrese algo al input quiero que se ejecute una función que pueda modificar el estado
    const changeHandler = (event) =>{
        //lee lo que está en el input y lo guarda en el estado en la propiedad que corresponda
        //event.target me indica quién dispara el
        const property = event.target.name;
        const value = event.target.value;
        //seteo el estado al valor ingresado por el usuario donde corresponda
        setForm({...form, [property]:value})
    }

    return(
        <div>
            <h1> Esta es la vista de Formulario</h1>

            <form>
                <div>
                    <label>Name: </label>
                    <input name="nombre" type="text" value={form.name} onChange={changeHandler} />
                </div>

                <div>
                    <label>Temperament: </label>
                    <input name="temperamento" type="text" value={form.temperament} onChange={changeHandler}/>
                </div>

                <div>
                    <label>Life Span: </label>
                    <input name="expectativa" type="text" value={form.life_span} onChange={changeHandler}/>
                </div>

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