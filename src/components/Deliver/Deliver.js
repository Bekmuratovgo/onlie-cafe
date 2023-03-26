import Image from 'next/image';
import React from 'react';
import deliverImg from '../../assets/img/deliver.jpg';
import clock from '../../assets/img/deliverClock.svg';
import styles from './Deliver.module.scss';

export default function Deliver() {
  return (
    <div className={styles.deliver}>
      <div className={styles.deliver_left}>
        <Image
          src={deliverImg}
          alt="img"
          width={'100%'}
          height={'100%'}
        />
      </div>
      <div className={styles.deliver_right}>
        <div className={styles.deliver_right_inner_card}>
          <div className={styles.deliver_right_inner_card_block}>
            <Image
              src={clock}
              alt="img"
              width={100}
              height={80}
            />
            <div className={styles.time_work}>c 11:00 до 23:00</div>
            <div>Время доставки может меняться в зависимости от загруженности ресторана.</div>
          </div>
          <div className={styles.deliver_right_inner_card_block}>
            <Image
              src={clock}
              alt="img"
              width={100}
              height={80}
            />
            <div className={styles.time_work}>c 11:00 до 23:00</div>
            <div>Время доставки может меняться в зависимости от загруженности ресторана.</div>
          </div>
        </div>
        <div className={styles.deliver_right_inner_btns}>
          <button>Заказать еду</button>
        </div>
      </div>
    </div>
  )
}
