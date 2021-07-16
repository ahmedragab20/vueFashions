<template>
  <div class="welcome" :class="{ active: isActive }" >
    <div class="content text-center">
      <div class="container">
        <h2>Welcome</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum unde
          facilis quia corrupti iste, nostrum voluptas, praesentium molestiae.
        </p>
        <div class="buttons">
          <button
            class="white"
            @click.once="
              {
                isActive = !isActive;
              }
            "
          >
            decline
          </button>
          <button
            class="black"
            @click.once="
              {
                isActive = !isActive;
              }
            "
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Welcome",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.welcome {
  width: 40%;
  min-height: 250px;
  background-color: #fff;
  z-index: 400;
  position: fixed;
  top: 60vh;
  left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 2px 2px 5px #101010, -2px -2px 5px #101010;
  transition: all 0.2s ease-in-out;
  &.active {
    opacity: 0;
    pointer-events: none;
  }
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border: 1px solid;
    p {
      font-size: 0.9rem;
    }
    .buttons {
      button {
        margin: 10px;
      }
    }
  }
}
@media (max-width: 768px) {
  .welcome {
    width: 60%;
    top: 65vh;
  }
}

@media (max-width: 555px) {
  .welcome {
    width: 90%;
    min-height: 100px;
    left: 5%;
    .content {
      h2 {
        font-size: 1.05rem;
      }
      p {
        font-size: 0.7rem;
      }
      .buttons {
        button {
          min-width: 90px ;
          height: 35px;
          font-size: 0.6rem;
        }
      }
    }
  }
}
</style>
