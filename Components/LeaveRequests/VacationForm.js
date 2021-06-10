import React from "react"
import Form from "./Form"
const VacationForm = (props) =>{
    
    return (
        <div className="vocation_form">
            <img src = {props.logo} alt="vacation" className=" vocation_form_img"   />
            <Form submitForm={props.submitForm} onChange={props.onChange} 
                startDate = {props.startDate} endDate = {props.endDate}
                form ={props.form} changeForm={props.changeForm} options={props.options} setStartDate={props.setStartDate}
                setEndDate={props.setEndDate} logo={props.logo} style={props.style} getNewData={props.getNewData}/>
        </div>
    )
}

export default VacationForm;