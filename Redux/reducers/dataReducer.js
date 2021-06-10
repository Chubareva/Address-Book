import {GET_DATA_SUCCESS} from "../types"


export default function dataReducer (state = [], action) {
    switch (action.type){
        case GET_DATA_SUCCESS:
            return action.payload.data;
        default :
        return state
    }
    
}