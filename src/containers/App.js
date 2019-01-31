import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

// new context API , > 16.3
export const AuthContext = React.createContext(false);
// false - default value
// use in JSX code
// providers, consumers
// we can pass data around without the chaning of props with it. 
// great for global settings

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
      showPersons: false, 
      toggleClicked:0, 
      authenticated: false
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
// also discouraged to use, as well componentWillReceiveProps
componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
}

// Instead adds 2 new ones:
// executes when your props get updated, and gives a possibility to updates your state with it. Usually you don't want that, but there are cases. 
//called before render()
// gives a chance to update the state right before render
// will reexecute whenever our props change
static getDerivedStateFromProps(nextProps, prevState) {
  console.log('[UPDATE App.js] Inside getDerivedStateFromProps', nextProps, prevState);

  // return new state in object
  //return {}
  // or return prevState, if you not update
  return prevState;

}

// Another new lifecycle function 
// gives a snapshot of your DOM right before it's about to change
// executes right before componentDidMount and ComponentDidUpdate
// good place fx. save the current scrolling position of the user, and then i componentDidUpdate can set the scroll position to here again. 
//https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
getSnapshotBeforeUpdate() {
  console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate');
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
    // incorrect way of update state, because setState is executing asyncrunously. If we call a setState elsewhere, it might finish earlier, and this.state here might not be correct.
    //this.setState({
    //  showPersons: !doesShow, 
    //  toggleClicked: this.state.toggleClicked + 1}
    //);
    
    // if you plan on using this.state inside setstate, the correct way => function syntax
    this.setState( (prevState, props) => {
        return {
          showPersons:!doesShow,
          toggleClicked: prevState.toggleClicked + 1
        }
    });

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

   
  loginHandler = () => {
    // I want to change sg in Person component, if this is set to true.
    this.setState({authenticated: true});
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
        <Aux>
            <Cockpit 
            // props comes with Components, therefore we can acess it with this.props
            // there is no props passed into render, so we use this.props
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            login={this.loginHandler}
            clicked={this.togglePersonHandler}/>
            
            <AuthContext.Provider value=
            // providing context to all childcomponents in persons
            {this.state.authenticated}>
            {persons}
            </AuthContext.Provider>
        </Aux> 
    );
  }
}
            // the css class we want to assign
export default withClass(App, classes.App);
