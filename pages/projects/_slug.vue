<template>
  <div class="project">
    <div class="left-panel">
      <div class="info-single title">
        <div class="content">{{ project.name }}</div>
        <div class="label client">{{ project.client }}</div>
      </div>

      <div class="info-single">
        <div class="label">Year</div>
        <div class="content">{{ project.year }}</div>
      </div>

      <div class="info-multiple">
        <div class="label">Links</div>
        <div class="contents">
          <div
            v-for="(content, index) of project.links"
            :key="index"
            class="content">
            <a
              :href="content.url"
              target="_blank">
              {{ content.name }}
            </a>
          </div>
        </div>
      </div>

      <div class="info-multiple">
        <div class="label">Missions</div>
        <div class="contents">
          <div
            v-for="(content, index) of project.missions"
            :key="index"
            class="content">
            {{ content }}
          </div>
        </div>
      </div>
    </div>

    <div class="right-panel">
      <div class="info-single thumbnail">
        <img :src="project.thumbnail">
      </div>

      <div class="info-single description">
        <div
          class="content"
          v-html="project.description"
        />
      </div>

      <div class="info-multiple images">
        <div class="contents">
          <div
            v-for="(content, index) of project.images"
            :key="index"
            class="content">
            <img
              :src="content.url"
              :alt="content.subtitle">
            <small>{{ content.subtitle }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/services/projects";

export default {
  name: "Project",
  scrollToTop: true,
  asyncData({ params, redirect }, callback) {
    const project = data.find(project => project.slug === params.slug);

    if (project) {
      callback(null, { project });
    } else {
      redirect("/");
    }
  },
  head() {
    return {
      title: `${this.project.name} | Project`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.project.description
        },
        {
          property: "og:title",
          hid: "og:title",
          content: `${this.project.name} | Project`
        },
        {
          property: "og:description",
          hid: "og:description",
          content: this.project.description
        },
        {
          property: "og:image",
          hid: "og:image",
          content: this.project.thumbnail
        },
        {
          property: "og:url",
          hid: "og:url",
          content: `/projects/${this.project.slug}`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.project {
  overflow: auto;
  margin: 60px 0 0 0;
}

.info-single,
.info-multiple {
  margin: 0 0 20px 0;
}

.images,
.thumbnail {
  img {
    width: 100%;
  }
}

.description {
  margin: 0 0 40px 0;
}

.client {
  font-size: 0.9em;
}

@media screen and (max-width: $medium-width) {
  .left-panel,
  .right-panel {
    width: 100%;
  }

  .left-panel {
    margin: 0 0 20px 0;
    .info-single.title {
      width: 100%;
    }

    .info-single,
    .info-multiple {
      width: 50%;
      float: left;
    }
  }
}

@media screen and (max-width: $small-width) {
  .left-panel {
    .info-single,
    .info-multiple {
      width: 100%;
      float: left;
    }
  }
}
</style>
