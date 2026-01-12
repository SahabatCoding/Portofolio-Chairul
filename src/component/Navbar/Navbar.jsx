import { useState } from "react"
import style from "./Navbar.module.css"
import { getImageUrl } from "../../utils"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <nav className={style.navbar}>
                <a className={style.title} href=""> PORTOFOLIO</a>
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
                            <a href="#about">Home</a>
                        </li>
                        <li>
                            <a href="#experience">Resume</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}