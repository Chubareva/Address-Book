import React from "react";
import Modal from 'react-modal';
import Requests from "./Requests";
import Approved from "./Approved";
import FormContainer from "./FormContainer";

const RequestFormPopUp = (props) => {

    const customStyles = {
        content : {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width:'500px',  
          padding: '0'
          
        }
      };
      let style;
      if(props.item.type == 'Own expense leave'){
        style = 'own_expense';
    }
    else if(props.item.type == 'Vacation leave'){
      style = '';
    }
    else if(props.item.type == 'Sick leave'){
      style = 'sick_request';
    }


    return(
        <Modal
        isOpen={props.isOpen}
        style={customStyles}
        contentLabel="Example Modal">
            <div className="modal">
                <div className="modal_title">
                    <p>Change request</p>
                </div>
                <Requests item={props.item}/>
                <hr/>
                {!props.isForm ? <Approved item={props.item} deleteRequest={props.deleteRequest} changePopUp={props.changePopUp} togglePopup={props.togglePopup}/> : 
                <FormContainer onChange={props.onChange} startDate={props.startDate} endDate={props.endDate}
                 item={props.item} form ={props.form} options={props.options} style={props.style} setStartDate={props.setStartDate} setEndDate={props.setEndDate}
                    changePopUp={props.changePopUp} style={style} changeForm={props.changeForm} changeRequest={props.changeRequest } />}
            
            </div>
      </Modal>
    )
}

export default RequestFormPopUp;