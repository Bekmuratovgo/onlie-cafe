import styles from './Card.module.scss';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '@/store/menu.slice';
import Minus from '@/assets/img/minus';
import Plus from '@/assets/img/plus';
import editIcon from '@/assets/img/editBlack.png';
import removeIcon from '@/assets/img/trashBlack.png';

export default function FoodCard({ item, handleEdit, handleDelete }) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.food);

  const handleAddToBasket = (product, type) => {
    let basket = JSON.parse(localStorage.getItem('basket' || [])) || [];

    const card = basket.find((card) => card.id === product.id);

    if (card && type === 'plus') {
      const updatedCards = basket.map((card) => {
        if (card.id === product.id) {
          return { ...card, count: card.count + 1 };
        }
        return card;
      });
      basket = updatedCards;
    } else if (card && type === 'minus') {
      const updatedCards = [];
      basket.forEach((card) => {
        if (card.id === product.id && card.count > 1) {
          updatedCards.push(
            { ...card, count: card.count - 1 }
            ) 
          } else if (card.id !== product.id && card.count) {
          updatedCards.push(
            card
          ) 
        }
      });
      basket = updatedCards;
    } else {
      if (type !== 'minus') {
        const newCard = { ...product, count: 1 };
        basket.push(newCard);
      }
    }
    
    console.log(basket, 'BASKET--');
    localStorage.setItem('basket', JSON.stringify(basket))
    dispatch(addToBasket(basket))
  }

  return (
    <div className={styles.card}>
      {
        token?.access || token?.refresh ?
          <div className={styles.edits}>
            <Image className={styles.icons} src={editIcon} onClick={() => handleEdit(item)} alt="icon-edit" />
            <Image className={styles.icons} src={removeIcon} onClick={() => handleDelete(item)} alt="icon-delete" />
          </div>
          : ''
      }
      <div className={styles.foodImg} style={{ backgroundImage: `url(${item.image})` }}>
      </div>
      {/* <Image
        
        src={item.image}
        alt="img-card"
        width={100}
        height={100}
      /> */}
      <div className={styles.cardBody}>
        <h4> {item?.title} </h4>
        <h4 className={styles.desc}>{item?.description}</h4 >
        <h2>{item?.price} с</h2>
        <div className={styles.block}>
          <div className={styles.minus} onClick={() => handleAddToBasket(item, 'minus')}>
            <Minus />
          </div>
          <input value={0} readOnly className={styles.input} />
          <div className={styles.minus} onClick={() => handleAddToBasket(item, 'plus')}>
            <Plus />
          </div>
        </div>
      </div>
    </div>
  )
}
