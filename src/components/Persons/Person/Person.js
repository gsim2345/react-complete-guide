import React, { Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
//npm install --save prop-types
import PropTypes from 'prop-types';
import { types } from 'util';

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
    // focusing the element that got created with ref
    // if we want to focus the first input element: 
    if (this.props.position === 0) {
        this.inputElement.focus();  
    }
  }
  
// Component lyfecycle hooks:
  // 3.
    render() {
        console.log('[Person.js] Inside render()');
        
        // if you want to focus() on that input after render:
        // use ref - only available in stateful components
        // can add a new property to the class, which can be then easily used from anywhere in the class. 
        // will be created when render runs, so we can reference from componentDidMount(), that runs after render()
        // can be used on own components as well, not only html elements

        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old. </p>
                <p>{this.props.children}</p>
                <input 
                ref={(inp) => { this.inputElement = inp }}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name}/>
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

// validating properties:
Person.propTypes = {
    // the passed value has to be a function
    click: PropTypes.func , 
    // the passed value has to be a string
    name: PropTypes.string, 
    age: PropTypes.number,
    changed: PropTypes.func
};
//https://reactjs.org/docs/typechecking-with-proptypes.html

export default withClass(Person, classes.Person);