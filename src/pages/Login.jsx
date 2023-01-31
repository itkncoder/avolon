import {useState} from "react"

const Login = () => {

    const [inOrOut, setInOrOut] = useState(true)

    return (  
        <div>
            {inOrOut ? <div className="section">
                <div className="section-div">
                    <form className="auth-form fon">
                        <input className="input" type="number" placeholder="Iltimos mobil raqam kiriting" />
                        <input className="input" type="number" placeholder="Iltimos taklif kodini kiriting" />
                        <input className="input" type="password" placeholder="Parolni takrorlang" />
                        <input className="input" type="password" placeholder="Parolni kiriting" />

                        <input className="auth-submit" type="submit" value="Ro'yhatga olmoq" />

                        <div onClick={() => setInOrOut(prev => !prev)} className="auth-singin">
                            <p className="auth-login">Kirish</p>
                            <i className="icon icon-auth fa-solid fa-angle-right"></i>
                        </div>
                    </form>
                </div>
            </div>
            :
            <div className="section">
                <div className="section-div">
                    <form className="auth-form fon">
                        <input className="input" type="number" placeholder="Iltimos mobil raqam kiriting" />
                        <input className="input" type="password" placeholder="Parolni kiriting" />

                        <input className="auth-submit" type="submit" value="Kirish" />

                        <div onClick={() => setInOrOut(prev => !prev)} className="auth-singin">
                            <p className="auth-login">Ro'yhatga olmoq</p>
                            <i className="icon icon-auth fa-solid fa-angle-right"></i>
                        </div>
                    </form>
                </div>
            </div>}
        </div>
    )
}
 
export default Login;