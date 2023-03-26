import { Button } from '@nextui-org/react'
import React from 'react'
import styles from './Categories.module.scss';

export default function Categories({handleClickCallback}) {
  const categories = ['Суши', 'Десерты', 'Шашлыки', 'Супы', 'Напитки', 'Завтраки', 'Сеты', 'Кингроллы', 'Дополнительно']
  return (
    <div className={styles.category}>
      {categories.map((item, index) => (
        <Button
          key={index + item} 
          className={styles.category_btn} 
          auto rounded bordered 
          color="error"
          onClick={() => handleClickCallback(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  )
}
