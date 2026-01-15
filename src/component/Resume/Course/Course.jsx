import style from "./Course.module.css"
import course from "../../../data/course.json"
export default function Course(){
    return(
        <>
          <div className={style.content}>
                <h1>My Course</h1>
                <p>Here is a list of courses I have completed to enhance my knowledge. Please select one to view the certificate</p>
                <nav>
                    <ul>
                        {course.map((course, index)=>{
                            return(
                                <li key={index} >
                                    <a href={course.link} target="_blank" >
                                        <h3>{course.start} - {course.end}</h3>
                                        <h2>{course.role}</h2>
                                        <h4>{course.organization}</h4>
                                        <p>{course.type}</p>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>  
        </>
    )
}