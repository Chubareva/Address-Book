import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Controller from "../../app/controller";
import { getData } from "../../Redux/actions/dataActions";
import HeaderContainer from "../Header/HeaderContainer"
import RolesWrapper from "./RolesWrapper";

function RolesContainer (props){

    const [searchInput, setInput] = useState('');
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);

    useEffect(()=>{
        dispatch(getData('users'));
    },[]);
    
    const checkRole = (user) => {
        let role = sessionStorage.getItem('role');
        if(role == 'admin') {
            changeJob(user);
        }
    }

    const changeJob = (user) => {
        dispatch(getData(`users/job/${user}`));
    }

    const searchUsers = (e) => {
        let cardsController = new Controller('http://localhost:3030/api/');
        let inputText = searchInput.toUpperCase();
        if(!inputText){
            dispatch(getData('users'));
        }
        else{
            dispatch(getData(`users/search/${inputText}`));
        } 
    };


   
        return(
            <div>
                <HeaderContainer />
                <RolesWrapper  data={data} searchUsers={searchUsers} checkRole= {checkRole} searchUsers={searchUsers} searchInput={searchInput} onChange={(value) => {setInput(value)}}/>
            </div>
        )
    }

export default withRouter(RolesContainer);