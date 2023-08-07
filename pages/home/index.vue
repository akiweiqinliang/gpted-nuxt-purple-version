<template>
  <div class="homePage">
    <Row class="homeCommonMargin top" type="flex" :wrap="false">
      <div class="leftSearchBox">
        <h1>GPTED全球招标</h1>
        <span>这里是slogan</span>
        <Input
          search
          placeholder="请输入中英文关键词"
          class="leftSearchInput"
          size="large"
        />
        <Row type="flex" justify="space-between" class="contactMsg">
          <Col>微信公众号：123456</Col>
          <Col>新浪微博：GPTED招标</Col>
        </Row>
      </div>
      <div class="rightGlobalImgBox">
        <img src="~assets/home/home-global-img.png" alt="全球招标" />
      </div>
    </Row>
    <Row
      class="homeCommonMargin number"
      type="flex"
      align="middle"
      justify="space-around"
    >
      <Col class="numberBox">
        <span
          >32,607
          <p>条</p></span
        >
        <p>更新标讯</p>
      </Col>
      <Col class="numberBox">
        <span
          >4,530
          <p>件</p></span
        >
        <p>收录项目</p>
      </Col>
      <Col class="numberBox">
        <span
          >205
          <p>个</p></span
        >
        <p>覆盖国家</p>
      </Col>
      <Col class="numberBox">
        <span
          >309
          <p>个</p></span
        >
        <p>覆盖行业</p>
      </Col>
    </Row>
    <Row class="homeCommonMargin map">
      <span>请在这里输入文本文本这里是文本</span>
      <div class="mapBox"></div>
    </Row>
    <Row class="homeCommonMargin bidOrigin">
      <h2>标讯来源网站展示</h2>
    </Row>
    <Row class="homeCommonMargin conclusion">
      <h1>深耕海外市场，助力企业探寻商机</h1>
      <p>
        GPTED汇集来自全球各国、机构和组织的信息，深入挖掘海外市场潜在的巨大商机，协助企业进军国际招标的广阔市场，开拓新的商机，追寻全新的发展机遇。
        <span>了解更多</span>
      </p>
      <div class="concludeImgBox">
        <img
          src="~assets/discoverPage.png"
          alt="深耕海外市场，助力企业探寻商机"
        />
      </div>
    </Row>
    <!--    conclusion * 3-->
    <Row class="homeCommonMargin count"> </Row>
  </div>
</template>

<script>
import pageCode from '~/enums/pageCodes';

export default {
  name: 'Home',
  layout: 'CommonLayout',
  computed: {
    pageCode() {
      return pageCode;
    },
  },
};
</script>

<style scoped lang="scss">
@import 'assets/css/global.scss';
@import 'assets/css/globalColor.scss';
.homePage {
  background-image: url($home-bg-img-url);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .homeCommonMargin {
    margin: 0 160px;
    padding: 80px 0 40px;
  }
  .top {
    .leftSearchBox {
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      h1 {
        font-size: 50px;
        text-align: center;
      }
      span {
        display: block;
        width: 100%;
        text-align: center;
        margin: 0 0 60px;
        color: $home-login-btn-bg-color;
      }
      .leftSearchInput {
        width: 60%;
        margin: 0 auto;
      }
      .contactMsg {
        font-size: 12px;
        width: 60%;
        margin: 20px auto;
        border-radius: 10px;
        color: $home-contact-msg-color;
      }
    }
    .rightGlobalImgBox {
      width: 60%;
      display: flex;
      justify-content: center;
      img {
        width: 65%;
      }
    }
  }
  .number {
    .numberBox {
      border-right: 1px solid $home-contact-msg-color;
      width: calc(100% / 4);
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: column;
      span {
        display: flex;
        font-size: 32px;
        align-items: baseline;
        p {
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
    .numberBox:nth-child(4) {
      border: 0;
    }
  }
  .map {
    text-align: center;
    span {
      width: 100%;
      text-align: center;
      margin: 40px 0;
      font-weight: bold;
    }
    .mapBox {
      height: 500px;
      width: 100%;
      background: $white;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .bidOrigin {
    height: 600px;
  }
  .conclusion {
    h1,
    p {
      width: 100%;
      text-align: center;
      margin: 0 0 40px;
    }
    p {
      color: $home-contact-msg-color;
    }
    span {
      color: $home-login-btn-bg-color;
    }
    .concludeImgBox {
      width: 60%;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
