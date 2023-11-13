//Librairies

import React, { useState } from "react";

// composants
import Input from '../../../Components/UI/Input/Input';

function Ajouter() {

    const [inputs, setInputs] = useState({
            titre: {
                elementType  : 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Titre de l'article"
                },
                value: ' ',
                label: 'Titre'
            },
            contenu: {
                elementType: 'textarea',
                elementConfig: {},
                value: '',
                label: "Contenu de l'article"
            },
            auteur: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:"Auteur de l'article"
                },
                value: '',
                label: 'Auteur'
            }
        });

    // Variables
    const formElementsArray = [];
    for (let key in inputs) {
        formElementsArray.push({
            id: key,
            config: inputs[key]
        });
    }

    let form = (
        <form>
            {formElementsArray.map(formElement => (
                <Input 
                    key    = {formElement.id}
                    value  = {formElement.config.value}
                    label  = {formElement.config.label}
                    type   = {formElement.config.elementType}
                    config = {formElement.config.elementConfig}
                />
            ))}
        </form>
    );

    return ( 
        <>    
            <h1>Ajouter</h1>
            {form}
        </>
    );
}

export default Ajouter;