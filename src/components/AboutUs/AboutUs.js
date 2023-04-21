import Title from '@/kid/title/title'
import React from 'react'
import AboutCard from '../AboutCard/AboutCard'
import styles from './AboutUs.module.scss';

export default function AboutUs() {
  return (
    <div id='about' className={styles.about}>
      <Title text={'О компании'} linedText={'Олигарх'} />
      <div className={styles.about_inner}>
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div>
    </div>
  )
}
