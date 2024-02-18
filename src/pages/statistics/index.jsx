import css from './styles.module.scss';
import FeedbackForm from '../../components/feedback-form/index';
import { statisticData } from './data';
import sprite from '../../assets/sprite.svg';
import CardStatistic from '../../components/card-statistic';

function StatisticsPage() {
  return (
    <div className={css.page}>
      <div className={css.overlay}>
        <div className={css.content}>
          <h2 className={css.title}>elite renovation of your apartment</h2>

          <div className={css.statistic}>
            {statisticData.map((item) => {
              return <CardStatistic key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
      <div className={css.moreInfo}>
        more info about us
        <svg width='121' height='23' viewBox='0 0 121 23'>
          <use xlinkHref={`${sprite}#arrowDiscuss`}></use>
        </svg>
      </div>
      <FeedbackForm />
    </div>
  );
}

export default StatisticsPage;
