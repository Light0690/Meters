import { useEffect, useRef } from 'react';
import cn from 'classnames';
import { gsap } from 'gsap';

import splitTypeHelper from '@utils/splitTypeHelper';
import { ScrollLock } from '@utils/scrollLock';

import iconImg from '@assets/common/icon.png';

import styles from './UILogo.module.scss';


interface props {
    size?: 'small' | 'medium' | 'big',
    bg?: 'transparent' | 'dark',
    animate?: boolean
}

const UILogo = ({ size = 'medium', bg = 'transparent', animate = false }: props) => {
  const wrapper = useRef(null);
  const icon = useRef(null);
  const bigTitle = useRef(null);
  const smallTitle = useRef(null);
  const scrollLock = new ScrollLock();

  useEffect(() => {
    if(animate) {
      scrollLock.disableScrolling();

      const tl = gsap.timeline({});
  
      tl.from(icon.current, { width: 0, duration: 1.5, ease: 'circ.out' });
  
      if(bigTitle.current) splitTypeHelper(bigTitle.current, tl, { options: { yPercent: 100, ease: 'circ.out', duration: 1.5 }});
      if(smallTitle.current) splitTypeHelper(smallTitle.current, tl, { position: () => '<+=40%' });

      tl.to(wrapper.current, { opacity: 0, zIndex: -1, duration: 0.5, onComplete: () => scrollLock.enableScrolling()})
    }
  });

  
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
