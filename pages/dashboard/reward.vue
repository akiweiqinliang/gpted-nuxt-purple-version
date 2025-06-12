<template>
  <Card id="reward" :padding="0">
    <Row class="top">
      <Col span="17" class="left">
        <Row class="planTitleWithDetailBtn">
          <span>GPTED全球招标客户自主推广计划</span>
          <span class="purpleHighlight underLineStyle">查看活动详情</span>
        </Row>
        <p>即刻推广，领取专属奖励</p>
        <Checkbox v-model="agreeProtocol">同意协议并签约</Checkbox>
        <Row>
          <Button type="primary" size="large">立即加入</Button>
        </Row>
      </Col>
      <Col span="7" class="right">
        <img src="~assets/image/dashboard/reward/moneyImg.png" alt="" />
      </Col>
    </Row>
    <Card class="bottom" :padding="0">
      <img src="~assets/image/dashboard/reward/dollarImg.png" alt="" />
      <span class="rightNowPushTitle">即刻推广，享专属奖励</span>
      <Row>
        <Col flex="2" class="rewardList">
          <Row class="rewardItem">
            <Icon type="ios-checkmark-circle" size="18" />
            <span
              >推荐新客下单即获<span class="purpleHighlight">奖励</span></span
            >
          </Row>
          <Row class="rewardItem">
            <Icon type="ios-checkmark-circle" size="18" />
            <span>返现比例达<span class="purpleHighlight">10%</span></span>
          </Row>
          <Row class="rewardItem">
            <Icon type="ios-checkmark-circle" size="18" />
            <span
              >首次推广额外奖励<span class="purpleHighlight">1000元</span></span
            >
          </Row>
        </Col>
        <Col flex="3" class="rewardRules">
          <p>参与条件：活动仅限实名信息认证用户</p>
          <p>
            现金奖励：直接发放到信息认证绑定的银行卡中，请务必绑正确的银行卡
            信息以确保奖励正常发放
          </p>
        </Col>
      </Row>
    </Card>
  </Card>
</template>

<script>
export default {
  name: 'RewardPage',
  layout: 'GatherLayout',
  data() {
    return {
      agreeProtocol: false,
    };
  },
};
</script>

<style scoped lang="scss">
@import 'assets/css/globalColor.scss';
#reward {
  padding: 42px 40px 76px;
}
.top {
  margin-bottom: 24px;
  .left {
    padding: 34px 0 0 66px;
    .planTitleWithDetailBtn {
      align-items: baseline;
      span:nth-child(1) {
        font-size: 20px;
        font-weight: 600;
        margin-right: 20px;
      }
      span:nth-child(2) {
        text-decoration: underline;
      }
    }
    p {
      margin: 24px 0;
    }
    button {
      margin-top: 32px;
      width: 162px;
    }
  }
  .right {
    padding-right: 82px;
    img {
      width: 100%;
    }
  }
}
.bottom {
  position: relative;
  padding: 36px 118px 36px 68px;
  img {
    width: 14%;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .rightNowPushTitle {
    font-size: 18px;
    font-weight: 400;
  }
  .rewardList {
    .rewardItem {
      margin: 36px 0;
      align-items: center;
      i {
        color: $home-theme-color;
        margin-right: 22px;
      }
    }
  }
  .rewardRules {
    margin-top: 36px;
    p {
      margin-bottom: 36px;
      font-size: 16px;
    }
  }
}
.purpleHighlight {
  color: #7b62de;
}
.underLineStyle {
  text-decoration: underline;
}
</style>
