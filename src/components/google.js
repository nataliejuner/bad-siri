import React from 'react'

class Google extends React.Component {

	hndlr = (response) => {
		for (var i = 0; i < response.items.length; i++) {
			var item = response.items[i];
			// in production code, item.htmlTitle should have the HTML entities escaped.
			document.getElementById("content").innerHTML += "<br>" + item.htmlTitle;
		}
	}

	componentDidMount() {
		console.clear();
		console.log('hi');
		// hndlr();
	}

	render(){
		return(
			<div className="container">
				<div className="gcse-searchresults-only"></div>
			</div>
		)
	}
}

export default Google
