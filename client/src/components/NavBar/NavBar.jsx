//Barra de navegación de la aplicación
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";


const linkStyle = {
    color:'hsl(215, 51%, 70%)',
    textDecoration:"none",
    fontSize:"1.5rem",
}


const NavBarapp = ()=>{
    return(
        <div className={style.mainContainer}>
                <Link to="/home" style={linkStyle}>Home</Link>
                <Link to="/create" style={linkStyle}>Create</Link>

        </div>

    )

}


export default NavBarapp;



