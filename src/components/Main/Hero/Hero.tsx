import heroImg from '@assets/Main/hero.jpg';
import UIButton from '@ui/UIButton';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles['hero__container-img']}>
        <img className={styles.hero__img} src={heroImg} alt="hero" />
      </div>
      <div className={styles.hero__content}> 
        <div className={styles['hero__container-titles']}>
          <h3 className={styles['hero__title-big']}>Квартиры - студии в&nbsp;историческом центре</h3>
          <h4 className={styles['hero__title-small']}>Безопасно инвестируйте в&nbsp;ликвидную недвижемость с&nbsp;гаратнированным доходом</h4>
        </div>
        <ul className={styles.hero__list}>
          <li className={styles['hero__list-item']}>доход от 12% годовых</li>
          <li className={styles['hero__list-item']}>своя управляющая компания</li>
          <li className={styles['hero__list-item']}>все этапы согласований</li>
        </ul>
      </div>
      <div className={styles.hero__btns}>
        <UIButton text='Москва'/>
        <UIButton text='СПБ'/>
      </div>
    </div>
  );
};

export default Hero;
