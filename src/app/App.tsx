import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Stuff from './pages/Stuff/Stuff';
function App(): JSX.Element {
  return (
    <BrowserRouter>
      navigation
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />

        <Route path="/stuff" element={<Stuff />}>
          <Route path=":stuffs" element={<Stuff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
