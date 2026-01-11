import Navbar from "./component/Navbar/Navbar";
import style from "./App.module.css"
import Hero from "./component/Hero/Hero";

export default function App(){
    return(
        <div className={style.App} >
            <Navbar/>
            <Hero/>
        </div>
    )
}