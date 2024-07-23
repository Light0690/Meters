import cn from 'classnames';

import heroImg from '@assets/Header/logo.png';

import styles from './Header.module.scss';

interface props {
  type?: 'transparent'
}

const Header = ({ type = 'transparent' } : props) => {
  return (
    <header className={cn(styles.header, styles[type])}>
      <div className={styles['header__container-logo']}>
        <div className={styles.header__logo}>
          <img className={styles['header__img']} src={heroImg} alt="logo" />
        </div>
        <div className={styles.header__titles}>
          <div className={cn(styles.header__title, styles['header__title--big'])}>Метры</div>
          <div className={cn(styles.header__title, styles['header__title--small'])}>группа компаний</div>
        </div>
      </div>
      <ul className={styles.header__list}>
        <li className={styles.header__elem}>Студии</li>
        <li className={styles.header__elem}>Стать инвестором</li>
        <li className={styles.header__elem}>О нас</li>
        <li className={styles.header__elem}>Отзывы</li>
        <li className={styles.header__elem}>Контакты</li>
      </ul>
    </header>
  );
};

export default Header;
