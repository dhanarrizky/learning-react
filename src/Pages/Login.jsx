import React from "react";
import FormControl from './../Components/Inputs/FormControl'
import ButtonSubmit from './../Components/Buttons/PrimaryBtn'
import './style.css';

const LoginPage = () => {
    return (
        <div className="centering">
            <div className="login-page">
                <form action="#">
                    <h1>Login</h1>
                    <div className="group-item">
                        <FormControl typeInput="text" textContent="Entry Your Username"/>
                        <FormControl typeInput="password" textContent="Entry Your Password"/>
                        <ButtonSubmit textContent="Login"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;