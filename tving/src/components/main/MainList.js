import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

//프레젠테이션 컴포넌트 : 화면 표출부 컴포넌트
function MainListContainer({ mains }) {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {mains.map((main) => (
          <SwiperSlide key={main.id}>
            <img src={main.url} alt="메인이미지" />
            <p>{main.explain}</p>
            <a href={main.link}>자세히보기</a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainListContainer;
