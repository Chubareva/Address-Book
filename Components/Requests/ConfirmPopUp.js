import React from "react";
import Modal from "react-modal"
import Requests from "./Requests";
const ConfirmPopUp = (props) => {
    debugger
    const customStyles = {
        content : {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width:'520px',
          padding: '0'
          
        }
      };
    return(
        <Modal isOpen={props.isConfirm}
        style={customStyles}
        contentLabel="Example Modal">
            <div className="confirmModal">
                <div className="confirmTitle">
                    <p>Request a vacation</p>
                </div>
                <div className="confirmText">
                    <p>We know you must be tired. But please consider shoter vacation. How about 2 weeks?</p>
                </div>
                <div className="confirmRequest">
                    <Requests />
                </div>
                <div className="confirmButtons">
                    <button className="confirm"><p>Confirm anyway</p></button>
                    <button className="changeDates"><p>change dates</p></button>
                </div>
            </div>
        </Modal>
    )
}

export default ConfirmPopUp;