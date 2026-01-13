import { NavLink } from "react-router";
import style from "./Resume.module.css"

export default function Resume() {
    return (
        <>
            <main className={style.container}>
                <section className={style.content}>
                    <h1>Why Hire Me</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam laborum officia et hic totam vitae exercitationem magni. Eum dolore doloribus alias, tempore blanditiis, minus fugit harum nihil voluptate labore perspiciatis.</p>
                    <nav>
                        <ul>
                            <li>
                                <NavLink>Experience</NavLink>
                            </li>
                            <li>
                                <NavLink>Education</NavLink>
                            </li>
                            <li>
                                <NavLink>Skills</NavLink>
                            </li>
                            <li>
                                <NavLink>About Me</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <article>
                        <h1>List</h1>
                    </article>
                </section>
            </main>

        </>
    )
}