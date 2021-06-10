import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import SearchBlock from '../SearchBlock/SearchBlock';
import MainPage from './MainPage';
import HeaderContainer from '../Header/HeaderContainer';
import {useDispatch, useSelector } from 'react-redux';
import {getData, sortName, sortRoom, sortReverseName} from "../../Redux/actions/dataActions";

function MainPageContainer(props) {
    const [className, setClassName] = useState('users_cards_block');
    const [searchInput, setInput] = useState('');
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const cardredirect = (name) =>{
        sessionStorage.setItem('name', name)
    }

    useEffect(()=>{
        dispatch(getData('users'));
    },[]);


    const changeDirectionList = () => {
        setClassName(className + " display_items_list");
    };
    const changeDirectionBlock = () => {
        setClassName("users_cards_block");
    };
    
    const searchUsers = () => {
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
                <div className="wrapper">
                <SearchBlock searchUsers={searchUsers} searchInput={searchInput} onChange={(value) => {setInput(value)}} />
                <MainPage data={data}          
                className={className} 
                sortItemsForName={() => {dispatch(sortName(data, 'nameEN'))}}
                                                changeDirectionList={changeDirectionList}
                                                changeDirectionBlock={changeDirectionBlock}
                                                sortItemsForDepartment={() => {dispatch(sortName(data, 'job'))}}
                                                sortItemsForRoom={() => {dispatch(sortRoom(data))}}
                                               sortItemsForNameReverted={() => {dispatch(sortReverseName(data))}}
                                                cardredirect={cardredirect}
                                                />
                </div>
            </div>
        )
    }   


export default withRouter(MainPageContainer);