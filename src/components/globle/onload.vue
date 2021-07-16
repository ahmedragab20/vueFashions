<template>
  <div class="onload" v-if="!isload">
    <img src="../../assets/onload.gif" />
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      isload: false,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isload = true;
      }
    };
  },
};
</script>
<style lang="scss" scoped>
.onload {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  background-color: #f2f2f2;
  img {
    position: fixed;
    top: 50%;
  }
}
</style>
