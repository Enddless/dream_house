import { Link } from 'react-router-dom';
import css from './styles.module.scss';
import { elite } from './data';
import SliderGalerry from '../slider-galerry';

function EliteGalerry() {
  return (
    <div className={css.page}>
      <div className={css.content}>
        <div className={css.container}>
          <SliderGalerry data={elite} />
        </div>
      </div>
      <div className={css.backButton}>
        <Link to='/'>To main</Link>
      </div>
    </div>
  );
}

export default EliteGalerry;
