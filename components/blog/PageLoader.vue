<template>
  <transition name="page">
    <div class="page_loader" v-if="$store.state.isLoading">
      <!-- <div v-if="isMobile" class="loading_m">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
      </div> -->
      <div class="loading">
        <div class="line"></div>
        <div class="count"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PageLoader',
}
</script>

<style lang="scss" scoped>
$colors: #8cc271, #69beeb, #f5aa39, #e9643b;
// -----------------------------------------------------
.loading_m {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  z-index: 1000;
}

.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  z-index: 999;
}

// -----------------------------------------------------
.line {
  height: 100%;
  width: var(--sidebar_width);
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  animation: bottom 1s ease;
}

// -----------------------------------------------------
.cube {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  // @for $i from 1 through length($colors) {
  //   &:nth-child(#{$i}) {
  //     background-color: nth($colors, $i);
  //   }
  // }
  &:first-child {
    animation: left 1s infinite;
  }
  &:last-child {
    animation: right 1s infinite 0.5s;
  }
}
// -----------------------------------------------------
@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0);
  }
}
@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0);
  }
}
@keyframes bottom {
  0%,
  20% {
    transform: scaleY(0);
  }
  80%,
  100% {
    transform: scaleY(-100%);
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
