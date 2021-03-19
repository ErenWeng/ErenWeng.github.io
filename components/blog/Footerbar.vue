<template>
  <footer class="footerbar">
    <p class="author">Created by EREN</p>
  </footer>
</template>

<script>
export default {
  name: 'Footerbar',
}
</script>

<style lang="scss" scoped>
.footerbar {
  height: $footerbar-height;
  width: 100%;
  display: grid;
  place-items: center;
  padding-top: 36px;
  .author {
    color: $green-dark;
    font-weight: 300;
  }
}
</style>
