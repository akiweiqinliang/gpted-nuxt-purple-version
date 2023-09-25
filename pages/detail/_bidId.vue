<template>
  <div class="bidDetailPage">
    <div :class="currentObj.type === 0 ? 'greenTop' : 'redTop'">
      <div class="page-margin">
        <Row>
          <Col span="24">
            <div class="topBidsBrief">
              <div
                :class="currentObj.type === 0 ? 'green' : 'red'"
                class="title"
                style="display: inline-block"
              >
                {{ currentObj.title }}

                <div class="tags">
                  <Tag v-if="currentObj.type === 1" color="#f66368">中标</Tag>
                  <Tag v-if="currentObj.type === 0" color="#248f6c">招标</Tag>
                </div>
              </div>
              <!--              <div class="tags">-->
              <!--                <Tag v-if="currentObj.type === 1" color="#f66368">中标</Tag>-->
              <!--                <Tag v-if="currentObj.type === 0" color="#248f6c">招标</Tag>-->
              <!--              </div>-->
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
                  type="default"
                  class="analysisPolicyBtn active"
                  >国际公共采购政策分析<Icon type="ios-arrow-forward"
                /></Button>
              </div>
              <div>
                <span class="blackIcon"
                  ><Icon type="ios-redo-outline" size="18" />转发</span
                >
                <span class="blackIcon"
                  ><Icon type="ios-star-outline" size="18" />收藏</span
                >
                <span class="blackIcon"
                  ><Icon type="ios-locate-outline" size="18" />项目跟踪</span
                >
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>

    <Row
      type="flex"
      justify="center"
      :class="currentObj.type === 1 ? 'floatBtnsRowRed' : 'floatBtnsRowGreen'"
    >
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
      <Row type="flex" align="bottom">
        <Col flex="1"></Col>
        <Col span="3" class="briefCardStyle">
          <span v-if="currentBidProgress.state === 0"
            >距离招标开始还有
            <p class="distanceEndBidDayStyle">
              {{ currentBidProgress.distanceStart }}天
            </p></span
          >
          <span v-if="currentBidProgress.state === 1"
            >距截止剩余
            <p class="distanceEndBidDayStyle">
              {{ currentBidProgress.distanceEnd }}天
            </p></span
          >
          <Progress
            v-if="currentBidProgress.state === 1"
            :status="currentBidProgress.state === 1 ? 'normal' : 'normal'"
            stroke-color="#def2e3"
            :percent="currentBidProgress.percent"
            hide-info
            :stroke-width="18"
          >
          </Progress>
        </Col>
        <Col span="3">
          <Button
            v-if="currentBidProgress.state === 2"
            ghost
            class="bidStateBtn red"
            >查看相似资讯</Button
          >
          <Button
            v-if="currentBidProgress.state !== 2"
            ghost
            class="bidStateBtn green"
            ><Icon
              type="ios-alarm-outline"
              size="20"
              style="font-weight: 600"
            />开启提醒</Button
          >
        </Col>
      </Row>

      <Row type="flex" justify="center">
        <Col span="24" class="blueText">公告摘要</Col>
      </Row>

      <Row>
        <Col class="briefDetail" span="24">
          <div>
            <ul class="briefCardList">
              <li class="briefCardItem" style="border-top-left-radius: 16px">
                <Row type="flex" align="middle">
                  <Col span="2">
                    <img src="~assets/logos/regionIcon.png" />
                  </Col>
                  <Col flex="1" class="summary-card-margin-left">
                    <h6>所属区域：</h6>
                    <p>中亚东北部</p>
                  </Col>
                </Row>
              </li>
              <li class="briefCardItem">
                <Row type="flex" align="middle">
                  <Col span="2">
                    <img src="~assets/logos/countryIcon.png" />
                  </Col>
                  <Col flex="1" class="summary-card-margin-left">
                    <h6>所属国家：</h6>
                    <p>吉尔吉斯斯坦</p>
                  </Col>
                </Row>
              </li>
              <li
                v-if="currentObj.type === 0"
                class="briefCardItem"
                style="border-top-right-radius: 16px"
              >
                <Row type="flex" align="middle">
                  <Col span="2">
                    <img src="~assets/logos/countryIcon.png" />
                  </Col>
                  <Col flex="1" class="summary-card-margin-left">
                    <h6>招标金额：</h6>
                    <p>¥ 300,000.00</p>
                  </Col>
                </Row>
              </li>
              <li
                v-else
                class="briefCardItem"
                style="border-top-right-radius: 16px"
              >
                <Row type="flex" align="middle">
                  <Col span="2">
                    <img src="~assets/logos/countryIcon.png" />
                  </Col>
                  <Col flex="1" class="summary-card-margin-left">
                    <h6>中标金额：</h6>
                    <p>¥ 300,000.00</p>
                  </Col>
                </Row>
              </li>
              <li class="briefCardItem">
                <Row type="flex" align="middle">
                  <Col span="2">
                    <img src="~assets/logos/publishIcon.png" />
                  </Col>
                  <Col flex="1" class="summary-card-margin-left">
                    <h6>采购单位：</h6>
                    <p>亚洲开发银行</p>
                  </Col>
                </Row>
              </li>
              <li v-if="currentObj.type === 0" class="briefCardItem">
                <Row type="flex" align="middle">
                  <Col span="2">
                    <img src="~assets/logos/timeIcon.png" />
                  </Col>
                  <Col flex="1" class="summary-card-margin-left">
                    <h6>开始时间：</h6>
                    <p>当地时间{{ formatTime(currentObj.endDate) }}</p>
                  </Col>
                </Row>
              </li>
              <li v-else class="briefCardItem">
                <Row type="flex" align="middle">
                  <Col span="2">
                    <img src="~assets/logos/timeIcon.png" />
                  </Col>
                  <Col flex="1" class="summary-card-margin-left">
                    <h6>公示时间：</h6>
                    <p>当地时间{{ formatTime(currentObj.endDate) }}</p>
                  </Col>
                </Row>
              </li>
              <li v-if="currentObj.type === 0" class="briefCardItem">
                <Row type="flex" align="middle">
                  <Col span="2">
                    <img src="~assets/logos/connectIcon.png" />
                  </Col>
                  <Col flex="1" class="summary-card-margin-left">
                    <h6>联系方式：</h6>
                    <p>(632)5304-3242</p>
                  </Col>
                </Row>
              </li>
              <li
                class="briefCardItem"
                :style="
                  currentObj.type === 0 ? 'border-bottom-left-radius: 16px' : ''
                "
              >
                <Row type="flex" align="middle">
                  <Col span="2">
                    <img src="~assets/logos/timeIcon.png" />
                  </Col>
                  <Col flex="1" class="summary-card-margin-left">
                    <h6>行业分类：</h6>
                    <p>道路工程</p>
                  </Col>
                </Row>
              </li>
              <li
                v-if="currentObj.type === 1"
                class="briefCardItem"
                style="
                  border-bottom-right-radius: 16px;
                  border-bottom-left-radius: 16px;
                  width: 100%;
                "
              >
                <Row type="flex" align="middle">
                  <Col>
                    <img
                      src="~assets/logos/buyIcon.png"
                      class="gotBidCompanyImgSize"
                    />
                  </Col>
                  <Col class="summary-card-margin-left">
                    <h6>中标公司：</h6>
                    <p>邀请招标IFB</p>
                  </Col>
                </Row>
              </li>
              <li v-if="currentObj.type === 0" class="briefCardItem">
                <Row type="flex" align="middle">
                  <Col span="2">
                    <img src="~assets/logos/timeIcon.png" />
                  </Col>
                  <Col flex="1" class="summary-card-margin-left">
                    <h6>截止时间：</h6>
                    <p>当地时间{{ formatTime(currentObj.endDate) }}</p>
                  </Col>
                </Row>
              </li>
              <li
                v-if="currentObj.type === 0"
                class="briefCardItem"
                style="border-bottom-right-radius: 16px"
              >
                <Row type="flex" align="middle">
                  <Col span="2">
                    <img src="~assets/logos/buyIcon.png" />
                  </Col>
                  <Col flex="1" class="summary-card-margin-left">
                    <h6>采购方式：</h6>
                    <p>邀请招标IFB</p>
                  </Col>
                </Row>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span="24" class="blueText">公告详情</Col>
        <div
          v-show="floatBtnActive === 0"
          :class="floatBtnActive === 0 ? 'fade-in' : 'fade-out'"
          class="fullWidth"
        >
          <Col span="24">
            <Row>
              <Col flex="1">
                <BidTable :lang="'zh'" :bid-detail-table="bidDetailTable.zh" />
                招标公告。。。。
                {{ currentObj.content }}
              </Col>
              <Divider type="vertical" class="dividerStyle" />
              <Col flex="1">
                <BidTable :lang="'en'" :bid-detail-table="bidDetailTable.en" />
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
          class="fullWidth"
        >
          <BidTable :lang="'en'" :bid-detail-table="bidDetailTable.en" />
          <Row>Invitation for Bids</Row>
          <Row> abc。。。 </Row>
        </div>
        <div
          v-show="floatBtnActive === 2"
          :class="floatBtnActive === 2 ? 'fade-in' : 'fade-out'"
          class="fullWidth"
        >
          <Row>招标公告</Row>
          <BidTable :lang="'zh'" :bid-detail-table="bidDetailTable.zh" />
          <Row> 中文招标公告。。。。 </Row>
        </div>
        <div
          v-show="floatBtnActive === 3"
          :class="floatBtnActive === 3 ? 'fade-in' : 'fade-out'"
          class="fullWidth"
        >
          <Row>附件</Row>
          <Row> 附件内容。。。。 </Row>
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
  // layout: 'CommonLayout',
  // props: {
  //   // eslint-disable-next-line vue/require-default-prop
  //   bidId: {
  //     type: Number,
  //     required: true,
  //   }
  // },
  asyncData({ $axios, params }) {
    console.log(params);
    try {
      return $axios.post(`/detail/${params.bidId}`).then((res) => {
        return { currentObj1: res.data };
      });
    } catch (e) {
      console.log(e);
    }
  },
  data() {
    return {
      floatBtnActive: 0,
      currentObj1: '',
      bidDetailTable: {
        zh: {
          date: '2023年6月30日',
          loan: 'ABD贷款第3631-PHI号 改善棉老公路部内增长走廊项目',
          contract: 'ABD贷款第3631-PHI号 改善棉老公路部内增长走廊项目',
          deadline: '2023年8月16日上午10点（菲律宾时间）',
        },
        en: {
          date: '30 June 2023',
          loan: 'ABD Loan No.3631-PHI improving Growth Corridors in Mindanao Road Sector Project(IGCMRSP)',
          contract:
            'ABD Loan No.3631-PHI improving Growth Corridors in Mindanao Road Sector Project(IGCMRSP)',
          deadline: '16 August 2023 at 10:00am (philippine time)',
        },
      },
      columns1: [
        {
          title: '标题',
          key: 'title',
          className: 'tableTitleStyle',
        },
        {
          title: '详情',
          key: 'detail',
          className: 'tableDetailStyle',
        },
      ],
      data1: [
        {
          title: '日期',
          detail: '2023年6月30日',
        },
        {
          title: '贷款编号和标题',
          detail: 'ABD贷款第3631-PHI号 改善棉老公路部内增长走廊项目',
        },
        {
          title: '合同编号和标题',
          detail: '合同编号22GZ00036 ICD-3人力资源项目——人力资源信息系统',
        },
        {
          title: '投标截止时间',
          detail: '2023年8月16日上午10点（菲律宾时间）',
        },
      ],
    };
  },
  computed: {
    currentObj() {
      // console.log(this.$props)
      const bidId = +this.$route.params.bidId;

      const bidItem = cardData.filter((el) => el.id === bidId)[0];
      console.log(bidItem);
      return bidItem;
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

      return {
        percent,
        distanceStart,
        distanceEnd,
        stateMsg,
        state,
      };
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

<style scoped lang="scss">
@import 'assets/css/globalColor.scss';
.fullWidth {
  width: 100%;
}
.summary-card-margin-left {
  margin-left: 16px;
}
@media screen and (max-width: 1400px) {
  .gotBidCompanyImgSize {
    width: 30px;
  }
  .briefCardItem img {
    width: 30px;
  }
}
@media (min-width: 1400px) and (max-width: 1600px) {
  .gotBidCompanyImgSize {
    width: 40px;
  }
  .briefCardItem img {
    width: 40px;
  }
}
@media screen and (min-width: 1600px) {
  .gotBidCompanyImgSize {
    width: 48px;
  }
  .briefCardItem img {
    width: 48px;
  }
}

%bgImg {
  background-image: url('@/assets/detailPage/green-detail-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bidTableStyle {
  border-collapse: collapse;
  width: 100%;
  td {
    border: 0.8px solid;
    padding: 16px;
    min-width: 120px;
  }
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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 3;
}
.compareFloatBtn {
  margin: 0px;
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
  display: inline-flex;
  transform: translateY(-2px);
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
  width: calc(100% / 3 - 4px);
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
  /*margin-right: 4px;*/
  /*margin-left: 0px;*/
}
.floatBtnsRowRed,
.floatBtnsRowGreen {
  position: relative;
}
.floatBtnsRowRed::after,
.floatBtnsRowGreen::after {
  content: '';
  position: absolute;
  background: #fdf1f2;
  height: 50%;
  width: 100%;
  z-index: 2;
}
.floatBtnsRowGreen::after {
  background: #ebf9f7;
}
.page-margin {
  margin: 0 100px;
}
.briefCardItem img {
  //width: 100%;
  height: auto;
  display: block;
}
.briefCardItem h6 {
  color: #657180;
  font-size: 13px;
  display: inline-block;
  font-weight: 400;
  margin-right: 8px;
}
.briefCardItem p {
  margin-top: 4px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
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
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  position: relative;
  border: 1px solid;
  //color: $bid-green-text-color;
  border-radius: 8px;
  //left: 50%;
  //transform: translateX(-50%);
}
.briefDetail {
  position: relative;
}
.briefDetail::after {
  content: '';
  position: absolute;
  top: -80px;
  left: -100px;
  right: -100px;
  bottom: -52px;
  z-index: -1;
  @extend %bgImg;
}
.briefCardStyle {
  margin-right: 20px;
}
.dividerStyle {
  height: auto;
}
.blueText {
  color: #498bef;
  margin: 0 0 16px;
}
.blackIcon {
  cursor: pointer;
  margin-left: 24px;
}
.green {
  border-color: $bid-green-text-color;
  color: $bid-green-text-color;
}
.red {
  border-color: $bid-red-text-color;
  color: $bid-red-text-color;
}
.learnPolicy {
  font-size: 12px;
}
.analysisPolicyBtn {
  font-size: 12px;
  background: transparent;
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
