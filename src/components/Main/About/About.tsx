import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import splitTypeHelper from '@src/utils/splitTypeHelper';

import aboutIcon from '@assets/Main/about.png';

import styles from './About.module.scss';


const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  let parentRef = useRef(null);
  let titleRef = useRef<null | HTMLHeadingElement>(null);
  let textsRef = useRef<null | HTMLDivElement>(null);
  let presentationRef = useRef(null);
  let iconRef = useRef(null);
  let listRef = useRef<null | HTMLUListElement>(null);

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

  useEffect(() => {
    if(parentRef) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: parentRef.current,
          start: `-20% 60%`,
          end: `70% 60%`,
          scrub: 1
        },
      });
  
      if(titleRef.current) splitTypeHelper(titleRef.current, tl)
      if(textsRef.current) tl.from(textsRef.current.children, { x: -50, opacity: 0, duration: 1, ease: 'circ.out', stagger: 0.2 }, '<+=0.5')
      if(presentationRef.current) tl.from(presentationRef.current, { xPercent: -10, opacity: 0, duration: 1, ease: 'circ.out' })
      if(iconRef.current) tl.from(iconRef.current, { yPercent: 30, opacity: 0, duration: 1, ease: 'circ.out' }, '<+=50%')
      if(listRef.current) tl.from(listRef.current.children, { x: -50, opacity: 0, duration: 1, ease: 'circ.out', stagger: 0.5 }, '0')
    }
  },[])
  
  return (
    <div className={styles.about} ref={parentRef}>
      <div className={styles.about__content}>
        <div className={styles.about__container}>
          <h2 className={styles.about__title} ref={titleRef}>{about.title}</h2>
          <div className={styles.about__texts} ref={textsRef}>
            {about.texts.map((text,id) => {
              return <p className={styles.about__text} key={id}>{text}</p>
            })}
          </div>
        </div>
        <div className={styles.about__presentation} ref={presentationRef}>
          <div className={styles['about__img-container']}>
            <div className={styles.about__img} ref={iconRef}>
              <img src={about.img.src} alt={about.img.alt} />
            </div>
          </div>
          <button className={styles.about__button}>{about.button.text}</button>
        </div>
      </div>
      <ul className={styles.about__list} ref={listRef}>
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
