import { Link } from 'react-router-dom';
import css from './styles.module.scss';
function PageThird() {
  return (
    <div className={css.page}>
      <div className={css.content}>
        <p className={css.photo}>
          <Link to='/gallery/slider-elite'>
            <span>elite</span>
          </Link>
        </p>

        <p className={css.photo}>
          <Link to='/gallery/slider-vip'>
            <span>vip</span>
          </Link>
        </p>
        <p className={css.photo}>
          <Link to='/gallery/slider-extra'>
            <span>extra</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default PageThird;
