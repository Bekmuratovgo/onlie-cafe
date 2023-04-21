import React from 'react';
import styles from '../styles/auth.module.scss'
import Header from '@/components/Header/Header';
import Form from '@/components/Form/Form';
import { useEffect } from 'react';
import { isTokenRefresh } from '@/store/menu.slice';
import { useDispatch } from 'react-redux';

export default function Auth () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isTokenRefresh());
  }, [])
  return (
    <div className={styles}>
      <Header disabled={true} />
      <div className={styles}>
        <Form />
      </div>
    </div>
  )
}
