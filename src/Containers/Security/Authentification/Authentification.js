//Librairies
import React, { useState} from "react";
import { checkValidity } from "../../../shared/utility";
import { useLocation, useNavigate } from "react-router-dom";
import classes from './Authentification.module.css';
import fire from "../../../Config/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

// Composants

import Input from "../../../Components/UI/Input/Input";
import routes from "../../../Config/routes";

function Authentification() {

    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth(fire);

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
                    minLength : 6
                },
                touched: false,
                error : "Le mot de passe doit faire au minimum 6 caractères."
            }
        });

    const [valid, setValid] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [loginError, setLoginError] = useState(false);
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
        };
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then(response => {
                navigate(routes.HOME);
            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                            setEmailError(true);                      
                        break;
                }
                console.log(error.code);
                console.log(error.message);
            });      
    };

    const loginClickedHandler = () => {

        const user = {
            email: inputs.email.value,
            password: inputs.password.value
        }

        signInWithEmailAndPassword(auth, user.email, user.password)
            .then ((userCredential) => {
                const user = userCredential.user;
            })
            .then(response => {
                navigate(routes.HOME);
            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/invalide-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        setLoginError(true);                      
                        break;
                }
                console.log(error.code);
                console.log(error.message);
            });

        

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
                {loginError ? <div className={classes.alert}>Impossible de vous authentifier.</div> : null}
                {emailError ? <div className={classes.alert}>Cette adresse email est déjà utilisée.</div> : null}
                {form}
            </div>
        </>
    );
}

export default Authentification;