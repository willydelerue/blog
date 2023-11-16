//Librairies
import React, { useState} from "react";
import { checkValidity } from "../../../shared/utility";
import { useLocation, useNavigate } from "react-router-dom";
import classes from './Authentification.module.css';
import firebase from "../../../Config/firebase";

// Composants

import Input from "../../../Components/UI/Input/Input";
import routes from "../../../Config/routes";

function Authentification() {

    const location = useLocation();
    const navigate = useNavigate();

    //states

    const [inputs, setInputs] = useState({
            email: {
                elementType  : 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: "Email"
                },
                value: '',
                label: 'Adresse email',
                valid: false,
                validation : {
                    required  : true,
                    email : true
                },
                touched: false,
                error : "L'adresse email n'est pas valide."
            },
            password: {
                elementType  : 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: "Mot de passe"
                },
                value: '',
                label: 'Mot de passe',
                valid: false,
                validation : {
                    required  : true,
                },
                touched: false,
                error : "Le mot de passe est invalide."
            }
        });

    const [valid, setValid] = useState(location.state && location.state.article ? true : false);

    // Fonctions
        
    const inputChangedHandler =(event, id) => {

        // Change la valeur
        const nouveauxInputs = {...inputs};
        nouveauxInputs[id].value = event.target.value;
        nouveauxInputs[id].touched = true;
    

        // Vérification de la valeur
        nouveauxInputs[id].valid = checkValidity(event.target.value, nouveauxInputs[id].validation);
        setInputs(nouveauxInputs);

        // Vérification du formulaire
        let formIsvalid = true;
        for (let input in nouveauxInputs) {
            formIsvalid = nouveauxInputs[input].valid && formIsvalid;
        }
        setValid(formIsvalid);
    };

    const registerClickedHandler = () => {

        const user = {
            email: inputs.email.value,
            password: inputs.password.value
        }

        console.log(user);

        navigate(routes.HOME);
    } 

    const loginClickedHandler = () => {

        const user = {
            email: inputs.email.value,
            password: inputs.password.value
        }

        console.log(user);

        navigate(routes.HOME);

    }
    // Variables
    const formElementsArray = [];
    for (let key in inputs) {
        formElementsArray.push({
            id: key,
            config: inputs[key]
        });
    }

    const formHandler = event => {
        event.preventDefault();
    }

    let form = (
        <form onSubmit={(e) => formHandler(e)}>
            {formElementsArray.map(formElement => (
                <Input 
                    key     = {formElement.id}
                    id      = {formElement.id}
                    value   = {formElement.config.value}
                    label   = {formElement.config.label}
                    type    = {formElement.config.elementType}
                    config  = {formElement.config.elementConfig}
                    valid   = {formElement.config.valid}
                    touched = {formElement.config.touched}
                    error   = {formElement.config.error}
                    changed ={(e) => inputChangedHandler(e, formElement.id)}
                />
            ))}
            <div className={classes.buttons}>
                <button onClick={registerClickedHandler} disabled={!valid} className={classes.button}>Inscription</button>
                <button onClick={loginClickedHandler} disabled={!valid} className={classes.button}>Connexion</button>
            </div>
        </form>
    );
        

    return (
        <>
            <h1>Authentification</h1>
            <div className={classes.form}>
                {form}
            </div>
        </>
    );
}

export default Authentification;