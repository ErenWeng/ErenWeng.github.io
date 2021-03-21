<template>
  <div class="color_switcher">
    <transition name="switch" mode="out-in">
      <ph-sun
        v-if="$store.state.colorTheme === 'light'"
        :size="24"
        weight="thin"
        class="switch_icon"
        @click="colorSwitch('dark')"
      />
      <ph-moon-stars
        v-else
        :size="24"
        weight="thin"
        class="switch_icon"
        @click="colorSwitch('light')"
      />
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
    const theme = localStorage.getItem('nuxt-color-mode')
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
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  overflow: hidden;
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
