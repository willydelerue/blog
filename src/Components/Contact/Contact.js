import React from "react";
import classes from "./Contact.module.css";
import { Route, Routes } from "react-router-dom";

function Contact(props) {

    // Fonctions
    const emailClickHandler = () => {
        props.history.push(props.match.url + '/email');
    }

    const callClickHandler = () => {
        props.history.push(props.match.url + '/telephone');
    }


    return (
        <>
            <h1>Contact</h1>
            <button onClick={emailClickHandler} className={classes.button}>Email</button>
            <button onClick={callClickHandler} className={classes.button}>Téléphone</button>

        <Routes>
            <Route path={props.match.url + "email"} render={() => <p>Email</p>}/>
            <Route path={props.match.url + "telephone"} render={() => <p>Téléphone</p>}/>
        </Routes>
        </>
    );
}

export default Contact;