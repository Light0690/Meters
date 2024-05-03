import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import iconImg from '../../assets/Start/icon.png';
import './Start.scss';

const Start = () => {
  const wrapper = useRef(null);
  const icon = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({});

    tl
      .from(icon.current, { width: 0, duration: 1.5, ease: 'circ.out' })
      .from(text.current, { yPercent: 100, duration: 1.5, ease: 'circ.out' }, '<+=15%')
      .to(wrapper.current, { opacity: 0, duration: 1.5, ease: 'circ.out' })
      .to(wrapper.current, { display: 'none' });
  });

  return (
    <div className='start' ref={wrapper}>
      <div className='start__container'>
        <div className='start__container-icon' ref={icon}>
          <img className='start__icon' src={iconImg} alt='icon' />
        </div>
      </div>
      <div className='start__container-title'>
        <div className='start__title' ref={text}>
          Метры
        </div>
      </div>
    </div>
  );
};

export default Start;
