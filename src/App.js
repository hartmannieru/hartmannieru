import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/';
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound ';
import { Portfolio } from './pages/Portfolio';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="portfolio" element={ <Portfolio /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
