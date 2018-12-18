import React, { Component } from 'react';
import './Hello.css'


class Hello extends Component {
	render() {
		return (
			<div className='f1 tc'>
				<h1>Hello World</h1>
				<p>{this.props.greeting}</p>
			</div>
 		);
 	}
}

export default Hello;