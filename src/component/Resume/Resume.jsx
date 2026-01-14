import { NavLink, Outlet, useLocation } from "react-router";
import style from "./Resume.module.css"

export default function Resume() {
    const { pathname } = useLocation()

    return (
        <>
            <main className={style.container}>
                <section className={style.content}>
                    <h1>Why Hire Me?</h1>
                    <p>I am a passionate fullstack developer.</p>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/resume/course"
                                    className={({isActive})=> isActive ? style.listLink : "" }>Course</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to=""
                                    className={pathname === "/resume/experience" ? style.listLink : ""} >Education</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to=""
                                    className={pathname === "/resume/experience" ? style.listLink : ""} >Skills</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to=""
                                    className={pathname === "/resume/experience" ? style.listLink : ""} >About Me</NavLink>
                            </li>
                        </ul>
                    </nav>
                </section>
                <article className={style.article} >
                    <Outlet/>
                </article>
            </main>

        </>
    )
}