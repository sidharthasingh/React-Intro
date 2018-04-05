import React from 'react';

import PropType from 'prop-types';

class LifeCycle extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			data:0
		}
		this.setStateHandler = this.setStateHandler.bind(this);
	}
	setStateHandler(){
		this.setState({data: this.state.data+1});
	}

	render(){
		return (
			<div>
				<a>{this.state.data}</a>
				<button onClick={this.setStateHandler}> YOY!!</button>
			</div>
			);
	}

}
export default LifeCycle;