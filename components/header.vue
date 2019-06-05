<template>
  <div class="header">
    <div class="callout">
      Hello, my name is Antoine Renault, I'm a Software Engineer who is
      specialized in building Web Application from start to finish.
    </div>
    <p>
      I'm looking for a new project that can help me discover new experiences,
      grow with diversity in tech, an develop an active voice in the community.
      I'm currently located in Paris, France, but willing to discover to new
      cities.
    </p>
    <p class="cpa">
      Let's chat at
      <a class="email" href="mailto:antoine.renault.mmi@gmail.com">
        antoine.renault.mmi@gmail.com
      </a>
    </p>

    <div class="down-arrow">
      <img alt="Go to projects section" src="/images/down-arrow.svg" />
    </div>
  </div>
</template>

<script>
function goToSection() {
  document.querySelector(".down-arrow").addEventListener("click", () => {
    const top = document.querySelector(".projects-container").offsetTop - 50;
    window.scroll({ top, behavior: "smooth" });
  });
}

export default {
  name: "Header",
  mounted() {
    goToSection();
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  min-height: calc(100vh - 160px - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 80px 0;
  padding: 0 0 90px 0;
  font-size: 1.2em;
}

.email {
  color: $mainColor;
}

p {
  margin-bottom: 0.3em;
}

.down-arrow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;

  animation-duration: 1s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease;

  img {
    width: 100%;
  }
}

@keyframes slidein {
  from {
    bottom: 0;
  }

  to {
    bottom: 15px;
  }
}

.callout {
  font-size: 1.5em;
  line-height: 1.2;
  margin: 0 0 30px 0;
}

.cpa {
  margin-top: 1em;
}

@media screen and (max-width: $small-width) {
  .down-arrow {
    display: none;
  }

  .header {
    min-height: calc(100vh - 160px - 55px);
  }
}
</style>
