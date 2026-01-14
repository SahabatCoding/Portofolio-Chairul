import style from "./App.module.css"
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./component/Home/Home";
import Resume from "./component/Resume/Resume";
import Layout from "./component/routes/Layout";

export default function App(){
    return(
        <div className={style.App} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>} >
                        <Route index element={<Home/>}/>
                        <Route path="resume" element={<Resume/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}