
import {GET_AUTHORIZATION} from "../types";
import {SET_AUTHORIZATION} from "../types";
import {RESET_IS_AUTH} from '../types';

export default function dataReducer (state=false, action) {
    switch (action.type){
        case SET_AUTHORIZATION:
            return action.payload.isAuth;
        case RESET_IS_AUTH:
            return action.payload
        case GET_AUTHORIZATION:
            return state 
        default :
        return state
    }
    
}