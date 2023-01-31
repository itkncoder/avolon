import { useState } from 'react'
import './App.css'
import fon from "./assets/bg.png"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Pay from "./pages/Pay"
import Vip from "./pages/Vip"
import Add from "./pages/Add"
import VipTasks from "./pages/VipTasks"
import Task from "./pages/Task"
import Stats from "./pages/Stats"

function App() {

    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/pay" element={<Pay/>} />
                <Route path="/vip" element={<Vip/>} />
                <Route path="/addbalans" element={<Add/>} />
                <Route path="/viptasks" element={<VipTasks/>} />
                <Route path="/task" element={<Task/>} />
                <Route path="/stats" element={<Stats/>} />
            </Routes>

        </div>
    )
}

export default App
