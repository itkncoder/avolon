import {Link} from "react-router-dom"

const Referal = () => {
    return (
        <div className="min-h-screen">
            <div>
                <Link to="/">
                    <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-left absolute top-2 left-2 w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                </Link>
                <div className="fon m-2 p-3 rounded-xl mt-14 md:flex md:flex-col md:items-center md:max-w-screen-md md:mx-auto">
                    <a href="https://youtube.com" target="_blank" className="py-3 text-white break-all text-xl text-center font-semibold">https://youtube.com/cahsdjhfsdvjfhsdbjhfsdbfhj</a>
                    <input className="mt-5 sm:w-60 w-full hover:bg-gray-900 cursor-pointer transition-all bg-zinc-900 py-2 px-5 rounded-3xl text-yellow-400 font-semibold" type="submit" value="Ko'chirib olish" />
                </div>
            </div>
        </div>
    )
}

export default Referal