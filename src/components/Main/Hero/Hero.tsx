import heroImg from '../../../assets/Main/hero.jpg';
import UIButton from '../../UI/UIButton';

import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className='hero__container-img'>
        <img className='hero__img' src={heroImg} alt="hero" />
      </div>
      <div className='hero__content'> 
        <div className='hero__container-titles'>
          <h3 className='hero__title-big'>Квартиры - студии в&nbsp;историческом центре</h3>
          <h4 className='hero__title-small'>Безопасно инвестируйте в&nbsp;ликвидную недвижемость с&nbsp;гаратнированным доходом</h4>
        </div>
        <ul className='hero__list'>
          <li className='hero__list-item'>доход от 12% годовых</li>
          <li className='hero__list-item'>своя управляющая компания</li>
          <li className='hero__list-item'>все этапы согласований</li>
        </ul>
      </div>
      <div className='hero__btns'>
        <UIButton text='Москва'/>
        <UIButton text='СПБ'/>
      </div>
    </div>
  );
};

export default Hero;
