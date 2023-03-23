import { useState } from "react";

const Form = () =>{

        //capturo el estado del formulario

        const form = useState({
            name: "",
            temperament: "",
            life_span: ""
        })



    return(
        <div>
            <h1> Esta es la vista de Formulario</h1>

            <form>
                <div>
                    <label>Name</label>
                    <input type="text" value={form.name}/>
                </div>

                <div>
                    <label>Temperament</label>
                    <input type="text" value={form.temperament}/>
                </div>

                <div>
                    <label>Life Span</label>
                    <input type="text" value={form.life_span} />
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