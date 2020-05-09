import React, { Fragment } from 'react';
import Button from '../FormComponents/Button';
import './Header.css'

export default function Header (props) {
let navProps = props.nav;
if (navProps) {
let navProps = 
    <Button
        name={navProps.name}
        id={navProps.id}
        className='nav'
        onClick={navProps.onClick}
    />;
    return navProps;
} else {
   let navProps = <></>;
   return navProps;
}; 
return(
    <Fragment>
        <h1>{props.name}</h1>
        {navProps}
         
    </Fragment>
);
}