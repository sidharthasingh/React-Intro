import React from 'react';

import PropTypes from 'prop-types';

class Statebase extends React.Component{
	constructor(){
		super();
		this.state = {
			data:[]
		};
		this.setStateHandler = this.setStateHandler.bind(this);
	}
	setStateHandler(){
		arr = this.state.data;
		arr.push("Hello ");
		this.setState({data: arr});
	}

	render(){
		<div>
			<button onClick={this.setStateHandler}>SET STATE</button>
			<h4>{this.state.data}</h4>
		</div>
	}
}
export default Statebase;