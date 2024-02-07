import css from "./styles.module.scss";
import sprite from '../../assets/sprite.svg';

function Header() {
    return (
        <header className={css.header}>
            <nav className={css.navigation}>
                <ul className={css.menuLeft}>
                    <li className={css.link}>
                        <svg width="30" height="18" viewBox="0 0 30 18">
                            <use xlinkHref={`${sprite}#menu`}></use>
                        </svg>
                    </li>
                    <li>
                        <a href="tel:+74953555555">+7 (495) 355 55 55</a>
                    </li>
                </ul>
                <ul className={css.menuRight}>
                    <li>request for a call</li>
                    <li>
                        <div className={`${css.circle} ${css.circleOne}`}>
                            <div className={`${css.circle} ${css.circleTwo}`}>
                                <div className={`${css.circle} ${css.circleThird}`}>
                                    <svg width="14" height="13" viewBox="0 0 14 13" >
                                        <use xlinkHref={`${sprite}#phone`}></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            <div>


            </div>
        </header>
    )
}

export default Header
