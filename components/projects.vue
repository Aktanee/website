<template>
  <div class="projects-container">
    <h2>My Open Source Projects</h2>
    <div class="projects">
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

<style lang="scss" scoped>
.projects {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}

.project {
  width: calc(50% - 20px);
  margin-bottom: 20px;

  &:nth-child(2n+1) {
     margin-right: 10px;
  }

  &:nth-child(2n) {
    background: green($color: #000000);
     margin-left: 10px;
  }

  img {
    width: 100%;
  }
}
</style>
