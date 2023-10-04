import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.crashPage = props.crashPage;
    if (typeof this.crashPage !== 'function')
      throw new Error("Required prop 'crashPage' is not a valid React element");
  }

  componentDidCatch(exception, errorInfo) {
    const error = Object.getOwnPropertyNames(exception).reduce(
      (acc, key) => {
        acc[key] = exception[key];
        return acc;
      },
      { ...errorInfo },
    );
    const meta = {
      location: window?.location?.href,
      time: new Date().toISOString(),
      error,
    };
    this.setState({ error: meta });
  }

  render() {
    if (this.state.error) return this.crashPage({ error: this.state.error });
    return this.props.children;
  }
}
