<template>
  <section class="container index">
    <headerComponent/>
    <recentProjects :projects="recentProjectsData"/>
    <Header/>
  </section>
</template>

<script>
import header from "@/components/header";
import recentProjects from "@/components/recentProjects";
import data from "@/services/projects";

export default {
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
  },
  components: {
    headerComponent: header,
    recentProjects
  }
};
</script>
