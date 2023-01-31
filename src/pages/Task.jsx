import logo from "../assets/logo.jpg"

const Task = () => {
    return (  
        <div className="min-h-screen flex justify-center items-center">
            <div className="md:max-w-screen-md w-full">
                <div className="fon p-3 m-2 rounded-xl flex justify-between items-center">
                    <div className="flex flex-col items-start">
                        <h2 className="italic font-semibold text-2xl text-white">VIP1</h2>
                        <p className="text-white">Mavjud vazifalar soni <span className="text-rose-500">1</span></p>
                    </div>
                    <img className="w-14 rounded-full" src={logo} alt="logo" />
                </div>
                <div>
                    <div className="fon p-3 m-2 rounded-xl flex justify-between items-center gap-1">
                        <img className="w-10 sm:w-14" src={logo} alt="product" />
                        <p className="text-xs text-white font-semibold w-5/12 sm:text-sm sm:w-fit">Sahroda elektr energiyasi ishlab chiqarish </p>
                        <div className="flex flex-col items-center w-4/12 sm:w-fit">
                            <button className="text-3xs w-full hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 py-1 px-1 rounded-3xl text-yellow-400 font-semibold sm:text-sm sm:w-fit sm:px-4 sm:py-2">Qurilmani oling</button>
                            <p className="text-sm font-semibold">7000 UZS</p>
                        </div>
                    </div>
                    <div className="fon p-3 m-2 rounded-xl flex justify-between items-center gap-1">
                        <img className="w-10 sm:w-14" src={logo} alt="product" />
                        <p className="text-xs text-white font-semibold w-5/12 sm:text-sm sm:w-fit">Sahroda elektr energiyasi ishlab chiqarish </p>
                        <div className="flex flex-col items-center w-4/12 sm:w-fit">
                            <button className="text-3xs w-full hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 py-1 px-1 rounded-3xl text-yellow-400 font-semibold sm:text-sm sm:w-fit sm:px-4 sm:py-2">Qurilmani oling</button>
                            <p className="text-sm font-semibold">7000 UZS</p>
                        </div>
                    </div>
                    <div className="fon p-3 m-2 rounded-xl flex justify-between items-center gap-1">
                        <img className="w-10 sm:w-14" src={logo} alt="product" />
                        <p className="text-xs text-white font-semibold w-5/12 sm:text-sm sm:w-fit">Sahroda elektr energiyasi ishlab chiqarish </p>
                        <div className="flex flex-col items-center w-4/12 sm:w-fit">
                            <button className="text-3xs w-full hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 py-1 px-1 rounded-3xl text-yellow-400 font-semibold sm:text-sm sm:w-fit sm:px-4 sm:py-2">Qurilmani oling</button>
                            <p className="text-sm font-semibold">7000 UZS</p>
                        </div>
                    </div>
                    <div className="fon p-3 m-2 rounded-xl flex justify-between items-center gap-1">
                        <img className="w-10 sm:w-14" src={logo} alt="product" />
                        <p className="text-xs text-white font-semibold w-5/12 sm:text-sm sm:w-fit">Sahroda elektr energiyasi ishlab chiqarish </p>
                        <div className="flex flex-col items-center w-4/12 sm:w-fit">
                            <button className="text-3xs w-full hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 py-1 px-1 rounded-3xl text-yellow-400 font-semibold sm:text-sm sm:w-fit sm:px-4 sm:py-2">Qurilmani oling</button>
                            <p className="text-sm font-semibold">7000 UZS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Task;