<template>
  <glb-swiper></glb-swiper>
</template>

<script>
import "../../node_modules/swiper/dist/css/swiper.css"

export default {
  name: "carrousel1",
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination"
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },

        // And if we need scrollbar
        scrollbar: {
          el: ".swiper-scrollbar"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
      console.log(this.$refs.mySwiper)
  }
};
</script>

<style lang="sass" scoped>



</style>