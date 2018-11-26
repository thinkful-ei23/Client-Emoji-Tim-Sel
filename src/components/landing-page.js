// import React from 'react';
// import { connect } from 'react-redux';
// import { Link, Redirect } from 'react-router-dom';

// import LoginForm from './login-form';

// export function LandingPage(props) {
//   // If we are logged in redirect straight to the user's dashboard
//   if (props.loggedIn) {
//     return <Redirect to="/dashboard" />;
//   }

//   return (
//     <div className="home">
//       <h2>Welcome to the Emoji Spaced Repetition App TEST !</h2>
//       <p>This app will help you to communicate quickly and effortlessly, even across language barriers!</p>
//       <p>Emojis are not only fun, they are fantastic time savers, increase social power, and are a valuable communication method!</p>
//       <LoginForm />
//       <Link to="/register">Register</Link>
//     </div>
//   );
// }

// const mapStateToProps = state => ({
//   loggedIn: state.auth.currentUser !== null
// });

// export default connect(mapStateToProps)(LandingPage);
import React from 'react';
import { Link } from 'react-router-dom';

import Button from './button';
import emojiLogo from '../images/smileyEmoji.svg';

import styles from './styles/landing-page.module.css';

export default function LandingPage(props) {
  return (
    <div>
      <section className="landing">
        <p className="landingLogo"><img className={styles.logo} src={emojiLogo} alt="winking emoji" /></p>
        <h2>Welcome to the Emoji Spaced Repetition App</h2>
        <p>
          This course will help you to communicate quickly and effortlessly,
          even across language barriers!
        </p>
        <p>
          Emojis are not only fun, they are fantastic time savers, increase
          social power, and are a valuable communication method!
        </p>

        <Link to="/login" className={styles.buttonLink}>
          <Button label="Start Learning" className="startButton" />
        </Link>
      </section>
    </div>
  );
}
