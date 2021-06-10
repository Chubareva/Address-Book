import React, { useEffect, useState } from "react";
import Registration from "./Registration";
import { withRouter} from "react-router-dom";
import HeaderContainer from "../Header/HeaderContainer";
import MainPageContainer from "../MainPage/MainPageContainer";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth, createAccount, getLogin } from "../../Redux/actions/userActions";
function RegistrationContainer(props) {

        const dispatch  = useDispatch();
        const isAuth = useSelector(state => state.isAuth);
        const [data, setData] = useState({
            login:'',
            password:''
            
        });
        const [role, setRole] = useState('');
        const [styleEditor, setStyleEditor] = useState('');
        const [styleUser, setStyleUser] = useState('');
        useEffect(()=>{
            dispatch(getIsAuth());
        },[]);
        
    const getEditorRole  = (e) =>{
        e.preventDefault(); 
        sessionStorage.setItem('role', "Editor");
        setStyleUser('disactive');
        setStyleEditor('active');
        setRole('User');
    }  
    const getUserRole  = (e) =>{
        e.preventDefault(); 
        setStyleUser("active");
        setStyleEditor("disactive");   
        sessionStorage.setItem('role', "User");
        setRole('Editor');
    }  
    const createNewUser = (e) => {
        e.preventDefault(); 
        sessionStorage.setItem('user',data.login);
        sessionStorage.setItem('role',role);
        let param = `login=${data.login}&password=${data.password}&role=${role}`;
        let urlForUser = "create-account";
        dispatch(getLogin(`accounts/${data.login}`, param, urlForUser));
        
    }


    const updateData = (value , field) => {
        setData({
          ...data,
          [field]: value
    })};

        return(
        <div>
        <HeaderContainer />
        {isAuth  ? <MainPageContainer /> : <Registration   onChange={updateData}
                                                                        login={data.login} 
                                                                        password={data.password} 
                                                                        getUserRole = {getUserRole}
                                                                        createNewUser={createNewUser} 
                                                                        getEditorRole={getEditorRole} 
                                                                        getUserRole={getUserRole}
                                                                        styleEditor = {styleEditor}
                                                                        styleUser = {styleUser}
                                                                        />}
        </div>
        )
    }

export default withRouter(RegistrationContainer);