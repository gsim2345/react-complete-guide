import React, { Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
    // Component lyfecycle hooks: 
  // 1.
  // constructor is the only place where props can pass and used. Otherwise this.props 
  // Needs to add super()
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  // Component lyfecycle hooks:
  // 2. 
  // only exists for historic reasons , will be deprecated in React 17 
  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  // Component lyfecycle hooks:
  // 4.
  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
  }
  
// Component lyfecycle hooks:
  // 3.
    render() {
        console.log('[Person.js] Inside render()');
        
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old. </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        )
        // you can't return multiple elements without a wrapping div, but can return an array. Key needs to be added though in that case
        /*
        return [
            <p key='1' onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old. </p>,
            <p key='2'>{this.props.children}</p>,
            <input key='3' type="text" onChange={this.props.changed} value={this.props.name}/>
        ]*/
    }
}

export default withClass(Person, classes.Person);