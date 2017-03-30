import React from 'react';

import Form from './form';

export default function FeedbackHeader(props)  {
    return (
    	<section>
     		<h2 id="feedback">{props.feedback}</h2>
     		<Form onGuess={props.onGuess} />
     	</section>
    );
}

