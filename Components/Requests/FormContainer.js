import React from "react";
import Form from "../LeaveRequests/Form";
import Select from "react-select"
const FormContainer = (props) =>{
    return(
        <div className="form_wrapper">
        <Select className="requests" onChange={props.changeForm} isOptionDisabled={true} inputValue ={props.item.type}  />
            <Form onChange={props.onChange} startDate={props.startDate} setStartDate={props.setStartDate} setEndDate={props.setEndDate} endDate={props.endDate} item={props.item} form ={props.form} options={props.options} style={props.style} changeForm={props.changeForm}/>
            <div className = "footer_wrapper">
                <button className="change" onClick={props.changePopUp}>
                    <p>Cancel</p>
                </button>
                <button className="close" onClick={() => props.changeRequest(props.item)}>
                    <p>Save</p>
                </button>
                
            </div>
        </div>
    )
}

export default FormContainer;