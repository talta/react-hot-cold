import React, {Component} from 'react';

export default class Form extends Component{
	  	onGuess(event){
	  		event.preventDefault();

	  		///if the props onGuess exists, then set the value that was entered into the Guess area
	  		if(this.props.onGuess){
	  			const value = this.input.value;
	  			this.props.onGuess(value);
	  		}
	  		////then afterwards set the value to be empty
	  		this.input.value = '';
	  	}
	  	/////I wasnt far off with the return formatting:
	  	////attach the event listener to the form
	  	////ref will be the input into the input function, being set to the input

	  	///i do not believe that a render function needs to preceed the return 
	  	render(){
		  	return (
		      <div className="formArea">
		      	<form id="form" onSubmit={e=> this.onGuess(e)}>
		      		<input type="text" name="userGuess" id="userGuess" className="text"  
		      			placeholder="Enter your Guess" required
		      			ref={input=> this.input =input}/>
		      		<input type="submit" id="guessButton" className="button" name="submit" value="Guess"  />
		      	</form>
		      </div>
		  	)
  		}
}
