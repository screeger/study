import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error.name + " " + error.message };
  }

  componentDidCatch(error, info) {
    // Use this to log errors.
    this.error = error.name + " " + error.message;
  }

  render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
          <h1>
            Something went wrong.{" "}
            <span role="img" aria-label="Sad face" style={{ fontSize: "2em" }}>
              😞
            </span>
          </h1>
          <p>Error: {this.state.error}</p>
        </React.Fragment>
      );
    }
    return this.props.children;
  }
}
