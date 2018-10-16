import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import './feedback.css'; 
export class Feedback extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    let resultsClass;
    let isCorrect;
 
    if (this.props.answer.userAnswer === this.props.answer.emoji.name) {
      isCorrect = 'true';
      resultsClass = 'feedback correct';
    } else {
      isCorrect = 'false';
      resultsClass = 'feedback wrong';
    }
    return (
      <section className={resultsClass}>
        <header className="feedback-title">Results</header>
        <p className="emojiName"><span className="title">Emoji Name: </span>{this.props.answer.emoji.name}</p>
        <p className="answerStatus"><span className="title">Is Correct? </span>{isCorrect}</p>
        <p className="correctCount "><span className="title">Number of correct emojis: </span>{this.props.user.emoji.correctCount}</p>
        <p className="wrongCount "><span className="title">Number of incorrect emojis: </span>{this.props.user.emoji.wrongCount}</p>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser, 
    answer: state.protectedData.current
  };
};

export default requiresLogin()(connect(mapStateToProps)(Feedback)); 
