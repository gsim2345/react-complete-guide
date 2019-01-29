import React, { Component} from 'react';

// if you need lifecycle hooks, plan on reaching out to the web, fx. grab the currently auhenticated user and do something with that, need a stateful component. 

// a simple function that returns a class
const withClass = (WrappedComponent, className) => {
    // there is no class name, it's like an anonymous class
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
}

export default withClass;