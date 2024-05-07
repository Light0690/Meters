import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
import Start from '../Start';
import city1 from '../../assets/Select/city1.jpg';
import city2 from '../../assets/Select/city2.jpg';
import './Select.scss';

const Select = () => {
  const [isEndAnimate, setIsEndAnimate] = useState(false);

  useEffect(() => {
    if(isEndAnimate) {
      const tl = gsap.timeline();
      const cities = document.querySelectorAll('[data-select-city]');

      tl.to(cities, { width: '50%', duration: 1, ease: 'circ.out' });

      // $("#container").mousemove(function(e) {
      //   parallaxIt(e, ".slide", -100);
      //   parallaxIt(e, "img", -30);
      // });
      
      // function parallaxIt(e, target, movement) {
      //   var $this = $("#container");
      //   var relX = e.pageX - $this.offset().left;
      //   var relY = e.pageY - $this.offset().top;
      
      //   TweenMax.to(target, 1, {
      //     x: (relX - $this.width() / 2) / $this.width() * movement,
      //     y: (relY - $this.height() / 2) / $this.height() * movement
      //   });
      // }
    }
  });

  return (
    <div className='select'>
      <div className='select__city-first select__city' data-select-city='msk'>
        <h2 className='select__city-title'>Москва</h2>
        <div className='select__city-container-img'>
          <img className='select__city-img' src={city1} alt="MSK" />
        </div>
      </div>
      <Start setIsEndAnimate={setIsEndAnimate}/>
      <div className='select__city-second select__city' data-select-city='spb'>
        <h2 className='select__city-title'>СПБ</h2>
        <div className='select__city-container-img'>
          <img className='select__city-img' src={city2} alt="SPB" />
        </div>
      </div>
    </div>
  );
};

export default Select;
