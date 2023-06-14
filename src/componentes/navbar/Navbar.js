import CartWidget from "../CartWidget/CartWidget";


function NavBar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h3 className="title is-4">HimaBlue Maker</h3>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <a className="navbar-item">Home</a>
                    <a className="navbar-item">Tienda</a>
                    <a className="navbar-item">Portafolio</a>
                    <a className="navbar-item">Modalidad de trabajo</a>
                    <a className="navbar-item">Cómo medirse</a>
                </div>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;