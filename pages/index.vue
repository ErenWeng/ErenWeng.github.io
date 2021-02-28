<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: 'Index',
  middleware({ route, redirect }) {
    if (route.path === '/') return redirect('/blog')
  },
}
</script>
