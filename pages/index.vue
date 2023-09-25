<template>
  <nuxt />
  <!--  <div></div>-->
</template>

<script>
export default {
  name: 'IndexPage',
  asyncData({ redirect }) {
    return redirect('home');
  },
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.3s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
