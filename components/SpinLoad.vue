<template>
  <Spin v-if="spinShow" size="large" fix></Spin>
</template>

<script>
export default {
  name: 'SpinLoad',
  data() {
    return {
      collectionIds: [],
      spinShow: false,
    };
  },
  methods: {
    start() {
      this.spinShow = true;
    },
    finish() {
      this.spinShow = false;
    },
  },
};
</script>

<style scoped></style>
