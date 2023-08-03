<template>
  <div class="bgColor">
    <div :class="currentObj.type === 0 ? 'greenTop' : 'redTop'">
      <div class="page-margin">
        <Row>
          <Col span="24">
            <div class="topBidsBrief">
              <span
                :class="currentObj.type === 0 ? 'green' : 'red'"
                class="title"
                >{{ currentObj.title }}</span
              >
              <div class="tags">
                <Tag v-if="currentObj.type === 1" color="#f66368">中标</Tag>
                <Tag v-if="currentObj.type === 0" color="#248f6c">招标</Tag>
              </div>
            </div>
            <div
              class="titleTranslation"
              :class="currentObj.type === 0 ? 'green' : 'red'"
            >
              Improving Growth balabalabalabala Improving Growth
              balabalabalabala
            </div>
            <div class="operateOptions">
              <div>
                <span class="learnPolicy"
                  >不了解国际公共采购政策？为您提供相关政策资料！</span
                >
                <Button
                  shape="circle"
                  size="small"
                  class="analysisPolicyBtn active"
                  >国际公共采购政策分析<Icon type="ios-arrow-forward"
                /></Button>
              </div>
              <div>
                <span class="blueIcon"
                  ><Icon type="ios-redo" size="18" />转发</span
                >
                <span class="blueIcon"
                  ><Icon type="ios-star-outline" size="18" />收藏</span
                >
                <span class="blueIcon"
                  ><Icon type="ios-locate-outline" size="18" />项目跟踪</span
                >
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>

    <Row type="flex" justify="center" class="floatBtnsRow">
      <Affix :offset-top="50">
        <div class="float">
          <Button
            ref="showCompareBtn"
            shape="circle"
            class="compareFloatBtn"
            :type="floatBtnActive === 0 ? `primary` : `text`"
            @click="floatBtnActive = 0"
            >原译对照</Button
          >
          <Button
            ref="showOriginBtn"
            shape="circle"
            class="compareFloatBtn"
            :type="floatBtnActive === 1 ? `primary` : `text`"
            @click="showOriginalArticle"
            >公告原文</Button
          >
          <Button
            ref="showChineseBtn"
            shape="circle"
            class="compareFloatBtn"
            :type="floatBtnActive === 2 ? `primary` : `text`"
            @click="showChineseArticle"
            >公告中文</Button
          >
          <Button
            shape="circle"
            class="compareFloatBtn"
            :type="floatBtnActive === 3 ? `primary` : `text`"
            @click="showAttachedArticle"
            >公告附件</Button
          >
        </div>
      </Affix>
    </Row>

    <div class="page-margin">
      <Row type="flex" justify="center">
        <Col span="24" class="blueText">公告摘要</Col>
      </Row>

      <Row>
        <Col class="briefDetail" span="19">
          <div>
            <ul class="briefCardList">
              <li class="briefCardItem">
                <Row type="flex" align="middle">
                  <Col span="2">
                    <img src="~assets/logos/regionIcon.png" />
                  </Col>
                  <Col flex="1" class="ivu-col-offset-1">
                    <h6>区域</h6>
                    <p>非洲中东部</p>
                  </Col>
                </Row>
              </li>
              <li class="briefCardItem">
                <Row type="flex" align="middle">
                  <Col span="2">
                    <img src="~assets/logos/countryIcon.png" />
                  </Col>
                  <Col flex="1" class="ivu-col-offset-1">
                    <h6>国家</h6>
                    <p>非洲中东部</p>
                  </Col>
                </Row>
              </li>
              <li class="briefCardItem">
                <Row type="flex" align="middle">
                  <Col span="2">
                    <img src="~assets/logos/publishIcon.png" />
                  </Col>
                  <Col flex="1" class="ivu-col-offset-1">
                    <h6>采购单位</h6>
                    <p>非洲中东部</p>
                  </Col>
                </Row>
              </li>
              <li class="briefCardItem">
                <Row type="flex" align="middle">
                  <Col span="2">
                    <img src="~assets/logos/timeIcon.png" />
                  </Col>
                  <Col flex="1" class="ivu-col-offset-1">
                    <h6>截止时间</h6>
                    <p>{{ formatTime(currentObj.endDate) }}</p>
                  </Col>
                </Row>
              </li>
              <li class="briefCardItem">
                <Row type="flex" align="middle">
                  <Col span="2">
                    <img src="~assets/logos/connectIcon.png" />
                  </Col>
                  <Col flex="1" class="ivu-col-offset-1">
                    <h6>联系方式</h6>
                    <p>(632)5304-3242</p>
                  </Col>
                </Row>
              </li>
              <li class="briefCardItem">
                <Row type="flex" align="middle">
                  <Col span="2">
                    <img src="~assets/logos/buyIcon.png" />
                  </Col>
                  <Col flex="1" class="ivu-col-offset-1">
                    <h6>采购方式</h6>
                    <p>邀请招标IFB</p>
                  </Col>
                </Row>
              </li>
            </ul>
          </div>
        </Col>
        <Col class="briefState" flex="auto">
          <Card class="briefCardStyle">
            <h2
              :class="currentBidProgress.state === 2 ? 'bidStateMsgColor' : ''"
            >
              {{ currentBidProgress.stateMsg }}
            </h2>
            <span v-if="currentBidProgress.state === 0"
              >距离招标开始还有{{ currentBidProgress.distanceStart }}天</span
            >
            <span v-if="currentBidProgress.state === 1"
              >距截止剩余
              <p class="distanceEndBidDayStyle">
                {{ currentBidProgress.distanceEnd }}天
              </p></span
            >
            <!--            <span v-if="currentBidProgress.state === 2">距离结束招标已过去{{ -currentBidProgress.distanceEnd }}天</span>-->
            <Progress
              :status="currentBidProgress.state === 1 ? 'normal' : 'normal'"
              :stroke-color="
                currentBidProgress.state === 2 ? 'lightgray' : '#248f6c'
              "
              :percent="currentBidProgress.percent"
              hide-info
              :stroke-width="24"
            >
            </Progress>
            <span class="bidStartAndEndDate">
              <p>{{ formatTime(currentObj.startDate) }}</p>
              <p>{{ formatTime(currentObj.endDate) }}</p>
            </span>

            <Button
              v-if="currentBidProgress.state === 2"
              shape="circle"
              type="primary"
              class="bidStateBtn"
              >查看相似资讯</Button
            >
            <Button
              v-if="currentBidProgress.state !== 2"
              shape="circle"
              type="primary"
              class="bidStateBtn"
              ><Icon type="ios-alarm-outline" size="24" />开启提醒</Button
            >
          </Card>
        </Col>
      </Row>

      <Row>
        <Col span="24" class="blueText">公告详情</Col>
        <div
          v-show="floatBtnActive === 0"
          :class="floatBtnActive === 0 ? 'fade-in' : 'fade-out'"
        >
          <Col span="24">
            <Row>
              <Col flex="1">
                招标公告。。。。
                {{ currentObj.content }}
              </Col>
              <Divider type="vertical" class="dividerStyle" />
              <Col flex="1">
                Improving Growth balabalabalabala Improving Growth
                balabalabalabalaImproving Growth balabalabalabala Improving
                Growth balabalabalabalaImproving Growth balabalabalabala
                Improving Growth balabalabalabalaImproving Growth
                balabalabalabala Improving Growth balabalabalabalaImproving
                Growth balabalabalabala Improving Growth
                balabalabalabalaImproving Growth balabalabalabala Improving
                Growth balabalabalabalaImproving Growth balabalabalabala
                Improving Growth balabalabalabalaImproving Growth
                balabalabalabala Improving Growth balabalabalabalaImproving
                Growth balabalabalabala Improving Growth
                balabalabalabalaImproving Growth balabalabalabala Improving
                Growth balabalabalabalaImproving Growth balabalabalabala
                Improving Growth balabalabalabalaImproving Growth
                balabalabalabala Improving Growth balabalabalabala
              </Col>
            </Row>
          </Col>
        </div>
        <div
          v-show="floatBtnActive === 1"
          :class="floatBtnActive === 1 ? 'fade-in' : 'fade-out'"
        >
          <Col span="20">Invitation for Bids</Col>
          <Col span="20"> abc。。。 </Col>
        </div>
        <div
          v-show="floatBtnActive === 2"
          :class="floatBtnActive === 2 ? 'fade-in' : 'fade-out'"
        >
          <Col span="20">招标公告</Col>
          <Col span="20"> 中文招标公告。。。。 </Col>
        </div>
        <div
          v-show="floatBtnActive === 3"
          :class="floatBtnActive === 3 ? 'fade-in' : 'fade-out'"
        >
          <Col span="20">附件</Col>
          <Col span="20"> 附件内容。。。。 </Col>
        </div>
      </Row>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/formatTime';
import cardData from '@/enums/cardData';

export default {
  name: 'DetailPage',
  asyncData({ $axios, params }) {
    console.log(params);
    try {
      return $axios.post(`/detail/${params.bidId}`).then((res) => {
        return { currentObj1: res };
      });
    } catch (e) {
      console.log(e);
    }
  },
  data() {
    return {
      floatBtnActive: 0,
    };
  },
  computed: {
    currentObj() {
      const bidId = +this.$route.params.bidId;
      return cardData.filter((el) => el.id === bidId)[0];
      //   axios
    },
    currentBidProgress() {
      const start = this.currentObj.startDate;
      const end = this.currentObj.endDate;
      const now = new Date();

      let stateMsg = '';
      let state = 0;

      if (now - start < 0) {
        stateMsg = '未开始';
        state = 0;
      } else if (now - start >= 0 && end - now > 0) {
        stateMsg = '进行中';
        state = 1;
      } else {
        stateMsg = '已结束';
        state = 2;
      }

      let percent = ((now - start) / (end - start)) * 100;
      if (percent >= 100) {
        percent = 100;
      } else if (percent <= 0) {
        percent = 0;
      }

      const distanceStart = Math.floor((start - now) / (1000 * 60 * 60 * 24)); // 距离开始还有多少的天数
      const distanceEnd = Math.floor((end - now) / (1000 * 60 * 60 * 24)); // 距离结束还有多少的天数

      const progressObj = {
        percent,
        distanceStart,
        distanceEnd,
        stateMsg,
        state,
      };
      return progressObj;
    },
  },
  methods: {
    formatTime,
    showCompareArticle() {
      this.floatBtnActive = 0;
    },
    showOriginalArticle() {
      this.floatBtnActive = 1;
    },
    showChineseArticle() {
      this.floatBtnActive = 2;
    },
    showAttachedArticle() {
      this.floatBtnActive = 3;
    },
  },
};
</script>

<style scoped>
.bgColor {
  background: #f6fbfe;
}
.greenTop {
  background: #ebf9f7;
  padding: 32px 0 8px 0;
}
.redTop {
  background: #fdf1f2;
  padding: 32px 0 8px 0;
}
.float {
  width: fit-content;
  padding: 4px;
  border-radius: 32px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 3;
}
.compareFloatBtn {
  margin: 4px;
}
.topBidsBrief {
  padding: 16px 0 4px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.topBidsBrief .title {
  font-size: 20px;
  font-weight: bold;
}
.topBidsBrief .tags {
  margin-left: 8px;
}
.titleTranslation {
  margin-bottom: 16px;
}
.operateOptions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: center;
}
.operateOptions span {
  margin-right: 8px;
}
.briefCardList {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  /*margin-bottom: 36px;*/
}
.briefCardList li {
  margin-left: 4px;
  margin-bottom: 8px;
  width: calc(50% - 4px);
  border-radius: 4px;
  display: block;
  background: #fff;
  font-size: 14px;
  position: relative;
  transition: all 0.2s ease-in-out;
  border: 1px solid #e8eaec;
  padding: 8px 12px;
}
.briefCardList li:hover {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
  cursor: pointer;
}
.briefCardList li:nth-child(odd) {
  margin-right: 4px;
  margin-left: 0px;
}
.floatBtnsRow {
  position: relative;
}
.floatBtnsRow::after {
  content: '';
  position: absolute;
  background: #ebf9f7;
  height: 50%;
  width: 100%;
  z-index: 2;
}
.page-margin {
  margin: 0 100px;
}
.briefCardItem img {
  width: 100%;
  height: auto;
  display: block;
}
.briefCardItem h6 {
  color: #657180;
}
.briefCardItem p {
  margin-top: 4px;
  font-size: 16px;
  font-weight: bold;
}
.distanceEndBidDayStyle {
  display: inline-block;
  color: #248f6c;
  font-size: 24px;
  font-weight: bold;
  margin-left: 4px;
}
.bidStartAndEndDate {
  display: flex;
  justify-content: space-between;
  padding: 12px 0 16px 0;
}
.bidStartAndEndDate p {
  margin: 0;
  color: #657180;
  font-size: 8px;
}
.bidStateMsgColor {
  color: #9d9e9f;
}
.bidStateBtn {
  width: 80%;
  font-weight: 600;
  font-size: 18px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.briefDetail {
  margin-right: 20px;
}
.briefCardStyle {
  border-radius: 20px;
  /*height: 100%;*/
}
.dividerStyle {
  height: auto;
}
.blueText {
  color: #498bef;
  margin: 16px 0;
}
.blueIcon {
  color: #498bef;
  cursor: pointer;
  margin-left: 24px;
}
.green {
  color: #248f6c;
}
.red {
  color: #f66368;
}
.learnPolicy {
  font-size: 12px;
}
.analysisPolicyBtn {
  font-size: 12px;
}
.fade-in {
  opacity: 0; /* 初始状态为透明 */
  animation: fade-in 1s forwards; /* 使用动画效果，持续 3 秒，并在结束时保持状态 */
  margin-bottom: 60px;
}

@keyframes fade-in {
  from {
    opacity: 0; /* 动画起始状态为透明 */
  }
  to {
    opacity: 1; /* 动画结束状态为完全显示 */
  }
}
.fade-out {
  opacity: 1;
  animation: fade-out 1s forwards; /* 使用动画效果，持续 3 秒，并在结束时保持状态 */
}
@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
