import {Link} from "react-router-dom"
import logo from "../assets/logo.jpg"

const VipTasks = () => {
    return (  
        <div className="min-h-screen flex justify-center items-start">
            <div className="md:max-w-screen-md w-full">
                <div className="flex fon p-3 rounded-xl m-2 justify-around items-center sm:justify-start sm:gap-8">
                    <img className="w-20 rounded-full" src={logo} alt="logo" />
                    <div className="flex flex-col items-start sm:w-full">
                        <h1 className="text-3xl font-semibold">* * 1234</h1>
                        <h3 className="text-xl font-semibold">17.04.2023</h3>
                    </div>
                    <h1 className="text-4xl font-bold italic sm:flex sm:justify-end sm:w-full">VIP5</h1>
                </div>
                <div className="max-h-96 overflow-y-auto">
                    <Link to="/task">
                        <div className="fon p-3 m-2 rounded-xl flex justify-between items-center">
                            <div className="flex flex-col items-start">
                                <h2 className="italic font-semibold text-3xl text-white">VIP1</h2>
                                <p className="text-white text-lg font-semibold">Mavjud vazifalar soni <span className="text-rose-500">1</span></p>
                            </div>
                                <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-right w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                        </div>
                    </Link>
                    <Link to="/task">
                        <div className="fon p-3 m-2 rounded-xl flex justify-between items-center">
                            <div className="flex flex-col items-start">
                                <h2 className="italic font-semibold text-3xl text-white">VIP1</h2>
                                <p className="text-white text-lg font-semibold">Mavjud vazifalar soni <span className="text-rose-500">1</span></p>
                            </div>
                                <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-right w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                        </div>
                    </Link>
                    <Link to="/task">
                        <div className="fon p-3 m-2 rounded-xl flex justify-between items-center">
                            <div className="flex flex-col items-start">
                                <h2 className="italic font-semibold text-3xl text-white">VIP1</h2>
                                <p className="text-white text-lg font-semibold">Mavjud vazifalar soni <span className="text-rose-500">1</span></p>
                            </div>
                                <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-right w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                        </div>
                    </Link>
                    <Link to="/task">
                        <div className="fon p-3 m-2 rounded-xl flex justify-between items-center">
                            <div className="flex flex-col items-start">
                                <h2 className="italic font-semibold text-3xl text-white">VIP1</h2>
                                <p className="text-white text-lg font-semibold">Mavjud vazifalar soni <span className="text-rose-500">1</span></p>
                            </div>
                                <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-right w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                        </div>
                    </Link>
                    <Link to="/task">
                        <div className="fon p-3 m-2 rounded-xl flex justify-between items-center">
                            <div className="flex flex-col items-start">
                                <h2 className="italic font-semibold text-3xl text-white">VIP1</h2>
                                <p className="text-white text-lg font-semibold">Mavjud vazifalar soni <span className="text-rose-500">1</span></p>
                            </div>
                                <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-right w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default VipTasks;