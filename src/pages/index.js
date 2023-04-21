import AboutUs from '@/components/AboutUs/AboutUs';
import Basket from '@/components/Basket/Basket';
import Deliver from '@/components/Deliver/Deliver';
import Elements from '@/components/Elements/Elements';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import Menu from '@/components/Menu/Menu';
import { getAllMenu, menu } from '@/store/menu.slice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../styles/home.module.scss'


export default function Home() {
  const [isOpenBasket, setIsOpenBasket] = useState(false);
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.food);

  const handleOpenBasket = () => {
    setIsOpenBasket(true)
  }

  const handleCloseBasket = () => {
    setIsOpenBasket(false)
  }
  console.log(menu, 'VAL');
  useEffect(() => {
    dispatch(getAllMenu());
  }, [])

  return (
    <div className={styles.home}>
      <Header handleOpenBasket={handleOpenBasket} />
      <HeroSection />
      <Basket
        handleOpenBasket={handleOpenBasket}
        handleCloseBasket={handleCloseBasket}
        visible={isOpenBasket}
      />
      <div className={styles.home_wrapper}>
        <div className={styles.home_inner}>
          <Elements />
        </div>
        <div className={styles.home_inner_box_shadow}>
          <AboutUs />
        </div>
        <div className={styles.home_inner}>
          <Menu data={menu} />
        </div>
        <div className={styles.home_inner}>
          <Deliver />
        </div>

      </div>
      <Footer />
    </div>
  )
}
