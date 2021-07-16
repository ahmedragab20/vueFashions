<template>
  <div class="home">
    <home-banner />
    <home-slider />
    <home-poster />
    <main-footer />
  </div>
</template>
<script>
import homeBanner from "../components/homeBanner.vue";
import homeSlider from "../components/homeSlider.vue";
import homePoster from "../components/homePoster.vue";
import mainFooter from "../components/globle/mainFooter.vue";
export default {
  name: "Home",
  components: { homeBanner, homeSlider, homePoster, mainFooter },
};
</script>
