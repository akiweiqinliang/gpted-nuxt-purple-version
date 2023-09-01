<template>
  <Row type="flex" :wrap="false" class="gatherLayout">
    <Col class="leftNav" span="4" :xs="0" :sm="4">
      <!--      左侧导航-->
      <LeftGatherMenu />
    </Col>
    <Col class="rightContainer" span="20" flex="1">
      <!--      右侧顶部小导航-->
      <Menu mode="horizontal" active-name="subscribePage" class="rightTopMenu">
        <Row type="flex" justify="space-between">
          <Col>
            <MenuItem name="homePage" :to="{ name: pageCode.HOME }">
              <!--              <Icon type="ios-home-outline" />-->
              <Icon type="ios-close" size="36" class="backToHomeIcon" />
            </MenuItem>
          </Col>
          <Col>
            <Row type="flex" class="fullHeight">
              <Col class="topMenuIcon">
                <!--                <div class="topMenuIcon">-->
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5498 10.0508H12.9498V11.5008H9.2998V13.5508H12.3998V15.0508H9.2998V17.4008H13.0998V18.9008H7.5498V10.0508ZM14.8498 10.0508H16.6498L19.1998 14.7508L20.0998 16.6508H20.1498C20.0498 15.7508 19.8998 14.5508 19.8998 13.5508V10.0508H21.5498V18.9008H19.7498L17.1998 14.1508L16.2998 12.2508H16.2498C16.3498 13.2008 16.4498 14.3008 16.4498 15.3508V18.9008H14.7998V10.0508H14.8498Z"
                    fill="#676767"
                  />
                  <path
                    d="M14.6 27.3504C7.35 27.3504 1.5 21.4504 1.5 14.2504C1.5 7.05039 7.35 1.15039 14.6 1.15039C21.85 1.15039 27.7 7.00039 27.7 14.2504C27.7 15.3504 27.55 16.4004 27.3 17.4504C27.2 17.8504 26.8 18.1004 26.4 18.0004C26 17.9004 25.75 17.5004 25.85 17.1004C26.1 16.2004 26.2 15.2504 26.2 14.2504C26.2 7.85039 21 2.65039 14.6 2.65039C8.2 2.65039 3 7.85039 3 14.2504C3 20.6504 8.2 25.8504 14.6 25.8504C15 25.8504 15.35 26.2004 15.35 26.6004C15.35 27.0004 15 27.3504 14.6 27.3504Z"
                    fill="#676767"
                  />
                  <path
                    d="M27.7503 23.2996H18.4503C18.0503 23.2996 17.7003 22.9496 17.7003 22.5496C17.7003 22.1496 18.0503 21.7996 18.4503 21.7996H26.2003L25.3003 20.6496C25.0503 20.2996 25.1003 19.8496 25.4503 19.5996C25.7503 19.3496 26.2503 19.3996 26.5003 19.7496L28.4003 22.1496C28.6003 22.3996 28.6003 22.6996 28.5003 22.9496C28.4003 23.1996 28.0503 23.2996 27.7503 23.2996ZM20.3503 28.7996C20.1503 28.7996 19.9003 28.6996 19.7503 28.4996L17.8503 26.0996C17.6503 25.8496 17.6503 25.5496 17.7503 25.2996C17.8503 25.0496 18.1503 24.8996 18.4003 24.8996H27.7003C28.1003 24.8996 28.4503 25.2496 28.4503 25.6496C28.4503 26.0496 28.1003 26.3996 27.7003 26.3996H20.0003L20.9003 27.5496C21.1503 27.8996 21.1003 28.3496 20.7503 28.5996C20.6503 28.7496 20.5003 28.7996 20.3503 28.7996Z"
                    fill="#676767"
                  />
                </svg>
                <!--                </div>-->
              </Col>
              <Col class="topMenuIcon icon-margin-right">
                <!--                <div class="topMenuIcon">-->
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.8516 5.58984H24.3574C23.7744 5.58984 23.3027 6.06152 23.3027 6.64453C23.3027 7.22754 23.7744 7.69922 24.3574 7.69922H25.8516C25.916 7.69922 25.9688 7.75195 25.9688 7.81641V22.3389C25.9688 22.4033 25.916 22.4561 25.8516 22.4561H17.874C17.5635 22.4561 17.2676 22.5938 17.0654 22.8311L14.9619 25.333L12.9492 22.8457C12.75 22.5996 12.4482 22.4561 12.1289 22.4561H4.15723C4.09277 22.4561 4.04004 22.4033 4.04004 22.3389V7.81641C4.04004 7.75195 4.09277 7.69922 4.15723 7.69922H5.64258C6.22559 7.69922 6.69727 7.22754 6.69727 6.64453C6.69727 6.06152 6.22559 5.58984 5.64258 5.58984H4.15723C2.92969 5.58984 1.93066 6.58887 1.93066 7.81641V22.3389C1.93066 23.5664 2.92969 24.5654 4.15723 24.5654H11.6279L14.1299 27.6533C14.3291 27.8965 14.625 28.04 14.9385 28.043H14.9473C15.2578 28.043 15.5537 27.9053 15.7559 27.668L18.3662 24.5654H25.8516C27.0791 24.5654 28.0781 23.5664 28.0781 22.3389V7.81641C28.0781 6.58887 27.0791 5.58984 25.8516 5.58984Z"
                    fill="#676767"
                  />
                  <path
                    d="M10.2217 8.60938C10.8047 8.60938 11.2764 8.1377 11.2764 7.55469C11.2764 5.59473 12.9521 4.00098 15.0088 4.00098C16.0371 4.00098 16.9863 4.35254 17.6836 4.98828C18.3662 5.60938 18.7412 6.45898 18.7412 7.37891C18.7412 9.27734 17.7598 9.9043 16.5146 10.7012C15.375 11.4307 13.9541 12.3389 13.9541 14.3662C13.9541 14.9492 14.4258 15.4209 15.0088 15.4209C15.5918 15.4209 16.0635 14.9492 16.0635 14.3662C16.0635 13.5693 16.5 13.2178 17.6514 12.4795C19.002 11.6152 20.8506 10.4346 20.8506 7.38184C20.8506 4.30566 18.2842 1.89453 15.0088 1.89453C11.7861 1.89453 9.16699 4.43457 9.16699 7.55762C9.16699 8.1377 9.63867 8.60938 10.2217 8.60938Z"
                    fill="#676767"
                  />
                  <path
                    d="M13.8369 17.6387C13.8369 17.9495 13.9604 18.2475 14.1801 18.4673C14.3999 18.6871 14.698 18.8105 15.0088 18.8105C15.3196 18.8105 15.6177 18.6871 15.8374 18.4673C16.0572 18.2475 16.1807 17.9495 16.1807 17.6387C16.1807 17.3279 16.0572 17.0298 15.8374 16.81C15.6177 16.5903 15.3196 16.4668 15.0088 16.4668C14.698 16.4668 14.3999 16.5903 14.1801 16.81C13.9604 17.0298 13.8369 17.3279 13.8369 17.6387Z"
                    fill="#676767"
                  />
                </svg>
                <!--                </div>-->
              </Col>
            </Row>
          </Col>
        </Row>
      </Menu>
      <!--      右侧下方跳转内容-->
      <div class="containerPadding">
        <!--        <router-view />-->
        <nuxt keep-alive />
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
.gatherLayout {
  position: relative;
  .leftNav {
    position: relative;
    left: 0;
    top: 0;
  }
}
.rightContainer {
  background-image: url($gather-bg-img-url);
  background-position: top;
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
    .backToHomeIcon {
      transform: translateY(6px);
    }
  }
  .topMenuIcon {
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: auto;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  .topMenuIcon:hover svg path {
    fill: $home-theme-color;
  }
  .icon-margin-right {
    margin-left: 20px;
    margin-right: 24px;
  }
}
.fullHeight {
  height: 100%;
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
    display: none;
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
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
    color: $home-theme-color;
  }
}
</style>
