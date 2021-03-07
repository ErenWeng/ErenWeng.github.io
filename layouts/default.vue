<template>
  <div>
    <Sidebar />
    <SidebarM />
    <section class="blog_container">
      <Nuxt class="nuxt_content" />
      <Footerbar class="nuxt_content" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Default',
  mounted() {
    window.onresize = () => {
      if (this.$store.state.toggleSidebar && window.innerWidth < 960) {
        this.$store.dispatch('toggleSidebar')
      }
    }
  },
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: $main-bgc;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.blog_container {
  padding-top: 40px;
  min-height: 100vh;
  margin-left: $sidebar-width;
  transition: 0.4s ease-out;
  display: grid;
  grid-template-rows: 1fr $footerbar-height;
  grid-template-columns: minmax(40px, 8%) 1fr minmax(40px, 8%);
  @media (max-width: 960px) {
    margin-left: 0;
  }
  .nuxt_content {
    grid-column: 2/2;
  }
}
</style>
