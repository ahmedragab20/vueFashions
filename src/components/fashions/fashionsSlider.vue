<template>
  <h2 class="text-center mt-5">WeeK Styles</h2>
  <p>Swipe To See More</p>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="swiper mt-5 text-center"
  >
    <swiper-slide class="slider">
      <video autoplay muted loop>
        <source src="../../assets/fashions/slide-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </swiper-slide>
    <swiper-slide class="slider">
      <video autoplay muted loop>
        <source src="../../assets/fashions/slide2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </swiper-slide>
    <swiper-slide class="slider">
      <video autoplay muted loop>
        <source src="../../assets/fashions/slide-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </swiper-slide>
    <swiper-slide class="slider">
      <video autoplay muted loop>
        <source src="../../assets/fashions/slide-3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </swiper-slide>
    <swiper-slide class="slider">
      <video autoplay muted loop>
        <source src="../../assets/fashions/slide-4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import SwiperCore, { Navigation, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, A11y]);

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style lang="scss" scoped>
h2 {
    font-size: 4rem;
    letter-spacing: 5px;
}
p {
    text-align: center;
    font-size: 0.8rem;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.404);
}
.swiper {
  width: 80%;
  height: 80vh;
  overflow: hidden;
  margin: auto;
  padding: 30px;
  border: 1px solid #FFF;
  .slider {
    width: 100%;
    height: 100%;
    video {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
    }
  }
}
</style>
