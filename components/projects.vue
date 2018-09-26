<template>
  <div class="projects-container">
    <h2>My Open Source Projects</h2>
    <div class="projects">
      <div
        v-for="project of projects"
        :key="project.slug"
        class="project">
        <router-link :to="getLink(project)">
          <div
            :style="getThumbnail(project)"
            class="thumbnail"
          />
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
    },
    getThumbnail({ thumbnail }) {
      return `background-image: url('${thumbnail}')`;
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

h2 {
  margin: 0 0 40px;
}

.project {
  width: calc(50% - 20px);
  margin-bottom: 20px;

  &:nth-child(2n + 1) {
    margin-right: 10px;
  }

  &:nth-child(2n) {
    background: green($color: #000000);
    margin-left: 10px;
  }

  img {
    width: 100%;
  }

  .thumbnail {
    min-height: 300px;
    background-size: cover;
    background-position: left top;
  }
}
</style>
