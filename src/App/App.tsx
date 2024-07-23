import { Routes, Route } from "react-router-dom";

import { routes } from '@routes/routes';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        {routes.map((route, id) => {
          return (
            <Route 
              path={route.path}
              element={<route.element />}
              key={id}
            />
          )
        })}
        
      </Routes>
    </div>
  );
};

export default App;
