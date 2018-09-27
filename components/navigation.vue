<template>
  <div class="navigation">
    <nav>
      <nuxt-link to="/">
        <div class="logo">
          <div class="name">Antoine Renault</div>
          <div class="job-title">Fullstack developper</div>
        </div>
      </nuxt-link>

      <div class="right">
        <router-link to="/">Home</router-link>
        <a
          href="mailto:antoine.renault.mmi@gmail.com"
          class="email">antoine.renault.mmi@gmail.com</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style lang="scss" scoped>
.navigation {
  overflow: auto;
  padding: 0 0 80px 0;
  margin: 0 0 10px;
  position: relative;
}

.logo {
  position: absolute;
  left: 0;
  font-size: 0.9em;

  .job-title {
    color: darkgrey;
  }

  .name {
    margin: 0 0 -6px;
  }
}

nav {
  float: right;
}

.right {
  text-align: right;
  float: left;
  a {
    margin: 0 10px 0 0;
    text-decoration: none;
  }
}

a.email {
  color: darkgrey;

  &:hover {
    color: $mainColor;
  }
}
</style>
