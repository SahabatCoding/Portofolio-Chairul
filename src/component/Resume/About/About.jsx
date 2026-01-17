import style from "./About.module.css"
import about from "../../../data/about.json"
export default function About(){
    return(
        <>
            <h1>About Me</h1>
            <p>Aspiring Fullstack Developer with hands-on experience in building RESTful APIs, managing databases, and developing responsive web interfaces.</p>
            <nav className={style.card} >
                <ul>
                    {about.map((data, index)=>(
                        <li key={index} >
                            <h4> {data.name} :</h4>
                            <p> {data.description} </p>
                        </li>
                    ))}
                </ul>                    
            </nav>                
        </>
    )
}