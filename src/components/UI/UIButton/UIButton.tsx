import cn from 'classnames';

import styles from './UIButton.module.scss';

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  text: string;
  typeAnim?: 'transparent' | 'filling' | 'shadow';
  size?: 'big' | 'medium';
  radius?: boolean
}

const UIButton = ({ text, typeAnim = 'transparent', size = 'medium', radius = true, ...props }: props) => {
  return (
    <div className={styles.wrapper}>
      <button className={cn(styles.wrapper__button, styles[typeAnim], styles[size], radius && styles['radius'])} {...props}>
        {text}
      </button>
    </div>
  );
};

export default UIButton;
