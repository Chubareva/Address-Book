import {GET_DATA_SUCCESS} from "../types";
import Controller from "../../app/controller";


let cardsController = new Controller('http://localhost:3030/api/');


export function getData(url) {
    return (dispatch) => {
        cardsController.makeRequest("GET",url, '')
       .then(data => dispatch(getDataSuccess(data)))
    }
}

export function sortName(data, param) {
    return (dispatch) => {
        let sorted = data.sort((a, b) => a.param > b.param ? 1 : -1);
        dispatch(getDataSuccess([...sorted]))
    }
}

export function sortReverseName(data) {
    return (dispatch) => {
        let sorted = data.sort((a, b) => a.nameEN > b.nameEN ? -1 : 1);
        dispatch(getDataSuccess([...sorted]))
    }
}

export function sortRoom(data) {
    return (dispatch) => {
        let sorted = data.sort((a, b) => a.room - b.room );
        dispatch(getDataSuccess([...sorted]))
    }
}

export function getDataSuccess (data) {
    return {
        type: GET_DATA_SUCCESS,
        payload : data
    }
}






