<template>
  <Menu
    :active-name="firstMenuActiveName"
    width="auto"
    class="leftGatherMenuStyle"
    @on-select="handleActiveName"
  >
    <div class="menuChildren">
      <MenuItem name="logo" class="menuLogo">
        <div class="menuTitle">LOGO</div>
      </MenuItem>
      <MenuItem
        v-for="item in subscribeMenu"
        :key="item.code"
        :name="item.code"
        :to="{ name: item.code }"
        @click="handleActiveName(item.code)"
      >
        <Icon :type="item.icon" />
        {{ item.name }}
      </MenuItem>
    </div>
  </Menu>
</template>

<script>
import subscribeMenu from '@/enums/subscribeMenu';
export default {
  name: 'LeftGatherMenu',
  layout: 'GatherLayout',
  data() {
    return {
      subscribeMenu,
      firstMenuActiveName: subscribeMenu.getSubscribeMenu()[0].code,
    };
  },
  watch: {
    $route(to, from) {
      this.firstMenuActiveName = to.name;
    },
  },
  mounted() {
    this.firstMenuActiveName = this.$route.name;
    // this.firstMenuActiveName = localStorage.getItem('pageCode') ? localStorage.getItem('pageCode') : subscribeMenu.getSubscribeMenu()[0].code;
  },
  methods: {
    handleActiveName(name) {
      localStorage.setItem('pageCode', name);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/css/globalColor.scss';
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
    }
    .menuTitle {
      font-weight: bold;
      font-size: 28px;
    }
  }
}
.ivu-menu-light.ivu-menu-vertical
  .ivu-menu-item-active:not(.ivu-menu-submenu):after {
  border-radius: 4px;
  width: 4px;
  right: 1px;
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
  background: $gather-menu-active-bg-color;
}
</style>
