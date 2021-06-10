import React from "react"

const VacationDays = (props) =>{
    return (
        <div className="vocation_days">
        <div className="content">
            <div className="title">
                <p>Vacation Days</p>
            </div>
            <div className="sub_title">
                <p className="sub_title_available">Available</p>
                <p className="days">{props.availableDays}</p>
            </div>
            </div>
            <div className="rectangle"><p><i className="fa fa-angle-double-down"></i> more details</p></div>
        </div>
    )
}

export default VacationDays;