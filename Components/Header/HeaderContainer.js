import React, { useState }  from "react";
import { withRouter } from "react-router-dom";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import { resetIsAuth } from "../../Redux/actions/userActions";
 function HeaderContainer(props) {

    const dispatch  = useDispatch();

    const reset = () =>{
        sessionStorage.setItem('user', 'please log in');
        dispatch(resetIsAuth());
    }

        return (
            <div>
                <Header reset={reset} /> 
            </div>
            
        )
    }

export default withRouter(HeaderContainer);