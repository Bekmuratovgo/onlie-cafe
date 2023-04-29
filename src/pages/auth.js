import React, { useState } from 'react';
import styles from '../styles/auth.module.scss'
import Header from '@/components/Header/Header';
import Form from '@/components/Form/Form';
import { useEffect } from 'react';
import { isTokenRefresh } from '@/store/menu.slice';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function Auth() {
  const dispatch = useDispatch();
  const { adminNumber } = useSelector((state) => state.food)
  const [number, setNumber] = useState(adminNumber)
  const id = uuidv4();

  const handleSaveNumber = () => {

  }


  useEffect(() => {
    dispatch(isTokenRefresh());
    localStorage.setItem('number', adminNumber)
  }, [])

  return (
    <div className={styles}>
      <Header id={'auth' + id} anotherPage={true} />
      <div>
        <Form />
        <div className={styles.phone_block}>
          <div className={styles.phone_block_inner}>
            Номер админнистрации:
            <h4 style={{ color: 'green', margin: '5px 0' }}>Пример ввода номера: 996555443322</h4>
            <div className={styles.input_btn}>
              <input onChange={(e) => handle} value={number} placeholder='телефон номер' />
              <button onClick={handleSaveNumber}>Поменять</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
