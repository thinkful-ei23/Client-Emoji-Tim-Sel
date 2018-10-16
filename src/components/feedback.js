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
    
    return (
      <section className="feedback">
        <header className="feedback-title">Results</header>
        <p className="emojiName">{this.props.answer.emoji.name}</p>
        <p className="answerStatus">{this.props.answer.status}</p>
        <p className="correctCount ">{this.props.user.emoji.correctCount}</p>
        <p className="wrongCount ">{this.props.user.emoji.wrongCount}</p>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser, 
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Feedback)); 
