import { gsap } from 'gsap';

const mm = gsap.matchMedia();

const optionsDefault = {
  desktop: '(min-width:1024px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  mobile: '(max-width: 767px)',
};

const matchMediaCreator = (cb: gsap.ContextFunc, options = optionsDefault) => {
  mm.add(options, cb);
};

export { matchMediaCreator };
