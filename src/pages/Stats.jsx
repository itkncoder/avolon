import {Link} from "react-router-dom"
import table1 from "../assets/table1.jpg"
import table2 from "../assets/table2.jpg"
import logo from "../assets/logo.jpg"
import robot from "../assets/robot.png"

const Stats = () => {
    return (  
        <div className="min-h-screen">
            <div className="flex flex-col">
                <div className="flex fon p-3 rounded-xl m-2 justify-around items-center">
                    <img className="w-14" src={robot} alt="logo" />
                    <div className="flex justify-center items-center gap-2">
                        <h1 className="text-2xl text-white font-semibold">Yordam bot</h1>
                        <Link to="./">
                            <i className="hover:bg-zinc-800 transition-all w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500 font-semibold fa-solid fa-angle-right"></i>
                        </Link>
                    </div>
                </div>  
                <div className="flex flex-col items-center">
                    <img className="max-w-screen-md w-full p-2 rounded-md" src={table1} alt="stats1" />
                    <img className="max-w-screen-md w-full p-2 rounded-md" src={table2} alt="stats2" />
                </div>
                <div className="fon p-3 m-2 rounded-xl flex justify-between items-center md:px-10">
                    <div className="flex flex-col items-start">
                        <a className="flex justify-start items-center bg-zinc-900 py-1 px-6 my-2 rounded-lg gap-3" href="./">
                            <i className="text-white border border-yellow-500 p-2 rounded-full fa-solid fa-paper-plane"></i>
                            <p className="text-white font-semibold">GURUH</p>
                        </a>
                        <a className="flex justify-start items-center bg-zinc-900 py-1 px-6 my-2 rounded-lg gap-3" href="./">
                            <i className="text-white border border-yellow-500 p-2 rounded-full fa-solid fa-paper-plane"></i>
                            <p className="text-white font-semibold">KANAL</p>
                        </a>
                    </div>
                    <img className="w-20 rounded-full" src={logo} alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default Stats;