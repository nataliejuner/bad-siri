import React from 'react'

class Input extends React.Component {
	render() {
		return (
			<React.Fragment>
				<h2>Hello, {this.props.name}. {this.props.request}</h2>
				<form onSubmit={this.props.handleSubmit}>
					<input id='question' type="text" defaultValue="" placeholder="Wutcha want? Butts?" onChange={this.props.handleChange} />
					<h6>Ask <em>Bad</em> Siri in the form of a question.</h6>
				</form>
			</React.Fragment>
		)
	}
}

export default Input;
