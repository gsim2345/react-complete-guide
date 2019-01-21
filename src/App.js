import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Stephanie", age: 26}
    ], 
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 27}
      ]});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Max", age: 28},
        {name: event.target.value, age: 29},
        {name: "Stephanie", age: 26}
      ]});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    console.log(doesShow);
    this.setState({showPersons: !doesShow});
  }


  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid teal",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, New App!</h1>
        <button style={style}
          onClick={this.togglePersonHandler}>Switch name</button>
        {
        this.state.showPersons ? 
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}>
            </Person>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Max!")}
              changed={this.nameChangedHandler}>My hobbies: Racing</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}>
            </Person>
          </div> : null
      }
      </div>
    );
  }
}

export default App;
