<template>
  <aside :class="['side_bar', { show_sidebar: $store.state.toggleSidebar }]">
    <div class="toggle_sidebar" @click="$store.commit('TOGGLE_SIDEBAR')">
      <ph-caret-left :size="24" weight="thin" class="icon" />
    </div>
    <div class="logo">
      <Logo />
    </div>
    <BlogNav class="blog_nav" />
  </aside>
</template>

<script>
import { PhCaretLeft } from 'phosphor-vue'

export default {
  name: 'SideBar',
  components: { PhCaretLeft },
}
</script>

<style lang="scss" scoped>
.side_bar {
  position: fixed;
  z-index: 100;
  height: 100vh;
  width: $side-bar-width;
  color: $blue-dark;
  border-right: 1px solid rgba(0, 0, 0, 0.07);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 40px 0 0;
  .toggle_sidebar {
    position: absolute;
    top: 0;
    right: 0;
    height: 40px;
    width: 40px;
    cursor: pointer;
    border-radius: 50%;
    display: grid;
    place-items: center;
    .icon {
      color: $blue-dark;
      transition: 0.2s;
      &:hover {
        color: $green-light;
      }
    }
  }
  .logo {
    display: block;
    text-align: center;
    margin: 0 auto 1rem;
  }
  &.show_sidebar {
    .toggle_sidebar {
      .icon {
        transform: scaleX(-1);
      }
    }
  }
}
</style>
