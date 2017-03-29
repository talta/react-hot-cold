import React, {Component} from 'react';

export default class TopNav extends Component{
	onNewGame(event){
		event.preventDefault();
		if(this.props.onNewGame){
			this.props.onNewGame();
		}
	}

	onInfo(event){
		event.preventDefault();
		if(this.props.onInfo){
			this.props.onInfo();
		}
	}

	render (){
		return (
			<nav>
				<ul>
					<li>
						<a className="what" href="#" onClick={e => this.onInfo(e)}>
							what?
						</a>	
					</li>
					<li>
						<a className="new" href="#" onClick={e=> this.onInfo(e)}>
						New Game +
						</a>
					</li>
				</ul>
			</nav>
		)
	}
}