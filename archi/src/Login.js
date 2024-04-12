import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import './Login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/app')
    }
    return (
        <div className='login'>
            <div className='wrapper'>
                <form action="">
                    <h1>Connexion</h1>
                    <div className='input'>
                        <input type="text" placeholder="Nom d'utilisateur" required />
                        <FaUser className='icon' />
                    </div>
                    <div className='input'>
                        <input type="password" placeholder="Mot de passe" required />
                        <FaLock className='icon' />
                    </div>
                    <div className='remember-forgot'>
                        <label>
                            <input type="checkbox" />Se rappeler
                        </label>
                        <a href="#">Mot de passe oublié</a>
                    </div>
                    <button type="submit" onClick={handleClick}>Se connecter</button>
                    <div className='register-link'>
                        <p>Pas de compte ? <a href="#">Créer un compte</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;