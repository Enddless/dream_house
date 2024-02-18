import css from './styles.module.scss';
import sprite from '../../assets/sprite.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

function Header() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const classNamesEffects = classNames(css.submenu, {
    [css.hoverEffect]: showSubmenu
    // [css.unHovereffect]: !showSubmenu
  });

  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <ul className={css.menuLeft}>
          <li className={css.link} onClick={() => setShowSubmenu(!showSubmenu)}>
            <svg width='30' height='18' viewBox='0 0 30 18'>
              <use xlinkHref={`${sprite}#menu`}></use>
            </svg>

            <ul
              className={classNamesEffects}
              onMouseLeave={() => setShowSubmenu(!showSubmenu)}>
              <li className={css.linkItem}>
                <Link to='/'>Main menu</Link>
              </li>
              <li className={css.linkItem}>
                <Link to='/statistics'>Statistics</Link>
              </li>
              <li className={css.linkItem}>
                <Link to='/gallery'>Galerry</Link>
              </li>
              <li className={css.linkItem}>
                <Link to='/steps'>Steps</Link>
              </li>
            </ul>
          </li>
          <li className={css.phone}>
            <a href='tel:+74953555555'>+7 (495) 355 55 55</a>
          </li>
        </ul>
        <ul className={css.menuRight}>
          <li>request for a call</li>
          <li>
            <div className={`${css.circle} ${css.circleOne}`}>
              <div className={`${css.circle} ${css.circleTwo}`}>
                <div className={`${css.circle} ${css.circleThird}`}>
                  <a href='tel:84953555555'>
                    <svg width='14' height='13' viewBox='0 0 14 13'>
                      <use xlinkHref={`${sprite}#phone`}></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div></div>
    </header>
  );
}

export default Header;
