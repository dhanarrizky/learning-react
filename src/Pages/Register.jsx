import React from "react";
import FormControl from './../Components/Inputs/FormControl'
import ButtonSubmit from './../Components/Buttons/PrimaryBtn'
import './style.css';

const RegisterPage = () => {
    return (
        <div className="centering">
            <div className="login-page">
                <form action="#">
                    <h1>Register</h1>
                    <div className="group-item">
                        <FormControl typeInput="text" textContent="Entry Your Username"/>
                        <FormControl typeInput="password" textContent="Entry Your Password"/>
                        <FormControl typeInput="password" textContent="Confirm Password"/>
                        <FormControl typeInput="text" textContent="First Name"/>
                        <FormControl typeInput="text" textContent="Last Name"/>
                        <FormControl typeInput="date" textContent="Birth Date"/>
                        <div>
                            <FormControl typeInput="radio" nameInput="gander"/>
                            <FormControl typeInput="radio" nameInput="gander"/>
                        </div>
                        <FormControl typeInput="text" textContent="CityzenShip"/>
                        <FormControl typeInput="text" textContent="ID Number"/>
                        <ButtonSubmit textContent="Register"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;