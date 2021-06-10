import React from "react";
import ListView from "./ListView";
import MainCardPage from "./MainCardPage"

const MainPage = (props) => {
        return(
            <div className={props.className}>
                       <ListView data={props.data} changeDirectionBlock={props.changeDirectionBlock} changeDirectionList={props.changeDirectionList}
                       sortItemsForName={props.sortItemsForName} 
                       sortItemsForNameReverted={props.sortItemsForNameReverted} 
                       sortItemsForDepartment={props.sortItemsForDepartment}
                       sortItemsForRoom={props.sortItemsForRoom} />
                        <div className="cards">
                        {props.data.map(element => {return <MainCardPage element={element} key={element.ID} cardredirect={props.cardredirect}/>})}
                        </div>        
                </div>

        )
    }



export default MainPage;