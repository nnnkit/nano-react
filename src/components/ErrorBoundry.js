import React from 'react'

class ErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    const { children } = this.props
    const { errorInfo, error } = this.state
    if (errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      )
    }

    return this.props.children
  }
}
export default ErrorBoundary
