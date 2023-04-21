import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@nextui-org/react'
import React, { useEffect } from 'react'
import { getCategories } from '@/store/menu.slice';
import styles from './Categories.module.scss';

export default function Categories({handleClickCallback}) {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.food);
  console.log(categories, 'categories');
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className={styles.category}>
      {categories?.map((item, index) => (
        <Button
          key={index + item} 
          className={styles.category_btn} 
          auto rounded bordered 
          color="error"
          onClick={() => handleClickCallback(item)}
        >
          {item.name}
        </Button>
      ))}
    </div>
  )
}
