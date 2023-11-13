// Librairies
import React from 'react';
import classes from './Navigation.module.css';
import routes from '../../../routes';

// Composants
import NavigationItem from './Navigationitem/Navigationitem';

function Navigation() {
    return (
        <ul className={classes.Navigation}>
            <NavigationItem exact to={routes.HOME}>Accueil</NavigationItem>
            <NavigationItem to={routes.ARTICLES}>Articles</NavigationItem>
            <NavigationItem to={routes.CONTACT}>Contact</NavigationItem>
            <NavigationItem to={routes.AJOUTER}>Ajouter</NavigationItem>
        </ul>
    );
}

export default Navigation;