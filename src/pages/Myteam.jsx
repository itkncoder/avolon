import {Link} from "react-router-dom"

const Myteam = () => {
    return (
        <div className="min-h-screen">
            <div>
                <Link to="/">
                    <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-left absolute top-2 left-2 w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                </Link>
                <div className="md:max-w-screen-md md:mx-auto">
                    <h1 className="mt-14 text-3xl font-semibold text-white m-2 p-2">Mening jamoam</h1>
                    <div className="max-h-96 overflow-y-auto">
                        <div className="fon m-2 p-3 rounded-xl">
                            <p className="text-lg text-white font-semibold">Sergey Drin</p>
                        </div>
                        <div className="fon m-2 p-3 rounded-xl">
                            <p className="text-lg text-white font-semibold">Sergey Drin</p>
                        </div>
                        <div className="fon m-2 p-3 rounded-xl">
                            <p className="text-lg text-white font-semibold">Sergey Drin</p>
                        </div>
                        <div className="fon m-2 p-3 rounded-xl">
                            <p className="text-lg text-white font-semibold">Sergey Drin</p>
                        </div>
                        <div className="fon m-2 p-3 rounded-xl">
                            <p className="text-lg text-white font-semibold">Sergey Drin</p>
                        </div>
                        <div className="fon m-2 p-3 rounded-xl">
                            <p className="text-lg text-white font-semibold">Sergey Drin</p>
                        </div>
                        <div className="fon m-2 p-3 rounded-xl">
                            <p className="text-lg text-white font-semibold">Sergey Drin</p>
                        </div>
                        <div className="fon m-2 p-3 rounded-xl">
                            <p className="text-lg text-white font-semibold">Sergey Drin</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myteam