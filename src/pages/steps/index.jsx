import css from './styles.module.scss';
import { stepsData } from './data';
import sprite from '../../assets/sprite.svg';
import { useEffect, useState } from 'react';

function StepsPage() {
  const [activeCard, setActiveCard] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  const handleClick = () => {
    if (activeCard < 5) {
      setCurrentCard(currentCard + 1);
    } else {
      setCurrentCard(0);
    }
  };

  useEffect(() => {
    setActiveCard(currentCard);
  }, [currentCard, activeCard]);

  const [circleBorder, setCircleBorder] = useState('');
  useEffect(() => {
    // Обновление обводки круга в зависимости от активной карточки
    const totalCards = stepsData.length;
    const completedPercentage = (activeCard + 1) / totalCards; // Процент завершенных карточек
    const firstColor = 'rgb(255, 172, 48)'; // Цвет первой половины обводки
    const secondColor = 'transparent'; // Цвет второй половины обводки
    const completedAngle = completedPercentage * 360; // Угол завершенной части обводки
    const circleBorder = `
          conic-gradient(
            ${firstColor} 0deg ${completedAngle}deg,
            ${secondColor} ${completedAngle}deg 360deg
          )
        `;
    setCircleBorder(circleBorder);
  }, [activeCard, stepsData]);

  return (
    <main className={css.page}>
      <section className={css.overlay}>
        <section className={css.content}>
          <h2 className={css.title}>6 steps to your dream house:</h2>

          <div className={css.data}>
            <div className={css.scrollBar}>
              <div className={css.circle} style={{ background: circleBorder }} />
              <div className={css.topCircle}>{activeCard + 1}</div>
            </div>
            <div className={css.steps}>
              {stepsData.map((item, index) => {
                return (
                  <div
                    className={`${css.card} ${activeCard === index ? `${css.activeCard}` : ``}`}
                    key={item.id}>
                    <svg width='120' height='105'>
                      <use xlinkHref={`${sprite}#${item.icon}`}></use>
                    </svg>
                    <p className={css.name}>{item.title}</p>
                    <p className={css.text}>{item.text}</p>
                  </div>
                );
              })}
            </div>
            <div className={css.transition}>
              <svg
                width='24'
                height='31'
                viewBox='0 0 24 31'
                onClick={handleClick}
                className={css.next}>
                <use xlinkHref={`${sprite}#arrow-right`}></use>
              </svg>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default StepsPage;
