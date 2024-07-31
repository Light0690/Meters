import { gsap } from 'gsap';

import { matchMediaCreator } from '@utils/matchMediaCreator';
import splitTypeHelper from '@utils/splitTypeHelper';
import useRem from '@utils/useRem';

interface props {
  parent: null | HTMLDivElement,
  title: null | HTMLHeadingElement, 
  texts: undefined | HTMLCollection, 
  presentation: null | HTMLDivElement, 
  icon: null | HTMLDivElement, 
  list: undefined | HTMLCollection
}

const animate = ({ parent, title, texts, presentation, icon, list }: props) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: parent,
      start: `-20% 60%`,
      end: `70% 60%`,
      scrub: 1
    },
  });

  if(title) splitTypeHelper(title, tl)
  if(texts) tl.from(texts, { x: useRem(-50), opacity: 0, duration: 1, ease: 'circ.out', stagger: 0.2 }, '<+=0.5')
  if(presentation) tl.from(presentation, { xPercent: -10, opacity: 0, duration: 1, ease: 'circ.out' })
  if(icon) tl.from(icon, { yPercent: 30, opacity: 0, duration: 1, ease: 'circ.out' }, '<+=50%')
  if(list) tl.from(list, { x: useRem(-50), opacity: 0, duration: 1, ease: 'circ.out', stagger: 0.5 }, '0')
};

export default (props: props) => matchMediaCreator(() => animate(props));