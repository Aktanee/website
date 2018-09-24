<template>
  <div class="navigation">
    <nav>
      <div class="left">
        <router-link to="/">Home</router-link>
      </div>
      <div class="right">
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
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
  margin: 0 0 20px 0;
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
  color: black;
}
</style>

