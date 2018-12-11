import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.error = error;
        this.info = info;
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <React.Fragment>
                    <h1>Something went wrong. <span role="img" aria-label="Sad face" style={{ fontSize: '2em' }}>😞</span></h1>
                    <p>Error: {this.error}</p>
                    <p>Info: {this.info}</p>
                </React.Fragment>
            );
        }
        return this.props.children;
    }
}
