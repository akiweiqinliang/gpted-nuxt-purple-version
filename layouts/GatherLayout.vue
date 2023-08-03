<template>
  <Row type="flex" :wrap="false">
    <Col class="leftNav" span="4">
      <!--      左侧导航-->
      <LeftGatherMenu />
    </Col>

    <Col class="rightContainer" flex="1">
      <!--      右侧顶部小导航-->
      <Menu mode="horizontal" active-name="subscribePage" class="rightTopMenu">
        <Row type="flex" justify="space-between">
          <Col>
            <MenuItem name="homePage" :to="{ name: pageCode.DISCOVER }">
              <Icon type="ios-home-outline" />
            </MenuItem>
            <MenuItem name="discoverPage" :to="{ name: pageCode.DISCOVER }">
              <Icon type="ios-search-outline" />
            </MenuItem>
            <MenuItem name="globalPage" :to="{ name: pageCode.PROMOTE }">
              <Icon type="ios-globe-outline" />
            </MenuItem>
            <MenuItem name="subscribePage">
              <Icon type="ios-card-outline" />
            </MenuItem>
          </Col>
          <Col>
            <Row type="flex" :gutter="20">
              <Col>
                <div>
                  <Icon type="ios-repeat" class="topMenuIcon" />
                </div>
              </Col>
              <Col class="icon-margin-right">
                <div>
                  <Icon type="ios-help-circle-outline" class="topMenuIcon" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Menu>
      <!--      右侧下方跳转内容-->
      <div class="containerPadding">
        <!--        <router-view />-->
        <nuxt />
      </div>
    </Col>
  </Row>
</template>

<script>
import LeftGatherMenu from '@/components/LeftGatherMenu.vue';
import pageCode from '@/enums/pageCodes';

export default {
  name: 'GatherLayout',
  components: { LeftGatherMenu },
  computed: {
    pageCode() {
      return pageCode;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/css/global.scss';
@import '@/assets/css/globalColor.scss';
.containerPadding {
  padding: 28px;
}
.rightContainer {
  background-image: url($gather-bg-img-url);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .rightTopMenu {
    position: sticky;
    top: 0;
    .ivu-menu-item > i {
      margin-right: 0;
      font-size: 20px;
      cursor: pointer;
      position: relative;
    }
  }
  .topMenuIcon {
    font-size: 20px;
    cursor: pointer;
  }
  .icon-margin-right {
    margin-right: 20px;
  }
}
.rightContainer {
  .rightTopMenu .ivu-menu-item > i:after {
    content: '';
    height: 3px;
    width: 0;
    transition: width 0.3s;
    position: absolute;
    border-radius: 3px;
    bottom: -4px;
    left: 0;
    background: $subscribe-underline-color;
  }
  .rightTopMenu .ivu-menu-item-selected > i:after {
    width: 100%;
  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
    border-bottom: 0;
  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
    border: 0;
  }
}
</style>
