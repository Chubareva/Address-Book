import { GET_AUTHORIZATION } from "../types";
import { SET_AUTHORIZATION } from "../types";
import {RESET_IS_AUTH} from '../types';
import Controller from "../../app/controller";
let cardsController = new Controller('http://localhost:3030/api/');


export function getUser(url) {
    return (dispatch) => {
        cardsController.makeRequest("GET",url,'')
           .then(result => {
            if(result != '') {
                result.forEach(element => {
                sessionStorage.setItem('user' , element.login);
                sessionStorage.setItem('role' , element.role)})
                dispatch(setAuthorization(true));
            }
            else{
                alert("some error. please try again");
                dispatch(setAuthorization(false));
            }
           });
    }
}

export function getLogin(url, param, urlForUser) {
    return (dispatch) => {
        cardsController.makeRequest("GET",url,'')
           .then(result => {
            if(result != '') {
                alert("create another login, please");
                dispatch(setAuthorization(false))
            }
            else{
                cardsController.makeRequest("POST",urlForUser,param)
                .then(()=>dispatch(setAuthorization(true)))
            }
           });
    }
}



export function setAuthorization (isAuth) {
    return {
        type: SET_AUTHORIZATION,
        payload : isAuth
    }
}

export function resetIsAuth() {
    return{
        type: RESET_IS_AUTH,
        payload: false
    }
}

export function getIsAuth() {
    return{
        type: GET_AUTHORIZATION
    }
}




