import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MainListContainer from "../containers/MainListContainer";

//import styled from "styled-components";

function MainPage() {
  return (
    <div>
      <MainListContainer />
    </div>
  );
}

export default MainPage;
