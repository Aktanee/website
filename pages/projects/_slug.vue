<template>
  <div class="project">
    {{ project }}
  </div>
</template>

<script>
import data from '@/services/projects';

export default {
  name: 'Project',
  asyncData({ params, redirect }, callback) {
    const project = data.find(project => project.slug === params.slug)

    if (project) {
      callback(null, { project });
    } else {
      redirect('/')
    }
  },
}
</script>
