import React from "react";

import RequestFormPopUp from "./RequestFormPopUp";

const Requests = (props) =>{
    
  let requestIcon;
  if(props.item.type == 'Own expense leave'){
      requestIcon = './assets/Own_expense.png';
  } else if(props.item.type == 'Vacation leave'){
    requestIcon = './assets/Vacation_request.png';
  } else requestIcon = './assets/Sick_leave.png';
    return(
            <div className="wrapper_items" onClick={()=>{props.getItem(props.item)}}>
            
                <div className="icon">
                    <img src ={requestIcon}/>
                </div>
                <div className="request_info">
                    <div className="period">
                        <p>{props.item.type}: </p>
                        <p>{props.item.start_data} - </p>
                        <p>{props.item.end_data}</p>
                        <p>({props.item.days} days)</p>
                    </div>
                    <div className="created">
                    <p>Created:</p>
                    <p>{props.item.created}</p>
                    </div>
                    <p className="status"> Approved</p>
                </div>
            </div>
     
    )
}
export default Requests;