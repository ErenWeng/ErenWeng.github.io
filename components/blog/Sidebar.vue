<template>
  <aside class="sidebar">
    <div :class="['toggle', { animation: !$store.state.isLoading }]">
      <div class="toggle_sidebar" @click="$store.dispatch('toggleSidebar')">
        <ph-caret-left :size="24" weight="thin" class="icon" />
      </div>
      <div class="logo">
        <Logo />
      </div>
      <div class="blog_nav">
        <BlogNav />
      </div>
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
  z-index: 100;
  height: 100vh;
  width: var(--sidebar-width);
  color: var(--blue-dark);
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--main-bgc);
  transition: width 0.4s ease-out;
  transition: background-color 0.3s ease-out;
  .toggle {
    min-height: 100vh;
    padding: 40px 0 0;
    border-right: 1px solid var(--grey-light);
  }
  .animation {
    animation: show_sidebar 2s cubic-bezier(0.15, 0.75, 0, 1) both;
  }
  .toggle_sidebar {
    position: absolute;
    top: -40px;
    right: 0;
    height: 40px;
    width: 40px;
    cursor: pointer;
    border-radius: 50%;
    display: grid;
    place-items: center;
    pointer-events: none;
    .icon {
      opacity: 0;
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
@media (max-width: 1024px) {
  .sidebar {
    width: var(--hide-sidebar-width);
    z-index: 999;
    border: none;
    pointer-events: none;
    background-color: transparent;
    .toggle {
      border: none;
    }
    .toggle_sidebar {
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
@media (min-width: 1023px) {
  .toggle_sidebar {
    .icon {
      opacity: 0;
    }
  }
}
@keyframes show_sidebar {
  0%,
  20% {
    transform: translateX(-10vw);
    opacity: 0;
  }
  80%,
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
