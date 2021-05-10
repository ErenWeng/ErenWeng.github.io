<template>
  <transition name="page">
    <div v-show="$store.state.isLoading" class="page_loader">
      <div class="loading_txt">
        <span v-for="txt of loadingString" :key="txt" class="txt">
          {{ txt }}
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PageLoader',
  data() {
    return {
      loadingString: 'loading',
    }
  },
}
</script>

<style lang="scss" scoped>
.page_loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  z-index: 999;
}
.loading_txt {
  display: grid;
  padding: 20%;
  height: 100vh;
  grid-auto-flow: column;
  place-items: center;
  text-transform: uppercase;
  font-size: 2rem;
  color: transparent;
  .txt {
    text-shadow: 0 0 2px rgba(204, 208, 212, 0.9),
      0 15px 25px rgba(0, 0, 0, 0.3), 0 -2px 3px rgba(0, 0, 0, 0.1),
      0 -5px 10px rgba(255, 255, 255, 0.5), 0 5px 10px rgba(0, 0, 0, 0.3),
      0 3px 4px rgba(255, 255, 255, 0.2), 0 0 20px rgba(255, 255, 255, 0.45);
    animation: loading 0.85s ease-in-out infinite alternate;
    &:nth-of-type(2) {
      animation-delay: 0.15s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.3s;
    }
    &:nth-of-type(4) {
      animation-delay: 0.45s;
    }
    &:nth-of-type(5) {
      animation-delay: 0.6s;
    }
    &:nth-of-type(6) {
      animation-delay: 0.75s;
    }
    &:nth-of-type(7) {
      animation-delay: 0.9s;
    }
  }
}
@keyframes loading {
  to {
    text-shadow: 0 0 2px rgba(204, 208, 212, 0.2), 0 0 3px rgba(0, 0, 0, 0.02),
      0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(255, 255, 255, 0),
      0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(255, 255, 255, 0),
      0 0 0 rgba(255, 255, 255, 0);
  }
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
