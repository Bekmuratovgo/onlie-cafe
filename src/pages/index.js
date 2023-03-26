import AboutUs from '@/components/AboutUs/AboutUs';
import Deliver from '@/components/Deliver/Deliver';
import Elements from '@/components/Elements/Elements';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import Menu from '@/components/Menu/Menu';

import styles from '../styles/home.module.scss'

export default function Home() {

  return (
    <div className={styles.home}>
      <Header />
      <HeroSection />

      <div className={styles.home_wrapper}>
        <div className={styles.home_inner}>
          <Elements />
        </div>
        <div className={styles.home_inner_box_shadow}>
          <AboutUs />
        </div>
        <div className={styles.home_inner}>
          <Menu />
        </div>
        <div className={styles.home_inner}>
          <Deliver />
        </div>

      </div>
      <Footer />
    </div>
  )
}
