import css from './styles.module.scss';

function CardStatistic({ item }) {
  return (
    <div className={css.card}>
      <p className={css.value}>{item.value}</p>
      <p className={css.text}>{item.text}</p>
    </div>
  );
}

export default CardStatistic;
