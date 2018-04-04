import React from 'react';
import PropTypes from 'prop-types';

class Para extends React.Component{
	constructor(){
		super();
		this.state = {
			content:"Bla"
		}
	}
	render(){
		return (
			<div>
				<p>{this.props.content}</p>
			</div>
			);
	}
}

Para.defaultProps = {
	content:"<Empty Paragraph>"
}

Para.propTypes = {
	content:PropTypes.string
}

export default Para;