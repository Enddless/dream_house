import css from './styles.module.scss';
import FeedbackForm from '../../components/feedback-form/index';
import { statisticData } from './data';
import sprite from '../../assets/sprite.svg';
import CardStatistic from '../../components/card-statistic';

function StatisticsPage() {
  return (
    <main className={css.page}>
      <section className={css.overlay}>
        <section className={css.content}>
          <h2 className={css.title}>elite renovation of your apartment</h2>

          <div className={css.statistic}>
            {statisticData.map((item) => {
              return <CardStatistic key={item.id} item={item} />;
            })}
          </div>
        </section>
      </section>
      <section className={css.moreInfo}>
        more info about us
        <svg width='121' height='23' viewBox='0 0 121 23'>
          <use xlinkHref={`${sprite}#arrowDiscuss`}></use>
        </svg>
      </section>
      <FeedbackForm />
    </main>
  );
}

export default StatisticsPage;
