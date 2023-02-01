import './App.css'
import {Routes, Route} from "react-router-dom"
import fon from "./assets/bg.png"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Pay from "./pages/Pay"
import Vip from "./pages/Vip"
import Add from "./pages/Add"
import VipTasks from "./pages/VipTasks"
import Task from "./pages/Task"
import Stats from "./pages/Stats"
import Admin from "./pages/Admin"
import Addhistory from "./pages/Addhistory"
import Payhistory from "./pages/Payhistory"
import Cart from "./pages/Cart"
import Referal from "./pages/Referal"
import Myteam from "./pages/Myteam"

function App() {

    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/pay" element={<Pay/>} />  
                <Route path="/vip" element={<Vip/>} />
                <Route path="/addbalans" element={<Add/>} />
                <Route path="/viptasks" element={<VipTasks/>} />
                <Route path="/task" element={<Task/>} />
                <Route path="/stats" element={<Stats/>} />
                <Route path="/admin/adminpanel" element={<Admin/>} />
                <Route path="/addhistory" element={<Addhistory/>} />
                <Route path="/payhistory" element={<Payhistory/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/referal" element={<Referal/>} />
                <Route path="/myteam" element={<Myteam/>} />
            </Routes>

        </div>
    )
}

export default App
