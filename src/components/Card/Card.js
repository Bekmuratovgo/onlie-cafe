import styles from './Card.module.scss';
import img from '../../assets/img/food.png';
import Image from 'next/image';
import editIcon from '../../assets/img/edit.png';
import removeIcon from '../../assets/img/trash.png';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '@/store/menu.slice';

export default function FoodCard({ item, handleEdit, handleDelete }) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.food);

  const handleAddToBasket = (item) => {
    let basket = JSON.parse(localStorage.getItem('basket' || [])) || [];

    const card = basket.find((card) => card.id === item.id);

    if (card) {
      const updatedCards = basket.map((card) => {
        if (card.id === item.id) {
          return { ...card, count: card.count + 1 };
        }
        return card;
      });
      basket = updatedCards;
    } else {
      const newCard = { ...item, count: 1 };
      basket.push(newCard);
    }
    localStorage.setItem('basket', JSON.stringify(basket))
    dispatch(addToBasket(basket))

  }

  return (
    <div className={styles.card}>
      <div className={styles.card_left}>
        <Image
          src={item.image}
          alt="img"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.card_right}>
        {
          token?.access || token?.refresh ? 
          <div style={{display: 'flex', justifyContent: 'end'}}>
            <Image className={styles.icons} src={editIcon} onClick={() => handleEdit(item)} alt="img" />
            <Image className={styles.icons} src={removeIcon} onClick={() => handleDelete(item)} alt="img" /> 
          </div> : ''
        }
        <h4> {item?.title} </h4>
        <span>{item?.description}</span>
        <h3>{item?.price} сом</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => handleAddToBasket(item)}>Заказать</button>
        </div>
      </div>
    </div>
  )
}
