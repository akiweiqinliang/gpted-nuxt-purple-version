import Vue from 'vue';
import vueAwesomeSwiper, {
  Swiper,
  SwiperSlide,
} from 'vue-awesome-swiper/dist/vue-awesome-swiper.esm.js';
Vue.use(vueAwesomeSwiper);
Vue.component('MySwiper', Swiper);
Vue.component('SwiperSlide', SwiperSlide);
