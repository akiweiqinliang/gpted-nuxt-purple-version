<template>
  <nuxt />
</template>

<script>
// import subscribeMenu from "~/enums/subscribeMenu";

export default {
  name: 'Gather',
  asyncData({ redirect }) {
    return redirect('/gather/subscribe');
  },
};
</script>

<style scoped></style>
