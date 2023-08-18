<template>
  <div class="commonLayout">
    <BackTop :height="600" :bottom="320" :right="60">
      <div class="backToTop">
        <Icon type="ios-arrow-up" />
      </div>
    </BackTop>
    <div
      class="customerService"
      @click="customerServiceModal = !customerServiceModal"
    >
      <Icon type="md-headset" />
    </div>
    <Menu mode="horizontal" :active-name="activeRouterName">
      <Row type="flex" justify="space-around">
        <Col class="commonLogo"> LOGO </Col>
        <Col class="commonMenuContainer">
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
              <nuxt-link v-if="loginActive" :to="{ name: pageCode.LOGIN }">
                <Button shape="circle" class="loginBtn"> 登录 </Button>
              </nuxt-link>
              <Button v-else shape="circle" class="loginBtn" @click="logout"
                >退出登录</Button
              >
            </Col>
            <Col>
              <div class="topMenuIcon">
                <Icon type="ios-repeat" />
              </div>
            </Col>
            <Col>
              <div class="topMenuIcon">
                <Icon type="ios-help-circle-outline" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Menu>
    <nuxt keep-alive />
  </div>
</template>

<script>
import pageCode from '~/enums/pageCodes';

export default {
  name: 'CommonLayout',
  data() {
    return {
      activeRouterName: this.$route.name,
      customerServiceModal: false,
    };
  },
  computed: {
    pageCode() {
      return pageCode;
    },
    loginActive() {
      return this.$store.getters.getToken === '';
    },
  },
  watch: {
    $route(to, from) {
      this.activeRouterName = to.name;
    },
  },
  methods: {
    logout() {
      this.$store.commit('setToken', '');
      sessionStorage.setItem('token', '');
      this.$router.push({ name: pageCode.HOME });
    },
  },
};
</script>

<style scoped lang="scss">
@import 'assets/css/globalColor.scss';
%float-btn-style {
  width: 44px;
  height: 44px;
  background: $white;
  border-radius: 50%;
  z-index: 40;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  transition: all 0.3s;
  cursor: pointer;
}
%float-btn-style:hover {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.backToTop {
  @extend %float-btn-style;
  i {
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    color: $home-theme-color;
    font-size: 28px;
    position: relative;
  }
}
.customerService {
  position: fixed;
  right: 60px;
  bottom: 250px;
  @extend %float-btn-style;
  i {
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    color: $home-theme-color;
    font-size: 30px;
    position: relative;
  }
}
.commonLayout {
  .topMenuIcon {
    cursor: pointer;
  }
  .topMenuIcon:hover > i {
    color: $home-theme-color;
  }
  position: relative;
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
    color: $home-theme-color;
    border-bottom: 0;
  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
    border: 0;
  }
  .commonMenuContainer {
    position: relative;
    .ivu-menu-item > i:after {
      content: '';
      height: 3px;
      margin: auto;
      transition: all 0.3s ease-in-out 0s;
      position: absolute;
      bottom: 12px;
      left: calc(10% + 6px);
      background: $home-theme-color;
      transform: scaleX(0);
      visibility: hidden;
      width: 80%;
    }
    .ivu-menu-item-selected > i:after {
      transform: scaleX(1);
      visibility: visible;
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
}
.commonLogo {
  font-size: 50px;
  font-weight: bold;
}
.loginBtn {
  background: $home-theme-color;
  border: 0;
  color: $white;
  transition: all 0.3s;
}
.loginBtn:hover,
.loginBtn:active,
.loginBtn:focus {
  border: 0;
  box-shadow: none;
  background: rgba($home-theme-color, 0.7);
}
.promoteImgBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    transform: translateY(2px);
  }
  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
}
</style>
