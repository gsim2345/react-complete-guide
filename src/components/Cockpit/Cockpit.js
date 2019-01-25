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

    let btnClass = "";
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    return (
        // needs to be wrapped into a div
        <div className={classes.Cockpit}>
            <h1>Hi, New App!</h1>
            <p className={assignedClasses.join(' ')}>This is first paragraph</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Switch name</button>
        </div>
    );
} 

export default cockpit;