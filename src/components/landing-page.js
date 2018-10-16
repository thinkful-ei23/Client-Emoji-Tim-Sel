import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) { 
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />; 
  }

  return (
    <div className="home">
      <h2>Welcome to the Emoji Spaced Repetition App</h2>
      <p>This course will help you to communicate quickly and effortlessly, even across language barriers!</p>
      <p>Emojis are not only fun, they are fantastic time savers, increase social power, and are a valuable communication method!</p> 
      <LoginForm />
      <Link to="/register">Register</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
