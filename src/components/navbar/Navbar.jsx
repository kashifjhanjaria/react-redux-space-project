
import { NavLink } from "react-router-dom";
import "./navbar.css"
const Navbar = ()=>{
    return(
        <div className="navbar">
           <div className="navbar-wrapper">
           <div className="logo">
           <img src="logo.svg" alt="" />
           </div>
           <div className="nav-line"></div>
           <div className="navbar-container">
           <nav className="navbar-nav">
            <ul className="nav-items">
                <li className="nav-item">
                   <span>00</span> <NavLink  className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <span>01</span> <NavLink className="nav-link" to="/destination">Destination</NavLink>
                </li>
                <li className="nav-item">
                <span>02</span> <NavLink className="nav-link" to="/crew">Crew</NavLink>
                </li>
                
            </ul>
           </nav>
           </div>
           </div>
        </div>
    )
}
export default Navbar;