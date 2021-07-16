<template>
  <footer class="text-center mt-5">
    <div class="container">
      <div class="row">
        <a href="#">
          <img src="../../assets/home/logo.svg" />
        </a>
        <h2>Fashion</h2>
        <div class="col-sm-3 col-xs-6">
          <a href="#"><router-link to="/" exact>Home</router-link></a>
          <a href="#">Lorem</a>
          <a href="#">dolor</a>
          <a href="#">aspernatur</a>
        </div>
        <div class="col-sm-3 col-xs-6">
          <a href="#"><router-link to="/Fashions">Fashion</router-link></a>
          <a href="#">iste</a>
          <a href="#">consectetur</a>
          <a href="#">ducimus</a>
        </div>
        <div class="col-sm-3 col-xs-6">
          <a href="#"><router-link to="/Models">Models</router-link></a>
          <a href="#">quibusdam</a>
          <a href="#">sit</a>
          <a href="#">aspernatur</a>
        </div>
        <div class="col-sm-3 col-xs-6">
          <a href="#"><router-link to="/News">News</router-link></a>
          <a href="#">assumenda</a>
          <a href="#">recusandae</a>
          <a href="#">elit</a>
        </div>
      </div>
    </div>
    <h6 class="mt-5">CREATED BY AHMED RAGAB 2021</h6>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
footer {
  padding: 60px 0 10px 0;
  background-color: #000;
  color: #fff;
  *::selection {
    background-color: #eee;
  }
  img {
    width: 100px !important;
    margin: auto;
    filter: invert(1);
  }
  h2 {
    margin-bottom: 20px;
    letter-spacing: 5px;
  }
  .col-sm-3 {
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    a {
      color: #fff;
      text-decoration: none;
      margin-bottom: 5px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  h6 {
    margin-top: 30px;
    letter-spacing: 1px;
  }
}
@media (min-width: 1025px) {
  footer {
    h6 {
      letter-spacing: 10px;
    }
  }
}
</style>
