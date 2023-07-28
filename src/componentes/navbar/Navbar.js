import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMoon } from "@fortawesome/free-solid-svg-icons";




function NavBar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand">
           
                <Link to="/">
                    <img src="https://images2.imgbox.com/57/cd/jQwejeFL_o.png" className="logo"/>
                </Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <NavLink to={`/category/varios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><button>Varios</button></NavLink>
                    <NavLink to={`/category/genshin`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><button>Genshin</button></NavLink>
                    <NavLink to={`/category/patrones`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><button>Patrones</button></NavLink>
                </div>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;