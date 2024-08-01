import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import cn from 'classnames';

import UXMenu from '@components/UX/UXMenu';
import UILogo from '@components/UI/UILogo';

import styles from './Header.module.scss';

interface props {
  type?: 'transparent'
}

const Header = ({ type = 'transparent' } : props) => {
  const list = ['Студии', 'Стать инвестором', 'О нас', 'Отзывы', 'Контакты'];

  const header = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.8 });

    if(header.current) tl.from(header.current, { yPercent: -25, opacity: 0, duration: 2, ease: 'circ.out' })
  },[])


  return (
    <header ref={header} className={cn(styles.header, styles[type])}>
      <NavLink className={styles['header__container-logo']} to={'/'}>
        <UILogo size='small'/>
      </NavLink>
      <UXMenu list={list}/>
    </header>
  );
};

export default Header;
