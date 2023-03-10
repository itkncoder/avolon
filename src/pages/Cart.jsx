import {Link} from "react-router-dom"

const Cart = () => {
    return (
        <div className="h-screen flex flex-col">
            <div className="sm:p-2">
                <Link to="/">
                    <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-left absolute top-2 left-2 w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                </Link>
                <div className="fon m-2 p-3 py-10 rounded-xl mt-14 max-w-screen-md sm:mx-auto sm:flex sm:flex-col sm:items-center">
                    <h1 className="text-white text-4xl font-semibold">Bank karta ulash</h1>
                    <div className="flex flex-col items-start py-3">
                        <div className="mt-2 flex flex-col gap-0.5 sm:gap-2 items-start w-full">
                            <label className="text-white font-semibold" htmlFor="pay">Ism-familiyangizni kiriting</label>
                            <input className="py-2 px-5 w-full sm:w-80 rounded-xl outline-0 focus:ring ring-gray-300" id="pay" type="text" placeholder="Ism-familiyangizni kiriting" required />
                        </div>
                        <div className="mt-2 flex flex-col gap-0.5 sm:gap-2 items-start w-full">
                            <label className="text-white font-semibold" htmlFor="pay">Karta raqamingizni kiriting</label>
                            <input className="py-2 px-5 w-full sm:w-80 rounded-xl outline-0 focus:ring ring-gray-300" id="pay" type="text" placeholder="Karta raqamingizni kiriting" required />
                        </div>
                    </div>
                    <input className="mt-5 sm:w-60 w-full hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 py-2 px-5 rounded-3xl text-yellow-400 font-semibold" type="submit" value="Kartani ulash" />
                </div>
            </div>
        </div>
    )
}

export default Cart