import React from 'react'

class Input extends React.Component {
	render() {
		return (
			<>
				<h2>Hello, {this.props.name}. {this.props.request}</h2>
				<input id='question' type="text" defaultValue="" placeholder="Wutcha want? Butts?" onChange={this.props.siri} />
			</>
		)
	}
}

export default Input;
