<template>
  <div class="banner">
    <div class="banner">
      <div class="content">
        <div class="headline">
          <hr />
          <h1>You'll Find Your Soul Here</h1>
          <hr />
        </div>
        <div class="buttons">
          <button class="black">
            <a href="#"><router-link to="/Fashions">Descover?</router-link></a>
          </button>
          <button class="white">Ride?</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url(../assets/home/banner.jpg) center no-repeat fixed;
  background-size: cover;
  .headline {
    background-color: rgba(0, 0, 0, 0.336);
    text-align: center;
    h1 {
      color: #fff;
      font-size: 5rem;
      letter-spacing: 7;
      padding: 5px;
    }
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    .white,
    .black {
      margin: 10px;
    }
    .white {
      background-color: rgba(238, 238, 238, 0.164);
      &:hover {
        background-color: rgba(238, 238, 238, 0.384);
      }
    }
    .black {
      background-color: rgba(41, 41, 41, 0.493);
      a {
        color: #fff;
        text-decoration: none;
      }
      &:hover {
        background-color: rgba(70, 70, 70, 0.288);
      }
    }
  }
}
// small screens
@media (max-width: 768px) {
  .banner {
    .headline {
      margin: 20px auto;
      h1 {
        font-size: 3rem;
      }
    }
    .buttons {
      padding: 60px 0;
    }
  }
}
// Extra Small screens
@media (max-width: 555px) {
  .banner {
    .headline {
      h1 {
        font-size: 1.4rem;
      }
    }
    .buttons {
      padding: 10px 0 60px 0;
    }
  }
}
</style>
