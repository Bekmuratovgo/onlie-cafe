import React from 'react'
import styles from './title.module.scss';

export default function Title({ text, linedText = '' }) {
  return (
    <h3 className={styles.title}>
      {text}
      <span>{linedText}</span>
    </h3>
  )
}
