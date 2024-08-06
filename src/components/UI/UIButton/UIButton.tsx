import cn from 'classnames';

import styles from './UIButton.module.scss';

interface props {
  text: string;
  type?: 'transparent' | 'filling';
}

const UIButton = ({ text, type = 'transparent'}: props) => {
  return (
    <div className={styles.wrapper}>
      <button className={cn(styles.wrapper__button, styles[type])}>{text}</button>
    </div>
  );
};

export default UIButton;
