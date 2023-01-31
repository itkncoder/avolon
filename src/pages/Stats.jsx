import table1 from "../assets/table1.jpg"
import table2 from "../assets/table2.jpg"
import logo from "../assets/logo.jpg"

const Stats = () => {
    return (  
        <div>
            <div className="section">
                <div className="section-div">
                    <div className="relative flex-items-center">
                        <div className="balans-div">
                            <div className="fon task-card task-card-top">
                            <div className="task-card plus-card">
                                    <img className="robot" src="https://cdn-icons-png.flaticon.com/512/6784/6784391.png" alt="robot" />
                                    <a href="./">
                                        <div className="flex">
                                            <h2>Yordam bot</h2>
                                            <i className="fa-solid fa-angle-right"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="tables">
                                <img className="table-img" src={table1} alt="table" />
                                <img className="table-img" src={table2} alt="table" />
                            </div>
                            <div>
                                <div className="fon task-card plus-card">
                                    <div>
                                        <a href="./">
                                            <div className="flex">
                                                <i className="fa-solid fa-paper-plane"></i>
                                                <p>GURUH</p>
                                            </div>
                                        </a>
                                        <a href="./">
                                            <div className="flex">
                                                <i className="fa-solid fa-paper-plane"></i>
                                                <p>KANAL</p>
                                            </div>
                                        </a>
                                    </div>
                                    <img className="logo" src={logo} alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Stats;