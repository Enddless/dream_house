import FeedbackForm from '../../components/feedback-form';
import css from './styles.module.scss';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';

function MainPage() {
  return (
    <main className={css.page}>
      <section className={css.overlay}>
        <section className={css.gridContainer}>
          <Header />
          <Sidebar />
          <section className={css.content}>
            <div className={css.lead}>
              <h1 className={css.title}>
                <div className={css.topTitle}>
                  <p className={css.topRight} data-heading='Dream'></p>
                  <p className={css.topLeft} data-heading='Drea'></p>
                  <div className={`${css.line} ${css.lineTop}`}></div>
                </div>

                <div className={css.bottomTitle}>
                  <p className={css.bottomRight} data-heading='House'></p>
                  <p className={css.bottomLeft} data-heading='House'></p>
                  <div className={`${css.line} ${css.lineBottom}`}></div>
                </div>
              </h1>
              <h2 className={css.subtitle}>your personal</h2>
            </div>
          </section>
        </section>
        <FeedbackForm />
      </section>
    </main>
  );
}

export default MainPage;
