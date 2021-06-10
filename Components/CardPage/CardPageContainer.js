import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import HeaderContainer from '../Header/HeaderContainer';
import CardPage from './CardPage';
import { useDispatch, useSelector } from 'react-redux';
import {getData} from "../../Redux/actions/dataActions";

function CardPageContainer(props){

    const dispatch = useDispatch();
    const card = useSelector(state => state.data);
    
    useEffect(() => {
        let name = sessionStorage.getItem('name');
        dispatch(getData(`user/search/${name}`));
    },[]);

        return(
                <div>
                    <HeaderContainer />
                    {card.map(element => {return  <CardPage element={element} key={element.ID}/>})}

                </div>
        )
} 

export default withRouter(CardPageContainer);