import {Link} from "react-router-dom"
import logo from "../assets/logo.jpg"

const Home = () => {
    return (  
        <div className="section">
            <div className="section-div">
                <div className="relative flex-items-center">
                    <div className="balans-div">
                        <div className="yellow p-many fon task-card task-card-top">
                            <img className="logo" src={logo} alt="" />
                            <div>
                                <h2 className="black">* * 1234</h2>
                                <p className="black">17.04.2023</p>
                            </div>
                            <h1 className="black">VIP5</h1>
                        </div>
                        <div className="yellow p-many fon tasks-card task-card task-card-top">
                            <div>
                                <div>
                                    <p>100000000</p>
                                    <p>Jami daromad</p>
                                </div>
                                <div>
                                    <p>100000000</p>
                                    <p>Jami daromad</p>
                                </div>
                                <div>
                                    <p>100000000</p>
                                    <p>Jami daromad</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>100000000</p>
                                    <p>Jami daromad</p>
                                </div>
                                <div>
                                    <p>100000000</p>
                                    <p>Jami daromad</p>
                                </div>
                                <div>
                                    <p>100000000</p>
                                    <p>Jami daromad</p>
                                </div>
                            </div>
                        </div>
                        <div className="home-cards task-card">
                            <Link to="./vip">
                                <div>
                                    <i className="fa-solid fa-gem"></i>
                                    <p>VIPni to'ldirish</p>
                                </div>
                            </Link>
                            <Link to="./addbalans">
                                <div>
                                    <i className="fa-solid fa-wallet"></i>
                                    <p>Balans to'ldirish </p>
                                </div>
                            </Link>
                            <Link to="./pay">
                                <div>
                                    <i className="fa-solid fa-credit-card"></i>
                                    <p>Olib tashlash</p>
                                </div>
                            </Link>
                        </div>
                        <div className="history">
                            <a href="./">Balans to'ldirish tarixi</a>
                            <a href="./">Olib tashlash tarixi</a>
                            <a href="./">Mening jamoam</a>
                            <a href="./">Bank karta ulash</a>
                            <a href="./">Taklif havolasi</a>
                            <a href="./">Chiqish</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;