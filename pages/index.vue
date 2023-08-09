<template>
  <nuxt />
</template>

<script>
export default {
  name: 'IndexPage',
  asyncData({ redirect }) {
    return redirect('home');
  },
};
</script>

<style></style>
