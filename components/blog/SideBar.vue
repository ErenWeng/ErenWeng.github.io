<template>
  <aside class="side_bar">
    <div class="logo">
      <Logo />
    </div>

    <BlogNav class="blog_nav" />
  </aside>
</template>

<script>
export default {
  name: 'SideBar',
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
}
.logo {
  display: block;
  text-align: center;
  margin: 0 auto 1rem;
}
</style>
