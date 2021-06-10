import React from "react";
import {NavLink } from "react-router-dom";
import '../../style/registrationPage.scss';
import Input from "../Input/Input";
const Login=(props) => {

        return(
            <div className="wrapper">
                <form className="login_form" onSubmit={props.createNewUser}>
                    <div className="sign_up">
                        <h1>Log In</h1>
                    </div>
                    <div className="input_block">  
                    <Input placeholder="Username" value={props.login} onChange={(value)=>{props.onChange(value,'login')}}/>
                    <Input placeholder="Password" type="password" value={props.password} onChange={(value)=>{props.onChange(value,'password')}} />
                    </div>
                    <div className="sign_block_btn">
                        <button className="sign_btn_log" >submit</button>
                    </div>
                    <div className="login_block">
                        <p>Already haven't an account. <NavLink to='/' className="login_redirect">Sign up here</NavLink></p>
                    </div>
                </form>
            </div>
        )
    }


export default Login;