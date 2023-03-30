import style from "./Landing.module.css";
import imagedog from "./doggie.jpg";
import imagereact from "./react.jpg";
import imageredux from "./redux.jpg";
import imagepostgresql from "./postgresql.jpg";
import imagenodejs from "./node.jpg";
import imageexpress from "./express.jpg";
// import imagedog from "../../../public/doggie.jpg";

const Landing = () =>{
    return(
        <div>


            <main className={style.mainContainer}>




                <section className={style.secondContainer}>
                    <h2 className={style.mainContainerTitle}> Dogs Proyecto Individual</h2>

                    <div className={style.contenedorImagen}>
                            <img src={imagedog} className={style.mainImage}></img>
                    </div>


                    <div className={style.textoPrincipal}>


                    </div>


                    <div className={style.datosCabezera}>
                    {/* <hr className={style.linea}></hr> */}

                        <h3 className={style.datosCabezeraTitle}>Tech stack:</h3>

                        <div className={style.datosCabezeraimgs}>
                            <img src={imagereact} className={style.techImage1}></img>
                            <img src={imageredux} className={style.techImage}></img>
                        </div>


                        <div className={style.datosCabezeraimgs2}>
                            <img src={imagepostgresql} className={style.techImage3}></img>
                            <img src={imagenodejs} className={style.techImage4}></img>
                            <img src={imageexpress} className={style.techImage4}></img>


                        </div>




                    </div>


                </section>





            <div className={style.attribution}>
                <h3>Coded by Felipe Salazar | 2023</h3>
                <h3><a>Linkedin</a>   |  <a>Github</a></h3>




            </div>

            </main>



        </div>
    )
}


export default Landing;