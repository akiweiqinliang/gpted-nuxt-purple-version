<template>
  <div id="home" class="homePage aaa">
    <div>
      <Row
        class="homeCommonMargin top"
        data-aos="fade-in"
        type="flex"
        :wrap="true"
      >
        <div class="leftSearchBox">
          <h1>GPTED {{ $t('全球招标') }}</h1>
          <span>这里是slogan</span>
          <Input
            v-model.trim="searchText"
            :autofocus="true"
            icon="ios-search"
            placeholder="请输入中英文关键词"
            class="leftSearchInput"
            size="large"
            @on-click="handleSearch"
          />
          <Row type="flex" justify="space-between" class="contactMsg">
            <Col>{{ $t('微信公众号') }}：123456</Col>
            <Col>新浪微博：GPTED招标</Col>
          </Row>
        </div>
        <div class="rightGlobalImgBox">
          <img src="~assets/home/home-earth-shadow.png" alt="全球招标" />
        </div>
        <div class="topNumberBox">
          <Row
            class="homeCommonMargin1 number"
            type="flex"
            align="middle"
            justify="space-around"
          >
            <Col class="numberBox">
              <span>
                {{ allBidNum }}
                <p>条</p>
              </span>
              <p>更新标讯</p>
            </Col>
            <Col class="numberBox">
              <span>
                4,530
                {{ projectCount }}
                <p>件</p>
              </span>
              <p>收录项目</p>
            </Col>
            <Col class="numberBox">
              <span>
                205
                <p>个</p>
              </span>
              <p>覆盖国家</p>
            </Col>
            <Col class="numberBox">
              <span>
                309
                <p>个</p>
              </span>
              <p>覆盖行业</p>
            </Col>
          </Row>
        </div>
      </Row>
      <Row
        class="homeCommonMargin map"
        data-aos="fade-up"
        data-aos-offset="-500"
        data-aos-anchor-placement="top-bottom"
      >
        <span>请在这里输入文本文本这里是文本</span>
        <div
          class="mapBox"
          data-aos="fade-in"
          data-aos-easing="linear"
          data-aos-duration="800"
        ></div>
      </Row>
      <Row class="homeCommonMargin bidOrigin">
        <h2>标讯来源网站展示</h2>
      </Row>
      <Row
        class="homeCommonMargin conclusion"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
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
      <Row
        class="homeCommonMargin conclusion"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
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
        <h2>
          全球超过13000+企业正在使用GPTED
          <nuxt-link to="/more"><span>查看更多客户案例</span></nuxt-link>
        </h2>
        <div class="swiperBox">
          <div class="swiper-button-next nextBtn arrowBtn"></div>
          <div class="swiper-button-prev prevBtn arrowBtn"></div>
          <Swiper :options="swiperOption" class="swiper-container">
            <SwiperSlide
              v-for="i in 6"
              :key="`bottom-swiper-item-${i}`"
              class="caseSlide"
              >{{ i }}
            </SwiperSlide>
          </Swiper>
        </div>
        <ul class="companyList">
          <li
            v-for="item in companyList"
            :key="`company-${item}`"
            class="companyItem"
          >
            logo{{ item }}
          </li>
        </ul>
      </Row>
    </div>
  </div>
</template>
<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import pageCode from '~/enums/pageCodes';
import { countryOptions } from '~/enums/common';

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
  },
  layout: 'CommonLayout',
  async asyncData({ $axios }) {
    // 标讯条数
    const projectCount = await $axios.get('/getProjectCount').then((res) => {
      return res.data.meta.status;
    });
    const allBidNum = await new Promise((resolve) => resolve(32607)).then(
      (value) => {
        return value.toLocaleString();
      }
    );
    const countryArray = JSON.parse(
      JSON.stringify(countryOptions.getCountryArray())
    );
    const chartData = countryArray.map((item) => {
      return { name: item.name, num: item.bidNumber };
    });
    chartData.sort((a, b) => b.num - a.num);
    return { chartData, allBidNum, projectCount, countryArray };
  },
  data() {
    return {
      searchText: '',
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
    AOS.init({
      mirror: true,
    });

    this.$store.dispatch('initToken');
    // eslint-disable-next-line no-unused-vars
    const barChart = new this.$Chart(this.$refs.barChart, {
      type: 'horizontalBar',
      data: {
        labels: this.chartData.map(({ name }) => name),
        datasets: [
          {
            label: '招标发布数量',
            data: this.chartData.map(({ num }) => num),
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            // backgroundColor: this.createBarBgColor(),
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 0,
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
        labels: this.chartData.map(({ name }) => name),
        datasets: [
          {
            data: this.chartData.map(({ num }) => num),
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
  methods: {
    handleSearch() {
      this.$router.push({
        name: pageCode.DISCOVER,
        params: { searchText: this.searchText },
      });
    },
    createBarBgColor() {
      return [
        'rgba(54, 99, 232, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54,100,236,0.59)',
        'rgba(81,126,178,0.69)',
        'rgba(46,57,92,0.66)',
        'rgba(53,10,210,0.61)',
      ];
    },
  },
};
</script>

<style scoped lang="scss">
@import 'assets/css/global.scss';
@import 'assets/css/globalColor.scss';
@import 'assets/css/page404.scss';

.homePage {
  background-image: url($home-bg-img-url);
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .homeCommonMargin {
    margin: 0 160px;
    padding: 80px 0 40px;
    height: 100vh;
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
      //@media screen and (max-width: 1400px) {
      //  h1 {
      //    font-size: 44px;
      //  }
      //}
      //@media screen and (max-width: 1200px) {
      //  h1 {
      //    font-size: 40px;
      //  }
      //}
      span {
        display: block;
        width: 100%;
        text-align: center;
        margin: 0 0 60px;
        color: $home-theme-color;
        letter-spacing: 16px;
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
        height: auto;
        object-fit: contain;
        transform: scale(1.3);
      }
    }
    .topNumberBox {
      width: 100%;
      padding: 80px 0 40px;
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
      margin: 20px 0;
      font-weight: bold;
    }
    .mapBox {
      background-image: url($home-map-url);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      height: 500px;
      width: 100%;
      //background: $white;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .bidOrigin {
    //height: 600px;
  }
  .conclusion {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
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
      color: $home-theme-color;
    }
    .concludeImgBox {
      width: 60%;
      margin: 0 auto;
      border-radius: 10px;
      overflow: hidden;
      @extend %hoveringStyle;

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
    h2 {
      width: 100%;
      text-align: center;
      font-weight: initial;
      span {
        margin-left: 20px;
        color: $home-theme-color;
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
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
      .arrowBtn:after {
        color: $home-theme-color;
        font-size: 18px;
      }
      .nextBtn {
        right: -20px;
      }
      .prevBtn {
        left: -20px;
      }
      .caseSlide {
        height: 240px;
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
