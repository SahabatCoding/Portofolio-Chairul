import skills from "../../../data/skills.json"
import { getImageUrl } from "../../../utils"
import style from "./Skills.module.css"
export default function Skills() {
    return (
        <>
            <h1>My Skills</h1>
            <p>A collection of technologies and tools I use to create modern and scalable web applications.</p>
            <nav className={style.card} >
                <ul>
                    {skills.map((data, index) => (
                        <li key={index} >
                            <img src={getImageUrl(data.img)} alt={data.name} />
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}