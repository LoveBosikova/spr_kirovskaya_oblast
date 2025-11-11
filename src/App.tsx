import './App.css'
import {  
  Route,
  Routes
  } 
from 'react-router-dom';
import Header from './components/layout/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import Navigation from './components/layout/Navigation/Navigation';
import AboutPage from './components/pages/AboutPage/AboutPage';
import PublicPage from './components/pages/PublicPage/PublicPage';
import ProjectsPage from './components/pages/ProjectsPage/projectsPage';
import PartnersPage from './components/pages/PartnersPage/PartnersPage';
import SertificatePage from './components/pages/SertificatePage/SertificatePage';
import ContactPage from './components/pages/ContactPage/ContactPage';
import NewsPage from './components/pages/NewsPage/NewsPage';

function App() {

  return (
  <>
      <Header />
      <Navigation />
      <Routes>
        <Route index path='spr_kirovskaya_oblast/' element={<MainPage />} />
        <Route path='spr_kirovskaya_oblast/about' element={<AboutPage />} />
        <Route path='spr_kirovskaya_oblast/projects' element={<ProjectsPage />} />
        <Route path='spr_kirovskaya_oblast/public' element={<PublicPage />} />
        <Route path='spr_kirovskaya_oblast/partners' element={<PartnersPage />} />
        <Route path='spr_kirovskaya_oblast/sertificates' element={<SertificatePage />} />
        <Route path='spr_kirovskaya_oblast/contacts' element={<ContactPage />} />
        <Route path='utv/news' element={<NewsPage />} />
        <Route path='*' element={<MainPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
