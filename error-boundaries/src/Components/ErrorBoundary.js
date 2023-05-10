import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    static getDerivedStateFromError(error){
        return {
            error: true
        }
    }

    componentDidCatch(error, info){
        console.log("Info from coomponentDidCatch: ", info);
        console.log("Error from coomponentDidCatch: ", error);
    }

    render() {
        if(this.state.error){
            return <h2 style={{color:'red'}}>Handled Component Error!</h2>
        }
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {

};

export default ErrorBoundary;