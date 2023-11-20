// Librairies
import React from 'react';
import classes from './Navigation.module.css';
import routes from '../../../Config/routes';
import fire from '../../../Config/firebase';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

// Composants
import NavigationItem from './Navigationitem/Navigationitem';

function Navigation(props) {

    //React router v6
    let navigate = useNavigate();

    //Firebase
    const auth = getAuth(fire);

    //Functions
    const logoutClickedHandler = () => {
        signOut(auth);
        navigate(routes.HOME);
    };

    return (
        <ul className={classes.Navigation}>
            <NavigationItem exact to={routes.HOME}>Accueil</NavigationItem>
            <NavigationItem to={routes.ARTICLES}>Articles</NavigationItem>
            <NavigationItem to={routes.CONTACT}>Contact</NavigationItem>
            {props.user ? <NavigationItem to={routes.MANAGE_ARTICLE}>Ajouter</NavigationItem> : null}
            {!props.user ? <NavigationItem to={routes.AUTHENTIFICATION}>Authentification</NavigationItem> : null}
            {props.user ? <button onClick={logoutClickedHandler} className={classes.logout}>Déconnexion</button> : null}
        </ul>
    );
}

export default Navigation;