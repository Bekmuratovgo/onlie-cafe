import Navbar from "@nextui-org/react/navbar";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import img from '../../assets/img/basket.png';
import styles from './Navbar.module.scss';

export default function Header({ handleOpenBasket }) {
  const [isActive, setIsActive] = useState(false);

  const handlePress = (index) => {
    setIsActive((prev) => index);
    console.log('ASD');
  }

  const navItems = ['Меню', 'О нас', 'Доставка и Оплата', 'Контакты',]
  return (
    <div className={styles.navbar}>
      <Navbar className={styles.navbar__inner}>
        <Navbar.Brand className={styles.navbar__inner_brand}>
          <Image
            src={img}
            alt="img"
            width={50}
            height={50}
          />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
          {navItems.map((item, index) => (
            <Link
              className={`
                ${styles.navbar__inner_item}
                ${isActive === index ? styles.navbar__inner_item_active : ''}`
              }
              onClick={() => handlePress(index)}
              key={index + item}
              href="#"
            >
              {item}
            </Link>
          ))}
          <Link
            className={`
              ${styles.navbar__inner_item}`
            }
            href="tel:+79998887766"
            onClick={() => handlePress('number')}
          >
            +
            996(555)56-54-45
          </Link>
          <Link
            className={`${styles.navbar__inner_item}`}
            onClick={() => handleOpenBasket('basket')}
            href="#"
          >
            <Image
              src={img}
              alt="img"
              width={50}
              height={50}
            />
            <button>100</button>
          </Link>
        </Navbar.Content>
      </Navbar>
    </div>
  )
}
