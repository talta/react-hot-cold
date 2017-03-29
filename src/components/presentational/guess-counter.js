import React from 'react';

export default function GuessCounter(props) {
    return (
      <p>
        Guess #
        <span id="count">{props.count}</span>
        !
      </p>
    );
}


GuessCounter.defaultProps = {
  count: 0
}
