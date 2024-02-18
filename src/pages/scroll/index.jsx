import { useState } from 'react';
import css from './styles.module.scss';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import MainPage from '../main/index';
import StatisticsPage from '../statistics/index';
import GalleryPage from '../gallery/index';
import StepsPage from '../steps/index';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LayoutGalerry from '../../components/layout-galerry';

function ScrollPage() {
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem('currentPage');
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);
    if (delta > 0 && currentPage < 4) {
      setCurrentPage((prevPage) => {
        const newPage = prevPage + 1;
        localStorage.setItem('currentPage', newPage);
        return newPage;
      });
      navigate(`/${getPagePath(currentPage + 1)}`);
    } else if (delta < 0 && currentPage > 1) {
      setCurrentPage((prevPage) => {
        const newPage = prevPage - 1;
        localStorage.setItem('currentPage', newPage);
        return newPage;
      });
      navigate(`/${getPagePath(currentPage - 1)}`);
    }
  };
  const handleDotClick = (page) => {
    setCurrentPage(page);
    localStorage.setItem('currentPage', page);
    navigate(`/${getPagePath(page)}`);
  };

  const getPagePath = (page) => {
    switch (page) {
      case 1:
        return '';
      case 2:
        return 'statistics';
      case 3:
        return 'gallery';
      case 4:
        return 'steps';
      default:
        return '';
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div
        className={css.scrollPage}
        onWheel={
          location === '/' ||
          location === '/statistics' ||
          location === '/gallery' ||
          location === '/steps'
            ? handleScroll
            : undefined
        }>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/statistics' element={<StatisticsPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/steps' element={<StepsPage />} />
          <Route path='/gallery/slider-elite' element={<LayoutGalerry />} />
          <Route path='/gallery/slider-vip' element={<LayoutGalerry />} />
          <Route path='/gallery/slider-extra' element={<LayoutGalerry />} />
        </Routes>
      </div>
      {(location === '/' ||
        location === '/statistics' ||
        location === '/gallery' ||
        location === '/steps') && (
        <div className={css.dots}>
          <div
            className={`${css.dot} ${location === '/' ? `${css.active}` : ''}`}
            onClick={() => handleDotClick(1)}></div>
          <div
            className={`${css.dot} ${location === '/statistics' ? `${css.active}` : ''}`}
            onClick={() => handleDotClick(2)}></div>
          <div
            className={`${css.dot} ${location === '/gallery' ? `${css.active}` : ''}`}
            onClick={() => handleDotClick(3)}></div>
          <div
            className={`${css.dot} ${location === '/steps' ? `${css.active}` : ''}`}
            onClick={() => handleDotClick(4)}></div>
        </div>
      )}
    </>
  );
}

export default ScrollPage;
