// Librairies
import React, { useEffect } from 'react';
import classes from './Contact.module.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import routes from '../../Config/routes';



function Contact(props) {

    //ComponentDidUpdate
    useEffect(() => {
        document.title = 'Contact'; 
      });

    const navigate = useNavigate();

    // Fonctions
    const emailClickedHandler = () => {
        
        navigate(routes.CONTACT + '/email');
    }

    const callClickedHandler = () => {
        navigate(routes.CONTACT + '/telephone');
    }

    return (
        <>
            <h1>Contact</h1>
            <p>Par quel moyen de contact soyez-vous échanger ?</p>
            <button onClick={emailClickedHandler} className={classes.button}>johndoe@google.com</button>
            <button onClick={callClickedHandler} className={classes.button}>06.06.06.06.06</button>

            <Routes> 
                <Route path={routes.CONTACT  + "/email"} render={() => <p>Email</p>} />
                <Route path={routes.CONTACT  + "/telephone"} render={() => <p>Téléphone</p>} />
            </Routes> 
        </>
    );
}

export default Contact;