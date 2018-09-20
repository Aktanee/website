<template>
  <div class="projects">
    <div
      v-for="project of projects"
      :key="project.slug"
      class="project">
      <router-link :to="getLink(project)">
        {{ project.name }}
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
