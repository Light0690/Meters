import { Routes, Route } from "react-router-dom";

import Main from '../pages/Main';

import "./App.scss";

const App = () => {
  return (
    <div className="app">
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
