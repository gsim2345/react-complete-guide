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