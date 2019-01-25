import React from 'react';
import './Person.css';

const person = (props) => {
    // if want media queries or animations, need to add StyleRoot component
    
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old. </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;