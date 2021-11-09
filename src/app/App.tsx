import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      navigation
      <Routes>
        <Route path="/" element={<h1>Main</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
