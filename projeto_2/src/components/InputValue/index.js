import React from "react";

function InputValue(props) {
    return (
        <input type={props.type} value={props.value} onChange={(e) => {props.change(e.target.value)}} />
    )
}

export default InputValue