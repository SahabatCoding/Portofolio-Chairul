import style from "./App.module.css"
import Hero from "./component/Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./component/Routes/Navbar";
import Home from "./component/Home/Home";
import Resume from "./component/Resume/Resume";

export default function App(){
    return(
        <div className={style.App} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar/>} >
                        <Route index element={<Home/>}/>
                        <Route path="resume" element={<Resume/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}