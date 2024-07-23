import { Routes, Route } from "react-router-dom";

import Main from '@pages/Main';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route 
          path='/'
          element={ <Main/> }
        />
      </Routes>
    </div>
  );
};

export default App;
