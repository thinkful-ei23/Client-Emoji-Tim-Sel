import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import './styles/feedback.css'; 
export class Feedback extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    let resultsClass;
    let isCorrect;
    if (this.props.answer.userResponseReady) {
      if (this.props.answer.currentUserAnswer === this.props.answer.currentEmojiQuestion) {
        isCorrect = 'true';
        resultsClass = 'feedback correct';
      } else {
        isCorrect = 'false';
        resultsClass = 'feedback wrong';
      }

      console.log('this.props: ', this.props);
      return (
        <section className={resultsClass}>
          <div>
            <header className="feedback-title">Results</header>
            <p className="emojiName"><span className="title">Emoji Name: </span>{this.props.answer.currentEmojiQuestion}</p>
            <p className="answerStatus"><span className="title">Is Correct? </span>{isCorrect}</p>
          </div>
        </section>
      );
    } else {
      return (
        <section className={resultsClass}>
          <div>

          </div>
        </section>
      );
     
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser, 
    answer: state.protectedData
  };
};

export default requiresLogin()(connect(mapStateToProps)(Feedback)); 
