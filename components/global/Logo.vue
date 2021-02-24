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
  color: $green-dark;
  font-weight: 300;
  transition: 0.2s;
  &:hover {
    transition: 0.2s;
    color: $green-light;
  }
}
</style>
