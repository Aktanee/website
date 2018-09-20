<template>
  <div class="project">
    <div class="info-single">
      <div class="label">Name</div>
      <div class="content">{{ project.name }}</div>
    </div>

    <div class="info-single">
      <div class="label">Year</div>
      <div class="content">{{ project.year }}</div>
    </div>

    <div class="info-single">
      <div class="label">Client</div>
      <div class="content">{{ project.client }}</div>
    </div>

    <div class="info-single">
      <div class="label">Description</div>
      <div class="content">{{ project.description }}</div>
    </div>

    <div class="info-multiple">
      <div class="label">Links</div>
      <div class="contents">
        <div
          v-for="(content, index) of project.links"
          :key="index"
          class="content">
          <a :href="content.url">
            {{ content.name }}
          </a>
        </div>
      </div>
    </div>

    <div class="info-multiple">
      <div class="label">Technologies</div>
      <div class="contents">
        <div
          v-for="(content, index) of project.technologies"
          :key="index"
          class="content">
          {{ content }}
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

    <div class="info-multiple">
      <div class="label">Images</div>
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


</template>

<script>
import data from "@/services/projects";

export default {
  name: "Project",
  asyncData({ params, redirect }, callback) {
    const project = data.find(project => project.slug === params.slug);

    if (project) {
      callback(null, { project });
    } else {
      redirect("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.info-single,
.info-multiple {
  margin: 0 0 20px 0;
}
</style>
