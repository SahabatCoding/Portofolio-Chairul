import style from "./Resume.module.css"
import { useState } from "react";
import Course from "./Course/Course";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import About from "./About/About";

export default function Resume() {
    const [activeTab, setActiveTab] = useState("course")

    return (
        <>
            <main className={style.container}>
                <section className={style.content}>
                    <h1>Why Hire Me?</h1>
                    <p>I am a passionate fullstack developer.</p>
                    <nav>
                        <ul>
                            <li
                                className={activeTab === "course" ? style.listLink :""}
                                onClick={()=> setActiveTab("course")}>Course</li>
                            <li
                                className={activeTab === "education" ? style.listLink :""}
                                onClick={()=> setActiveTab("education")}>Education</li>
                            <li
                                className={activeTab === "skills" ? style.listLink :""}
                                onClick={()=> setActiveTab("skills")}>Skills</li>
                            <li
                                className={activeTab === "about me" ? style.listLink :""}
                                onClick={()=> setActiveTab("about me")}>About Me</li>
                        </ul>
                    </nav>
                </section>
                <article className={style.article} >
                    {activeTab === "course" && <Course/>}
                    {activeTab === "education" && <Education/>}
                    {activeTab === "skills" && <Skills/>}
                    {activeTab === "about me" && <About/>}
                </article>
            </main>

        </>
    )
}