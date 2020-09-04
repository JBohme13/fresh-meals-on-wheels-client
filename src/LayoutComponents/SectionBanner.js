import React from 'react'
import './SectionBanner.css'

export default function SectionBanner(props) {
    if (props.className) {
        return(
            <h2 id='section-banner' className={props.className}>{props.name}</h2>
        )
    } else {
        return(
            <h2 id='section-banner'>{props.name}</h2>
        )
    }
}