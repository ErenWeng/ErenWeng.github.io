<template>
  <button v-show="visible" class="scroll_to_top" @click="scrollTop">
    <ph-caret-double-up :size="24" weight="thin" />
  </button>
</template>

<script>
import { PhCaretDoubleUp } from 'phosphor-vue'

export default {
  name: 'ScrollToTop',
  components: {
    PhCaretDoubleUp,
  },
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 40)
      }, 2)
    },
    scrollListener(e) {
      this.visible = window.scrollY > 40
    },
  },
}
</script>

<style lang="scss" scoped>
.scroll_to_top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 4px;
  border: 1px solid var(--grey-light);
  color: var(--green-dark);
  background-color: var(--main-bgc);
  transition: 0.4s;
  outline: none;
  &:hover {
    background-color: var(--hover-bgc);
    box-shadow: 2px 2px 4px 0 var(--grey-light);
  }
}
</style>
