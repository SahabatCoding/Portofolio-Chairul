import { useState } from "react"
import style from "./Navbar.module.css"
import { getImageUrl } from "../../utils"
import { Link, Outlet, useLocation } from "react-router"

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
                            <Link 
                                className={pathname === "/" ? style.listLink : ""} 
                                to="/" >Home</Link>
                        </li>
                        <li>
                            <Link
                                className={pathname === "/resume" ? style.listLink : ""} 
                                to="/resume">Resume</Link>
                        </li>
                        <li>
                            <Link
                                className={pathname === "/project" ? style.listLink : ""} 
                                to="/project" >Projects</Link>
                        </li>
                        <li>
                            <Link  
                                className={pathname === "/contact" ? style.listLink : ""} 
                                to="/contact" >Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}