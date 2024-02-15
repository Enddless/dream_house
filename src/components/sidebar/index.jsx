import css from "./styles.module.scss";
import Logo from "../logo/index";
import sprite from "../../assets/sprite.svg";

function Sidebar() {
    return (
        <aside className={css.sidebar}>
            <Logo />
            <p className={css.text}>apartment renovation</p>
            <div className={css.decoration}></div>
            <div className={css.social}>
                <svg width="12" height="21" viewBox="0 0 12 21" className={css.link}>
                    <use xlinkHref={`${sprite}#facebook`}></use>
                </svg>
                <svg width="18" height="19" viewBox="0 0 18 19" className={css.link}>
                    <use xlinkHref={`${sprite}#instagramm`}></use>
                </svg>
                <svg width="18" height="15" viewBox="0 0 18 15" className={css.link}>
                    <use xlinkHref={`${sprite}#telegramm`}></use>
                </svg>
                <svg width="22" height="15" viewBox="0 0 22 15" className={css.link}>
                    <use xlinkHref={`${sprite}#youtube`}></use>
                </svg>
            </div>
        </aside>
    )
}

export default Sidebar
