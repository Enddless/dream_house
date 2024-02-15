import { useEffect, useState } from "react";
import css from './styles.module.scss';
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import PagePrimary from "../page-primary/page-primary";
import PageSecondary from "../page-secondary/page-secondary";
import PageThird from "../page-third/page-third";
import PageFourth from "../page-fourth/page-fourth";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";

function ScrollPage() {
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const location = useLocation().pathname;
  const [activeDot, setActiveDot] = useState(1);
  const navigate = useNavigate();

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);
    if (delta > 0 && currentPage < 4) {
      setCurrentPage((prevPage) => {
        const newPage = prevPage + 1;
        localStorage.setItem("currentPage", newPage);
        return newPage;
      });
      navigate(`/${getPagePath(currentPage + 1)}`);
    } else if (delta < 0 && currentPage > 1) {
      setCurrentPage((prevPage) => {
        const newPage = prevPage - 1;
        localStorage.setItem("currentPage", newPage);
        return newPage;
      });
      navigate(`/${getPagePath(currentPage - 1)}`);
    }
  };
  const handleDotClick = (page) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page);
    navigate(`/${getPagePath(page)}`);
  };

  useEffect(() => {
    setActiveDot(currentPage);
  }, [currentPage]);

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
      <div className={css.scrollPage} onWheel={handleScroll}>
        <Routes>
          <Route path="/" element={<PagePrimary />} />
          <Route path="/statistics" element={<PageSecondary />} />
          <Route path="/gallery" element={<PageThird />} />
          <Route path="/steps" element={<PageFourth />} />
        </Routes>
      </div>
      <div className={css.dots}>
        <div className={`${css.dot} ${location === "/" ? `${css.active}` : ''}`} onClick={() => handleDotClick(1)}></div>
        <div className={`${css.dot} ${location === "/statistics" ? `${css.active}` : ''}`} onClick={() => handleDotClick(2)}></div>
        <div className={`${css.dot} ${location === "/gallery" ? `${css.active}` : ''}`} onClick={() => handleDotClick(3)}></div>
        <div className={`${css.dot} ${location === "/steps"  ? `${css.active}` : ''}`} onClick={() => handleDotClick(4)}></div>
      </div>
    </>
  );
}

export default ScrollPage;