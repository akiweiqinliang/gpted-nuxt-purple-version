<template>
  <div>
    <h1>RecommendPage</h1>
    <div :class="useFont ? 'testFont' : 'normalFont'">招投标</div>
  </div>
</template>

<script>
export default {
  name: 'RecommendPage',
  layout: 'GatherLayout',
  async asyncData({ $axios }) {
    try {
      const res = await $axios.get('/goods', {
        params: { pagenum: 1, pagesize: 1 },
      });
      return { collectRes: res.status, useFont: true };
    } catch (e) {
      console.log(e);
    }
  },
  data() {
    return {
      useFont: false,
    };
  },
};
</script>

<style scoped>
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: 'myFont';

  src: url('@/assets/font/AlimamaFangYuanTiVF-Thin.woff2') format('woff2'),
    url('@/assets/font/vlW7T0R0jD4k.woff') format('woff');
  font-display: swap;
}
.testFont {
  font-size: 12px;
  font-family: myFont, serif;
}
.normalFont {
  font-size: 50px;
  font-weight: bold;
}
</style>
