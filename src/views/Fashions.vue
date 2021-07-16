<template>
  <div class="fashions">
    <fashions-banner />
    <poster1 />
    <poster2 />
    <fashions-slider />
    <poster3 />
    <main-footer />
  </div>
</template>
<script>
import fashionsBanner from "../components/fashions/fashionsBanner.vue";
import poster1 from "../components/fashions/fashionsFPoster.vue";
import poster2 from "../components/fashions/fashionsSPoster.vue";
import fashionsSlider from "../components/fashions/fashionsSlider.vue";
import poster3 from "../components/fashions/fashions3Poster.vue";
import mainFooter from "../components/globle/mainFooter.vue";
export default {
  name: "Fashons",
  components: {
    fashionsBanner,
    poster1,
    poster2,
    fashionsSlider,
    poster3,
    mainFooter
  },
};
</script>
<style lang="scss" scoped>
.fashions {
  background-color: #000;
  color: #fff;
}
</style>
