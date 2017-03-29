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
      attemptedNumbers: [],
      selectedNumber: Math.round(Math.random() * 100)
    }
  }


  getInitialState (){
    // console.log(rando);
    // if(this.state.selectedNumber=== ''){
    //   this.setState({
    //     selectedNumber: this.randomNumber
    //   })
    // }
    console.log(this.state.selectedNumber);
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
