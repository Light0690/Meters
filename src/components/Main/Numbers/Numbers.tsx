import styles from './Numbers.module.scss';

const Numbers = () => {
  const about = {
    title: 'МЕТРЫ В ЦИФРАХ',
    texts: [
      'Группа компаний “МЕТРЫ” - это уникальные квартиры-студии в исторических центрах Москвы и Санкт-Петербурга.',
      'С 2018 года мы строим и предлагаем ликвидные для инвестиций студии с гарантированным доходом от 12% до 24% годовых.',
    ],
    img: {
      src: '',
      alt: ''
    },
    button: {
      text: 'Получить презентацию →'
    },
    list: [
      {
        title: '100.000₽',
        text: 'средний доход студии в месяц'
      }
    ]
  }
  
  return (
    <div className={styles.numbers}>
      <div className={styles.numbers__about}>
        <div className={styles.numbers__content}>
          <h2 className={styles.number__title}>{about.title}</h2>
          <div className={styles.numbers__texts}>
            {about.texts.map((text,id) => {
              return <p className={styles.numbers__text} key={id}>{text}</p>
            })}
          </div>
        </div>
        <div className={styles.numbers__presentation}>
          <div className={styles['numbers__img-container']}>
            <img src={about.img.src} alt={about.img.alt} className={styles.numbers__img}/>
          </div>
          <button className={styles.numbers__button}>{about.button.text}</button>
        </div>
      </div>
      <ul className={styles.numbers__list}>
        {about.list.map((li, id) => {
          return (
            <li className={styles.numbers__li} key={id}>
              <h3 className={styles['numbers__li-title']}>{li.title}</h3>
              <p className={styles['numbers__li-text']}>{li.text}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Numbers;
