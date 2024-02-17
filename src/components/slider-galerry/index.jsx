import css from './styles.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './custom.css';

const settings = {
  dots: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000
};

function SliderGalerry({ data }) {
  return (
    <Slider {...settings} className={css.slider}>
      {data.map((card) => {
        return (
          <div className={css.card} key={card.id}>
            <img src={card.path} alt={card.name} />
          </div>
        );
      })}
    </Slider>
  );
}

export default SliderGalerry;
