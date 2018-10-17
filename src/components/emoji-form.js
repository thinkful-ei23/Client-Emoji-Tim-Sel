import React from 'react';
import { connect } from 'react-redux';
import buttonStyles from './styles/button.module.css';
import inputStyles from './styles/input.module.css';
import formStyles from './styles/forms.module.css';
import { validateUserInput, getQuestionData } from '../actions/questions';

export class Quiz extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    // grabs the value of the input element after you submit the form
    const userInput = document.getElementById('answer').value;
    document.getElementById('answer').value = '';

    this.props.dispatch(validateUserInput(userInput));
  }

  nextButton(event) {
    event.preventDefault();
    this.props.dispatch(getQuestionData());
  }

  render() {
    const form = this.props.userAnswered ? (
      <button
        className={buttonStyles.formButton}
        onClick={event => this.nextButton(event)}
      >
        Next
      </button>
    ) : (
      <React.Fragment>
        <label htmlFor="answer">Your Answer:</label>
        <input id="answer" type="text" name="answer" />
        <button
          className={buttonStyles.formButton}
          onClick={event => this.onSubmit(event)}
        >
          Submit
        </button>
      </React.Fragment>
    );

    return (
      <div>
        <form className={`${inputStyles.formInput} ${formStyles.emojiForm}`}>
          {form}
        </form>
      </div>
    );
  }
}

export default connect()(Quiz);
