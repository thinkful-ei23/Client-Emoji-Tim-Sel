import React from 'react';
import emoji from 'emoji-name-map';

import styles from './styles/card.module.css';

export default function Card(props) {
  console.log('props.userQuestions.length: ', props.userQuestions.length);
  const userAnsweredTag = <span className="correctAnswer">{props.description}</span>;
  const numAttempts = +props.inCorrectCount + +props.correctCount;
  const pctCorrect = Math.floor((props.correctCount * 100 / numAttempts));
  const currentCorrect = props.currentTimesCorrect;
  const currentAttempts = +props.currentTimesInCorrect + +props.currentTimesCorrect;
  let totalCorrect = 0;

  for (let i=0; i< props.userQuestions.length; i++) {
    console.log('Stats- numberTimesCorrect: ', i, ': ', props.userQuestions[i]);
    totalCorrect+= props.userQuestions[i].numberTimesCorrect;
  }
  console.log('Stats- totalCorrect: ', totalCorrect);
  let divResults;
  if (props.outcome === 'Incorrect') { 
    divResults = (
      <div className="resultsIncorrect">
      <p className="scores">{props.feedback}!</p>
      <p className="correctAnswer">{props.userAnswered ? userAnsweredTag : ''}</p>
      <p className="feedback"><span className="title"></span>is the answer.</p>
      <p className="scores"><span className="title">Num Times Correct:</span> {props.correctCount}</p>
      <p className="scores"><span className="title">Num Attempts:</span> {numAttempts}</p>
      <p className="scores"><span className="title">Percent correct:</span> {pctCorrect}%</p>

    </div>
    );
  } else {
    divResults = (
      <div className="resultsCorrect">
      <p className="scores">{props.feedback}!</p>
      <p className="correctAnswer">{props.userAnswered ? userAnsweredTag : ''}</p>
      <p className="feedback"><span className="title"></span>is the answer.</p>
      <p className="scores"><span className="title">Num Times Correct:</span> {props.correctCount}</p>
      <p className="scores"><span className="title">Num Attempts:</span> {numAttempts}</p>
      <p className="scores"><span className="title">Percent correct:</span> {pctCorrect}%</p>

    </div>

    );
  }
  if (props.userAnswered) {
    return (
      <div className={styles.emoji}>
      <div className="Progress">
        <span className="Progress-label  scores">Completed: <strong>{currentCorrect * 100/props.userQuestions.length}%</strong></span>
        <progress max={props.userQuestions.length} value={currentCorrect} className="Progress-main"></progress>
      </div>
      <p className="scores"><span className="title">Current num correct: </span> {currentCorrect}</p>
      <p className="scores"><span className="title">Current attempts :</span> {currentAttempts}</p>
        <p className="question">
          <span className="emoji" role="img" aria-label={props.description}>
          {emoji.get(`${props.emoji}`)}
          </span>
        </p>
          {divResults}
      </div>
    );
  
  } else {
    return (
      <div className={styles.emoji}>
        <p className="question">
          <span className="emoji" role="img" aria-label={props.description}>
          {emoji.get(`${props.emoji}`)}
          </span>
        </p>
      </div>
    );  
  }
}
