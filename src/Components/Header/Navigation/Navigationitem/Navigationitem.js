//Librairies
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigationitem.module.css';
import PropTypes from 'prop-types';
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

NavigationItem.propTypes = {
    exact: PropTypes.bool,
    to: PropTypes.string,
    children: PropTypes.string
};

export default NavigationItem;