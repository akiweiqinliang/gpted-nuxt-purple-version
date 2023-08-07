<template>
  <div id="home" class="homePage">
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
        <nuxt-link to="/more"><span>了解更多</span></nuxt-link>
      </p>
      <div class="concludeImgBox">
        <img
          src="~assets/discoverPage.png"
          alt="深耕海外市场，助力企业探寻商机"
        />
      </div>
    </Row>
    <!--    conclusion * 3-->
    <Row class="homeCommonMargin count">
      <Col class="countChart">
        <canvas ref="barChart"></canvas>
      </Col>
      <Col class="countChart">
        <div class="rightDoughnutChart">
          <canvas ref="doughnutChart"></canvas>
        </div>
      </Col>
    </Row>
    <Row class="homeCommonMargin bottom">
      <h1>
        全球超过13000+企业正在使用GPTED
        <nuxt-link to="/more"><span>查看更多客户案例</span></nuxt-link>
      </h1>
      <div class="swiperBox">
        <div class="swiper-button-next nextBtn arrowBtn"></div>
        <div class="swiper-button-prev prevBtn arrowBtn"></div>
        <Swiper :options="swiperOption" class="swiper-container">
          <SwiperSlide
            v-for="i in 6"
            :key="`bottom-swiper-item-${i}`"
            class="caseSlide"
            >{{ i }}</SwiperSlide
          >
        </Swiper>
      </div>
      <ul class="companyList">
        <li
          v-for="item in companyList"
          :key="`company-${item}`"
          class="companyItem"
        >
          logo{{ item }}
          <!--          <div style="width: 100px;height: 40px;"></div>-->
          <!--          <img src="" alt="公司名">-->
        </li>
      </ul>
    </Row>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import pageCode from '~/enums/pageCodes';

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
  },
  layout: 'CommonLayout',
  data() {
    return {
      companyList: 20,
      swiperOption: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        observer: true, // 开启 observer 功能
        observeParents: true,
        spaceBetween: 20,
        speed: 800,
        loop: true, // 循环模式选项
        autoHeight: true,
        navigation: {
          nextEl: '#home .swiper-button-next',
          prevEl: '#home .swiper-button-prev',
        },
      },
    };
  },
  computed: {
    pageCode() {
      return pageCode;
    },
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const barChart = new this.$Chart(this.$refs.barChart, {
      type: 'horizontalBar',
      data: {
        labels: ['法国', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '招标发布数量',
            data: [40, 60, 29, 15, 7, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: false,
          labels: {
            fontColor: 'rgb(255, 99, 132)',
          },
        },
        title: {
          display: true,
          text: '招标发布数量排行榜',
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    // eslint-disable-next-line no-unused-vars
    const doughnutChart = new this.$Chart(this.$refs.doughnutChart, {
      type: 'doughnut',
      data: {
        labels: ['法国', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            data: [4, 5, 6, 7, 8, 1],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
          },
        ],
      },
      options: {
        legend: {
          display: true,
          position: 'right',
        },
        title: {
          display: true,
          text: '招标发布数量排行榜',
        },
      },
    });
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
  .count {
    .countChart {
      width: 50%;
      .rightDoughnutChart {
        width: 80%;
      }
    }
  }
  .bottom {
    h1 {
      width: 100%;
      text-align: center;
      font-weight: initial;
      span {
        margin-left: 20px;
        color: $home-login-btn-bg-color;
      }
    }
    .swiperBox {
      margin: 40px 0;
      position: relative;
      width: 100%;
      .swiper-container {
        border-radius: 10px;
      }
      .arrowBtn {
        position: absolute;
      }
      .arrowBtn:after {
        color: $home-login-btn-bg-color;
        font-size: 30px;
      }
      .nextBtn {
        right: 0;
      }
      .prevBtn {
        left: 0;
      }
      .caseSlide {
        height: 300px;
        border-radius: 10px;
        background: #d4d4d4;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $white;
      }
    }
    .companyList {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      margin: 0 auto;
      //justify-content: center;
      .companyItem {
        width: calc(100% / 6 - 20px);
        list-style: none;
        padding: 10px;
        margin: 10px;
        border: 1px solid $home-contact-msg-color;
      }
    }
  }
}
</style>
