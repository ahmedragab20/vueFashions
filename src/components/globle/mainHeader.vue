<template>
  <header>
    <nav class="nav-bar">
      <div class="container">
        <div class="logo">
          <router-link to="/" exact
            ><img src="../../assets/home/logo.svg"
          /></router-link>
        </div>
        <div
          class="burger"
          :class="{ active: isActive }"
          @click="
            {
              isActive = !isActive;
            }
          "
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul class="list text-center" :class="{ active: isActive }">
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
                <a href="#"
                  ><router-link to="/Fashions">Fashion</router-link></a
                >
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
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "mainHeader",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.nav-bar {
  width: 100%;
  min-height: 10vh;
  z-index: 10;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #fff;
    .logo {
      img {
        filter: invert(0) !important;
      }
    }
    .burger {
      border: 1px solid !important;
      div {
        background-color: #000 !important;
      }
    }
  }
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    -webkit-gap: 50%;
    -moz-gap: 50%;
    -ms-gap: 50%;
    -o-gap: 50%;
    gap: 50%;
    .logo {
      z-index: 9;
      img {
        width: 40px;
        filter: invert(1);
      }
    }
    .burger {
      padding: 5px;
      border: 1px solid #fff;
      cursor: pointer;
      z-index: 10;
      &.active {
        border: 1px solid #FFF !important;
        div {
          background-color: #FFF !important;
        }
      } 
      &:hover {
        background-color: rgba(238, 238, 238, 0.151);
      }
      div {
        width: 30px;
        height: 1px;
        margin: 5px;
        background-color: #fff;
      }
    }
    .list {
      position: absolute;
      top: -3vh;
      z-index: 9;
      width: 100%;
      padding: 60px 0;
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
      opacity: 0;
      pointer-events: none;
      &.active {
        opacity: 1;
        pointer-events: all;
      }
      a {
        text-decoration: none;
        color: rgb(255, 255, 255);
        &.router-link-exact-active {
          padding: 5px;
          border: 1px solid #fff;
        }
      }
    }
  }
}
// the media query
@media (min-width: 1025px) {
  .nav-bar {
    .container {
      -webkit-gap: 100%;
      -moz-gap: 100%;
      -ms-gap: 100%;
      -o-gap: 100%;
      gap: 100%;
      .list {
        width: 120%;
      }
    }
  }
}
</style>
