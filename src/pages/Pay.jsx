import {Link} from "react-router-dom"

const Pay = () => {
    return (  
        <div>
            <form>
            <div className="section">
                <div className="section-div">
                    <div className="relative flex-items-center">
                        <Link to="/">
                            <i className="icon balans-back fa-solid fa-angle-left"></i>
                        </Link>
                        <div className="fon balans-div">
                            <div className="balans">
                                <h2>Balans</h2>
                                <p>100 000 000 000</p>
                            </div>
                            <div>
                                <p className="semibold">Naqt pulni yechib olish uchun hisob:</p>
                                <p>9056 8457 9545 3481</p>
                            </div>
                            <div>
                                <div>
                                    <p className="semibold">Olib tashlash miqdori (UZS):</p>
                                    <input required className="input" type="text" placeholder="Iltimos yechib olish uchun kiriting" />
                                </div>
                                <div>
                                    <p className="semibold">Pul yechish uchun parolni kiriting:</p>
                                    <input required className="input" type="text" placeholder="Iltimos parolni kiriting" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="olib-tashlash-item">Kuniga pul o'tkazmalari soni: 1</p>
                            <p className="olib-tashlash-item">Pul yechib olish uchun to'lov: 7%</p>
                            <p className="olib-tashlash-item">Pul yechib olish minimal miqdori: 20000 UZS</p>
                            <p className="olib-tashlash-item">Pul yechib olish maksimal miqdori: 2000000 UZS</p>
                            <p className="olib-tashlash-item">Pul yechib olish vaqti: 09:00 - 12:00 oralig'i</p>
                            <p className="olib-tashlash-item">Pul yechib olish kuni: Haftaning 1-6.</p>
                            <p className="olib-tashlash-item">Pul yechib olish vaqti: 48 soat oralig'i</p>
                        </div>
                        <input type="submit" className="balans-btn" value="Yechib olish" />
                    </div>
                </div>
            </div>
            </form>
        </div>
    );
}
 
export default Pay;