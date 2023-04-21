import styles from './Card.module.scss';
import img from '../../assets/img/food.png';
import Image from 'next/image';

export default function FoodCard({ item }) {
  return (
    <div className={styles.card}>

      <div className={styles.card_left}>
        <Image
          src={img}
          alt="img"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.card_right}>
        <h4> {item?.title} </h4>
        <span>{item?.description}</span>
        <h5>{item?.price}</h5>
        <button>Заказать</button>
      </div>
    </div>
  )
}
