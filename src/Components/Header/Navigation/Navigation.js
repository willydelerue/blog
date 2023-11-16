// Librairies
import React from 'react';
import classes from './Navigation.module.css';
import routes from '../../../Config/routes';
import fire from '../../../Config/firebase';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

// Composants
import NavigationItem from './Navigationitem/Navigationitem';

function Navigation() {

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
            <NavigationItem to={routes.MANAGE_ARTICLE}>Ajouter</NavigationItem>
            <NavigationItem to={routes.AUTHENTIFICATION}>Authentification</NavigationItem>
            <button onClick={logoutClickedHandler} className={classes.logout}>Déconnexion</button>
        </ul>
    );
}

export default Navigation;