<template>
  <nuxt />
</template>

<script>
export default {
  name: 'Gather',
  asyncData({ redirect }) {
    return redirect('/gather/subscribe');
  },
};
</script>

<style scoped></style>
