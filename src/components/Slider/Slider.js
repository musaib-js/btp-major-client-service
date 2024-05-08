import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1300, min: 850 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 850, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Slider = ({ children }) => {
  return (
    <Carousel
      responsive={responsive}
      containerClass="container-with-dots"
      dotListClass=""
      itemClass=""
      sliderClass=""
      additionalTransfrom={0}
      arrows={false}
      //autoPlay
      autoPlaySpeed={2000}
      centerMode={false}
      className=""
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={true}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      //shouldResetAutoplay
      showDots={false}
      slidesToSlide={1}
      swipeable
    >
      {children ? children : ("Nothing to show")}
    </Carousel>
  )
}

export default Slider;
