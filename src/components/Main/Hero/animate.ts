import { gsap } from 'gsap';

import { getDevice } from '@utils/getDevice';
import useRem from '@utils/useRem';

import { deviceType } from '@src/types/device';

const getX = (device: deviceType) => {
  if(device === 'desktop') return useRem(-50);
  if(device === 'laptop')  return useRem(-40);
  if(device === 'tablet')  return useRem(-30);
  if(device === 'mobile')  return useRem(-20);
}

const getDataAnimate = (device: deviceType) => ({ x: getX(device), opacity: 0, duration: 2, ease: 'circ.out', stagger: 0.1 });

interface props {
  titles:  undefined | HTMLCollection,
  list:    undefined | HTMLCollection,
  buttons: undefined | HTMLCollection
}

const animate = ({ titles, list, buttons }: props) => {
  const tl = gsap.timeline({ delay: 1.8 });
  const device = getDevice();

  if(titles)  tl.from(titles, getDataAnimate(device), '0');
  if(list)    tl.from(list, getDataAnimate(device), device === 'desktop' || device === 'laptop' ? '0' : '<+=0.2');
  if(buttons) tl.from(buttons, getDataAnimate(device), '0');
};

export default animate;