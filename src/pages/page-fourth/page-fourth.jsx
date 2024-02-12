import css from "./styles.module.scss";
import { stepsData } from "./data";
import sprite from "../../assets/sprite.svg";
import { useEffect, useState } from "react";

function PageFourth() {
    const [activeCard, setActiveCard] = useState(0);
    const [currentCard, setCurrentCard] = useState(0);

    const handleScroll = (event) => {
        const delta = Math.sign(event.deltaY);
        if (delta > 0) {
            setCurrentCard((currentCard + 1) % stepsData.length);
        } else if (delta < 0) {
            setCurrentCard((currentCard - 1 + stepsData.length) % stepsData.length);
        }
    };

    useEffect(() => {
        setActiveCard(currentCard);
    }, [currentCard, activeCard]);

    return (
        <div className={css.page}>
            <div className={css.overlay}>
                <div className={css.content}>
                    <h2 className={css.title}>6 steps to your dream house:</h2>

                    <div className={css.data}>
                        <div className={css.circle}>{currentCard + 1} slide
                            <div className={css.outer}></div>
                            <div className={css.inner}></div></div>
                        <div className={css.steps} onWheel={handleScroll}>
                            {stepsData.map((item, index) => {
                                return (
                                    <div className={`${css.card} ${activeCard === index ? `${css.activeCard}` : ``}`} key={item.id} >
                                        <svg width="120" height="105">
                                            <use xlinkHref={`${sprite}#${item.icon}`}></use>
                                        </svg>
                                        <p className={css.name}>{item.title}</p>
                                        <p className={css.text}>{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PageFourth;
