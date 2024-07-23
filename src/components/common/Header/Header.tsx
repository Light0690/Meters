import cn from 'classnames';

import styles from './Header.module.scss';

interface props {
  type?: 'transparent'
}

const Header = ({ type = 'transparent' } : props) => {
  return (
    <header className={cn(styles.header, styles[type])}>
      qwe
    </header>
  );
};

export default Header;
