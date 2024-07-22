import Hero from '../../components/Main/Hero';
import Start from '../../components/Main/Start';

import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Start/>
      <Hero />
    </div>
  );
};

export default Main;
