import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "../gallery-thimbs.css";
import { FreeMode, Thumbs } from "swiper";

function ProductGallery({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="swiperContainer">
      <div className="swiperOne">
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src={data && data.thumbnail} alt="product" />
          </SwiperSlide>
          {data &&
            data.images.map((item) => (
              <SwiperSlide>
                <img src={item} alt="product" />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="swiperTwo">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={data && data.thumbnail} alt="product" />
          </SwiperSlide>
          {data &&
            data.images.map((item) => (
              <SwiperSlide>
                <img src={item} alt="product" />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductGallery;
