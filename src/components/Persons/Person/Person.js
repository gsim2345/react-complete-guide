import React, { Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
//npm install --save prop-types
import PropTypes from 'prop-types';
import { types } from 'util';
import {AuthContext} from '../../../containers/App';

class Person extends Component {
    // Component lyfecycle hooks: 
  // 1.
  // constructor is the only place where props can pass and used. Otherwise this.props 
  // Needs to add super()
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
    // after 16.3 ref can be created in constructor as well
    this.inputElement = React.createRef();
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
        this.inputElement.current.focus();  
    }
  }
  
// Component lyfecycle hooks:
  // 3.
    render() {
        console.log('[Person.js] Inside render()');
        

        
        return (
            // we wrap the element that we want to use the context element on.
            // inside AuthContext.consumer we need to execute a method, that receives one argument, the data we are passing down. Can be object too, now it's boolian. 
            // Here we check if our argument (here auth) is true, then write sg, and null if not. 
            <Aux>
                <AuthContext.Consumer> 
                { auth => auth ? <p>I'm authenticated!</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old. </p>
                <p>{this.props.children}</p>
                <input 
                ref={this.inputElement}
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