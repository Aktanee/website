<template>
  <span>
    <span
      v-for="link of links"
      :key="link.path">
      <nuxt-link
        v-if="link.nuxt"
        :to="link.path">
        {{ link.name }}
      </nuxt-link>
      <a
        v-else
        :href="link.path">
        {{ link.name }}
      </a>
    </span>
  </span>
</template>

<script>
export default {
  name: "NavigationLink",
  props: {
    links: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
