import { useState } from "react"
import style from "./Navbar.module.css"
import { getImageUrl } from "../../utils"
import { Link, NavLink, Outlet, useLocation } from "react-router"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const {pathname} = useLocation()
    console.log(pathname)
    return (
        <>
            <nav className={style.navbar}>
                <Link className={style.title} >PORTOFOLIO</Link> 
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
                            <NavLink
                                className={({isActive})=> isActive ? style.listLink : ""} 
                                to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive})=> isActive ? style.listLink : ""} 
                                to="/resume">Resume</NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive})=> isActive ? style.listLink : ""} 
                                to="/project">Project</NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive})=> isActive ? style.listLink : ""} 
                                to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}