<template>
  <section class="mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 order-lg-last">
          <div class="image">
            <img src="../assets/home/poster.jpg" class="img-fluid" />
          </div>
        </div>
        <div class="col-lg-6 order-lg-first">
          <div class="content">
            <h2>
              amet <br />
              consectetur
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In velit
              corrupti possimus illo aliquid quisquam, ipsam maxime dolore magni
              sapiente harum ex ipsa exercitationem? Ab ea corporis atque
              sapiente consectetur.
            </p>
            <div class="buttons">
              <button class="black">Descover?</button>
              <button class="white">Ride?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "homePster",
};
</script>
<style lang="scss" scoped>
section {
  .image {
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      padding: 50px 20px;
      width: 80%;
    }
  }
  .content {
    h2 {
      letter-spacing: 2px;
      font-size: 2rem;
    }
    p {
      margin: 30px auto 15px auto;
    }
    .buttons {
      button {
        margin-right: 15px;
      }
      .black {
        &:hover {
          transform: scale(1.1);
          border: none;
        }
      }
      .white {
        &:hover {
          background-color: #eee;
        }
      }
    }
  }
}
@media (min-width: 769px) {
  section {
    .content {
      h2 {
        font-size: 5rem;
      }
      p {
        margin: 30% auto 10% auto;
      }
    }
  }
}
</style>
