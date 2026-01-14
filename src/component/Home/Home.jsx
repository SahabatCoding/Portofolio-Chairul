import Hero from "../Hero/Hero";
import Resume from "../Resume/Resume";
import style from "./Home.module.css"

export default function Home() {
    return (
        <>
            <div className={style.container}>
                <Hero />
            </div>

        </>
    )
}