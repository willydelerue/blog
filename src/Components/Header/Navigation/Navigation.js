//Librairies
import React from "react";
import classes from './Navigation.module.css';


//Composants
import NavigationItem from "./Navigationitem/Navigationitem";

function Navigation() {
    return (
        <ul className={classes.Navigation}>
            <NavigationItem exact = {true.toString()} to="/">Accueil </NavigationItem>  
            <NavigationItem to ="/articles">Articles </NavigationItem>
            <NavigationItem to="/contact">Contact </NavigationItem>
        </ul>
    )
}

export default Navigation;