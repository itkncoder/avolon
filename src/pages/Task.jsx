import logo from "../assets/logo.jpg"
import {Link} from "react-router-dom"

const Task = () => {
    return (  
        <div className="min-h-screen flex justify-center items-start">
            <Link to="/viptasks">
                <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-left absolute top-2 left-2 w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
            </Link>
            <div className="md:max-w-screen-md w-full mt-14">
                <div className="fon p-3 m-2 rounded-xl flex justify-between items-center">
                    <div className="flex flex-col items-start">
                        <h2 className="italic font-semibold text-4xl text-white">VIP1</h2>
                        <p className="text-white text-lg font-semibold">Mavjud vazifalar soni <span className="text-rose-500">1</span></p>
                    </div>
                    <img className="w-14 rounded-full" src={logo} alt="logo" />
                </div>
                <div className="max-h-96 overflow-y-auto">
                    <div className="fon p-3 m-2 rounded-xl flex justify-between items-center gap-1">
                        <img className="w-10 sm:w-14" src={logo} alt="product" />
                        <p className="text-base text-white font-semibold w-5/12 sm:text-lg sm:w-fit">Sahroda elektr energiyasi ishlab chiqarish </p>
                        <div className="flex flex-col items-center sm:w-fit">
                            <button className="text-sm w-full hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 py-1 px-2 rounded-3xl text-yellow-400 font-semibold sm:text-sm sm:w-fit sm:px-4 sm:py-2">Qurilmani oling</button>
                            <p className="font-semibold text-base">7000 UZS</p>
                        </div>
                    </div>
                    <div className="fon p-3 m-2 rounded-xl flex justify-between items-center gap-1">
                        <img className="w-10 sm:w-14" src={logo} alt="product" />
                        <p className="text-base text-white font-semibold w-5/12 sm:text-lg sm:w-fit">Sahroda elektr energiyasi ishlab chiqarish </p>
                        <div className="flex flex-col items-center sm:w-fit">
                            <button className="text-sm w-full hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 py-1 px-2 rounded-3xl text-yellow-400 font-semibold sm:text-sm sm:w-fit sm:px-4 sm:py-2">Qurilmani oling</button>
                            <p className="font-semibold text-base">7000 UZS</p>
                        </div>
                    </div>
                    <div className="fon p-3 m-2 rounded-xl flex justify-between items-center gap-1">
                        <img className="w-10 sm:w-14" src={logo} alt="product" />
                        <p className="text-base text-white font-semibold w-5/12 sm:text-lg sm:w-fit">Sahroda elektr energiyasi ishlab chiqarish </p>
                        <div className="flex flex-col items-center sm:w-fit">
                            <button className="text-sm w-full hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 py-1 px-2 rounded-3xl text-yellow-400 font-semibold sm:text-sm sm:w-fit sm:px-4 sm:py-2">Qurilmani oling</button>
                            <p className="font-semibold text-base">7000 UZS</p>
                        </div>
                    </div>
                    <div className="fon p-3 m-2 rounded-xl flex justify-between items-center gap-1">
                        <img className="w-10 sm:w-14" src={logo} alt="product" />
                        <p className="text-base text-white font-semibold w-5/12 sm:text-lg sm:w-fit">Sahroda elektr energiyasi ishlab chiqarish </p>
                        <div className="flex flex-col items-center sm:w-fit">
                            <button className="text-sm w-full hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 py-1 px-2 rounded-3xl text-yellow-400 font-semibold sm:text-sm sm:w-fit sm:px-4 sm:py-2">Qurilmani oling</button>
                            <p className="font-semibold text-base">7000 UZS</p>
                        </div>
                    </div>
                    <div className="fon p-3 m-2 rounded-xl flex justify-between items-center gap-1">
                        <img className="w-10 sm:w-14" src={logo} alt="product" />
                        <p className="text-base text-white font-semibold w-5/12 sm:text-lg sm:w-fit">Sahroda elektr energiyasi ishlab chiqarish </p>
                        <div className="flex flex-col items-center sm:w-fit">
                            <button className="text-sm w-full hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 py-1 px-2 rounded-3xl text-yellow-400 font-semibold sm:text-sm sm:w-fit sm:px-4 sm:py-2">Qurilmani oling</button>
                            <p className="font-semibold text-base">7000 UZS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Task;