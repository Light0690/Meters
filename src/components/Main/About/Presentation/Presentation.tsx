import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import cn from 'classnames';

import { ScrollLock } from '@utils/scrollLock';

import presentationImg from '@assets/Main/presentation.png';

import animate from './animate';
import styles from './Presentation.module.scss';

interface props {
  isPresentation: boolean
  changePresentation: any
}

const Presentation = ({ isPresentation, changePresentation }: props) => {
  const wrapper   = useRef<null | HTMLDivElement>(null);
  const container = useRef<null | HTMLDivElement>(null);
  const content   = useRef<null | HTMLDivElement>(null);
  const img       = useRef<null | HTMLImageElement>(null);

  const scrollLock = new ScrollLock();
  const presentation = {
    title: 'Получить презентацию',
    text: 'Оставьте заявку, и мы пришлем Вам презентацию в Телеграмм',
    btnText: 'Получить презентацию',
    img: {
      src: presentationImg,
      alt: 'img'
    }
  };

  useEffect(() => {
    if(isPresentation) {
      scrollLock.disableScrolling();
    } else {
      scrollLock.enableScrolling();
    }
  },[isPresentation]);

  useGSAP(() => {
    if(isPresentation) {
      animate({
        wrapper:   wrapper.current,
        container: container.current,
        content:   content?.current?.children,
        img:       img.current,
      })
    }
  },[isPresentation]);

  const close = (e: React.SyntheticEvent<HTMLDivElement>) => {
    const target = e.target;
    
    if(target instanceof HTMLDivElement) {
      e.stopPropagation();

      if(target?.dataset?.presentation == 'close') {
        changePresentation();
      }
    }
  };

  return (
    <div className={cn(styles.presentation, isPresentation && styles['presentation--active'])} data-presentation='close' onClick={close} ref={wrapper}>
      <div className={styles.presentation__container} ref={container}>
        <div className={styles.presentation__content} ref={content}>
          <h4 className={styles.presentation__title}>{presentation.title}</h4>
          <p className={styles.presentation__text}>{presentation.text}</p>
          <div className={styles.presentation__btns}>
            <input type="text" />
            <button >{presentation.btnText}</button>
          </div>
        </div>
        <button onClick={changePresentation} className={styles.presentation__close}><IoCloseOutline /></button>
        <img className={styles.presentation__img} src={presentation.img.src} alt={presentation.img.alt} ref={img}/>
      </div>
    </div>
  );
};

export default Presentation;