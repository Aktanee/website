<template>
  <div class="hire">
    <div class="subtitle">
      About myself
    </div>
    <div class="content">
      {{ content }}
    </div>
    <div class="cv">
      <a href="/pdf/antoine-renault-en.pdf">My resume</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hire",
  data() {
    return {
      content: `If you have an application you are interested in developing with web technology, I’d love to work with you on it. I’m a full-stack developer which means I can bring your project from concept to completion. I thrive to provide long time support tools and good practice. I work primarily with Node.js and Ruby on Rails on the back-end and Vue.js on the front-end but picking up new languages or frameworks is not a problem.`
    };
  }
};
</script>

<style lang="scss">
.hire {
  margin: 60px 0 0 0;
}

.content,
.cv {
  font-size: 1.2em;
}

.cv {
  margin: 30px 0;
  a {
    display: inline-block;
    padding: 10px 20px;
    color: $dark-grey;
    border: 2px solid $dark-grey;
    text-decoration: none;
    transition: border 0.3s ease, color 0.3s ease;
    text-transform: uppercase;

    &:hover {
      color: $mainColor;
      border: 2px solid $mainColor;
    }
  }
}
</style>
