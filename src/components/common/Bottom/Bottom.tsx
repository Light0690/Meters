import { NavLink } from 'react-router-dom';

import UILogo from '@ui/UILogo';
import UILink from '@ui/UILink';

import locationIcon from '@assets/common/locationIcon.svg';

import vkIcon from '@assets/common/vkIcon.svg';
import tmIcon from '@assets/common/tmIcon.svg';
import ytIcon from '@assets/common/ytIcon.svg';
import yzIcon from '@assets/common/yzIcon.svg';

import styles from './Bottom.module.scss';


const Bottom = () => {
  const cities = [
    {
      place: 'Студии в Москве',
      address: {
        icon: locationIcon,
        text: 'ул. Большая Полянка, д. 7/10, ст. м. "Полянка"'
      },
      links: [
        {
          icon: vkIcon,
          src: ''
        },
        {
          icon: tmIcon,
          src: ''
        },
        {
          icon: ytIcon,
          src: ''
        },
        {
          icon: yzIcon,
          src: ''
        },
      ]
    },
    {
      place: 'Студии в СПБ',
      address: {
        icon: locationIcon,
        text: 'ул. 5-я Советская, д. 7-9, ст. м. "Площадь Восстания"'
      },
      links: [
        {
          icon: vkIcon,
          src: ''
        },
        {
          icon: tmIcon,
          src: ''
        },
        {
          icon: ytIcon,
          src: ''
        },
        {
          icon: yzIcon,
          src: ''
        },
      ]
    },
  ];

  const links = [
    {
      text: 'Студии',
      src: ''
    },
    {
      text: 'Стать инвестором',
      src: ''
    },
    {
      text: 'О нас',
      src: ''
    },
    {
      text: 'Отзывы',
      src: ''
    },
    {
      text: 'контакты',
      src: ''
    }
  ];

  return (
    <div className={styles.bottom}>
      <UILogo size='medium'/>
      <div className={styles.bottom__cities}>
        {cities.map((city,id) => {
          return (
          <div className={styles.bottom__city} key={id}>
            <h4 className={styles.bottom__place}>{city.place}</h4>
            <div className={styles.bottom__address}>
              <img className={styles['bottom__address-icon']} src={city.address.icon} alt="icon" />
              <p className={styles['bottom__address-text']}>{city.address.text}</p>
            </div>
            <div className={styles.bottom__socials}>
              {city.links.map((link,id) => {
                return (
                <NavLink to={link.src} key={id} className={styles.bottom__social}>
                  <img src={link.icon} alt="icon" className={styles.bottom__icon}/>
                </NavLink>)
              })}
            </div>
          </div>)
        })}
      </div>
      <ul className={styles.bottom__links}>
        {links.map((link,id) => {
          return <li key={id}><UILink src={link.src} text={link.text}/></li>
        })}
      </ul>
    </div>
  );
};

export default Bottom;
