import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import cn from 'classnames';

import { ScrollLock } from '@utils/scrollLock';

import iconImg from '@assets/common/icon.png';

import animate from './animate';
import styles from './UILogo.module.scss';

interface props {
  size?: 'small' | 'medium' | 'big',
  bg?: 'transparent' | 'dark',
  isAnimate?: boolean
}

const UILogo = ({ size = 'medium', bg = 'transparent', isAnimate = false }: props) => {
  const [isDisable, setIsDisable] = useState<boolean>(isAnimate);
  const wrapper = useRef(null);
  const icon = useRef(null);
  const bigTitle = useRef(null);
  const smallTitle = useRef(null);
  const scrollLock = new ScrollLock();

  useEffect(() => {
    if(isAnimate) {
      if(isDisable) scrollLock.disableScrolling();
      else          scrollLock.enableScrolling();
    }
  },[isDisable])

  useGSAP(() => {
    if(isAnimate) {
      animate({
        icon: icon.current,
        bigTitle: bigTitle.current,
        smallTitle: smallTitle.current,
        wrapper: wrapper.current,
        startFunc: () => setIsDisable(true),
        cb: () => setIsDisable(false)
      });
    }
  },[]);
  
  return (
    <div className={cn(styles.logo, styles[size], styles[bg])} ref={wrapper}>
      <div className={styles.logo__container}>
        <div className={styles['logo__container-icon']} ref={icon}>
          <img className={styles.logo__icon} src={iconImg} alt='icon' />
        </div>
      </div>
      <div className={styles['logo__titles']}>
        <h1 className={styles['logo__title--big']} ref={bigTitle}>
          Метры
        </h1>
        <h4 className={styles['logo__title--small']} ref={smallTitle}>группа компаний</h4>
      </div>
    </div>
  );
};

export default UILogo;
