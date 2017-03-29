import React from 'react';

export default function Form(props){
  	return (
      <div className="formArea">
      	<form id="form">
      	<input type="text" name="userGuess" id="userGuess" className="text"  />
      	<input type="submit" id="guessButton" className="button" name="submit" value="Guess"  />
      	</form>
      </div>
  	)

}
