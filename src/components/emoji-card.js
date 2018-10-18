import React from 'react';
import emoji from 'emoji-name-map';

import styles from './styles/card.module.css';

export default function Card(props) {
  console.log('props.userAnswered: ', props.userAnswered);
  const userAnsweredTag = <p>userAnsweredTag {props.description}</p>;
  return (
    <div className={styles.card}>
      <span className={styles.emoji} role="img" aria-label={props.description}>
        {emoji.get(`${props.emoji}`)}
      </span>
      {props.userAnswered ? userAnsweredTag : ''}
      {console.log('card props: ', props )}
      <p className="scores"><span className="title">Number Times Correct</span> {props.correctCount}</p>
      <p className="scores"><span className="title">Number Times Incorrect</span> {props.inCorrectCount}</p>
    </div>
  );
}
