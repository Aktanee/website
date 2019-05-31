<template>
  <section class="container index">
    <headerComponent />
    <recentProjects :projects="recentProjectsData" />
    <hire />
  </section>
</template>

<script>
import header from "@/components/header";
import recentProjects from "@/components/recentProjects";
import hire from "@/components/hire";
import data from "@/services/projects";

export default {
  components: {
    headerComponent: header,
    recentProjects,
    hire
  },
  asyncData(context, callback) {
    data.length = 4;
    callback(null, { recentProjectsData: data });
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
  }
};
</script>
