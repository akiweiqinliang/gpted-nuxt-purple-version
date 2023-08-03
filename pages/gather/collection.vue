<template>
  <div>
    collection
    {{ collectRes }}
    <Button @click="getCollectList">查看收藏</Button>
  </div>
</template>

<script>
export default {
  name: 'CollectionPage',
  layout: 'GatherLayout',
  asyncData({ $axios }) {
    try {
      return $axios
        .get('/goods', { params: { pagenum: 1, pagesize: 1 } })
        .then((res) => {
          return { collectRes: res.status };
        });
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    getCollectList() {
      this.$axios
        .get('/goods', { params: { pagenum: 1, pagesize: 1 } })
        .then((res) => {
          console.log('get!!!', res);
        });
    },
  },
};
</script>

<style scoped></style>
