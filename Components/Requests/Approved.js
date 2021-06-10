import React from "react";

const Approved = (props) =>{
    return(
        <div className="personalApproved">
        <div className="approved">
                        <div className="already_approved">
                            <div className="title">
                                <p>Already approved</p>
                            </div>
                            <div className="item_wrap">
                                <img src="./assets/approved.png"/>
                                <div className="personal_status">
                                    <p className="lastName">John Smith</p>
                                    <p className="personalComment">Comments: Have a nice vacation!</p>
                                </div>
                            </div>
                        </div>
                        <div className="current_approved">
                            <div className="title">
                                <p>Current approver(s)</p>
                            </div>
                            <div className="item_wrap">
                                <img src="./assets/BitmapMan.png"/>
                                <div className="personal_status">
                                    <p className="lastName">Will McConnel</p>
                                </div>
                            </div>
                        </div>
                        <div className="current_approved">
                            <div className="title">
                                <p>Documents registration (final step)</p>
                            </div>
                            <div className="item_wrap">
                                <img src="./assets/Bitmap.png"/>
                                <div className="personal_status">
                                    <p className="lastName">Katrin Brown</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "footer_wrapper">
                            <button className="decline" onClick={()=>{props.deleteRequest(props.item)}}>
                                <p>decline request</p>
                            </button>
                            <button className="change" onClick={props.changePopUp}>
                                <p>change</p>
                            </button>
                            <button className="close" onClick={props.togglePopup}>
                                <p>close</p>
                            </button>
                        </div>
                    </div>
    )
}

export default Approved;