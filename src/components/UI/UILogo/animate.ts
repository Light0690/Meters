import { gsap } from 'gsap';

import { matchMediaCreator } from '@utils/matchMediaCreator';
import splitTypeHelper from '@utils/splitTypeHelper';

interface props {
  icon: null | HTMLDivElement,
  bigTitle: null | HTMLDivElement,
  smallTitle: null | HTMLDivElement,
  wrapper: null | HTMLDivElement,
  startFunc: Function,
  cb: Function
}

const animate = ({ icon, bigTitle, smallTitle, wrapper, startFunc, cb }: props) => {
  const tl = gsap.timeline({});

  startFunc();

  if(icon) tl.from(icon, { width: 0, duration: 1.5, ease: 'circ.out' });
  if(bigTitle) splitTypeHelper(bigTitle, tl, { options: { yPercent: 100, ease: 'circ.out', duration: 1.5 }});
  if(smallTitle) splitTypeHelper(smallTitle, tl, { position: () => '<+=40%' });
  if(wrapper) tl.to(wrapper, { opacity: 0, zIndex: -1, duration: 0.5, onComplete: () => cb()})
};

export default (props: props) => matchMediaCreator(() => animate(props));