import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

import { useResize } from '@src/hooks/useResize';

import UIButton from '@ui/UIButton';

import heroImg from '@assets/Main/hero.jpg';

import styles from './Hero.module.scss';


const Hero = () => {
  const titles = useRef<null | HTMLDivElement>(null);
  const list = useRef<null | HTMLUListElement>(null);
  const buttons = useRef<null | HTMLDivElement>(null);
  const { isScreenMd } = useResize();

  console.log(useResize())
  
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.8 });
    const animate = { x: -50, opacity: 0, duration: 2, ease: 'circ.out', stagger: 0.1 };

    if(titles.current)  tl.from(titles.current.children, animate, '0');
    if(list.current)    tl.from(list.current.children, animate, isScreenMd ? '0' : '<+=0.2');
    if(buttons.current) tl.from(buttons.current.children, animate, '0');
  },[])
  
  return (
    <div className={styles.hero}>
      <div className={styles['hero__container-img']}>
        <img className={styles.hero__img} src={heroImg} alt="hero" />
      </div>
      <div className={styles.hero__content}> 
        <div ref={titles} className={styles['hero__container-titles']}>
          <h3 className={styles['hero__title--big']}>Квартиры - студии в&nbsp;историческом центре</h3>
          <h4 className={styles['hero__title--small']}>Безопасно инвестируйте в&nbsp;ликвидную недвижемость с&nbsp;гаратнированным доходом</h4>
        </div>
        <ul ref={list} className={styles.hero__list}>
          <li className={styles['hero__list-item']}>доход от 12% годовых</li>
          <li className={styles['hero__list-item']}>своя управляющая компания</li>
          <li className={styles['hero__list-item']}>все этапы согласований</li>
        </ul>
      </div>
      <div ref={buttons} className={styles.hero__btns}>
        <UIButton text='Москва'/>
        <UIButton text='СПБ'/>
      </div>
    </div>
  );
};

export default Hero;
