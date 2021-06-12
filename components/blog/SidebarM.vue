<template>
  <aside class="sidebar_m">
    <div :class="{ show_sidebar_m: !$store.state.toggleSidebar }">
      <div class="backdrop" @click="toggleSidebar"></div>
      <div class="sidebar">
        <div class="toggle_sidebar" @click="toggleSidebar">
          <ph-caret-left :size="24" weight="thin" class="icon" />
        </div>
        <div class="logo">
          <Logo />
        </div>
        <div class="blog_nav">
          <BlogNav @toggleSidebar="toggleSidebar" />
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { PhCaretLeft } from 'phosphor-vue'

export default {
  name: 'SidebarM',
  components: {
    PhCaretLeft,
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar')
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar_m {
  position: relative;
}
.sidebar {
  position: fixed;
  z-index: 99;
  height: 100vh;
  width: var(--sidebar-width);
  color: var(--blue-dark);
  border-right: 1px solid var(--grey-light);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 40px 0 0;
  transition: 0.4s ease-out;
  background-color: var(--main-bgc);
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
      color: var(--blue-dark);
      transition: 0.2s;
      &:hover {
        color: var(--green-light);
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
.backdrop {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  pointer-events: visible;
  transition: 0.4s ease-out;
}
.show_sidebar_m {
  .backdrop {
    opacity: 0;
    pointer-events: none;
  }
  .sidebar {
    width: var(--hide-sidebar-width);
    background: none;
    border: none;
    pointer-events: none;
    .toggle_sidebar {
      top: 0;
      right: -40px;
      pointer-events: visible;
      transform: translateX(-100%);
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
