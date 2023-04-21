import Title from '@/kid/title/title';
import React, { useState } from 'react';
import Categories from '../Categories/Categories';
import Card from '../Card/Card';
import styles from './Menu.module.scss';
import { useDispatch } from 'react-redux';
import { getMenuByCategory } from '@/store/menu.slice';

export default function Menu({ data }) {
  const [currentCategory, setCurrentCategory] = useState();
  const dispatch = useDispatch();

  const handleClickCallback = (item) => {
    dispatch(getMenuByCategory(item.id))
  }

  return (
    <div id='menu' className={styles.menu}>
      <Title text={'Меню'} />
      <Categories handleClickCallback={handleClickCallback} />

      <div style={{width: '100%', textAlign: 'center', marginTop: '50px'}}>
        <Title text={currentCategory ? currentCategory : 'Не нашел Категорию'} />
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
