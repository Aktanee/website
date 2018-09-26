<template>
  <div>
    <div class="site">
      <navigation/>
      <nuxt/>
    </div>
    <footerComponent/>
  </div>
</template>

<script>
import navigation from "@/components/navigation";
import footer from "@/components/footer";

export default {
  components: {
    navigation,
    footerComponent: footer
  }
};
</script>
