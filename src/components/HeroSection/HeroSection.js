import React from 'react'
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.hero}>
        <div className={styles.hero_left}>
          <h3>ДОСТАВКА ВКУСНЕЙШИХ СУШИ И РОЛЛОВ ИЗ СВЕЖИХ ИНГРЕДИЕНТОВ</h3>
          <p>Каждый должен заниматься в жизни тем, что у него лучше всего получается. Мы вот, например, делаем суши. Лучшие суши</p>
          <button>Заказать еду</button>
        </div>
        <div className={styles.hero_right}>

        </div>

      </div>
    </div>
  )
}
