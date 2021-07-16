<template>
  <section>
    <div class="container">
      <div class="content">
        <h2>ERROR 404</h2>
        <p>This Page isn't available right now</p>
        <a href="#"><router-link to="/" exact>back home?</router-link></a>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    flex-direction: column;
    padding: 30px;
    width: 80%;
    height: 80vh;
    border: 8px double;
    h2 {
      letter-spacing: 8px;
      font-size: 3rem;
      font-weight: 100;
    }
    a {
      color: #000;
    }
  }
}
</style>
