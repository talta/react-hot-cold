import React, {Component} from 'react';
import './App.css';
import FeedbackHeader from './components/presentational/feedback-header';
import Form from './components/presentational/form';
import GuessCounter from './components/presentational/guess-counter';
import GuessList from './components/presentational/guess-list';
import Header from '.components/presentational/header';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      guesses: [],
      selectedNumber: Math.round(Math.random() * 100),
      feedback: 'Give it a whirl!'
    }
  }


  newGame(){
    this.setState({
      guesses: [],
      feedback: 'Do it, to it!',
      selectedAnswer:Math.round(Math.random() * 100)
    });
  }

  guess(guess){
    guess = parseInt(guess, 10);
    if(isNaN(guess)){
      this.setState({
        feedback: 'Please enter a valid number'
      });
      return;
    }
    const difference = Math.abs(guess - this.state.selectedNumber);
    let feedback;
    if(difference >= 50){
      feedback= 'No way Jose';
    }
    else if( difference >=30){
      feedback = 'Sorry, not so good';
    }
    else if(difference >=10){
      feedback  = 'It is hot in here in is it just me?';
    }
    else if(difference >3){
      feedback = 'So hot!';
    }
    else{
      feedback = 'Right on the money!';
    }
    this.setState = ({
      feedback,
      guesses: [...this.state.guesses, guess]
    });
  }

  render() {
    return (
      <div className="App">
        <Header onNewGame={()=>this.onNewGame()} />
        <FeedbackHeader feedback={this.state.feedback} onGuess={(guess)=> this.guess(guess)}/>
        <Form />
        <GuessCounter />
        <GuessList />
      </div>
    );
  }
}

export default App;
