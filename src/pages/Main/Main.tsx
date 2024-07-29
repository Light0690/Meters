import UILogo from '@ui/UILogo';
import Hero from '@components/Main/Hero';
import About from '@components/Main/About';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
      {/* <UILogo size='big' bg='dark' animate={true}/> */}
      <Hero />
      <About />
    </div>
  );
};

export default Main;
