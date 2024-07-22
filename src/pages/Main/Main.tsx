import Hero from '../../components/Main/Hero';
import Start from '../../components/Main/Start';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
      <Start />
      <Hero />
    </div>
  );
};

export default Main;
