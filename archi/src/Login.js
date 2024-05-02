import React, { useRef, useEffect, useState, useContext} from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import './Login.css'
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthProvider';
import axios from './api/Axios';

const LOGIN_URL = '/auth'

function Login() {
    // const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate('/app')
    // }

    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const[success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
 
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({user, pwd}),
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            }
        );
        console.log(JSON.stringify(response?.data))
        const accessToken = response?.data.accessToken;
        const roles = response?.data.roles;
        setAuth({ user, pwd, roles, accessToken })
            setUser("");
            setPwd("");
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No server Response");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing Username or Password");
            } else if (err.response?.status === 401) {
                setErrMsg("Unothorized");
            } else {
                setErrMsg("Login Failed")
            }
        }
        errRef.current.focus();

        setSuccess(true);
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in §</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
        <section className='login'>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Connexion</h1>
                    <div className='input'>
                        <input  
                            type="text" 
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            placeholder="Nom d'utilisateur" 
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required />
                        <FaUser className='icon' />
                    </div>
                    <div className='input'>
                        <input 
                            type="password" 
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            placeholder="Mot de passe" 
                            required />
                        <FaLock className='icon' />
                    </div>
                    <div className='remember-forgot'>
                        <label>
                            <input type="checkbox" />Se rappeler
                        </label>
                        <a href="#">Mot de passe oublié</a>
                    </div>
                    <button type="submit">Se connecter</button>
                    <div className='register-link'>
                        <p>Pas de compte ? <a href="#">Créer un compte</a></p>
                    </div>
                </form>
            </div>
        </section>
            )}
            </>
    );
};

export default Login;