<template>
  <section class="container index">
    <headerComponent/>
    <projects :projects="projectsData"/>
  </section>
</template>

<script>
import header from '@/components/header.vue'
import projects from '@/components/projects.vue'
import data from '@/services/projects';

export default {
  asyncData(ctx, callback) {
    callback(null, { projectsData: data });
  },
  components: {
    headerComponent: header,
    projects
  }
}
</script>

