import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { getQuestionData } from '../actions/questions';

//import inputStyles from './styles/input.module.css';

import HeaderBar from './header-bar';
import Card from './emoji-card';
import Quiz from './emoji-form';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(getQuestionData());
  }

  render() {
    const feedbackTag = (
      <p className="fb">{this.props.feedback.outcome}!</p>
    );
    return (
      <div className="dashboard">
        <HeaderBar />
        <Card
          userAnswered={this.props.userAnswered}
          description={this.props.question.description}
          emoji={this.props.question.emoji}
          feedback = {this.props.userAnswered ? feedbackTag : ''}
          correctCount ={this.props.feedback.numberTimesCorrect}
          inCorrectCount ={this.props.feedback.numberTimesInCorrect}
        />

        <Quiz />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    username: state.auth.currentUser.username,
    question: state.question.question,
    feedback: state.question.feedback,
    emojiAnswer: state.question.question.description,
    userAnswered: state.question.userAnswered
    // correctCount: state.question.numberTimesCorrect,
    // inCorrectCount: state.question.numberTimesInCorrect
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
