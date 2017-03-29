import React, {Component} from 'react';
import './App.css';
import FeedbackHeader from './components/presentational/feedback-header';
import Form from './components/presentational/form';
import GuessCounter from './components/presentational/guess-counter';
import GuessList from './components/presentational/guess-list';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      attemptedNumbers: [],
      selectedNumber: this.randomNumber
    }
  }

  randomNumber(){
    return Math.floor((Math.random() * 100) + 1);
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
        <FeedbackHeader />
        <Form />
        <GuessCounter />
        <GuessList />
      </div>
    );
  }
}

export default App;
