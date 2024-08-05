import { gsap } from 'gsap';

import { matchMediaCreator } from '@utils/matchMediaCreator';
import { getDevice } from '@utils/getDevice';
import useRem from '@utils/useRem';

interface props {
  wrapper:        null | HTMLDivElement,
  container:      null | HTMLDivElement, 
  content:        undefined | HTMLCollection, 
  img:            null | HTMLDivElement
}

const dataAnimateX = {
  'desktop': useRem(-50),
  'laptop': useRem(-40),
  'tablet': useRem(-30),
  'mobile': useRem(-20)
}

const animate = ({ wrapper, container, content, img }: props) => {
  const tl = gsap.timeline();
  const device = getDevice();

  const clear = (target: gsap.TweenTarget) => {
    gsap.set(target, { clearProps: 'all' })
  }

  if(wrapper)   tl.from(wrapper, { background: 'rgba(0, 0, 0, 0)', backdropFilter: 'blur(0px)', duration: 0.5, ease: 'circ.out'});
  if(container) tl.from(container, { width: 0, padding: 0, duration: 0.5, ease: 'circ.out', onComplete: () => clear(container)});
  if(content)   tl.from(content, { x: dataAnimateX[device], opacity: 0, duration: 1, ease: 'circ.out', stagger: 0.2 });
  if(img)       tl.from(img, { x: -dataAnimateX[device], opacity: 0, duration: 1, ease: 'circ.out' }, '<')
};

export default (props: props) => matchMediaCreator(() => animate(props));