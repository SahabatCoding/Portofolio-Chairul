import { useState } from "react"
import style from "./Navbar.module.css"
import { getImageUrl } from "../../utils"
import { NavLink, Outlet } from "react-router"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <nav className={style.navbar}>
                <NavLink className={style.title} >PORTOFOLIO</NavLink> 
                <div className={style.menu} >
                    <img
                        className={style.menuBtn}
                        alt="menu-button"
                        src={menuOpen ? getImageUrl("nav/close.png") : getImageUrl("nav/menu.png")}
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    <ul
                        className={`${style.menuItems} ${menuOpen && style.menuOpen}`}
                        onClick={()=>setMenuOpen(false)}
                    >
                        <li>
                            <NavLink  to="/" >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/resume">Resume</NavLink>
                        </li>
                        <li>
                            <NavLink to="/project" >Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" >Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet/>
        </>
    )
}