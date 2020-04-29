import React from 'react';

class ErrorBoundary extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	}

	render() {
		const {hasError} = this.state;
		if(hasError){
			return <h1> Oops, this is not good! </h1>
		}
		else {
			return this.props.children;
		}	
	}

}

export default ErrorBoundary;