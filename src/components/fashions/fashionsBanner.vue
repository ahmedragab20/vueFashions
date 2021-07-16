<template>
  <section>
    <video autoplay muted loop>
      <source src="../../assets/fashions/banner.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="content">
      <h2>Everything About Fashions's Here!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adip.</p>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  position: relative;
  video {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .content {
    position: absolute;
    left: 5%;
    bottom: 5%;
    background-color: rgba(0, 0, 0, 0.233);
    padding: 30px;
    h2 {
      font-size: 3rem;
      text-shadow: 3px 3px 15px rgb(255, 255, 255);
    }
  }
}

@media (min-width: 1025px) {
  section {
    min-height: 100vh;
  }
}
@media (max-width: 768px) {
  section {
    .content {
      h2 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.7rem;
      }
    }
  }
}
@media (max-width: 555px) {
  section {
    .content {
      padding: 10px;
      h2 {
        font-size: 1rem;
      }
      p {
        font-size: 0.7rem;
      }
    }
  }
}
</style>
