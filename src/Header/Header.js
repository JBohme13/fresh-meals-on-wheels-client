import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

export default function Header(props) {
    return(
        <Fragment>
        {
            props.mainNavLinks.map((nav, i) => {
                return(
                    <NavLink
                        key={i}
                        className='mainNav'
                        id={nav.id}
                        to={nav.to}
                    >
                        {nav.name}
                    </NavLink>
                )
            })
        }
        </Fragment>
    )
}