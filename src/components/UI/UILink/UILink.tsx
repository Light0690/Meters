import { NavLink } from 'react-router-dom';

import styles from './UILink.module.scss';

interface props {
  text: string,
  src: string
}

const UILink = ({ text, src }: props) => {
  return (
    <NavLink to={src} className={styles.link}>{text}</NavLink>
  );
};

export default UILink;