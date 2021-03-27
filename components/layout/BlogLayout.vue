<template>
  <div class="blog">
    <PageLoader />
    <ColorSwitcher />
    <Sidebar />
    <SidebarM />
    <section
      :class="[
        'blog_container',
        { has_table_of_content: $route.path.match('/blog/article/*') },
      ]"
    >
      <Nuxt class="nuxt_content" />
      <Footerbar class="FooterBar" />
    </section>
    <ScrollToTop />
  </div>
</template>

<script>
export default {
  name: 'BlogLayout',
  created() {
    if (process.client) {
      this.$store.dispatch('fetchTagsCount')
    }
  },
  mounted() {
    window.onresize = () => {
      if (this.$store.state.toggleSidebar && window.innerWidth < 1024) {
        this.$store.dispatch('toggleSidebar')
      }
    }
    this.$store.dispatch('setLoading')
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
  background-color: var(--main-bgc);
  transition: 0.4s;
  overflow-y: scroll;
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
  margin-left: var(--sidebar-width);
  transition: 0.4s ease-out;
  display: grid;
  justify-content: center;
  grid-template-rows: 1fr var(--footerbar-height);
  grid-template-columns: minmax(40px, 6%) minmax(min-content, 720px) 200px minmax(
      40px,
      6%
    );
  gap: 24px;
  @media (max-width: 1024px) {
    margin-left: 0;
    gap: 0;
  }
  & > * {
    grid-column: 2/4;
  }
  &.has_table_of_content {
    .FooterBar {
      grid-column: 2/3;
      @media (max-width: 768px) {
        grid-column: 2/4;
      }
    }
  }
}
</style>
