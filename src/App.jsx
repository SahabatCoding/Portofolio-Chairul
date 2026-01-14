import style from "./App.module.css"
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./component/routes/Layout";
import Hero from "./component/Hero/Hero";
import Resume from "./component/Resume/Resume";
import Course from "./component/Resume/Course/Course";

export default function App(){
    return(
        <div className={style.App} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>} >
                        <Route index element={<Hero/>}/>
                        <Route path="resume" element={<Resume/>} >
                            <Route path="course" element={<Course/>} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}