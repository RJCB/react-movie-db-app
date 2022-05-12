import './_App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
// import MovieDetails from './pages/MovieDetails';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<MovieDetails />}/> */}
      </Routes>
    </>
  );
}

export default App;
