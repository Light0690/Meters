import cn from 'classnames';
import styles from './UIButton.module.scss';

interface props {
  text: string;
  type?: 'outline';
}

const UIButton = ({ text, type = 'outline'}: props) => {
  return (
    <div className={styles.wrapper}>
      <button className={cn(styles.wrapper__button, styles[type])}>{text}</button>
    </div>
  );
};

export default UIButton;
