import { useEffect, useState } from "react";

import css from './styles.module.scss';

import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import PagePrimary from "../page-primary/page-primary";
import PageSecondary from "../page-secondary/page-secondary";
import PageThird from "../page-third/page-third";
import PageFourth from "../page-fourth/page-fourth";

function ScrollPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeDot, setActiveDot] = useState(1);

    const handleScroll = (event) => {
        const delta = Math.sign(event.deltaY);
        if (delta > 0 && currentPage < 4) {
            setCurrentPage(currentPage + 1);
        } else if (delta < 0 && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        setActiveDot(currentPage);
    }, [currentPage]);

    return (
        <>
            <Header />
            <Sidebar />
            <div className={css.scrollPage} onWheel={handleScroll}>
                {currentPage === 1 && <PagePrimary />}
                {currentPage === 2 && <PageSecondary />}
                {currentPage === 3 && <PageThird />}
                {currentPage === 4 && <PageFourth />}

            </div>
            <div className={css.dots}>
                <div className={`${css.dot} ${activeDot === 1 ? `${css.active}` : ''}`} onClick={() => setCurrentPage(1)}></div>
                <div className={`${css.dot} ${activeDot === 2 ? `${css.active}` : ''}`} onClick={() => setCurrentPage(2)}></div>
                <div className={`${css.dot} ${activeDot === 3 ? `${css.active}` : ''}`} onClick={() => setCurrentPage(3)}></div>
                <div className={`${css.dot} ${activeDot === 4 ? `${css.active}` : ''}`} onClick={() => setCurrentPage(4)}></div>
            </div>
        </>
    )
}

export default ScrollPage;
