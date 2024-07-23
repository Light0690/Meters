import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

import splitTypeHelper from '@utils/splitTypeHelper';
import { ScrollLock } from '@utils/scrollLock';

import iconImg from '@assets/Main/icon.png';

import styles from './Start.module.scss';

const Start = () => {
  const wrapper = useRef(null);
  const icon = useRef(null);
  const bigTitle = useRef(null);
  const smallTitle = useRef(null);
  const scrollLock = new ScrollLock();

  useEffect(() => {
    scrollLock.disableScrolling();

    const tl = gsap.timeline({});

    tl.from(icon.current, { width: 0, duration: 1.5, ease: 'circ.out' });

    if(bigTitle.current) splitTypeHelper(bigTitle.current, tl, { options: { yPercent: 100, ease: 'circ.out', duration: 1.5 }});
    if(smallTitle.current) splitTypeHelper(smallTitle.current, tl, { position: () => '<+=40%' });

    tl.to(wrapper.current, { opacity: 0, zIndex: -1, duration: 0.5, onComplete: () => scrollLock.enableScrolling()})
  });

  return (
    <div className={styles.start} ref={wrapper}>
      <div className={styles.start__container}>
        <div className={styles['start__container-icon']} ref={icon}>
          <img className={styles.start__icon} src={iconImg} alt='icon' />
        </div>
      </div>
      <div className={styles['start__container-title']}>
        <h1 className={styles['start__big-title']} ref={bigTitle}>
          Метры
        </h1>
        <h4 className={styles['start__small-title']} ref={smallTitle}>группа компаний</h4>
      </div>
    </div>
  );
};

export default Start;
