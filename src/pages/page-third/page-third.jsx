import css from "./styles.module.scss";
function PageThird() {
    return (
        <div className={css.page}>
            <div className={css.content}>
                <p className={css.photo}><span>elite</span></p>
                <p className={css.photo}><span>vip</span></p>
                <p className={css.photo}><span>extra</span></p>
            </div>
        </div>
    )
}

export default PageThird;
