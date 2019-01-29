import React from 'react';

// normal JS function, not a function component. It returns a function that qualifies as a functional component. 
const withClass = (WrappedComponent, className) => {
    return (props) => (
        // need to pass props into WrappedComponent
        // possible only with copying the props with the spread operator, it splits into key-value pairs and passes in
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default withClass;