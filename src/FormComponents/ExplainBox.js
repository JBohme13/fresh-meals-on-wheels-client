import React from 'react'
import './ExplainBox.css'

export default function ExplainBox(props) {
    return (
        <section id='explain-container'>
            <label 
                htmlFor='explain-box'
                className='explain-label'
            >
                {props.name}
            </label>
            <textarea
                type='text'
                id={props.id}
                className='explain-box'
                aria-required='true'
            >   
            </textarea>
        </section>
    );
}