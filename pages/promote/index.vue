<template>
  <div id="promote">
    <!--  推广页-->
    <Row>
      <Col span="24" class="topContent">
        <div class="topBgContainer"></div>
        <div class="innerContent">
          <div class="leftText">
            <h1>活动专区</h1>
            <p>
              主要包含热门活动、新手活动、推广活动，您可了解GPTED全球招标的最新活动
            </p>
            <a href="#">了解详情<Icon type="md-arrow-down" /></a>
          </div>
          <div class="rightImg">
            <img src="../../assets/promote/top-right-img.png" alt="活动专区" />
          </div>
        </div>
      </Col>
    </Row>
    <!--  热门活动-->
    <Row>
      <Col span="24" class="eventContainer">
        <div class="titleContainer">
          <span>热门活动</span>
          <p>这里简要概括热门活动</p>
        </div>
        <div class="innerContainer">
          <div class="hotImgBox"></div>
        </div>
      </Col>
    </Row>
    <!--  新手活动-->
    <Row>
      <Col span="24" class="eventContainer newBg">
        <div class="titleContainer">
          <span>新手活动</span>
          <p>这里简要概括新手活动</p>
        </div>
        <div class="innerContainer">
          <Col class="newLeft">
            <Swiper :options="leftSwiperOption" class="swiper-container">
              <SwiperSlide
                v-for="step in newHandEventSteps"
                :key="`newHand-step-${step.id}`"
                class="leftSlide"
              >
                <span>{{ step.title }}</span>
                <p>{{ step.context }}</p>
              </SwiperSlide>
            </Swiper>
            <div class="swiper-button-next swiperArrowBtn"></div>
          </Col>
          <Col class="newRight">
            <div class="imgList">
              <Swiper :options="rightSwiperOption" class="swiper-container">
                <SwiperSlide
                  v-for="step in newHandEventSteps"
                  :key="`newHand-step-${step.id}`"
                  class="rightSlide"
                >
                  {{ step.imgUrl }}
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>
        </div>
      </Col>
    </Row>
    <!--  推广活动-->
    <Row>
      <Col span="24" class="eventContainer">
        <div class="titleContainer">
          <span>推广活动</span>
          <p>这里简要概括推广活动</p>
        </div>
        <div class="innerContainer">
          <Col class="promoteLeft">
            <div class="promoteImg"></div>
          </Col>
          <Col class="promoteRight">
            <Button class="promoteBtn">我要推广</Button>
            <p>邀请一名新用户</p>
            <p>可获最长67天会员特权</p>
            <p>即刻享受10%的现金返还</p>
          </Col>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'PromotePage',
  components: {
    Swiper,
    SwiperSlide,
  },
  layout: 'CommonLayout',
  data() {
    return {
      newHandEventSteps: [
        {
          id: 1,
          title: '1注册',
          context: '点击上方登录按钮，快速免费注册，即可获得神秘权限礼包',
          imgUrl: '1',
        },
        {
          id: 2,
          title: '2完善企业信息',
          context: '点击上方登录按钮，快速免费注册，即可获得神秘权限礼包',
          imgUrl: '2',
        },
        {
          id: 3,
          title: '3关注公众号',
          context: '点击上方登录按钮，快速免费注册，即可获得神秘权限礼包',
          imgUrl: '3',
        },
        {
          id: 4,
          title: '4下载GPTED移动端APP',
          context: '点击上方登录按钮，快速免费注册，即可获得神秘权限礼包',
          imgUrl: '4',
        },
        {
          id: 5,
          title: '5下载GPTED移动端APP',
          context: '点击上方登录按钮，快速免费注册，即可获得神秘权限礼包',
          imgUrl: '5',
        },
      ],
      rightSwiperOption: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        speed: 600,
        loop: true,
        mousewheel: false,
        navigation: {
          nextEl: '#promote .swiper-button-next',
        },
      },
      leftSwiperOption: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        centeredSlides: false,
        observer: true, // 开启 observer 功能
        observeParents: true,
        speed: 600,
        loop: true, // 循环模式选项
        autoHeight: 'true',
        direction: 'vertical', // 纵向
        navigation: {
          nextEl: '#promote .swiper-button-next',
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
@import '@/assets/css/promote.scss';
.topContent {
  position: relative;
  display: flex;
  .topBgContainer {
    background-image: url($top-bg-url);
    background-repeat: round;
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
  .innerContent {
    width: 100%;
    @extend %event-common-inner-style;
    display: flex;
  }
  .leftText,
  .rightImg {
    z-index: 3;
    position: relative;
  }
  .leftText {
    width: 60%;
    margin: 60px;
    h1 {
      font-size: 36px;
      margin-top: 60px;
    }
    p {
      margin-bottom: 32px;
    }
    a,
    i {
      color: $theme-color;
      position: relative;
    }
    a:after {
      content: '';
      width: 100%;
      height: 1px;
      bottom: -1px;
      left: 0;
      background: $theme-color;
      position: absolute;
    }
  }
  .rightImg {
    width: 40%;
    img {
      width: 100%;
    }
  }
}

.eventContainer {
  @extend %event-common-style;
}
.newBg {
  background: $new-event-bg-color;
}
.titleContainer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  span {
    @extend %event-title-style;
  }
  p {
    @extend %event-title-bottom-p-style;
  }
}
.innerContainer {
  @extend %event-common-inner-style;
  //热门
  .hotImgBox {
    width: 100%;
    height: 50vh;
    background: #d9d9d9;
    margin: auto;
    border-radius: 10px;
    overflow: hidden;
  }
  //新手
  .newLeft {
    width: 40%;
    position: relative;
  }
  .newLeft:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    //background: white;
    z-index: 6;
    //opacity: 0.02;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0),
      $new-event-bg-color
    );
  }
  .newRight {
    width: 60%;
    .imgList {
      height: 50vh;
      background: #ffffff;
      margin: auto;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 20px 20px rgba(0, 0, 0, 0.04);
    }
  }
  //  推广
  .promoteLeft {
    width: 50%;
    .promoteImg {
      border-radius: 10px;
      width: 80%;
      height: 40vh;
      background: #d9d9d9;
      margin: auto;
      overflow: hidden;
    }
  }
  .promoteRight {
    width: 50%;
    padding-left: 120px;
    .promoteBtn {
      box-sizing: content-box;
      border-radius: 10px;
      padding: 4px 30px;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      background: $theme-color;
      color: #ffffff;
      margin-bottom: 34px;
    }
    p {
      margin: 10px 0;
      font-size: 12px;
      color: #dfa9fa;
    }
  }
}
//
.swiper-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  //border: 1px solid;
}
.swiperArrowBtn {
  color: $theme-color;
  top: 100%;
  right: 50%;
  transform: rotate(90deg);
  z-index: 10;
}
.swiperArrowBtn:after {
  font-size: 30px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  //background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.leftSlide {
  flex-direction: column;
  align-items: flex-start;
  span {
    font-size: 14px;
    transition: all 0.6s;
    margin: 12px 0;
    position: relative;
  }
  span:after {
    content: '';
    position: absolute;
    width: 0;
    bottom: -2px;
    left: 0;
    height: 2px;
    background: $theme-color;
    transition: all 0.6s;
  }
  p {
    margin: 0;
    font-size: 12px;
  }
}
.swiper-slide-active {
  span {
    font-size: 18px;
    font-weight: bold;
  }
  span:after {
    width: 100%;
  }
}
</style>
