<template>
  <button @click="scrollTop" v-show="visible" class="bottom-right">
    <p>top</p>
  </button>
</template>

<script>
export default {
  name: 'ScrollToTop',
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 40)
      }, 10)
    },
    scrollListener(e) {
      this.visible = window.scrollY > 40
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  },
}
</script>

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
}
</style>
