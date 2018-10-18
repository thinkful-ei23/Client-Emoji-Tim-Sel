import React from 'react';
import emoji from 'emoji-name-map';

import styles from './styles/card.module.css';

export default function Card(props) {
  const userAnsweredTag = <span className="correctAnswer">{props.description}</span>;
  let divResults;
  if (props.outcome === 'Incorrect') {
    divResults = (
      <div className="resultsIncorrect">
      <p className="scores">Answer is:</p>
      <p className="correctAnswer">{props.userAnswered ? userAnsweredTag : ''}</p>
      <p className="feedback"><span className="title"></span> {props.feedback}</p>
      <p className="scores"><span className="title"># Times Correct:</span> {props.correctCount}</p>
      <p className="scores"><span className="title"># Times Incorrect:</span> {props.inCorrectCount}</p>
    </div>
    );
  } else {
    divResults = (
      <div className="resultsCorrect">
      <p className="scores">Answer is:</p>
      <p className="correctAnswer">{props.userAnswered ? userAnsweredTag : ''}</p>
      <p className="feedback"><span className="title"></span> {props.feedback}</p>
      <p className="scores"><span className="title"># Times Correct:</span> {props.correctCount}</p>
      <p className="scores"><span className="title"># Times Incorrect:</span> {props.inCorrectCount}</p>
    </div>
  

    );
  }
  if (props.userAnswered) {
    return (
      <div className={styles.emoji}>
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
