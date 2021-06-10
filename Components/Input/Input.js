import React from "react";

const Input = ({onChange,type="text", ...props}) => <input onChange= {(e)=> {
                                                            onChange(e.target.value)} 
                                                            }
                                                            type={type}
                                                            {...props} /> 

export default Input;  