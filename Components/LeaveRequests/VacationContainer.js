
import React, { useEffect, useState } from "react"
import { withRouter } from "react-router-dom";
import Header from "../Header/Header";
import VacationDays from "./VacationDays";
import VacationForm from "./VacationForm";
import RequestsContainer from "../Requests/RequestsContainer"
import LeaveRequest from "./LeaveRequest";
import { useDispatch, useSelector } from "react-redux";
import { getData, getDataWithYear } from "../../Redux/actions/dataAction";
import Controller from "../../app/controller";
import { getYears } from "../../Redux/actions/requestAction";
import RequestFormPopUp from "../Requests/RequestFormPopUp";
import Modal from "react-modal";
import ConfirmPopUp from "../Requests/ConfirmPopUp";
let requestController = new Controller('http://localhost:3040/api/');



function VacationContainer(props) {
    const [startDate, setStartDate] = useState(new Date());
    const years = useSelector(state => state.years);
    const [endDate, setEndDate] = useState(startDate);
    const [style, setStyle] = useState('')
    const requestData = useSelector(state => state.requestData);
    const dispatch = useDispatch();
    const [isConfirm, setIsConfirm] = useState(false);
    const [status, setStatus] = useState(false);
    const [form, setForm] = useState({
        type : '',
        days: 0,
        comment:''
        
    });
    const [availableDays, setAvailableDays] = useState(147);
    const [isOpen, setIsOpen] = useState(false);
    const [logo, setLogo] = useState('./assets/vacation_logo.png');
    const [totalItem, setTotalItem] = useState();
    const [isForm, setIsForm] = useState(false);

    useEffect(() => {
        Modal.setAppElement('body');
        dispatch(getYears());
        dispatch(getData('requests'));
        
        },[]); 

    const updateForm = (value , field) => { 
        setForm({
          ...form,
          [field]: value
        });
      };
      

    const submitForm = (e) => {
        let today = new Date();
        let newDay = '';
        newDay = Math.floor(endDate - startDate)/ (1000 * 60 * 60 * 24);    
        updateForm(newDay, 'days');
        let newAvailableDays = availableDays - newDay
        setAvailableDays(newAvailableDays);
        console.log(newAvailableDays);
        let id = requestData.length + 1; 
       
        
            let param = `type=${form.type}&start_data=${startDate.getTime()}&end_data=${endDate.getTime()}&comment=${form.comment}&days=${newDay.toString()}&created=${today.getTime()}&id=${id}`;
            requestController.makeRequest("POST",'create-request', param);
            e.preventDefault(); 
            setStartDate(new Date());
            setEndDate(new Date());
            setStatus(true);
            dispatch(getData('requests'));
        
        

    }  

    const options = [
        { value: 'Vacation leave', label: 'Vacation leave' },
        { value: 'Sick leave', label: 'Sick leave' },
        { value: 'Own expense leave', label: 'Own expense leave' }
    ];
    const changePopUp = () => {
        setIsForm(!isForm);
    }
    const changeForm = (e) => {
        
        if(e.value == 'Own expense leave'){
            setLogo('./assets/own_expense_logo.png');
            setStyle('own_expense');
        }
        else if(e.value == 'Vacation leave'){
            setLogo('./assets/vacation_logo.png');
            setStyle('');
        }
        else if(e.value == 'Sick leave'){
            setLogo('./assets/sick_logo.png');
            setStyle('sick_request');
        }
        updateForm(e.value,'type');
}
    const getItem = (value) => {
        setTotalItem(value);
        togglePopup(value);
    }

    const getNewData = () => {
        years.map(elem => {
            dispatch(getDataWithYear(elem));
        })
    }
    const togglePopup = (value) => {
        setIsOpen(!isOpen);
        if(!isOpen){
            setEndDate(new Date(value.end_data));
            setStartDate( new Date(value.start_data)); 
        }
        // if(value){
        // setEndDate(new Date(value.end_data));
        // setStartDate( new Date(value.start_data));
        //}
    }
    const toggleConfirmPopUp = ()=>{
        debugger
        setIsConfirm(!isConfirm);
    }
    const deleteRequest = (item) => {
        console.log(item.id);
        requestController.makeRequest("GET", `delete-request/${item.id}`,'');
        togglePopup();
        dispatch(getData('requests'));
    }
    const changeRequest = (item) => {
        console.log(item);
        let today = new Date();
        let newDay;
        if(form.days == ''){
            newDay = Math.floor(endDate - startDate)/ (1000 * 60 * 60 * 24);
        }
        console.log(startDate);
        console.log(endDate);
        togglePopup();
        let params = `id=${item.id}&start_data=${startDate.getTime()}&end_data=${endDate.getTime()}&comment=${form.comment}&days=${newDay.toString()}&created=${today.getTime()}`
        requestController.makeRequest("POST", 'change-request',params);
        dispatch(getData('requests'));
    }



    return(
        <>
        <Header />
        <div className="wrapper_content">
        <div className="request_form">
            <VacationDays availableDays={availableDays}/>
            <VacationForm  submitForm={submitForm} onChange={updateForm} 
                startDate = {startDate} endDate = {endDate}
                form ={form} changeForm={changeForm} options={options} setStartDate={setStartDate}
                setEndDate={setEndDate} logo={logo} style={style} getNewData={getNewData}
            />
        </div>
        <div className="leaveRequest">
        {isConfirm && <ConfirmPopUp isOpen={isConfirm}/>}
        {isOpen && <RequestFormPopUp isOpen ={isOpen} onChange={updateForm} deleteRequest={deleteRequest}
          options={options} style={style} form ={form} isForm={isForm} item={totalItem}
           togglePopup={togglePopup} changePopUp={changePopUp} changeForm={changeForm} setStartDate={setStartDate} setEndDate={setEndDate} startDate={startDate}
           endDate={endDate} changeRequest={changeRequest}
           />}
            {/* {status ? <RequestsContainer years={years} totalItem={totalItem} requestData={requestData} togglePopup = {togglePopup} getItem={getItem} isOpen = {isOpen}/> :  <LeaveRequest />} */}
            <RequestsContainer years={years} totalItem={totalItem} requestData={requestData} togglePopup = {togglePopup} getItem={getItem} isOpen = {isOpen}/>
        </div>
        </div>
        </>
    )
}
 export default withRouter(VacationContainer)