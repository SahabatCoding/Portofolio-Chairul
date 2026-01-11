import Navbar from "./component/Navbar/Navbar";
import style from "./App.module.css"

export default function App(){
    return(
        <div className={style.App} >
            <Navbar/>
        </div>
    )
}