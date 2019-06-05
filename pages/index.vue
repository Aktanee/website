<template>
  <section class="container index">
    <headerComponent />
    <featuredProjects :projects="featuredProjectsData" />
    <hire />
  </section>
</template>

<script>
import header from "@/components/header";
import featuredProjects from "@/components/featuredProjects";
import hire from "@/components/hire";
import data from "@/services/projects";

export default {
  components: {
    headerComponent: header,
    featuredProjects,
    hire
  },
  asyncData(context, callback) {
    const featuredProjects = data.filter(project => project.featured);
    featuredProjects.length = 4;
    callback(null, { featuredProjectsData: featuredProjects });
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
