import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import heroImg from '@assets/Header/logo.png';

import styles from './Header.module.scss';

interface props {
  type?: 'transparent'
}

const Header = ({ type = 'transparent' } : props) => {
  return (
    <header className={cn(styles.header, styles[type])}>
      <NavLink className={styles['header__container-logo']} to={'/'}>
        <div className={styles.header__logo}>
          <img className={styles['header__img']} src={heroImg} alt="logo" />
        </div>
        <div className={styles.header__titles}>
          <div className={cn(styles.header__title, styles['header__title--big'])}>Метры</div>
          <div className={cn(styles.header__title, styles['header__title--small'])}>группа компаний</div>
        </div>
      </NavLink>
      <ul className={styles.header__list}>
        <li><NavLink to={''} className={styles.header__elem}>Студии</NavLink></li>
        <li><NavLink to={''} className={styles.header__elem}>Стать инвестором</NavLink></li>
        <li><NavLink to={''} className={styles.header__elem}>О нас</NavLink></li>
        <li><NavLink to={''} className={styles.header__elem}>Отзывы</NavLink></li>
        <li><NavLink to={''} className={styles.header__elem}>Контакты</NavLink></li>
      </ul>
    </header>
  );
};

export default Header;
