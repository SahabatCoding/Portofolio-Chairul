import { getImageUrl } from "../../utils"
import style from "./Hero.module.css"

export default function Hero() {
    const downloadFile = () => {
        const link = document.createElement("a")
        link.href = getImageUrl("hero/CV.pdf")
        link.download = "hero/CV.pdf"
        link.click()
    };
    return (
        <>
            <section className={style.section} >
                <div className={style.content}>
                    <h1>My Name Chairul</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae non provident error ad eum, quam earum harum officia quisquam assumenda perspiciatis incidunt quia alias aliquid sint. Minima, et cum?</p>
                </div>
                <div className={style.imageHero}>
                    <img src={getImageUrl("/hero/profil.png")} alt="profil" className={style.profil} />
                </div>
                <div className={style.links}>
                    <a className={style.download} href={getImageUrl("hero/CV.pdf")} download={"CV_Chairul.pdf"}>Download CV</a>
                    <div className={style.socialMedia}>
                        <a href="">
                            <img src={getImageUrl("hero/github.png")} alt="github" />
                        </a>
                        <a href="">
                            <img src={getImageUrl("hero/instagram.png")} alt="instagram" />
                        </a>
                        <a href="">
                            <img src={getImageUrl("hero/linkedin.png")} alt="linkedin" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}