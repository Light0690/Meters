import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import cn from 'classnames';

import UXMenu from '@components/UX/UXMenu';
import UILogo from '@components/UI/UILogo';

import animate from './animate';
import styles from './Header.module.scss';

interface props {
  type?: 'transparent'
}

const Header = ({ type = 'transparent' }: props) => {
  const list = ['Студии', 'Стать инвестором', 'О нас', 'Отзывы', 'Контакты'];

  const header = useRef(null);

  useGSAP(() => {
    animate({
      header: header.current
    })
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
