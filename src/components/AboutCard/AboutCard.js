import React from 'react'
import aboutImg from '../../assets/img/about.svg';
import Image from 'next/image';
import styles from './AboutCard.module.scss';

export default function AboutCard() {
  return (
    <div className={styles.about}>
      <div>
        <Image 
          src={aboutImg}
          alt="img"
          width={50}
          height={50}
        />
      </div>
      <div><h4>Всегда свежие ингридиенты</h4></div>
      <div><p>Мы тщательно разрабатывали наше меню, отобрали лучшие продукты, чтобы вы наконец-то попробовали настоящие суши и роллы</p></div>
    </div>
  )
}
