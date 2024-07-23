import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

import iconImg from '@assets/Main/icon.png';
import splitTypeHelper from '@utils/splitTypeHelper';

import styles from './Start.module.scss';

const Start = () => {
  const wrapper = useRef(null);
  const icon = useRef(null);
  const bigTitle = useRef(null);
  const smallTitle = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({});

    tl.from(icon.current, { width: 0, duration: 1.5, ease: 'circ.out' });

    splitTypeHelper(bigTitle.current, tl, {options: { yPercent: 100, ease: 'circ.out', duration: 1.5 }});
    splitTypeHelper(smallTitle.current, tl, { position: () => '<+=40%' });

    tl
      .to(wrapper.current, { opacity: 0, zIndex: -1, duration: 2 })
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
