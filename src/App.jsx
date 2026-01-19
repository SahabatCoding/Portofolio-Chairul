import style from "./App.module.css"
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./component/Routes/Layout";
import Hero from "./component/Hero/Hero";
import Resume from "./component/Resume/Resume";
import Project from "./component/Project/Project";
import Contact from "./component/Contact/Contact";

export default function App(){
    return(
        <div className={style.App} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>} >
                        <Route index element={<Hero/>}/>
                        <Route path="resume" element={<Resume/>}/>
                        <Route path="project" element={<Project/>}/>
                        <Route path="contact" element={<Contact/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}