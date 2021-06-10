import {GET_YEARS_SUCCESS} from "../types"


export default function dataReducer (state = [], action) {
    
    switch (action.type){
        case GET_YEARS_SUCCESS:
            return action.payload;
        default :
        return state
    }
    
}