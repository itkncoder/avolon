import {Link} from "react-router-dom"
import logo from "../assets/logo.jpg"

const VipTasks = () => {
    return (  
        <div>
            <div className="section">
                <div className="section-div">
                    <div className="relative flex-items-center">
                        <div className="balans-div">
                            <div className="fon task-card task-card-top">
                                <img className="logo" src={logo} alt="" />
                                <div>
                                    <h2>* * 1234</h2>
                                    <p>17.04.2023</p>
                                </div>
                                <h1>VIP5</h1>
                            </div>
                            <div className="overflow over2">
                                <Link to="/task">
                                    <div className="fon task-card plus-card">
                                        <div className="flex-col2">
                                            <h2><i>VIP1</i></h2>
                                            <p>Mavjud vazifalar soni <span>1</span></p>
                                        </div>
                                        <i className="icon fa-solid fa-angle-left"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default VipTasks;