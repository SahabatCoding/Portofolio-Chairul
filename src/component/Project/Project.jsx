import { useState } from "react"
import project from "../../data/project.json"
import style from "./Project.module.css"
import { getImageUrl } from "../../utils"

export default function Project() {
    const [page, setPage] = useState(1)
    const totalPage = project.length

    console.log(totalPage)

    return (
        <>
            <main className={style.container} >
                <section className={style.content}>
                    <nav className={style.cardProject}>
                        <ul>
                            {project.map((data) => {
                                if (page === data.id) {
                                    return (
                                        <li key={data.id} >
                                            <div className={style.title}>
                                                <h1>Project : {data.id}</h1>
                                                <h2>{data.name}</h2>
                                                <p>{data.description}</p>
                                                <div className={style.skills}>
                                                    {data.skills.map((skill, index) => (
                                                        <span key={index}>{skill}</span>
                                                    ))}
                                                </div>
                                                <hr className={style.line} />
                                                <div className={style.links}>
                                                    <a href={data.demo} target="_blank" rel="noopener noreferrer">
                                                        <img src={getImageUrl("project/link.png")} alt="" />
                                                    </a>
                                                    <a href={data.github} target="_blank" rel="noopener noreferrer">
                                                        <img src={getImageUrl("project/github.png")} alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={style.imgProject}>
                                                <img src={getImageUrl(data.image)} alt={data.name} />
                                            </div>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </nav>
                    <div className={style.menuBtn}>
                        <button onClick={() => setPage(page - 1)} disabled={page <= 1} >
                            <img src={getImageUrl("project/leftarrow.png")} alt="" />
                        </button>
                        <button onClick={() => setPage(page + 1)} disabled={page >= totalPage} >
                            <img src={getImageUrl("project/rightarrow.png")} alt="" />
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}