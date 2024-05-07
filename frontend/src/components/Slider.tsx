
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation, Autoplay}  from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
  const images = [
    "../../slider1.jpg",
    "../../offer1.jpg",
    "../../offer2.jpg",
    "../../offer3.jpg",
    "../../offer4.jpg"
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        // navigation={{ clickable: true }}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
          {
              images.map((image, i) => {
                  return (
                      <SwiperSlide key={i} className="relative">
                        <img src={image} alt={`Slide ${i + 1}`} className="w-full h-[550px] object-cover" />
                        {/* Black overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                      </SwiperSlide>
                  )
              })
          }
      </Swiper>
      <div className="swiper-button-prev text-[#FFFFFF] absolute left-5"></div>
      <div className="swiper-button-next text-[#FFFFFF] absolute right-5"></div>
    </div>
  );
};

export default Slider;
