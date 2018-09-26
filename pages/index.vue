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
  head() {
    return {
      title: "Portfolio of Antoine Renault",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "The home of my portfolio"
        }
      ]
    };
  },
  components: {
    headerComponent: header,
    projects
  }
};
</script>
