import {Link} from "react-router-dom"
import logo from "../assets/logo.jpg"

const Home = () => {
    return (  
        <div className="bg-1 lg:flex lg:justify-center lg:items-center min-h-screen">
            <div className="lg:max-w-screen-md">
                <div className="flex bg-yellow-400 p-3 rounded-xl m-2 justify-around items-start sm:justify-start sm:gap-8">
                    <img className="w-20 rounded-full" src={logo} alt="logo" />
                    <div className="flex flex-col items-start">
                        <h1 className="text-2xl font-semibold">* * 1234</h1>
                        <h3 className="text-lg font-semibold">17.04.2023</h3>
                    </div>
                    <h1 className="text-4xl font-semibold italic sm:flex sm:justify-end sm:w-full">VIP5</h1>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="bg-yellow-400 flex justify-around items-center p-3 m-2 rounded-xl sm:justify-center sm:gap-6 md:w-7/12">
                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                            <div className="flex flex-col items-center">
                                <p className="text-sm font-semibold bg-white text-gray-800 rounded-sm py-0.5 px-1 sm:px-4 sm:py-2 sm:text-normal sm:rounded-md">100000000</p>
                                <p className="text-xs sm:text-sm">Jami daromad</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-sm font-semibold bg-white text-gray-800 rounded-sm py-0.5 px-1 sm:px-4 sm:py-2 sm:text-normal sm:rounded-md">100000000</p>
                                <p className="text-xs sm:text-sm">Jami daromad</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                            <div className="flex flex-col items-center">
                                <p className="text-sm font-semibold bg-white text-gray-800 rounded-sm py-0.5 px-1 sm:px-4 sm:py-2 sm:text-normal md:rounded-md sm:rounded-md">100000000</p>
                                <p className="text-xs sm:text-sm">Jami daromad</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-sm font-semibold bg-white text-gray-800 rounded-sm py-0.5 px-1 sm:px-4 sm:py-2 sm:text-normal sm:rounded-md">100000000</p>
                                <p className="text-xs sm:text-sm">Jami daromad</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                            <div className="flex flex-col items-center">
                                <p className="text-sm font-semibold bg-white text-gray-800 rounded-sm py-0.5 px-1 sm:px-4 sm:py-2 sm:text-normal sm:rounded-md">100000000</p>
                                <p className="text-xs sm:text-sm">Jami daromad</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-sm font-semibold bg-white text-gray-800 rounded-sm py-0.5 px-1 sm:px-4 sm:py-2 sm:text-normal sm:rounded-md">100000000</p>
                                <p className="text-xs sm:text-sm">Jami daromad</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white flex justify-around items-center p-3 m-2 gap-1 rounded-xl sm:justify-center sm:gap-6 md:gap-3 md:w-6/12">
                        <Link to="./vip">
                            <div className="flex flex-col items-center">
                                <p className="text-white bg-orange-500 w-14 h-14 rounded-full flex justify-center items-center">
                                    <i className="fa-solid fa-gem text-2xl"></i>
                                </p>
                                <p className="text-xs font-semibold">VIPni to'ldirish</p>
                            </div>
                        </Link>
                        <Link to="./addbalans">
                            <div className="flex flex-col items-center">
                                <p className="text-white bg-orange-500 w-14 h-14 rounded-full flex justify-center items-center">
                                    <i className="fa-solid fa-wallet text-2xl"></i>
                                </p>
                                <p className="text-xs font-semibold">Balans to'ldirish</p>
                            </div>
                        </Link>
                        <Link to="./pay">
                            <div className="flex flex-col items-center">
                                <p className="text-white bg-orange-500 w-14 h-14 rounded-full flex justify-center items-center">
                                    <i className="fa-solid fa-credit-card text-2xl"></i>
                                </p>
                                <p className="text-xs font-semibold">Olib tashlash</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="py-3 m-2 bg-orange-500 rounded-xl">
                    <ul className="flex flex-col items-start gap-1">
                        <li>
                            <a className="px-3 hover:underline w-fit text-sm font-semibold text-white" href="./">Balans to'ldirish tarixi</a>
                        </li>
                        <li className="border-t-2 w-full">
                            <a className="px-3 hover:underline w-fit text-sm font-semibold text-white" href="./">Olib tashlash tarixi</a>
                        </li>
                        <li className="border-t-2 w-full">
                            <a className="px-3 hover:underline w-fit text-sm font-semibold text-white" href="./">Mening jamoam</a>
                        </li>
                        <li className="border-t-2 w-full">
                            <a className="px-3 hover:underline w-fit text-sm font-semibold text-white" href="./">Bank karta ulash</a>
                        </li>
                        <li className="border-t-2 w-full">
                            <a className="px-3 hover:underline w-fit text-sm font-semibold text-white" href="./">Taklif havolasi</a>
                        </li>
                        <li className="border-t-2 w-full">
                            <a className="px-3 hover:underline w-fit text-sm font-semibold text-white" href="./">Chiqish</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Home;