import React from 'react'
import './LabelBanner.css'

export default function LabelBanner(props) {
    return(
        <h3 id='labelBanner'>{props.name}</h3>
    )
}