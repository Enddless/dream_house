import { Link, useLocation } from 'react-router-dom';
import css from './styles.module.scss';
import SliderGalerry from '../slider-galerry';
import { elite, extra, vip } from './data';
import Header from '../header';
import Sidebar from '../sidebar';

function LayoutGalerry() {
  const location = useLocation().pathname;
  const foundData = (path) => {
    switch (path) {
      case '/gallery/slider-elite':
        return elite;
      case '/gallery/slider-vip':
        return vip;
      case '/gallery/slider-extra':
        return extra;
      default:
        break;
    }
  };
  const sliderData = foundData(location);
  return (
    <main className={css.page}>
      <section className={css.gridContainer}>
        <Header />
        <Sidebar />
        <div className={css.content}>
          <SliderGalerry data={sliderData} />
          <div className={css.backButton}>
            <Link to='/'>To main</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LayoutGalerry;
