import { Link } from 'react-router-dom';
import css from './styles.module.scss';
import { vip } from './data';
import SliderGalerry from '../slider-galerry';

function VipGalerry() {
  return (
    <div className={css.page}>
      <div className={css.content}>
        <div className={css.container}>
          <SliderGalerry data={vip} />
        </div>
      </div>
      <div className={css.backButton}>
        <Link to='/'>To main</Link>
      </div>
    </div>
  );
}

export default VipGalerry;
