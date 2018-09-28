<template>
  <div class="header">
    <div class="callout">
      Hey, I'm a fullstack developer from Paris, France.
      <br>
      I can help you build your next product.
    </div>
    <p>
      Fan of simplicity and modularity. Research optimization of process automation and improvement of my knowledge.
    </p>
    <p>
      Let's chat at <a
        class="email"
        href="mailto:antoine.renault.mmi@gmail.com">
        antoine.renault.mmi@gmail.com
      </a>
    </p>

    <div class="down-arrow">
      <img
        src="/images/down-arrow.svg">
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
  font-size: 1.8em;
  line-height: 1.2;
  margin: 0 0 30px 0;
}

@media screen and (max-width: $small-width) {
  .header {
    min-height: calc(100vh - 160px - 55px);
  }
}
</style>
