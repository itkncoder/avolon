import {Link} from "react-router-dom"

const Vip = () => {
    return (  
        <div>
            <div className="section vip">
                <div className="section-div">
                    <div className="relative flex-items-center">
                        <Link to="/">
                            <i className="icon balans-back fa-solid fa-angle-left"></i>
                        </Link>                        
                        <div className="overflow over2 vip-cards">
                            <div className="vip-card">
                                <a href="./">
                                    <h1><i>VIP 1</i></h1>
                                    <p>200000</p>
                                </a>
                            </div>
                            <div className="vip-card">
                                <a href="./">
                                    <h1><i>VIP 1</i></h1>
                                    <p>200000</p>
                                </a>
                            </div>
                            <div className="vip-card">
                                <a href="./">
                                    <h1><i>VIP 1</i></h1>
                                    <p>200000</p>
                                </a>
                            </div>
                            <div className="vip-card">
                                <a href="./">
                                    <h1><i>VIP 1</i></h1>
                                    <p>200000</p>
                                </a>
                            </div>
                            <div className="vip-card">
                                <a href="./">
                                    <h1><i>VIP 1</i></h1>
                                    <p>200000</p>
                                </a>
                            </div>
                            <div className="vip-card">
                                <a href="./">
                                    <h1><i>VIP 1</i></h1>
                                    <p>200000</p>
                                </a>
                            </div>
                            <div className="vip-card">
                                <a href="./">
                                    <h1><i>VIP 1</i></h1>
                                    <p>200000</p>
                                </a>
                            </div>
                            <div className="vip-card">
                                <a href="./">
                                    <h1><i>VIP 1</i></h1>
                                    <p>200000</p>
                                </a>
                            </div>
                        </div>
                        <p className="vip-desc">A'zolik darajasidagi to'lovni tanlang</p>
                        <button className="balans-btn">To'lash</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Vip;