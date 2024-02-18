import { Link, useLocation } from 'react-router-dom';
import css from './styles.module.scss';
import SliderGalerry from '../slider-galerry';
import { elite, extra, vip } from './data';

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
    <div className={css.page}>
      <div className={css.content}>
        <div className={css.container}>
          <SliderGalerry data={sliderData} />
        </div>
      </div>
      <div className={css.backButton}>
        <Link to='/'>To main</Link>
      </div>
    </div>
  );
}

export default LayoutGalerry;
