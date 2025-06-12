<template>
  <nuxt />
</template>

<script>
export default {
  name: 'Gather',
  asyncData({ redirect }) {
    return redirect('/dashboard/subscribe');
  },
};
</script>

<style scoped></style>
