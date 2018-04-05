import React from 'react';

import PropTypes from 'prop-types';

class Statebase extends React.Component{
	constructor(){
		super();
		this.state = {
			data:[],
			name:"Sidhartha"
		};
		this.setStateHandler = this.setStateHandler.bind(this);
		this.forceUpdatehandler = this.forceUpdatehandler.bind(this);
	}

	forceUpdatehandler(){
		this.state.name = "Sid(Force Update)";
		this.forceUpdate();
	}

	setStateHandler(){
		var arr;
		arr = this.state.data;
		arr.push("Hello ");
		this.setState({data: arr, name:"Sid"});
	}

	render(){
		return (
			<div>
				<button onClick={this.forceUpdatehandler}>Force Update</button><pre> </pre>
				<button onFocus={this.setStateHandler} onBlur={this.setStateHandler}>SET STATE</button>
				<h4>{this.state.data}</h4>
				<h4>{this.state.name}</h4>
			</div>
				);
	}
}
export default Statebase;