import React, { useEffect, useState }  from "react";
import { withRouter } from "react-router-dom";
import Login from "./Login";
import HeaderContainer from "../Header/HeaderContainer";
import MainPageContainer from "../MainPage/MainPageContainer";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth, getUser } from "../../Redux/actions/userActions";
 function LoginContainer(props) {
    const [data, setData] = useState({
        login:'',
        password:''
        
    });
    
    const dispatch  = useDispatch();
    const isAuth = useSelector(state => state.isAuth);
    useEffect(()=>{
        dispatch(getIsAuth());
    },[]);
    const updateData = (value , field) => {
        setData({
          ...data,
          [field]: value
        });
      };

   const  createNewUser = (e) => {
        e.preventDefault();
        let url = `accounts/${data.login}/${data.password}`;
        dispatch(getUser(url));
    }

        return (
            <div>
                <HeaderContainer />
                { isAuth ? <MainPageContainer /> : <Login login={data.login} 
                                                                                            password={data.password} 
                                                                                            onChange={updateData}
                                                                                            createNewUser={createNewUser} />}
                
            </div>
            
        )
    }

export default withRouter(LoginContainer);