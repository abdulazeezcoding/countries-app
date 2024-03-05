import './App.css';
import AboutPage from './pages/aboutpage';
import CountriesPage from './pages/countriespage';
import CountryPage from './pages/country';
import GalleryPage from './pages/gallerypage';
import Homepage from './pages/homepage';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>

      <Route path= '/' element={<Homepage/>}></Route>

      <Route path= '/aboutPage' element={<AboutPage/>}></Route>

      <Route path='/countriesPage' element={<CountriesPage/>}></Route>

      <Route path='/gallery' element={<GalleryPage />}></Route>

      <Route path='/country' element={<CountryPage />}></Route>

    </Routes>
  </BrowserRouter>
  </>   
  );
}

export default App;
