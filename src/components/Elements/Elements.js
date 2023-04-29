import Image from 'next/image'
import React from 'react'
import clock from '../../assets/img/clock.svg';
import food from '../../assets/img/sushi.svg';
import shop from '../../assets/img/shop.svg';
import styles from './Elements.module.scss'

export default function Elements() {
  const elements = [
    {
      name: 'БЫСТРО',
      description: 'Оперативная и недорогая доставка суши в любой уголок Бишкека и Оша.',
      img: clock
    },
    {
      name: 'ВКУСНО',
      description: 'Оперативная и недорогая доставка суши в любой уголок Бишкека и Оша.',
      img: food
    },
    {
      name: 'БЕСПЛАТНАЯ ДОСТАВКА',
      description: 'Оперативная и недорогая доставка суши в любой уголок Бишкека и Оша.',
      img: shop
    },
  ]
  return (
    <div className={styles.elements}>
      {elements.map((item, index) => (
        <div key={item.name} className={styles.elements_inner}>
          <div className={styles.elements_inner_left}>
            <Image
              src={item.img}
              alt="img"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.elements_inner_right}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}

    </div>
  )
}
