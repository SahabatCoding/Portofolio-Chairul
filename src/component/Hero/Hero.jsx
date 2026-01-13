import { NavLink } from "react-router"
import { getImageUrl } from "../../utils"
import style from "./Hero.module.css"

export default function Hero() {
    return ( 
        <>
            <section className={style.container} >
                <div className={style.content}>
                    <h1>Hi, I'm Chairul</h1>
                    <p>a Fullstack Developer passionate about building efficient and scalable applications.</p>
                    <div className={style.links}>
                    <a className={style.download} href={getImageUrl("hero/CV.pdf")} download={"CV_Chairul.pdf"}>Download CV</a>
                    <div className={style.socialMedia}>
                        <NavLink to="https://github.com/SahabatCoding" >
                            <img src={getImageUrl("hero/github.png")} alt="github" />
                        </NavLink>
                        <NavLink>
                            <img src={getImageUrl("hero/instagram.png")} alt="instagram" />
                        </NavLink>
                        <NavLink to="https://www.linkedin.com/in/chairulyusuf/" >
                            <img src={getImageUrl("hero/linkedin.png")} alt="linkedin" />
                        </NavLink>
                    </div>
                </div>
                </div>
                <div className={style.imageHero}>
                    <img src={getImageUrl("/hero/profil.png")} alt="profil" className={style.profil} />
                </div>
                
            </section>
        </>
    )
}