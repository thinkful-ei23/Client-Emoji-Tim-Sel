import React from 'react';
import emoji from 'emoji-name-map';

import styles from './styles/card.module.css';

export default function Card(props) {
  return (
    <div className={styles.card}>
      <span id="emoji" className={styles.emoji} role="img" aria-label={props.description}>
        {emoji.get(`${props.emoji}`)}
      </span>
    </div>
  );
}
