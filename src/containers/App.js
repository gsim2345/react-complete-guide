import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: "id1", name: "Max", age: 28},
      {id: "id2", name: "Manu", age: 29},
      {id: "id3", name: "Stephanie", age: 26}
    ], 
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    // find out which index belongs to that id parameter
    const personIndex = this.state.persons.findIndex((p) => { 
      return p.id === id
    });

    //copying the object with the spread operator
    const person = {
      ...this.state.persons[personIndex]
    }
    // old version: 
    //const person = Object.assign({}, this.state.persons[personIndex]);

    // the updated person's name
    person.name = event.target.value;

    // copying persons with the spread operator
    const persons = [...this.state.persons];
    // updating the one that needs change
    persons[personIndex] = person;
    // setting the new state
    this.setState({persons: persons});
      
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // create a mutable copy of person
    //const persons = this.state.persons.slice();
    // or we can use the spread operator
    const persons = [...this.state.persons];
    //remove this element from persons
    persons.splice(personIndex, 1);
    // update the state accordingly
    this.setState({persons: persons});
  }


  render() {
    
    let persons = null;
    
    //if (this.state.showPersons == true)
    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>  
    }

    return (
        <div className={classes.App}>
            <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}/>
            {persons}
        </div>
    );
  }
}

export default App;
