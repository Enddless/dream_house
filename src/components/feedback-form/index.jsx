import css from "./styles.module.scss";
import sprite from '../../assets/sprite.svg';

function FeedbackForm() {
    return (
        <aside className={css.feedback}>
            <form>
                <input type="text" placeholder="Your name" />
                <input type="tel" placeholder="Your phone number" />
                <div className={css.buttonContainer}>
                    <button className={css.discuss}>
                        discuss a project
                    </button>
                    <svg width="121" height="23" viewBox="0 0 121 23">
                        <use xlinkHref={`${sprite}#arrowDiscuss`}></use>
                    </svg>
                </div>
            </form>
        </aside>
    )
}

export default FeedbackForm
