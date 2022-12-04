import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function SomeProductCard({ filterdData }) {
  const btnStyle = {
    background: "none",
    border: "solid 1px",
    borderColor: "#eee #eee #ccc #eee",
  };

  return (
    <Row>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is <= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          // when window width is <= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {filterdData.map((item) => (
          <Col lg={3} key={item.id}>
            <SwiperSlide>
              <div className="pb-5">
                <img
                  src={item.thumbnail}
                  alt="teast"
                  className="w-100"
                  height={200}
                />
                <h6 className="pt-2">
                  {item.title.length > 16
                    ? item.title.substring(0, 16) + "..."
                    : item.title}
                </h6>
                <p className="text-muted">{item.category}</p>
                <div className="pb-2">
                  <span className="text-danger pe-2">${item.price}</span>
                </div>
                <Link
                  to={`/shop/product/${item.id}`}
                  className="text-decoration-none"
                >
                  <button
                    style={btnStyle}
                    className="py-1 px-3 me-2 w-100 d-block "
                  >
                    View Product
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          </Col>
        ))}
      </Swiper>
    </Row>
  );
}

export default SomeProductCard;
