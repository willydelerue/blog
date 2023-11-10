import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigationitem.module.css';

function NavigationItem(props) {
    return (
        <li className={classes.NavigationItem}>
            <NavLink 
                exact={"true" + props.exact} 
                to={props.to} 
                activeclassname={classes.active}>
                {props.children}
            </NavLink>
        </li>
    );
}

export default NavigationItem;