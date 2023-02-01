import {Link} from "react-router-dom"

const Addhitory = () => {
    return (
        <div className="min-h-screen">
            <div className="max-w-screen-sm m-auto">
                <Link to="/">
                    <i className="hover:bg-zinc-800 transition-all fa-solid fa-angle-left absolute top-2 left-2 w-8 rounded-full h-8 flex justify-center items-center bg-zinc-900 text-yellow-500"></i>
                </Link>
                <div className="pt-14 p-3 m-2">
                    <h1 className="text-2xl text-white font-semibold">Balans to'ldirish tarixi</h1>
                    
                    <div className="fon p-3 my-2 rounded-xl flex justify-start gap-5 items-center">
                        <i class="pl-2 text-xl text-green-600 fa-solid fa-download"></i>
                        <div className="flex flex-col items-start">
                            <h2 className="font-semibold text-xl text-white">20 000 so'm</h2>
                            <p className="text-white font-semibold">01.02.2023</p>
                        </div>
                    </div>
                    <div className="fon p-3 my-2 rounded-xl flex justify-start gap-5 items-center">
                        <i class="pl-2 text-xl text-green-600 fa-solid fa-download"></i>
                        <div className="flex flex-col items-start">
                            <h2 className="font-semibold text-xl text-white">1 020 so'm</h2>
                            <p className="text-white font-semibold">01.02.2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addhitory