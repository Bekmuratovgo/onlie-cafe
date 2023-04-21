import Title from '@/kid/title/title';
import React, { useState } from 'react'
import Categories from '../Categories/Categories';
import Card from '../Card/Card';
import styles from './Menu.module.scss';

export default function Menu({ data }) {
  const [currentCategory, setCurrentCategory] = useState();

  // const cards = [
  //   {
  //     title: 'Суши весла',
  //     description: 'Кроме классичеких ролл, у нас есть фирменные, запеченные, кингроллы, хот роллы.'
  //   },
  // ]
  const handleClickCallback = (item) => {
    setCurrentCategory(item);
  }

  return (
    <div className={styles.menu}>
      <Title text={'Меню'} />
      <Categories handleClickCallback={handleClickCallback} />

      <div style={{width: '100%', textAlign: 'center', marginTop: '50px'}}>
        <Title text={currentCategory} />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {data?.results?.map((card, index) => (
          <Card 
            item={card} 
            key={index + card.name}
          />
        ))}
      </div>
    </div>
  )
}
