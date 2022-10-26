import React from 'react';
import './App.css'
import About from './component/About'
import Nav from './component/Nav'
import Gallery from "./component/Gallery";

function App() {
  return (
    <div>
      <Nav></Nav>
      
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
      
    </div>
  );
}

export default App;
