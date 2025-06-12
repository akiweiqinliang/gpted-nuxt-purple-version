<template>
  <Menu
    :active-name="firstMenuActiveName"
    width="auto"
    class="leftGatherMenuStyle"
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
      >
        <div class="leftMenuItem">
          <!--          <Icon :type="item.icon" />-->
          <SvgIcon :svgIcon="item.svgIcon"></SvgIcon>
          {{ $t(item.code.replace('dashboard-', '')) }}
        </div>
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
  .leftMenuItem {
    //text-align: start;
    //margin: auto;
  }
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
//.ivu-menu-vertical .ivu-menu-item,
//.ivu-menu-vertical .ivu-menu-submenu-title {
//  padding: 12px;
//  margin: 16px 24px;
//}
//.ivu-menu-light.ivu-menu-vertical
//  .ivu-menu-item-active:not(.ivu-menu-submenu):after {
//  border-radius: 4px;
//  width: 4px;
//  right: 1px;
//  display: none;
//}
//.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
//  border-radius: $subscribe-border-radius;
//  margin: 0 24px;
//  color: $black;
//  font-weight: 600;
//}
//.ivu-menu-vertical .ivu-menu-item:hover,
//.ivu-menu-vertical .ivu-menu-submenu-title:hover {
//  color: $black;
//  font-weight: 600;
//}
//.ivu-menu-vertical .ivu-menu-item,
//.ivu-menu-vertical .ivu-menu-submenu-title {
//  transition: color 0.2s ease-in-out;
//}
</style>
