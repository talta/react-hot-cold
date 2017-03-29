import React, {Component} from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

export default class Header extends Component {
	constructor(props){
		super(props);
		this.state={
			showModal: false
		}
	}
	///turn off the modal by setting it to the opposite of teh current state:
	toggleModal(){
		this.setState({
			showModal: !this.state.showModal
		});
	}
	render(){
		let infoModal;
		if(this.state.showModal){
			infoModal = <InfoModal onClose={() => this.toggleModal()} />
		}
	
	return (
		<header>
			<TopNav onInfo={()=>toggleModal()} 
				onNewGame={this.props.onNewGame}
			/>
			<h1> Hot or Cold </h1>
		</header>
	);
	}
}