import React from 'react'

export default function Button (props) {
    return(
        <button type="button" onClick={props.clickHandler}>{props.text}</button>       
    )
}