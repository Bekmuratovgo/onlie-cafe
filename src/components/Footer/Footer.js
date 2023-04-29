import Link from 'next/link';
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
      title: '0550 32-32-15',
      description: ' Г. Бишкек, Кыргызстан Манаса 8/12 (Боконбаева)',
      isNumber: true
    },
  ]
  return (
    <div id='contacts' className={styles.footer_wrapper}>
      {footerItems.map((item, index) => (
        <div 
          key={item.description}
          className={styles.footer_card}
        >
          {item.isNumber ? 
            <h3>
              <Link style={{color: 'white', textDecoration: 'none'}} href={'tel:' + item.title}>{item.title}</Link>
            </h3>
            : 
            <h3>{item.title}</h3>
          }
          <span> {item.description} </span>
        </div>
      ))}
    </div>
  )
}
