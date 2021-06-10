import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import RegistrationContainer from "./Registration/RegistrationContainer";
import LoginContainer from "./Login/LoginContainer"
import MainPageContainer from "./MainPage/MainPageContainer"
import CardPageContainer from "./CardPage/CardPageContainer";
import RolesContainer from "./Roles/RolesContainer";
import VocationContainer from "./Vocation/VocationContainer";

const App = () => {

        return(
            <BrowserRouter>
            <Route exact path="/roles"><RolesContainer /></Route>
            <Route exact path="/"> <VocationContainer /></Route>
            <Route exact path="/login"><LoginContainer /></Route>
            <Route exact path="/main"><MainPageContainer /></Route>
            <Route exact path="/card"><CardPageContainer /></Route>
        
            </BrowserRouter>
        )
}

export default App;