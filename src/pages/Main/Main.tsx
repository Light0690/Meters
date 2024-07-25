import Hero from '@components/Main/Hero';
import UILogo from '@ui/UILogo';

import styles from './Main.module.scss';


const Main = () => {
  return (
    <div className={styles.main}>
      <UILogo size='big' animate={true}/>
      <Hero />
    </div>
  );
};

export default Main;
