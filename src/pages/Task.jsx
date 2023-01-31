import logo from "../assets/logo.jpg"

const Task = () => {
    return (  
        <div>
            <div className="section">
                <div className="section-div">
                    <div className="relative flex-items-center">
                        <div className="balans-div">
                            <div className="fon task-card task-card-top">
                            <div className="task-card plus-card">
                                    <div className="flex-col2">
                                        <h2><i>VIP1</i></h2>
                                        <p>Mavjud vazifalar soni <span>1</span></p>
                                    </div>
                                    <img className="logo" src={logo} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="fon task-card plus-card">
                                    {/* img */}
                                    <p className="min-w">Sahroda elektr energiyasi ishlab chiqarish </p>
                                    <div className="flex-col center">
                                        <button className="auth-submit size-sm">Qurilmani oling</button>
                                        <p className="text-center">7000 UZS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Task;