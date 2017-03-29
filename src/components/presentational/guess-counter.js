import React from 'react';

export default function GuessCounter(props) {
    return (
      <p>
        Guess #
        <span id="count"></span>
        !
      </p>
    );
}


GuessCounter.defaultProps = {
  count: 0
}
