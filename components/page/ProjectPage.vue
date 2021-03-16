<template>
  <div class="project_page">
    <div v-if="projects.length <= 0">still working . . .</div>
  </div>
</template>

<script>
export default {
  name: 'ProjectPage',
  data() {
    return {
      projects: [],
    }
  },
}
</script>

<style lang="scss" scoped>
.project_page {
  position: relative;
}
</style>
