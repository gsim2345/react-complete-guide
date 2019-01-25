import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCath = (error, info) => {
        this.setState({
            hasError: true, 
            errorMessage: error
        });
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            // whatever we wrap inside ErrorBoundary
            return this.props.children;
        }
        
    }
}

export default ErrorBoundary;