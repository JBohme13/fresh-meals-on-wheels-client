import React from 'react'
import Button from '../formComponents'
import 'Header.css'

export default function Header (props) {
    if (props.nav) {
        let navProps = 
            <Button
                name={nav.props.name}
                id={nav.id}
                className='nav'
                onClick={nav.onClick}
            />;
        return navProps
    } else {
        let navProps = <></>;
        return navProps;
    };  
    return(
        <Fragment>
            <h1>{props.name}</h1>
            {navProps}
        </Fragment>
    )
}