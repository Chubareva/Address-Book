import React from "react";

const Label  = props => {
    return(
        <label {...props} className="label" > {props.text} </label>
    )
}