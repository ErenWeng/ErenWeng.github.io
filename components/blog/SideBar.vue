<template>
  <aside class="sidebar">
    <div class="toggle_sidebar" @click="$store.dispatch('toggleSidebar')">
      <ph-caret-left :size="24" weight="thin" class="icon" />
    </div>
    <div class="logo">
      <Logo />
    </div>
    <div class="blog_nav">
      <BlogNav />
    </div>
  </aside>
</template>

<script>
import { PhCaretLeft } from 'phosphor-vue'

export default {
  name: 'Sidebar',
  components: {
    PhCaretLeft,
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  z-index: 1000;
  height: 100vh;
  width: $sidebar-width;
  color: $blue-dark;
  border-right: 1px solid rgba(0, 0, 0, 0.07);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 40px 0 0;
  transition: 0.4s ease-out;
  background-color: $main-bgc;
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
      display: none;
      color: $blue-dark;
      transition: 0.2s;
      &:hover {
        color: $green-light;
      }
    }
  }
}
.logo {
  display: block;
  margin: 0 auto 1rem;
  text-align: center;
}
.logo,
.blog_nav {
  display: block;
  transition: 0.2s ease-out;
  transition-delay: 0.2s;
  opacity: 1;
}
@media (max-width: 1024px) {
  .sidebar {
    width: $hide-sidebar-width;
    z-index: 999;
    border: none;
    pointer-events: none;
    background-color: transparent;
    .toggle_sidebar {
      pointer-events: visible;
      .icon {
        transform: scaleX(-1);
      }
    }
  }
  .logo,
  .blog_nav {
    transition: 0.2s ease-out;
    opacity: 0;
    pointer-events: none;
    transform: translateX(-16px);
  }
}
@media (min-width: 1024px) {
  .toggle_sidebar {
    pointer-events: none;
    .icon {
      opacity: 0;
    }
  }
}
</style>
