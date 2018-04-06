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

	componentWillMount(){
		console.log("Component will mount");
	}

	componentDidMount(){
		console.log("Component did mount");
	}

	componentWillUnmount(){
		console.log("component will unmount");
	}

	componentWillUpdate(){
		console.log("component will update");
	}

	componentDidUpdate(){
		console.log("component did update");;
	}

	shouldComponentUpdate(){
		console.log("should component update");
	}

	componentWillReceiveUpdate(){
		console.log("component will receive update");
	}

	render(){
		return (
			<div>
				<a>{this.state.data}</a>
				<button onClick={this.setStateHandler}>YOY!!</button>
			</div>
			);
	}

}
export default LifeCycle;