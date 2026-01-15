import style from "./App.module.css"
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./component/routes/Layout";
import Hero from "./component/Hero/Hero";
import Resume from "./component/Resume/Resume";

export default function App(){
    return(
        <div className={style.App} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>} >
                        <Route index element={<Hero/>}/>
                        <Route path="resume" element={<Resume/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}