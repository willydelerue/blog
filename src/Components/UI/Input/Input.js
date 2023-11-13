//Librairies

import React from "react";
import classes from "./Input.module.css";

function Input(props) {

    let inputElement;
    const inputClasses = [];

    if(!props.valid && props.touched) {
        inputClasses.push(classes.invalid);
    }

    switch (props.type) {
        case ('input'):
            inputElement = (
            <input 
                {...props.config} 
                value={props.value}
                className={inputClasses}
                id={props.id}
                onChange={props.changed}    
                />
                );
                break;
            case('textarea'):
                inputElement= (
                    <textarea 
                    value={props.value}
                    className={inputClasses}
                    id = {props.id}
                    onChange={props.changed}    >

                    </textarea>
                )
                break;
            case('select'):
                inputElement= (
                    <select 
                        value={props.value} 
                        className={inputClasses}
                        id={props.id}    
                        onChange={props.changed}>
                            {props.config.options.map(option => (
                                <option 
                                key = {option.value} 
                                value={option.value}
                                >
                                    {option.displayValue}
                                </option>
                        ))}
                    </select>
            );
            break;
    }

    return (
        <div className={classes.Input}> 
            <label htmlFor={props.id}>{props.label}</label>
             {inputElement} 
             {!props.valid && props.touched ? <span>{props.error}.</span> : null}
        </div>

    );
}

export default Input;