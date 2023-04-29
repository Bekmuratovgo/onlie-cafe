import React, { useEffect, useState } from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import { useSelector } from "react-redux";
import styles from './Basket.module.scss';
import Image from "next/image";
import minus from '../../assets/img/minus.png'
import plus from '../../assets/img/plus.png'
import close from '../../assets/img/close.png'
import { useRouter } from "next/router";

export default function Basket({ visible, handleCloseBasket }) {
  const { basket } = useSelector((state) => state.food);
  const [count, setCount] = useState();
  const router = useRouter();

  const order = () => {
    router.push('/order')
  }

  const summOfOrder = (basket) => {
    return basket.reduce((acc, product) => acc + product.price, 0);
  }

  const handleMinus = (item) => {

  }

  useEffect(() => {
    setCount(basket)
  }, [basket])

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={() => handleCloseBasket(false)}
      className={styles.test}
      width="80%"
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Ваш заказ
        </Text>
      </Modal.Header>
      <Modal.Body style={{ overflowY: 'scroll' }}>
        {basket.length ? basket?.map((item, index) => (
          <div className={styles.card} key={index}>
            <Image className={styles.card_img} width={100} height={100} src={item.image} alt="" />
            <div className={styles.card_wrapper_inner}>
              <div>
                <h3 className={styles.card_title}>{item.title}</h3>
                <h4 className={styles.card_price}>{item.price} сом</h4>
              </div>
              <div className={styles.card__inner} >
                <div className={styles.card__inner_right}>
                  {/* <Image width={23} onPress={() => handleMinus(item)} src={minus} alt="" />
                  <h4>{item.count}</h4>
                  <Image width={20} onPress={() => handlePlus(item)} src={plus} alt="" /> */}
                  <input style={{width: '30px'}} type="number" value={17} />
                </div>
              </div>
              <button>
                <Image width={20} src={close} alt="" />
              </button>
            </div>
          </div>
        )
        ) :
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'end', height: '200px' }}>
            <h3>Ваша корзина пуста !</h3>
          </div>
        }
      </Modal.Body>
      <Modal.Footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h3>Сумма заказа: <span style={{ color: 'red' }}>{summOfOrder(basket)} сом</span></h3>
        <Button auto flat color="error" onPress={() => order()}>
          Оформить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}