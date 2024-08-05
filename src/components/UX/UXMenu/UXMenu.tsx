import { useEffect, useState } from 'react';
import cn from 'classnames';

import { useResize } from '@hooks/useResize';
import { ScrollLock } from '@utils/scrollLock';

import UILink from '@components/UI/UILink';

import styles from './UXMenu.module.scss';

interface props {
  list: string[]
}

const UXMenu = ({ list }: props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { isScreenLg } = useResize();
  const scrollLock = new ScrollLock();

  const changeActive = () => setIsActive(prev => !prev);
  const onClickWindow = (e: React.SyntheticEvent<HTMLDivElement>) => {
    const target = e.target;
    
    if(target instanceof HTMLDivElement) {
      e.stopPropagation();

      if(isActive && target?.dataset?.uxMenu == 'close') {
        setIsActive(false);
      }
    }
  };

  useEffect(() => {
    if(isScreenLg) setIsActive(false);
  },[isScreenLg]);

  useEffect(() => {
    if(isActive) scrollLock.disableScrolling();
    else         scrollLock.enableScrolling();
  },[isActive]);

  return (
    <div className={styles.menu}>
      <div data-ux-menu='close' className={cn(styles.menu__window, isActive ? styles['menu__window--active'] : '')} onClick={(e) => onClickWindow(e)}>
        <ul className={cn(styles.menu__list, isActive ? styles['menu__list--active'] : '')}>
          {list.map((el, id) => {
            return (
              <li key={id}><UILink src='' text={el}/></li>
            )
          })}
        </ul>
      </div>
      <button onClick={changeActive} className={cn(styles.menu__button, isActive ? styles['menu__button--active'] : '')}>
        <div></div>
      </button>
    </div>
  );
};

export default UXMenu;