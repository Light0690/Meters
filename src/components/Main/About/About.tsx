import aboutIcon from '@assets/Main/about.png';

import styles from './About.module.scss';

const About = () => {
  const about = {
    title: 'МЕТРЫ В ЦИФРАХ',
    texts: [
      'Группа компаний “МЕТРЫ” - это уникальные квартиры-студии в исторических центрах Москвы и Санкт-Петербурга.',
      'С 2018 года мы строим и предлагаем ликвидные для инвестиций студии с гарантированным доходом от 12% до 24% годовых.',
    ],
    img: {
      src: aboutIcon,
      alt: 'icon'
    },
    button: {
      text: 'Получить презентацию →'
    },
    list: [
      {
        title: '100.000₽',
        text: 'средний доход студии в месяц'
      },
      {
        title: '750+',
        text: 'инвесторов уже стали владельцами'
      },
      {
        title: '113+',
        text: 'жилых обьектов'
      },
      {
        title: '6 лет',
        text: 'на рынке недвижимости '
      },
    ]
  }
  
  return (
    <div className={styles.about}>
      <div className={styles.about__content}>
        <div className={styles.about__container}>
          <h2 className={styles.about__title}>{about.title}</h2>
          <div className={styles.about__texts}>
            {about.texts.map((text,id) => {
              return <p className={styles.about__text} key={id}>{text}</p>
            })}
          </div>
        </div>
        <div className={styles.about__presentation}>
          <div className={styles['about__img-container']}>
            <img src={about.img.src} alt={about.img.alt} className={styles.about__img}/>
          </div>
          <button className={styles.about__button}>{about.button.text}</button>
        </div>
      </div>
      <ul className={styles.about__list}>
        {about.list.map((li, id) => {
          return (
            <li className={styles.about__li} key={id}>
              <h3 className={styles['about__li-title']}>{li.title}</h3>
              <p className={styles['about__li-text']}>{li.text}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default About;
