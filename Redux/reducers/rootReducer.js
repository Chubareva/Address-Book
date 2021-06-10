

import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import userInfoReducer from "./userInfoReducer";
import requestReducer from "./requestReducer";
import dataRequestReducer from "./dataRequestReducer";
export default  combineReducers ({
    data : dataReducer, 
    isAuth : userInfoReducer,
    requestData: dataRequestReducer,
    years: requestReducer
})