import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './custom.css';

const settings = {
  dots: true,
  arrows: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000
};

function SliderGalerry({ data }) {
  return (
    <Slider {...settings}>
      {data.map((card) => {
        return (
          <div key={card.id}>
            <img src={card.path} alt={card.name} loading='lazy' />
          </div>
        );
      })}
    </Slider>
  );
}

export default SliderGalerry;
