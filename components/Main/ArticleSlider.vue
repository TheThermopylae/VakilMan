<template>
  <div>
    <swiper
      :breakpoints="{
        350: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
        1280: { slidesPerView: 4, spaceBetween: 20 },
      }"
      :pagination="{
        clickable: true
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper !pb-10 mt-10"
    >
      <swiper-slide v-for="item in 8">
        <MainArticleCard></MainArticleCard>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation, A11y } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Pagination, Navigation, A11y]
    }
  }
}
</script>

<style>
.swiper-pagination-bullet-active {
  background-color: #e59f2e;
}
.swiper-button-next {
  background: #e59f2e;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  left: 10px !important;
  position: absolute;
  transform: translateY(-20px);
}
.swiper-button-next::after {
  font-size: 20px;
  color: #fff;
  font-weight: bold;
}
.swiper-button-prev {
  background: #e59f2e;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  left: 10px !important;
  position: absolute;
  transform: translateY(-20px);
}
.swiper-button-prev::after {
  font-size: 20px;
  color: #fff;
  font-weight: bold;
}
</style>
