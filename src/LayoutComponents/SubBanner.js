import React from 'react'
import './SubBanner.css'

export default function SubBanner(props) {
    if (props.className) {
        return(
            <h3 id='sub-banner' className={props.className}>{props.name}</h3>
        )
    } else {
        return(
            <h3 id='sub-banner'>{props.name}</h3>
        )
    }
};