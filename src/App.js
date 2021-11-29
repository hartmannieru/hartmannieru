import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Scrollbar from 'react-scrollbars-custom';
import { Header } from './components/Header/';
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound ';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Context } from './utils/Context';

function App() {
  const scrollSize = {
    width: '100%', 
    height: '100vh'
  };

  return (
    <Scrollbar 
      style={scrollSize} 
      mobileNative={true}
      thumbYProps={{style: {"background": "#FFBE0D" }}}
    >
      <Context>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="portfolio" element={ <Portfolio /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </Context>
    </Scrollbar>
  );
}

export default App;
