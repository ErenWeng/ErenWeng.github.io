<template>
  <div class="color_switcher">
    <ph-sun
      v-if="$store.state.colorTheme === 'light'"
      :size="24"
      weight="thin"
      class="switch_icon"
      @click="colorSwitch('dark')"
    />
    <ph-moon
      v-else
      :size="24"
      weight="thin"
      class="switch_icon"
      @click="colorSwitch('light')"
    />
  </div>
</template>

<script>
import { PhSun, PhMoon } from 'phosphor-vue'

export default {
  name: 'ColorSwitcher',
  components: {
    PhSun,
    PhMoon,
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
}
.switch_icon {
  color: var(--green-dark);
  transition: 0.3s;
  &:hover {
    color: var(--green-light);
  }
}
</style>
