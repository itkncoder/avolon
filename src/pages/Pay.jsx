import {Link} from "react-router-dom"

const Pay = () => {
    return (  
        <div className="min-h-screen md:flex md:justify-center md:items-center">
            <div className="flex flex-col items-center">
                <Link to="/">
                    <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-left absolute top-2 left-2 w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                </Link>

                <div className="fon m-2 p-3 rounded-xl flex flex-col items-start mt-14">
                    <div className="flex justify-start items-center gap-2">
                        <h2 className="text-white text-2xl font-semibold">Balans</h2>
                        <p className="bg-white p-1 rounded-md text-sm">100000000</p>
                    </div>
                    <div>
                        <p className="mt-2 font-semibold text-white text-sm sm:text-lg">Naqt pul yechib olish uchun hisob:</p>
                        <p className="text-white">9860590185327298</p>
                    </div>
                    <div className="mt-2 flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-2">
                        <label className="text-white font-semibold text-sm" htmlFor="pay">Olib tashlash miqdori (UZS):</label>
                        <input className="py-2 px-5 w-60 sm:w-72 rounded-xl outline-0 focus:ring ring-gray-300" id="pay" type="text" placeholder="Iltimos yechib olish miqdorini kiriting" required />
                    </div>
                    <div className="mt-1 flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-2 sm:mt-2">
                        <label className="text-white font-semibold text-sm" htmlFor="parol">Pul yechish uchun parolni kiriting:</label>
                        <input className="py-2 px-5 w-60 sm:w-72 rounded-xl outline-0 focus:ring ring-gray-300" id="parol" type="text" placeholder="Iltimos parolni kiriting" required />
                    </div>
                </div>

                <p className="text-sm mt-2 text-gray-200 max-w-2xs p-2 sm:max-w-xl sm:flex sm:justify-start sm:w-full">
                    Kuniga pul o'tkazmalari soni: 1 <br />
                    Pul yechib olish uchun to'lov: 7% <br />
                    Pul yechib olish minimal miqdori: 20000 UZS <br />
                    Pul yechib olish maksimal miqdori: 2000000 UZS <br />
                    Pul yechib olish vaqti: 09:00 - 12:00 oralig'i <br />
                    Pul yechib olish kuni: Haftaning 1-6. <br />
                    Pul yechib olish vaqti: 48 soat oralig' <br />
                </p>

                <button className="mt-10 py-2 px-4 w-7/12 btn-fon rounded-3xl text-white font-semibold text-lg sm:w-72 mb-2">Yechib olish</button>
            </div>
        </div>
    );
}
 
export default Pay;