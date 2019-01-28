import React, { Component} from 'react';
import Person from './Person/Person';

// if arrow function returns the same line, we omit the return statement
class Persons extends Component {
  // Component lyfecycle hooks: 
  // 1.
  // constructor is the only place where props can pass and used. Otherwise this.props 
  // Needs to add super()
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
  }

  // Component lyfecycle hooks:
  // 2. 
  // only exists for historic reasons , will be deprecated in React 17 
  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  // Component lyfecycle hooks:
  // 4.
  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
  }

  // UPDATE LIFECYCLE
  // update triggered by outside, by props change
  componentWillReceiveProps(nextProps) {
      console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  // UPDATE LIFECYCLE
  // return true: updating continue, return false, updating stops
  // worth to turn a component to a Class and add these lifecycle hooks, if for example receives a lot of props, and you only want to rerender if one of the props is changing.
  shouldComponentUpdate(nextProps, nextState) {
      console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
      // only updates if the new props is different then the original
      return nextProps.persons !== this.props.persons;
  }

  // UPDATE LIFECYCLE
  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  // UPDATE LIFECYCLE
  // we have no nextProps, nextState, as it is after the update. Use this.props, this.state
  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  }

  
// Component lyfecycle hooks:
  // 3.
    render() {
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map((person, index) => { 
            return <Person 
                  key={person.id}
                  name={person.name}
                  age={person.age}
                  click={() => this.props.clicked(index)}
                  changed={(event) => this.props.changed(event, person.id)}/>
                })
    }
}

export default Persons;