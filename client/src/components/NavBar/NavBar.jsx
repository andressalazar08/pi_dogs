//Barra de navegación de la aplicación
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";




const NavBarapp = ()=>{
    return(
        <div className={style.mainContainer}>
                <Link to="/home" className={style.linkStyle}>Home</Link>
                <Link to="/create" className={style.linkStyle}>Create</Link>

        </div>

    )

}


export default NavBarapp;



