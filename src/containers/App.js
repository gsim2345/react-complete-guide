import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// if we use PureComponent: shouldComponentUpdate is already built , no need to check for the updates.
class App extends PureComponent {
  // Component lyfecycle hooks: 
  // 1.
  // constructor is the only place where props can pass and used. Otherwise this.props 
  // Needs to add super()
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);

    // alternative syntax to initialize state from constructor:
    this.state = {
      persons: [
        {id: "id1", name: "Max", age: 28},
        {id: "id2", name: "Manu", age: 29},
        {id: "id3", name: "Stephanie", age: 26}
      ], 
      otherState: 'some other value',
      showPersons: false
    }
  }

  // Component lyfecycle hooks:
  // 2. 
  // only exists for historic reasons , will be deprecated in React 17 
  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  // Component lyfecycle hooks:
  // 4.
  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // UPDATE lifecycle (state)
  /*
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    // if no state changed, we don't update
    return nextState.persons !== this.state.persons ||
           nextState.showPersons !== this.state.showPersons;  
}*/

// UPDATE LIFECYCLE (state)
componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
}

// UPDATE LIFECYCLE (state)
// we have no nextProps, nextState, as it is after the update. Use this.props, this.state
componentDidUpdate() {
  console.log('[UPDATE App.js] Inside componentDidUpdate');
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


  // component lifecycle hooks: 
  // 3. 
  render() {
    console.log('[App.js] Inside render()');
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
            <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
            <Cockpit 
            // props comes with Components, therefore we can acess it with this.props
            // there is no props passed into render, so we use this.props
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}/>
            {persons}
        </div>
    );
  }
}

export default App;
