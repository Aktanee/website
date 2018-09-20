<template>
  <div class="projects">
    <h2>Projects</h2>
    <div
      v-for="project of projects"
      :key="project.slug"
      class="project">
      <router-link :to="getLink(project)">
        <img
          :src="project.thumbnail"
          :alt="project.name">
        <h3>{{ project.name }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  props: {
    projects: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    getLink({ slug }) {
      return `/projects/${slug}`;
    }
  }
};
</script>
