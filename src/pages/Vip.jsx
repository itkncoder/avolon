import {Link} from "react-router-dom"

const Vip = () => {
    return (  
        <div className="bg-2 min-h-screen md:flex md:justify-center md:items-center">
            <div className="flex flex-col items-center">
                <Link to="/">
                    <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-left absolute top-2 left-2 w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                </Link>
                <div className="flex flex-wrap items-center justify-center gap-6 mt-14 px-4 max-w-xs sm:max-w-lg">
                    <div className="rounded-xl border-2 border-yellow-500 p-3">
                        <h2 className="italic font-semibold text-3xl">VIP1</h2>
                        <p className="font-semibold">200000</p>
                    </div>
                    <div className="rounded-xl border-2 border-yellow-500 p-3">
                        <h2 className="italic font-semibold text-3xl">VIP1</h2>
                        <p className="font-semibold">200000</p>
                    </div>
                    <div className="rounded-xl border-2 border-yellow-500 p-3">
                        <h2 className="italic font-semibold text-3xl">VIP1</h2>
                        <p className="font-semibold">200000</p>
                    </div>
                    <div className="rounded-xl border-2 border-yellow-500 p-3">
                        <h2 className="italic font-semibold text-3xl">VIP1</h2>
                        <p className="font-semibold">200000</p>
                    </div>
                    <div className="rounded-xl border-2 border-yellow-500 p-3">
                        <h2 className="italic font-semibold text-3xl">VIP1</h2>
                        <p className="font-semibold">200000</p>
                    </div>
                    <div className="rounded-xl border-2 border-yellow-500 p-3">
                        <h2 className="italic font-semibold text-3xl">VIP1</h2>
                        <p className="font-semibold">200000</p>
                    </div>
                    <div className="rounded-xl border-2 border-yellow-500 p-3">
                        <h2 className="italic font-semibold text-3xl">VIP1</h2>
                        <p className="font-semibold">200000</p>
                    </div>
                    <div className="rounded-xl border-2 border-yellow-500 p-3">
                        <h2 className="italic font-semibold text-3xl">VIP1</h2>
                        <p className="font-semibold">200000</p>
                    </div>
                </div>
                <button className="mt-10 py-2 px-4 w-7/12 btn-fon rounded-3xl text-white font-semibold text-lg sm:w-72">To'lash</button>
            </div>
        </div>
    );
}
 
export default Vip;