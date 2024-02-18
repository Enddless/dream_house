import { Link } from 'react-router-dom';
import css from './styles.module.scss';

function GalleryPage() {
  return (
    <main className={css.page}>
      <section className={css.content}>
        <Link to='/gallery/slider-elite' className={css.photo}>
          <span>elite</span>
        </Link>

        <Link to='/gallery/slider-vip' className={css.photo}>
          <span>vip</span>
        </Link>

        <Link to='/gallery/slider-extra' className={css.photo}>
          <span>extra</span>
        </Link>
      </section>
    </main>
  );
}

export default GalleryPage;
