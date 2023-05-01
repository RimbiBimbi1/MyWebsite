import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { Layout } from './components/common/Layout/Layout';
import { Home } from './components/pages/Home/Home';


function App() {
  return (
      <Routes>
        <Route path={"/"} element={Layout}>
          <Route path={"/*"} element={Home}></Route>
        </Route>
      </Routes>
  );
}

export default App;
