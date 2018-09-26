<template>
  <section class="container index">
    <headerComponent/>
    <projects :projects="projectsData"/>
    <Header/>
  </section>
</template>

<script>
import header from "@/components/header";
import projects from "@/components/projects";
import data from "@/services/projects";

export default {
  asyncData(context, callback) {
    callback(null, { projectsData: data });
  },
  components: {
    headerComponent: header,
    projects
  }
};
</script>

