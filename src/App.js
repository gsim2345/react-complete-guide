import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';


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
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid teal",
      padding: "8px",
      cursor: "pointer",
      ':hover' : {
        backgroundColor: 'lightgreen', 
        color: 'black'
      }
    };

    let persons = null;
    //if (this.state.showPersons == true)
    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person 
            name={person.name}
            age={person.age}
            key={person.id}
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />
            })
          }  
        </div> 
      );

      style.backgroundColor = "red";
      style[':hover']= {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    //let classes = ['red', 'bold'].join(' ');
    let classes = [];
    if (this.state.persons.length <=2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // // classes = ['red', bold]
    }

    return (
      <div className="App">
        <h1>Hi, New App!</h1>
        <p className={classes.join(' ')}>This is first paragraph</p>
        <button style={style}
          onClick={this.togglePersonHandler}>Switch name</button>
          {persons}
      </div>
    );
  }
}

export default Radium(App);
