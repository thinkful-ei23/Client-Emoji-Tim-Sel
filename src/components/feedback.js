import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
//import { fetchProtectedData } from '../actions/protected-data';
import './styles/feedback.css';
export class Feedback extends React.Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchProtectedData());
  // }

  render() {
    let resultsClass;
    let title;
    let answerStatus;
    let msg;
    console.log('this.props: ', this.props);
    if (this.props.userAnswered) {
      if (this.props.feedback.outcome === "Correct") {
        msg = "Let's try another!";
        resultsClass = 'feedback correct';
        title="CORRECT ANSWER";
        answerStatus = "correct"
      } else {
        msg = "Let's try again.";
        resultsClass = 'feedback wrong';
        title="WRONG ANSWER";
        answerStatus = "incorrect"
      }
      return (
        <section className={resultsClass}>
          <div>
            <header className="feedback-title">{title}</header>

            <p ><span className={answerStatus}>{msg}</span></p>
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
    feedback: state.question.feedback
  };
};

export default requiresLogin()(connect(mapStateToProps)(Feedback));
