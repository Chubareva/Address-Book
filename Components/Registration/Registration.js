import React from "react";

import { BrowserRouter, Link, NavLink, Route } from "react-router-dom";
import '../../style/registrationPage.scss';
import Input from "../Input/Input";

const Registration = (props) => {

    return (
        <div className="wrapper">
            <form className="registration_block" onSubmit={props.createNewUser}>
                <div className="sign_up">
                    <h1>Sign up</h1>
                    <p>who you are?</p>
                </div>
                <div className="icons_role">
                    <div className="user_icon">
                        <button className={props.styleUser} onClick={props.getUserRole}><i className="fa fa-user-plus"></i>User</button>
                    </div>
                    <div className="editor_icon">
                        <button className={props.styleEditor} onClick={props.getEditorRole}><i className="fa fa-user-edit"></i>Editor</button>
                    </div>
                </div>
                <div className="input_block" >
                    <Input placeholder="Username" value={props.login} onChange={(value)=>{props.onChange(value,'login')}} />
                    <Input placeholder="Password" type="password" value={props.password} onChange={(value)=>{props.onChange(value,'password')}} />
                </div>
                <div className="sign_block_btn">
                    <button className="sign_btn">sign up</button>
                </div>
                <div className="login_block">
                    <p>Already have an account.
                <Link to="/login" >Login here</Link>
                    </p>
                </div>

            </form>
        </div>
    )
}
export default Registration;