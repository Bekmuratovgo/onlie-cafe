import styles from './Footer.module.scss';
export default function Footer() {

  const footerItems = [
    {
      title: 'Суши Весла',
      description: 'Суши Вёсла» — профессиональная служба доставки японских и азиатских блюд в Бишкеке и в Оше.'
    },
    {
      title: 'Магазин',
      description: `Меню О нас Доставка и оплата Контакты`
    },
    {
      title: 'Суши Весла',
      description: `Политика конфиденциальности Мой аккаунт Корзина`
    },
    {
      title: '0550 32-32-15 0700 32-32-15',
      description: ' Г. Бишкек, Кыргызстан Манаса 8/12 (Боконбаева)'
    },
  ]
  return (
    <div className={styles.footer_wrapper}>
      {footerItems.map((item, index) => (
        <div 
          key={item.title + index}
          className={styles.footer_card}
        >
          <h3>{item.title}</h3>
          <span> {item.description} </span>
        </div>
      ))}
    </div>
  )
}
