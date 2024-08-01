import { gsap } from 'gsap';

interface props {
  header: null | HTMLHeadElement
}

const animate = ({ header }: props) => {
  const tl = gsap.timeline({ delay: 1.8 });

  if(header) tl.from(header, { yPercent: -25, opacity: 0, duration: 2, ease: 'circ.out' })
};

export default animate;