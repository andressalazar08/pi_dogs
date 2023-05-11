import style from "./Landing.module.css";
import imagedog from "./doggie.jpg";
import imagereact from "./react.jpg";
import imageredux from "./redux.jpg";
import imagepostgresql from "./postgresql.jpg";
import imagenodejs from "./node.jpg";
import imageexpress from "./express.jpg";
import { Link } from "react-router-dom";
// import imagedog from "../../../public/doggie.jpg";

const Landing = () =>{
    return(
        <div>


            <main className={style.mainContainer}>


                <Link to= '/home' style={{textDecoration: 'none'}}>

                <section className={style.secondContainer}>
                    <h2 className={style.mainContainerTitle}> Dogs Proyecto Individual</h2>

                    <div className={style.contenedorImagen}>
                            <img src={imagedog} className={style.mainImage} alt="imagedog"></img>
                    </div>


                    <div className={style.textoPrincipal}>


                    </div>


                    <div className={style.datosCabezera}>
                    {/* <hr className={style.linea}></hr> */}

                        <h3 className={style.datosCabezeraTitle}>Tech stack:</h3>

                        <div className={style.datosCabezeraimgs}>
                            <img src={imagereact} className={style.techImage1} alt="react"></img>
                            <img src={imageredux} className={style.techImage} alt="redux"></img>
                        </div>


                        <div className={style.datosCabezeraimgs2}>
                            <img src={imagepostgresql} className={style.techImage3} alt="postgres"></img>
                            <img src={imagenodejs} className={style.techImage4} alt="nodejs"></img>
                            <img src={imageexpress} className={style.techImage4}  alt="express"></img>


                        </div>




                    </div>


                </section>

                </Link>



            <div className={style.attribution}>
                <h3>Coded by Felipe Salazar | 2023</h3>
                <h3><a><Link to={{pathname:"https://github.com/andressalazar08"}} target='_blank' style={{textDecoration: 'none'}}>Github</Link></a>   |  <a><Link to={{pathname:"https://linkedin.com/in/felipe-salazar-ramos-7b3923220"}} target='_blank' style={{textDecoration: 'none'}}>Linkedin</Link></a></h3>




            </div>

            </main>



        </div>
    )
}


export default Landing;