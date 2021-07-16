<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../assets/home/sale-slider-1.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="../assets/home/sale-slider-2.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="content">
        <h2>Sale</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "Slider",
};
</script>
<style lang="scss" scoped>
.slide {
  .carousel-inner {
    .content {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 10px 50px;
      background-color: rgba(0, 0, 0, 0.24);
      h2 {
        font-size: 7rem;
        color: pink;
        letter-spacing: 5px;
      }
      p {
        color: #fff;
        letter-spacing: 1px;
      }
    }
  }
}
@media (max-width: 555px) {
  .slide {
    .carousel-inner {
      .content {
        h2 {
          font-size: 2.5rem;
          color: pink;
          letter-spacing: 5px;
        }
        p {
          color: #fff;
          letter-spacing: 1px;
          font-size: 0.7rem;
        }
      }
    }
  }
}
</style>
