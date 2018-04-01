import React from 'react';

import PropTypes from 'prop-types';

class App extends React.Component {
   
	constructor(){
		super();
		this.state = {
			"data":[
				{
					"id":"1",
					"name":"Sidhartha",
					"age":22
				},
				{
					"id":2,
					"name":"Singh",
					"age":21
				},
				{
					"id":3,
					"name":"Srishti Singh",
					"age":19
				}
			]
		}
	}
   render() {
   	var customStyle = {
   		"background-color": "#F00"
   	}
      return (
         <div>
           <Heading/>
           {this.state.data.map((person,i) => <Mytable key = {i} data = {person} />)}
           <Footing/>
         </div>
      );
   }
}

class Heading extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			header:"This is the header..."
		}
	}
	render(){
		return(
				<h1>{this.state.header}</h1>
			);
	}
}

class Footing extends React.Component{
	render(){
		return (
				<h2>{this.props.text}</h2>
			);
	}
}


// Prop validation
Footing.propTypes = {
	text : PropTypes.string
}


// Adding default props
Footing.defaultProps = {
	text : "madarJaat"
}

class Mytable extends React.Component{
	render(){
		return (
			<span>
			<br/>
			{this.props.data.id} {this.props.data.name} {this.props.data.age}
			</span>
			);
	}
}
export default App;