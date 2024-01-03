<template>
  <Menu
    :active-name="firstMenuActiveName"
    width="auto"
    class="leftGatherMenuStyle"
    :open-names="openNames"
  >
    <div class="menuChildren">
      <MenuItem name="logo" class="menuLogo">
        <div class="menuTitle">LOGO</div>
      </MenuItem>
      <Submenu name="subscribe">
        <template slot="title">
          <Icon type="ios-heart-outline" />
          {{ $t('subscribe') }}
        </template>
        <MenuItem
          name="dashboard-subscribe"
          :to="{ name: 'dashboard-subscribe' }"
          >订阅推送</MenuItem
        >
        <MenuItem
          name="dashboard-subscribe-subscribeSetting"
          :to="{ name: 'dashboard-subscribe-subscribeSetting' }"
          >订阅设置</MenuItem
        >
        <MenuItem
          name="dashboard-subscribe-pushSetting"
          :to="{ name: 'dashboard-subscribe-pushSetting' }"
          >推送设置</MenuItem
        >
      </Submenu>
      <MenuItem
        name="dashboard-collection"
        :to="{ name: 'dashboard-collection' }"
      >
        <Icon type="ios-heart-outline" />
        {{ $t('collection') }}
      </MenuItem>
      <MenuItem name="dashboard-message" :to="{ name: 'dashboard-message' }">
        <Icon type="ios-heart-outline" />
        {{ $t('message') }}
      </MenuItem>
      <MenuItem name="dashboard-center" :to="{ name: 'dashboard-center' }">
        <Icon type="ios-heart-outline" />
        {{ $t('center') }}
      </MenuItem>
      <MenuItem name="dashboard-reward" :to="{ name: 'dashboard-reward' }">
        <Icon type="ios-heart-outline" />
        {{ $t('reward') }}
      </MenuItem>
    </div>
  </Menu>
</template>

<script>
export default {
  name: 'LeftGatherMenu',
  layout: 'GatherLayout',
  data() {
    return {
      firstMenuActiveName: 'dashboard-subscribe',
      openNames: ['subscribe'],
    };
  },
  watch: {
    $route(to, from) {
      // console.log(to)
      this.firstMenuActiveName = to.name;
    },
  },
  mounted() {
    this.firstMenuActiveName = this.$route.name;
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/css/globalColor.scss';
@import '@/assets/css/global.scss';
.leftGatherMenuStyle {
  min-height: 100vh;
  height: 100%;
  position: relative;
  text-align: center;
  .menuChildren {
    position: sticky;
    top: 0;
    .ivu-menu-item > i {
      font-size: 16px;
    }
    .menuLogo {
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0;
    }
    .menuTitle {
      font-weight: bold;
      font-size: 28px;
    }
  }
}
.ivu-menu-vertical.ivu-menu-light:after {
  z-index: -1;
}
</style>
