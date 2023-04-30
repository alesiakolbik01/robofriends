import React, { Component } from 'react';


class ErrorBoundary extends Component {

    constructor(props){
        super(props);
        this.state = {
            isHasError: false,
            error: null
        }
    }

    componentDidCatch (error, info) {
        this.setState({isHasError: true, error: `${error}: ${info}`})
    }

    render() {
        if(this.state.isHasError) {
            return <h1 className='error-message'>Ops! Something gets wrong!</h1>
        }

        return this.props.children;
    }
}

export default  ErrorBoundary;