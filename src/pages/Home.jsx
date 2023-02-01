import {Link} from "react-router-dom"
import logo from "../assets/logo.jpg"

const Home = () => {
    return (  
        <div className="bg-1 lg:flex lg:justify-center lg:items-center min-h-screen">
            <div className="lg:max-w-screen-md">
                <div className="flex bg-yellow-400 p-3 rounded-xl m-2 justify-around items-start sm:justify-start sm:gap-8">
                    <img className="w-20 rounded-full" src={logo} alt="logo" />
                    <div className="flex flex-col items-start sm:w-full">
                        <h1 className="text-3xl font-semibold">* * 1234</h1>
                        <h3 className="text-xl font-semibold">17.04.2023</h3>
                    </div>
                    <h1 className="text-4xl font-bold italic sm:flex sm:justify-end sm:w-full">VIP5</h1>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="bg-yellow-400 flex justify-around items-center px-1 py-3 m-2 rounded-xl sm:justify-center sm:gap-6 md:w-7/12 md:gap-2">
                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                            <div className="flex flex-col items-center">
                                <p className="text-md font-semibold bg-white text-gray-800 rounded-md py-0.5 px-1 sm:px-4 sm:py-2 sm:text-normal sm:rounded-md">100000000</p>
                                <p className="text-sm sm:text-sm">Jami daromad</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-md font-semibold bg-white text-gray-800 rounded-md py-0.5 px-1 sm:px-4 sm:py-2 sm:text-normal sm:rounded-md">100000000</p>
                                <p className="text-sm sm:text-sm">Jami daromad</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                            <div className="flex flex-col items-center">
                                <p className="text-md font-semibold bg-white text-gray-800 rounded-md py-0.5 px-1 sm:px-4 sm:py-2 sm:text-normal md:rounded-md sm:rounded-md">100000000</p>
                                <p className="text-sm sm:text-sm">Jami daromad</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-md font-semibold bg-white text-gray-800 rounded-md py-0.5 px-1 sm:px-4 sm:py-2 sm:text-normal sm:rounded-md">100000000</p>
                                <p className="text-sm sm:text-sm">Jami daromad</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                            <div className="flex flex-col items-center">
                                <p className="text-md font-semibold bg-white text-gray-800 rounded-md py-0.5 px-1 sm:px-4 sm:py-2 sm:text-normal sm:rounded-md">100000000</p>
                                <p className="text-sm sm:text-sm">Jami daromad</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-md font-semibold bg-white text-gray-800 rounded-md py-0.5 px-1 sm:px-4 sm:py-2 sm:text-normal sm:rounded-md">100000000</p>
                                <p className="text-sm sm:text-sm">Jami daromad</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white flex justify-around items-center p-3 m-2 gap-1 rounded-xl sm:justify-center sm:gap-6 md:gap-3 md:w-6/12">
                        <Link to="./vip">
                            <div className="flex flex-col items-center">
                                <p className="text-white bg-orange-500 w-14 h-14 rounded-full flex justify-center items-center">
                                    <i className="fa-solid fa-gem text-2xl"></i>
                                </p>
                                <p className="text-xs font-semibold mt-1">VIPni to'ldirish</p>
                            </div>
                        </Link>
                        <Link to="./addbalans">
                            <div className="flex flex-col items-center">
                                <p className="text-white bg-orange-500 w-14 h-14 rounded-full flex justify-center items-center">
                                    <i className="fa-solid fa-wallet text-2xl"></i>
                                </p>
                                <p className="text-xs font-semibold mt-1">Balans to'ldirish</p>
                            </div>
                        </Link>
                        <Link to="./pay">
                            <div className="flex flex-col items-center">
                                <p className="text-white bg-orange-500 w-14 h-14 rounded-full flex justify-center items-center">
                                    <i className="fa-solid fa-credit-card text-2xl"></i>
                                </p>
                                <p className="text-xs font-semibold mt-1">Olib tashlash</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="py-3 m-2 bg-orange-500 rounded-xl">
                    <ul className="flex flex-col items-start divide-y-2 gap-0.5">
                        <li>
                            <a className="px-3 py-0.5 pt-1 hover:underline w-fit font-semibold text-white" href="./">Balans to'ldirish tarixi</a>
                        </li>
                        <li className="w-full pt-0.5">
                            <a className="px-3 py-1 hover:underline w-fit font-semibold text-white" href="./">Olib tashlash tarixi</a>
                        </li>
                        <li className="w-full pt-0.5">
                            <a className="px-3 py-1 hover:underline w-fit font-semibold text-white" href="./">Mening jamoam</a>
                        </li>
                        <li className="w-full pt-0.5">
                            <a className="px-3 py-1 hover:underline w-fit font-semibold text-white" href="./">Bank karta ulash</a>
                        </li>
                        <li className="w-full pt-0.5l">
                            <a className="px-3 py-1 hover:underline w-fit font-semibold text-white" href="./">Taklif havolasi</a>
                        </li>
                        <li className="w-full pt-0.5">
                            <a className="px-3 py-1 hover:underline w-fit font-semibold text-white" href="./">Chiqish</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Home;