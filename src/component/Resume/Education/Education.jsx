import style from "./Education.module.css"
import education from "../../../data/education.json"
export default function Education() {
    return (
        <>
            <h1>My Education</h1>
            <p>Here is my latest educational qualification.</p>
            <nav className={style.card} >
                <ul>
                    {education.map((education, index) => {
                        return (
                            <li key={index} >
                                <h3>{education.startDate} - {education.endDate}</h3>
                                <h2>{education.degree}</h2>
                                <h4>{education.university}</h4>
                                <p>{education.gpa}</p>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}