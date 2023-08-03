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

  mounted() {
    // const activePage = localStorage.getItem('pageCode') ? localStorage.getItem('pageCode') : subscribeMenu.getSubscribeMenu()[0].code;
    // this.$router.replace({ name: 'gather-' + activePage.toLowerCase() })
  },
};
</script>

<style scoped></style>
