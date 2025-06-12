<template>
  <div id="subscribe" class="swiperBox">
    <div class="swiper-button-next nextBtn arrowBtn"></div>
    <div class="swiper-button-prev prevBtn arrowBtn"></div>
    <div class="swiper-pagination dots"></div>
    <MySwiper :options="settingSwiperOption" class="swiperContainer swiper">
      <SwiperSlide>
        <Row class="slideTitle">推送频率和时段</Row>
        <Row type="flex" justify="center" class="slideGuideText"
          >根据您自身的需求可自定义推送的频率与时段</Row
        >
        <Row type="flex" justify="center" class="timeBox">
          <div class="line"></div>
          <div class="frequencyBox">
            <div
              class="dot"
              :class="frequency === 'once' ? 'dotActive' : ''"
              @click="frequency = 'once'"
            ></div>
            <span>每日一次</span>
          </div>
          <div class="frequencyBox">
            <div
              class="dot"
              :class="frequency === 'twice' ? 'dotActive' : ''"
              @click="frequency = 'twice'"
            ></div>
            <span>每日两次</span>
          </div>
          <div class="frequencyBox">
            <div
              class="dot"
              :class="frequency === 'three' ? 'dotActive' : ''"
              @click="frequency = 'three'"
            ></div>
            <span>实时推送</span>
          </div>
        </Row>
        <Row style="height: 300px"></Row>
      </SwiperSlide>
      <SwiperSlide>
        <Row class="slideTitle">推送方式</Row>
        <Row type="flex" justify="center" class="slideGuideText"
          >根据您自身的需求可自定义推送方式</Row
        >
        <Row type="flex" :wrap="false" :gutter="12" class="wayBox">
          <Col span="8">
            <div class="imgBox">
              <img
                src="~assets/subscribe/sendEmailWay.png"
                alt="邮件提醒：根据设置的推送时间发送邮件"
              />
            </div>
            <p>邮件提醒：根据设置的推送时间发送邮件</p>
            <span>邮箱：<a>立即绑定</a></span>
          </Col>
          <Col span="8">
            <div class="imgBox">
              <img
                src="~assets/subscribe/weChatWay.png"
                alt="微信提醒：根据设置的推送时间通过微信公众号发送信息"
              />
            </div>
            <p>微信提醒：根据设置的推送时间通过微信公众号发送信息</p>
            <span>微信公众号：<a>立即关注</a></span>
          </Col>
          <Col span="8">
            <div class="imgBox">
              <img
                src="~assets/subscribe/downloadAppWay.png"
                alt="APP提醒：根据设置的推送时间发送APP消息"
              />
            </div>
            <p>APP提醒：根据设置的推送时间发送APP消息</p>
            <span><a>立即下载APP</a></span>
          </Col>
        </Row>
      </SwiperSlide>
      <SwiperSlide
        >3
        <Row style="height: 300px"></Row>
      </SwiperSlide>
      <SwiperSlide
        >4
        <Row style="height: 300px"> </Row>
      </SwiperSlide>
    </MySwiper>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'SubscribeSettingCard',
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
  data() {
    return {
      frequency: 'twice',
      settingSwiperOption: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        observer: true, // 开启 observer 功能
        observeParents: true,
        speed: 600,
        autoHeight: true,
        mousewheel: false,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          prevEl: '#subscribe .swiper-button-prev',
          nextEl: '#subscribe .swiper-button-next',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'custom',
          // 自定义分页样式,css样式也写在这里，
          renderCustom: function (swiper, current, total) {
            const activeColor = '#7F3AF7';
            const normalColor = '#E0D0FB';
            let color = '';
            let paginationStyle = '';
            let html = '';
            for (let i = 1; i <= total; i++) {
              if (i === current) {
                color = activeColor;
              } else {
                color = normalColor;
              }
              paginationStyle = `background:${color};opacity:1;margin:4px 0`;
              html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`;
            }
            return html;
          },
        },
        on: {
          init() {
            this.update();
          },
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/css/global.scss';
@import '@/assets/css/globalColor.scss';

.swiperBox {
  width: 100%;
  .arrowBtn {
    color: $home-theme-color;
    transform: scale(0.8);
    z-index: 99;
  }
  .dots {
    right: 20px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: auto;
    top: 20px;
    left: initial;
  }
  .swiperContainer {
    width: calc(100% - 0px);
    .slideTitle {
      font-size: 16px;
    }
    .slideGuideText {
      font-size: 18px;
      font-weight: bold;
      margin-top: 24px;
    }
    .timeBox {
      position: relative;
      display: flex;
      align-items: center;
      margin: 60px 0;
      .line {
        position: absolute;
        top: 50%;
        z-index: 2;
        width: 70%;
        height: 1px;
        background: #3a3a3a;
      }
      .frequencyBox {
        position: relative;
        width: calc(60% / 3);
        span {
          top: 32px;
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
        }
      }
      .dot {
        position: relative;
        z-index: 3;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: $subscribe-setting-dot-color;
        margin: 0 auto;
        cursor: pointer;
        transition: all 0.3s;
      }
      .dot::before,
      .dot::after {
        content: '';
        background: none;
        position: absolute;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.3s;
      }
      .dot::before {
        width: 20px;
        height: 20px;
        z-index: 6;
      }
      .dot::after {
        width: 36px;
        height: 36px;
        z-index: 5;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0);
      }
      .dotActive::before {
        background: $white;
      }
      .dotActive::after {
        background: $decorate-purple-color;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.23);
      }
    }
    .wayBox {
      overflow: hidden;
      text-align: center;
      margin: 80px 0;
      .imgBox {
        width: 100%;
        height: 260px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      p {
        margin-top: 12px;
        color: $subscribe-setting-way-color;
      }
      span {
        display: block;
        margin-top: 20px;
        a {
          color: $home-theme-color;
        }
      }
    }
  }
}
</style>
