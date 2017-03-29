import React from 'react';

export default function GuessList(props)  {
	const guesses = props.guesses.map{(guess, index) =>(
		<li key={index}>
			{guess}
		</li>
	)}

    return (
      <div>
        <ul id="guessList" className="guessList clearFix">

          {guesses}
        </ul>
      </div>
    );
}

          // {props.attemptedNumbers} removed from the return in favor of thinkful's better suggestion to map the attemptedNumbers here