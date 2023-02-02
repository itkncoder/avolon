import {Link} from "react-router-dom"

const Add = () => {
    return (  
        <div className="min-h-screen md:flex md:justify-center md:items-center">
            <div className="flex flex-col items-center">
                <Link to="/">
                    <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-left absolute top-2 left-2 w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                </Link>
                <div className="fon m-2 p-3 mt-14 rounded-xl">
                    <h1 className="text-3xl font-semibold text-white">Balans to'ldirish</h1>
                    <p className="text-sm font-semibold text-white">VIP harid qilish uchun ko'rsatilgan kartalardan birini tanlang va to'lovni amalga oshiring:</p>
                    <div className="flex flex-col items-start mt-3 p-1 max-h-80 overflow-y-auto">
                        <div className="flex justify-between my-1 border-t-2 py-1 w-full">
                            <div className="flex flex-col">
                                <h2 className="italic font-semibold text-white">Jumaniyozov Asadbek</h2>
                                <p className="text-sm text-white">9860350106454217</p>
                            </div>
                            <button className="text-xs px-3 py-0 hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 rounded-3xl text-yellow-400 sm:text-sm">Agentga chekni yuboring</button>
                        </div>
                        <div className="flex justify-between my-1 border-t-2 py-1 w-full">
                            <div className="flex flex-col">
                                <h2 className="italic font-semibold text-white">Jumaniyozov Asadbek</h2>
                                <p className="text-sm text-white">9860350106454217</p>
                            </div>
                            <button className="text-xs px-3 py-0 hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 rounded-3xl text-yellow-400 sm:text-sm">Agentga chekni yuboring</button>
                        </div>
                        <div className="flex justify-between my-1 border-t-2 py-1 w-full">
                            <div className="flex flex-col">
                                <h2 className="italic font-semibold text-white">Jumaniyozov Asadbek</h2>
                                <p className="text-sm text-white">9860350106454217</p>
                            </div>
                            <button className="text-xs px-3 py-0 hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 rounded-3xl text-yellow-400 sm:text-sm">Agentga chekni yuboring</button>
                        </div>
                        <div className="flex justify-between my-1 border-t-2 py-1 w-full">
                            <div className="flex flex-col">
                                <h2 className="italic font-semibold text-white">Jumaniyozov Asadbek</h2>
                                <p className="text-sm text-white">9860350106454217</p>
                            </div>
                            <button className="text-xs px-3 py-0 hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 rounded-3xl text-yellow-400 sm:text-sm">Agentga chekni yuboring</button>
                        </div>
                        <div className="flex justify-between my-1 border-t-2 py-1 w-full">
                            <div className="flex flex-col">
                                <h2 className="italic font-semibold text-white">Jumaniyozov Asadbek</h2>
                                <p className="text-sm text-white">9860350106454217</p>
                            </div>
                            <button className="text-xs px-3 py-0 hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 rounded-3xl text-yellow-400 sm:text-sm">Agentga chekni yuboring</button>
                        </div>
                        <div className="flex justify-between my-1 border-t-2 py-1 w-full">
                            <div className="flex flex-col">
                                <h2 className="italic font-semibold text-white">Jumaniyozov Asadbek</h2>
                                <p className="text-sm text-white">9860350106454217</p>
                            </div>
                            <button className="text-xs px-3 py-0 hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 rounded-3xl text-yellow-400 sm:text-sm">Agentga chekni yuboring</button>
                        </div>
                    </div>
                </div>
                <p className="text-sm font-semibold text-gray-200 p-3 sm:max-w-lg">
                    To'lovni qilib chekni agentga va botga yuboring.
                    To'lovlarni qabul qilish vaqti 10:00-22:00 oralig'i.
                    Soxta chekdan foydalanmang aks holda
                    kabinetingiz 24 soatdan 108 soatgacha
                    muzlatiladi.
                </p>
                <button className="py-2 px-4 w-10/12 btn-fon rounded-3xl text-white font-semibold text-lg sm:w-72 mb-2">To'lov Bot</button>
            </div>
        </div>
    );
}
 
export default Add;