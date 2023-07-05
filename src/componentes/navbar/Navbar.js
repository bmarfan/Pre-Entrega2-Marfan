import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";


function NavBar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/"><h3 className="title is-4">HimaBlue Maker</h3></Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <NavLink to={`/category/personalizado`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><button>Personalizado</button></NavLink>
                    <NavLink to={`/category/genshin`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><button>Genshin</button></NavLink>
                    <NavLink to={`/category/patrones`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><button>Patrones</button></NavLink>
                </div>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;