import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    SET_USER_RESPONSE,
    SET_USER_QUESTION
} from '../actions/protected-data';

const initialState = {
  data: '',
  userResponseReady: false,
  currentUserAnswer: null,
  currentEmojiQuestion: null,
  error: null
}

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            userResponseReady: false,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === SET_USER_QUESTION) {
      return Object.assign({}, state, {
          currentEmojiQuestion: action.emoji,
          error: action.error
      });
    } else if (action.type === SET_USER_RESPONSE) {
      return Object.assign({}, state, {
        currentUserAnswer: action.answer,
        userResponseReady: true,
          error: action.error
      });
    }
  return state;
}
