<template>
  <div class="project_list_page">
    <div v-if="projects.length <= 0">still working . . .</div>
  </div>
</template>

<script>
export default {
  name: 'ProjectListPage',
  data() {
    return {
      projects: [],
    }
  },
}
</script>

<style lang="scss" scoped>
.project_list_page {
  position: relative;
}
</style>
