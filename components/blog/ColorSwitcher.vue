<template>
  <div class="color_switcher">
    <transition name="switch" mode="out-in">
      <div
        v-if="$store.state.colorTheme === 'light' || !$store.state.colorTheme"
        class="click_icon"
        @click="colorSwitch('dark')"
      >
        <ph-sun :size="24" weight="thin" class="switch_icon" />
      </div>
      <div
        v-else-if="$store.state.colorTheme === 'dark'"
        class="click_icon"
        @click="colorSwitch('light')"
      >
        <ph-moon-stars :size="24" weight="thin" class="switch_icon" />
      </div>
    </transition>
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
.switch-enter-active,
.switch-leave-active {
  transition: opacity 0.1s;
}
.switch-enter,
.switch-leave-to {
  opacity: 0;
}
</style>
