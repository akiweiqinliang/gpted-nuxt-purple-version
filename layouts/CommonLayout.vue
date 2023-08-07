<template>
  <div class="commonLayout">
    <Menu mode="horizontal" :active-name="activeRouterName">
      <Row type="flex" justify="space-around">
        <Col class="commonLogo"> LOGO </Col>
        <Col>
          <MenuItem :name="pageCode.HOME" :to="{ name: pageCode.HOME }">
            <Icon type="ios-home-outline" />首页
          </MenuItem>
          <MenuItem :name="pageCode.DISCOVER" :to="{ name: pageCode.DISCOVER }">
            <Icon type="ios-search-outline" />搜索
          </MenuItem>
          <MenuItem :name="pageCode.PROMOTE" :to="{ name: pageCode.PROMOTE }">
            <Icon type="ios-globe-outline" />资源
          </MenuItem>
          <MenuItem
            :name="pageCode.GATHER_SUBSCRIBE"
            :to="{ name: pageCode.GATHER_SUBSCRIBE }"
          >
            <Icon type="ios-card-outline" />工作台
          </MenuItem>
          <MenuItem name="huiyuan">
            <Icon type="ios-card-outline" />会员
          </MenuItem>
        </Col>
        <Col>
          <Row type="flex" :gutter="20">
            <Col class="promoteImgBtn">
              <nuxt-link :to="pageCode.PROMOTE"
                ><img src="~assets/promote-gift-icon.png"
              /></nuxt-link>
            </Col>
            <Col>
              <Button shape="circle" class="loginBtn">登录</Button>
            </Col>
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
    <nuxt />
  </div>
</template>

<script>
import pageCode from '~/enums/pageCodes';

export default {
  name: 'CommonLayout',
  data() {
    return {
      activeRouterName: this.$route.name,
    };
  },
  computed: {
    pageCode() {
      return pageCode;
    },
  },
  watch: {
    $route(to, from) {
      this.activeRouterName = to.name;
    },
  },
};
</script>

<style scoped lang="scss">
@import 'assets/css/globalColor.scss';
.commonLayout {
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
    color: $home-login-btn-bg-color;
    border-bottom: 2px solid $home-login-btn-bg-color;
  }
}
.commonLogo {
  font-size: 50px;
  font-weight: bold;
}
.loginBtn {
  background: $home-login-btn-bg-color;
  border: 0;
  color: $white;
}
.loginBtn:hover,
.loginBtn:active,
.loginBtn:focus {
  border: 0;
  box-shadow: none;
}
.promoteImgBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
  }
  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
}
</style>
