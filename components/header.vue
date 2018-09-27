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
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
  margin: 80px 0 160px;
}

.email {
  color: $mainColor;
}

.callout {
  font-size: 1.8em;
  line-height: 1.2;
  margin: 0 0 30px 0;
}
</style>
