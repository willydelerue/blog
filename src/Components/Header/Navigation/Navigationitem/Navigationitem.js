import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navigationitem.module.css';

function NavigationItem(props) {

    return (
        <li className={classes.NavigationItem}>
            <NavLink 
                exact={props.exact} 
                to={props.to} 
                activeclassname={classes.active}>
                {props.children}
            </NavLink>
                                    {/* activeStyle={color='yellow'} possible si on ne veut pas utiliser de classe*/}
        </li>
    )
}

export default (NavigationItem);