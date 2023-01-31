import {Link} from "react-router-dom"

const Add = () => {
    return (  
        <div>
            <div className="section">
                <div className="section-div">
                    <div className="relative flex-items-center">
                        <Link to="/">
                            <i className="icon balans-back fa-solid fa-angle-left"></i>
                        </Link>                             
                        <div className="fon balans-div">
                            <div>
                                <h2>Balans to'ldirish</h2>
                                <p className="plus-top-desc">VIP harid qilish uchun ko'rsatilgan kartalardan
                                    birini tanlang va to'lovni amalga oshiring:
                                </p>
                            </div>
                            <div className="overflow">
                                <div className="plus-card">
                                    <div className="flex-col">
                                        <h2>Jumaniyozov Asadbek</h2>
                                        <p>9860350106454217</p>
                                    </div>
                                    <button className="auth-submit size-sm">Agentga chekni yuboring</button>
                                </div>
                                <div className="plus-card">
                                    <div className="flex-col">
                                        <h2>Jumaniyozov Asadbek</h2>
                                        <p>9860350106454217</p>
                                    </div>
                                    <button className="auth-submit size-sm">Agentga chekni yuboring</button>
                                </div>
                                <div className="plus-card">
                                    <div className="flex-col">
                                        <h2>Jumaniyozov Asadbek</h2>
                                        <p>9860350106454217</p>
                                    </div>
                                    <button className="auth-submit size-sm">Agentga chekni yuboring</button>
                                </div>
                                <div className="plus-card">
                                    <div className="flex-col">
                                        <h2>Jumaniyozov Asadbek</h2>
                                        <p>9860350106454217</p>
                                    </div>
                                    <button className="auth-submit size-sm">Agentga chekni yuboring</button>
                                </div>
                                <div className="plus-card">
                                    <div className="flex-col">
                                        <h2>Jumaniyozov Asadbek</h2>
                                        <p>9860350106454217</p>
                                    </div>
                                    <button className="auth-submit size-sm">Agentga chekni yuboring</button>
                                </div>
                                <div className="plus-card">
                                    <div className="flex-col">
                                        <h2>Jumaniyozov Asadbek</h2>
                                        <p>9860350106454217</p>
                                    </div>
                                    <button className="auth-submit size-sm">Agentga chekni yuboring</button>
                                </div>
                            </div>
                        </div>
                        <p className="plus-desc">
                            To'lovni qilib chekni agentga va botga yuboring.
                            To'lovlarni qabul qilish vaqti 10:00-22:00 oralig'i.
                            Soxta chekdan foydalanmang aks holda
                            kabinetingiz 24 soatdan 108 soatgacha
                            muzlatiladi
                        </p>
                        <button className="balans-btn">To'lov bot</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Add;