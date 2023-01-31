import {useState} from "react"
import logo from "../assets/logo.jpg"

const Login = () => {

    const [inOrOut, setInOrOut] = useState(true)

    return (  
        <div>
            {inOrOut ? <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col justify-center relative items-center fon pt-14 pb-6 px-4 rounded-xl">
                    <img className="w-20 rounded-full -top-10 absolute" src={logo} alt="" />
                    <form className="flex flex-col gap-2">
                        <input className="py-2 px-5 w-60 sm:w-72 rounded-xl outline-0 focus:ring ring-gray-300" type="number" placeholder="Iltimos mobil raqam kiriting" />
                        <input className="py-2 px-5 w-60 sm:w-72 rounded-xl outline-0 focus:ring ring-gray-300" type="number" placeholder="Iltimos taklif kodini kiriting" />
                        <input className="py-2 px-5 w-60 sm:w-72 rounded-xl outline-0 focus:ring ring-gray-300" type="password" placeholder="Parolni kiriting" />
                        <input className="py-2 px-5 w-60 sm:w-72 rounded-xl outline-0 focus:ring ring-gray-300" type="password" placeholder="Parolni takrorlang" />

                        <input className="hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 py-2 px-5 rounded-3xl text-yellow-400 font-semibold" type="submit" value="Ro'yhatga olmoq" />

                        <div onClick={() => setInOrOut(prev => !prev)} className="flex items-center justify-end gap-1 cursor-pointer">
                            <p className="text-white font-semibold">Kirish</p>
                            <i className="text-white font-semibold fa-solid fa-angle-right"></i>
                        </div>
                    </form>
                </div>
            </div>
            :
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col justify-center relative items-center fon pt-14 pb-6 px-4 rounded-xl">
                    <img className="w-20 rounded-full -top-10 absolute" src={logo} alt="" />
                    <form className="flex flex-col gap-2">
                        <input className="py-2 px-5 w-60 sm:w-72 rounded-xl outline-0 focus:ring ring-gray-300" type="number" placeholder="Iltimos mobil raqam kiriting" />
                        <input className="py-2 px-5 w-60 sm:w-72 rounded-xl outline-0 focus:ring ring-gray-300" type="password" placeholder="Parolni kiriting" />

                        <input className="hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 py-2 px-5 rounded-3xl text-yellow-400 font-semibold" type="submit" value="Kirish" />

                        <div onClick={() => setInOrOut(prev => !prev)} className="flex items-center justify-end gap-1 cursor-pointer">
                            <p className="text-white font-semibold">Ro'yhatga olmoq</p>
                            <i className="text-white font-semibold fa-solid fa-angle-right"></i>
                        </div>
                    </form>
                </div>
            </div>}
        </div>
    )
}
 
export default Login;