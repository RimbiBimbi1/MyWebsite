import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Projects } from './pages/Projects/Projects';
import { Hobby } from './pages/Hobby/Hobby';
import { Contact } from './pages/Contact/Contact';
import { ScrollTop } from './common/ScrollTop';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<ScrollTop />}>
        <Route path={'/'} element={<Layout />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/projects'} element={<Projects />} />
          <Route path={'/hobby'} element={<Hobby />} />
          <Route path={'/contact'} element={<Contact />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;