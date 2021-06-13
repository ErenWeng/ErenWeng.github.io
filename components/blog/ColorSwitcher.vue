<template>
  <div class="color_switcher">
    <div
      v-show="$store.state.colorTheme === 'light'"
      key="light"
      class="click_icon"
      @click="colorSwitch('dark')"
    >
      <ph-sun :size="24" weight="thin" class="switch_icon" />
    </div>
    <div
      v-show="$store.state.colorTheme === 'dark'"
      key="dark"
      class="click_icon"
      @click="colorSwitch('light')"
    >
      <ph-moon-stars :size="24" weight="thin" class="switch_icon" />
    </div>
  </div>
</template>

<script>
import { PhSun, PhMoonStars } from 'phosphor-vue'

export default {
  name: 'ColorSwitcher',
  components: {
    PhSun,
    PhMoonStars,
  },
  mounted() {
    const theme = localStorage.getItem('color-mode')
    this.colorSwitch(theme)
  },
  methods: {
    colorSwitch(type) {
      this.$store.dispatch('setColorTheme', type)
    },
  },
}
</script>

<style lang="scss" scoped>
.color_switcher {
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  height: 40px;
  width: 40px;
  .click_icon {
    display: grid;
    place-items: center;
    cursor: pointer;
    overflow: hidden;
    height: 40px;
    width: 40px;
  }
}
.switch_icon {
  color: var(--green-dark);
  transition: 0.2s;
  &:hover {
    color: var(--green-light);
  }
}
</style>
