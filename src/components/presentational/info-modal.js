import React, {Component} from 'react';

export default class InfoModal extends Component{
	onClose(event){
		event.preventDefault;
		if(this.props.onClose) {
			this.props.onClose();
		}
	}
	render(){
		return(
			<div>
				<div>
					<h3>What do I do is the question</h3>
					<div>
						<p>This is a game completed in React. The game is simple, but react can be confusing.</p>
						<ul>
							<li> project setup is complex, especially when learning</li>
							<li> breaking the structure and interactivity is like breaking the HTML and jQuery model previously taught/ learned</li>
							<li> I feel like too much of a noobie to learn functional programming, but here I am</li>
						</ul>
					</div>
					<p> So are you ready to interact with my React application?</p>
					<a className= "close" href="#" onClick={e => this.onClose(e)}>Let's do it!</a>
				</div>
			</div>
		);
	}


}
