import React from 'react';
import classes from './Cockpit.css'

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
        // needs to be wrapped into a div
        <div>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is first paragraph</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Switch name</button>
        </div>
    );
} 

export default cockpit;