import React from 'react';
import '../../style/mainPage.scss';
import Input from '../Input/Input';

 const SearchBlock = (props) =>{

    
        return(
            <div className="search_block">
            <div className="search_list">
                <a className="search_link search_link_active">basic search</a>
                <a className="search_link list_link_disabled">advanced search</a>
            </div>
            <div className="search_form">
                <button type="search" className="search_icon"><i className="fas fa-search"></i></button>
                <Input placeholder="John Smith / Джон Смит" value = {props.searchInput} onChange={props.onChange} onKeyDown={props.searchUsers} className="search_input" />
                <button className="search_btn"onClick={props.searchUsers} > search</button>
            </div>
        </div>
        )
    }

export default SearchBlock;

