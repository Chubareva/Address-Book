import React from "react"
function LeaveRequest(props) {
 return(
     <div className="request_part">
        <p className="request_title">My Leave Requests</p>
        <div className="mainPart">
            <img src = "./assets/illustration.png" alt ="laptop" />
            <p  className="request_sub_title">No vacation requests yet</p>
            <p className="request_description">As soon as you create your first request,<br/> you can find it here</p>
            
        </div>
     </div>
 )
}

export default LeaveRequest