import style from "./Hero.module.css"

export default function Hero(){
    return (
        <>
            <div className={style.container} >
                <div className={style.content}>
                    <h1>My Name Chairul</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae non provident error ad eum, quam earum harum officia quisquam assumenda perspiciatis incidunt quia alias aliquid sint. Minima, et cum?</p>
                </div>
                <div className={style.footer} >
                    instagram facebook twiter
                </div>
            </div>
        </>
    )
}