import React from 'react';
import emoji from 'emoji-name-map';

import styles from './styles/card.module.css';

export default function Card(props) {
  console.log('props.userAnswered: ', props.userAnswered);
  const userAnsweredTag = <p>userAnsweredTag {props.description}</p>;
  return (
    <div classname={styles.emoji}>
      <p><span className="emoji" role="img" aria-label={props.description}>
        {emoji.get(`${props.emoji}`)}
      </span></p>
      <div className="results">
        <p classname="correctAnswer">{props.userAnswered ? userAnsweredTag : ''}</p>
        <p className="feedback"><span className="title"></span> {props.feedback}</p>
        <p className="scores"><span className="title">Times Correct</span> {props.correctCount}</p>
        <p className="scores"><span className="title">Times Incorrect</span> {props.inCorrectCount}</p>
      </div>
    </div>
  );
}
