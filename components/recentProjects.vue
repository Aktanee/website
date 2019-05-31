<template>
  <div class="projects-container">
    <div class="projects-subtitle">
      <h3>Recent works</h3>

      <nuxt-link to="/projects">View all</nuxt-link>
    </div>

    <div class="projects">
      <div v-for="project of projects" :key="project.slug" class="project">
        <router-link :to="getLink(project)">
          <div :style="getThumbnail(project)" class="thumbnail" />
          <div class="mobile-content">
            <h3>{{ project.name }}</h3>
            <div class="short-phrase">{{ project.phrase }}</div>
          </div>
          <div :style="getShade(project)" class="shade">
            <div class="content">
              <h3>{{ project.name }}</h3>
              <div class="mark" />
              <p class="description">{{ project.phrase }}</p>
            </div>
          </div>
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
    },
    getShade({ color }) {
      return `background-color: ${color}`;
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
  overflow: hidden;
  position: relative;
  width: calc(50% - 20px);
  margin-bottom: 40px;

  &:nth-child(2n + 1) {
    margin-right: 10px;
  }

  &:nth-child(2n) {
    margin-left: 10px;
  }

  img {
    width: 100%;
  }

  .thumbnail {
    padding: 0 0 55% 0;
    background-size: cover;
    background-position: center top;
  }

  &:hover {
    .shade {
      opacity: 1;
    }

    .content {
      margin: 0;
    }
  }
}

// Mobile content
.project a {
  color: black;
  text-decoration: none;

  h3:hover {
    text-decoration: underline;
  }
}
.mobile-content {
  margin: 5px 0 0 0;
  display: none;
}

// Shade
$shade-padding: 30px;

.shade {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  height: 100%;
  width: 100%;
  color: white;
  padding: $shade-padding;
  transition: opacity 0.3s ease-out;

  .content {
    width: 100%;
    height: 100%;
    position: relative;
    margin: 30px 0 0 0;
    transition: margin 0.2s ease-out;
  }

  .mark {
    width: 30px;
    height: 2px;
    margin: 15px 0 0 0;
    background: white;
  }

  h3 {
    font-size: 1.5em;
  }

  .description {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

.projects-subtitle {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: $dark-grey;
  margin: 0 0 40px;

  h3 {
    font-weight: 400;
  }
}

@media screen and (max-width: $medium-width) {
  .project {
    width: 100%;
    margin: auto 0 40px !important;
  }

  .shade {
    display: none;
  }

  .mobile-content {
    display: block;
  }
}
</style>
