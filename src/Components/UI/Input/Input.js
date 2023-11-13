import React from "react";

function Input(props) {
    return (
        <div>
            <label>{props.label}</label>
            <input value={props.value} />
        </div>

    );
}

export default Input;