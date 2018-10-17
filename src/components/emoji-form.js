import React from 'react';
import buttonStyles from './styles/button.module.css';
import inputStyles from './styles/input.module.css';
import formStyles from './styles/forms.module.css';
import { setUserResponse, setUserQuestion } from '../actions/protected-data';
export default function Quiz(props) {


  const dispatchUserResponse = (emoji, answer) => {
    props.dispatch(setUserQuestion(emoji));
    props.dispatch(setUserResponse(answer));
  }
  return (
    <form className={`${inputStyles.formInput} ${formStyles.emojiForm}`}>
      <label htmlFor="description">Your Answer:</label>
      <input id="description" type="text" />
      <button className={buttonStyles.formButton}onClick={(event) => {event.preventDefault();dispatchUserResponse(document.getElementById("emoji").getAttribute("aria-label"), document.getElementById("description").value)}}>Submit</button>
    </form>
  );
}
