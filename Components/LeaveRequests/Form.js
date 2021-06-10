import React from "react";
import Input from "../Input/Input";
import Hint from "./Hint/Hint"
import Select from "react-select";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const Form = (props) => {
    let today = new Date().toISOString().slice(0, 10);
    let minStartDate = new Date(props.startDate);
    let maxEndDate = new Date(props.endDate);
    
    return(
    <form onSubmit={props.submitForm} >
            <div className={props.style}>
               <label className="select_label" >New Request</label>
               <Select options={props.options} className="requests" onChange={props.changeForm} />
               <div className="important">
                    <p><strong>Important: </strong>Please bring the official confirmation of your sick leave from a medical establishment to Personnel Officer (Katsiaryna Barysik) as soon as you get it.</p>
                </div>
               <div className="date">
                <div className="start_date">
                <label>Start Date <span>(inclusive)</span></label>
                <DatePicker selected={props.startDate} minDate ={new Date(today)} onChange={date => props.setStartDate(date)} maxDate={maxEndDate} dateFormat="d MMM yyyy"  />
                </div>
                <div className="end_date">
                <label>End Date <span>(inclusive)</span></label>
                <DatePicker minDate={minStartDate || new Date(today)} selected={props.endDate} onChange={date => props.setEndDate(date)} dateFormat="d MMM yyyy"   />
                </div>
                <div className="amount_of_days">
                <div className="hint_wrapper">
                <label>Day(s) </label>
                <div className="hint">
                <Hint />
                <div className="hintText">
                    <p>The days calculated here are calendar days:</p>
                    <p><strong>Calendar days = Work days + Weekends</strong></p>
                    <p>Number of days can be adjusted by Personnel<br/> Officer (Katsiaryna Barysik) in accordance with <br/>the current legislation.</p>
                </div>
                </div>
                </div>

                
                <Input type="number" className="number_date" value={Math.floor((props.endDate - props.startDate) / (1000 * 60 * 60 * 24)) || 0} onChange={(value)=>{props.onChange(value,'days')}} />
                </div>
               </div>
               
               <div className="comment">
                   <label>Comment</label>
                   <textarea  onChange={(e)=>{props.onChange(e.target.value,'comment')}} />
               </div>
               <div className="submit_form">
                   <button className="submit_btn" onClick={props.submitForm}>submit</button>
                   <div className="faq">
                   <p>Have questions? </p>
                   <a> Read FAQ</a>
                   </div>
               </div>
               </div>
            </form>
    )
} 

export default Form;