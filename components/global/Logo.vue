<template>
  <NuxtLink to="/">
    <div class="logo_name">EREN</div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'Logo',
}
</script>

<style lang="scss" scoped>
.logo_name {
  display: inline-block;
  font-size: 24px;
  line-height: 24px;
  padding: 8px;
  color: $green-dark;
  font-weight: 300;
  transition: 0.2s;
  &:hover {
    color: $green-light;
  }
}
</style>
