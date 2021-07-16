<template>
  <article class="mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 order-lg-last">
          <div class="image">
            <img src="../../assets/fashions/poster1.jpg" class="img-fluid" />
          </div>
        </div>
        <div class="col-lg-6 order-lg-first">
          <div class="content">
            <h2>Tempore natus</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              natus qui voluptatem quae voluptas nesciunt voluptates error
              cumque magni velit. Molestias ducimus repudiandae ex accusamus
              omnis sint ratione. Harum, asperiores...
            </p>
            <button class="black">Keep Reading</button>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<style lang="scss" scoped>
article {
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
    .black {
      min-width: 200px;
      height: 70px;
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
@media (min-width: 769px) {
  article {
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
