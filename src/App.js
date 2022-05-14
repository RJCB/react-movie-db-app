import './_App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import { createContext, useState } from 'react';
import MovieDetails from './pages/MovieDetails';
import Login from './components/Login';
import NotFound from './components/NotFound';

export const SearchTermContext = createContext();
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:mediaType/:mediaId" element={<MovieDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </SearchTermContext.Provider>
  );
}

export default App;
