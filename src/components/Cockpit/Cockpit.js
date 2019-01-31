import React from 'react';
import classes from './Cockpit.css'
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    //let classes = ['red', 'bold'].join(' ');
    let assignedClasses = [];
    if (props.persons.length <=2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // // classes = ['red', bold]
    }

    let btnClass = classes.Button;
    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    return (
        // needs to be wrapped into a div, if more elements included
        // or can be wrapped into a Higher Order Component, then we don't need the div
        // or we can use fragments, an empty JSX tag <> from React 16.2 
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is first paragraph</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Switch name</button>
            <button onClick={props.login}>Log in</button>
        </Aux>
    );
} 

export default cockpit;