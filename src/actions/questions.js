import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
export const fetchQuestionRequest = () => ({
  type: FETCH_QUESTION_REQUEST
});

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const fetchQuestionSuccess = question => ({
  type: FETCH_QUESTION_SUCCESS,
  question
});

export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
export const fetchQuestionError = error => ({
  type: FETCH_QUESTION_ERROR,
  error
});

export const VALIDATE_USER_INPUT_REQUEST = 'VALIDATE_USER_INPUT_REQUEST';
export const validateUserInputRequest = () => ({
  type: VALIDATE_USER_INPUT_REQUEST
});

export const VALIDATE_USER_INPUT_SUCCESS = 'VALIDATE_USER_INPUT_SUCCESS';
export const validateUserInputSuccess = feedback => ({
  type: VALIDATE_USER_INPUT_SUCCESS,
  feedback
});
export const SET_NUMBER_TIMES_CORRECT = 'SET_NUMBER_TIMES_CORRECT';
export const setNumberTimesCorrect = correctCount => ({
  type: SET_NUMBER_TIMES_CORRECT,
  correctCount
});
export const SET_NUMBER_TIMES_INCORRECT = 'SET_NUMBER_TIMES_INCORRECT';
export const setNumberTimesInCorrect = inCorrectCount => ({
  type: SET_NUMBER_TIMES_INCORRECT,
  inCorrectCount
});


export const VALIDATE_USER_INPUT_ERROR = 'VALIDATE_USER_INPUT_ERROR';
export const validateUserInputError = error => ({
  type: VALIDATE_USER_INPUT_ERROR,
  error
});

export const getQuestionData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  dispatch(fetchQuestionRequest());
  return fetch(`${API_BASE_URL}/questions`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchQuestionSuccess(data)))
    .catch(err => dispatch(fetchQuestionError(err)));
};

export const validateUserInput = userInput => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  dispatch(validateUserInputRequest());

  return (
    fetch(`${API_BASE_URL}/questions`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({
        answer: userInput
      })
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(data => {
        const feedback = data.msg;
        // const numberTimesCorrect = data.msg.numberTimesCorrect;
        // const numberTimesInCorrect = data.msg.numberTimesInCorrect;
        dispatch(validateUserInputSuccess(feedback));
        // dispatch(setNumberTimesCorrect(numberTimesCorrect));
        // dispatch(setNumberTimesInCorrect(numberTimesInCorrect));
      })
      // .then(dispatch => dispatch(getQuestionData()))
      .catch(err => dispatch(validateUserInputError(err)))
  );
};
