<template>
  <div class="default">
    <BlogLayout v-if="$route.path.includes('/blog')" />
    <ProjectLayout v-else-if="$route.path.includes('/project')" />
  </div>
</template>

<script>
export default {
  name: 'Default',
}
</script>
