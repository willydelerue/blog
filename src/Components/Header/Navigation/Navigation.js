//Librairies
import React from "react";
import NavigationItem from "./Navigationitem/Navigationitem";
import classes from './Navigation.module.css';

function Navigation() {
    return (
        <ul className={classes.Navigation}>
            <NavigationItem to="/" >Accueil </NavigationItem>  
            <NavigationItem to ="/articles">Articles </NavigationItem>
            <NavigationItem to ="/contact">Contact </NavigationItem>
        </ul>
    )
}

export default Navigation;