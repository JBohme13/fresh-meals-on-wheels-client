import React from 'react'
import './Button.css'

export default function Button(props){
    if (props.className) {
        return(
            <button
                id='button'
                className={props.className}
                onClick={props.onClick}
                type={props.type}
            >
                {props.name}
            </button>
        )
    } else {
        return(
            <button
                id='button'
                onClick={props.onClick}
                type={props.type}
            >
                {props.name}
            </button>
        )
    }
}