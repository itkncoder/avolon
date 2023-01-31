import {Link} from "react-router-dom"
import logo from "../assets/logo.jpg"

const VipTasks = () => {
    return (  
        <div className="min-h-screen flex justify-center items-center">
            <div className="md:max-w-screen-md w-full">
                <div className="flex fon p-3 rounded-xl m-2 justify-around items-start sm:justify-start sm:gap-8">
                    <img className="w-20 rounded-full" src={logo} alt="logo" />
                    <div className="flex flex-col items-start">
                        <h1 className="text-2xl font-semibold">* * 1234</h1>
                        <h3 className="text-lg font-semibold">17.04.2023</h3>
                    </div>
                    <h1 className="text-4xl font-semibold italic sm:flex sm:justify-end sm:w-full">VIP5</h1>
                </div>
                <div className="max-h-f overflow-y-auto">
                    <div className="fon p-3 m-2 rounded-xl flex justify-between items-center">
                        <div className="flex flex-col items-start">
                            <h2 className="italic font-semibold text-xl text-white">VIP1</h2>
                            <p className="text-white">Mavjud vazifalar soni <span className="text-rose-500">1</span></p>
                        </div>
                        <Link to="/">
                            <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-right w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                        </Link>
                    </div>
                    <div className="fon p-3 m-2 rounded-xl flex justify-between items-center">
                        <div className="flex flex-col items-start">
                            <h2 className="italic font-semibold text-xl text-white">VIP1</h2>
                            <p className="text-white">Mavjud vazifalar soni <span className="text-rose-500">1</span></p>
                        </div>
                        <Link to="/">
                            <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-right w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                        </Link>
                    </div>
                    <div className="fon p-3 m-2 rounded-xl flex justify-between items-center">
                        <div className="flex flex-col items-start">
                            <h2 className="italic font-semibold text-xl text-white">VIP1</h2>
                            <p className="text-white">Mavjud vazifalar soni <span className="text-rose-500">1</span></p>
                        </div>
                        <Link to="/">
                            <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-right w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                        </Link>
                    </div>
                    <div className="fon p-3 m-2 rounded-xl flex justify-between items-center">
                        <div className="flex flex-col items-start">
                            <h2 className="italic font-semibold text-xl text-white">VIP1</h2>
                            <p className="text-white">Mavjud vazifalar soni <span className="text-rose-500">1</span></p>
                        </div>
                        <Link to="/">
                            <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-right w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                        </Link>
                    </div>
                    <div className="fon p-3 m-2 rounded-xl flex justify-between items-center">
                        <div className="flex flex-col items-start">
                            <h2 className="italic font-semibold text-xl text-white">VIP1</h2>
                            <p className="text-white">Mavjud vazifalar soni <span className="text-rose-500">1</span></p>
                        </div>
                        <Link to="/">
                            <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-right w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                        </Link>
                    </div>
                    <div className="fon p-3 m-2 rounded-xl flex justify-between items-center">
                        <div className="flex flex-col items-start">
                            <h2 className="italic font-semibold text-xl text-white">VIP1</h2>
                            <p className="text-white">Mavjud vazifalar soni <span className="text-rose-500">1</span></p>
                        </div>
                        <Link to="/">
                            <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-right w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default VipTasks;