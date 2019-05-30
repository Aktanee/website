<template>
  <div class="navigation">
    <nav>
      <nuxt-link to="/">
        <div class="logo">
          <div class="name">Antoine Renault</div>
          <div class="job-title">Fullstack developper</div>
        </div>
      </nuxt-link>

      <div class="right big">
        <navigation-link :links="pages" />
      </div>

      <div class="menu-input" @click="toggleMenu()">
        <img src="/images/menu.svg" alt="Toggle menu" />
      </div>
    </nav>

    <transition name="dropdown">
      <div v-show="smallMenu" class="right small">
        <navigation-link :links="pages" />
      </div>
    </transition>
  </div>
</template>

<script>
import NavigationLink from "~/components/navigation-link";

export default {
  name: "Navigation",
  components: {
    "navigation-link": NavigationLink
  },
  data() {
    return {
      smallMenu: false,
      pages: [
        {
          path: "/",
          name: "Home",
          nuxt: true
        },
        {
          path: "mailto:antoine.renault.mmi@gmail.com",
          name: "antoine.renault.mmi@gmail.com",
          nuxt: false
        }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.smallMenu = !this.smallMenu;
    }
  }
};
</script>

<style lang="scss">
.navigation {
  overflow: auto;
  padding: 0 0 80px 0;
  margin: 0 0 10px;
  font-size: 0.9em;
}

.logo {
  position: absolute;
  left: 20px;
  margin: -10px 0 0 0;

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
  float: right;
  a {
    margin: 0 10px 0 0;
    text-decoration: none;
  }
}

.right.small {
  width: 100%;
  clear: both;
  margin: 30px 0 0;
  transform-origin: top;
  transition: opacity 0.5s ease, margin 0.5s ease;

  a {
    width: 100%;
    display: block;
    text-align: left;
    padding: 8px 0;
  }
}

a.email {
  color: darkgrey;

  &:hover {
    color: $mainColor;
  }
}

.menu-input,
.small {
  visibility: hidden;
}

.menu-input {
  padding: 6px 20px;
  cursor: pointer;
  display: inline;

  img {
    border-style: none;
    height: 30px;
    margin: 2px 0 0 0;
  }
}

@media screen and (max-width: $small-width) {
  .menu-input,
  .small {
    visibility: initial;
  }

  .big {
    display: none;
  }

  .logo {
    margin: 0 0 0 0;
  }
}
</style>
