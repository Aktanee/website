<template>
  <section class="container index">
    <headerComponent/>
    <projects/>
  </section>
</template>

<script>
import header from '@/components/header.vue'
import projects from '@/components/projects.vue'

export default {
  components: {
    headerComponent: header,
    projects
  }
}
</script>

