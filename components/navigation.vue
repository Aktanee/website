<template>
  <div class="navigation">
    <nav>
      <div class="left">
        <router-link to="/">Home</router-link>
      </div>
      <div class="right">
        <router-link to="/about">About</router-link>
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
@import "../assets/scss/variables.scss";

.navigation {
  overflow: auto;
  margin: 0 0 80px 0;
}

nav {
  float: right;
}

.left,
.right {
  float: left;
}

.right {
  text-align: right;
}

a {
  margin: 0 10px 0 0;
  text-decoration: none;
}

a.email {
  color: darkgrey;

  &:hover {
    color: $mainColor;
  }
}
</style>
