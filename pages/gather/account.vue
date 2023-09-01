<template>
  <div>
    account page
    <i-switch v-model="switchaaa"></i-switch>
  </div>
</template>

<script>
export default {
  name: 'AccountPage',
  layout: 'GatherLayout',
  data() {
    return {
      switchaaa: true,
    };
  },
};
</script>

<style scoped></style>
