<template>
  <div id="pushSetting">
    <Card class="settingSwitchCard" :dis-hover="true" :bordered="false">
      <Row :gutter="8">
        <Col class="openSubscribeText">开启推送</Col
        ><Col flex="1"
          ><i-switch
            v-model="settingSwitch"
            true-color="#7B62DE"
            size="small"
            @on-change="setSwitch"
        /></Col>
      </Row>
    </Card>
    <Card
      v-show="!settingSwitch"
      :class="!settingSwitch ? 'fade-in' : 'fade-out'"
      :bordered="false"
      class="card-border"
    >
      unset picture
      <!--        <SubscribeSettingCard />-->
    </Card>
    <Card
      v-show="settingSwitch"
      :class="settingSwitch ? 'fade-in' : 'fade-out'"
      class="card-border"
      :dis-hover="true"
      :bordered="false"
    >
      <div class="subscribeSettings">
        <Row class="subscribeTime" type="flex">
          <Col flex="1">
            <span>推送频率</span>
            <RadioGroup v-model="settings.subscribeTime" class="radios">
              <Radio label="每日"></Radio>
              <Radio label="法定工作日"></Radio>
            </RadioGroup>
          </Col>
          <Col flex="2">
            <span>推送时段</span>
            <Row class="selects" type="flex" justify="space-between">
              <Select v-model="dayTimes" class="everydayTimesSelector">
                <Option
                  v-for="item in settings.everydayTimesOption"
                  :key="`everydayTimesOption-${item.value}`"
                  :value="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
              <Select
                v-model="settings.selectTime1"
                :disabled="settings.everydayTimes === 0"
                class="timePicker"
                placeholder="请选择时间"
                :transfer="true"
              >
                <Option
                  v-for="item in pickTimeList"
                  :key="`day-push-times-${item.value}`"
                  :value="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
              <Select
                v-model="settings.selectTime2"
                :disabled="settings.everydayTimes !== 2"
                class="timePicker"
                placeholder="请选择时间"
                :transfer="true"
              >
                <Option
                  v-for="item in pickTimeList"
                  :key="`day-push-times-${item.value}`"
                  :value="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
              <!--            <TimePicker :disabled="settings.everydayTimes === 0" :value="settings.selectTime1" class="timePicker" format="HH点mm分" placeholder="选择时间"></TimePicker>-->
              <!--            <TimePicker :disabled="settings.everydayTimes !== 2" :value="settings.selectTime2" class="timePicker" format="HH点mm分" placeholder="选择时间"></TimePicker>-->
            </Row>
          </Col>
        </Row>
        <div class="subscribeWay">
          <Row type="flex" align="bottom" class="wayTitle">
            <span>推送方式</span>
            <p>（点击卡片选择您希望的推送方式）</p>
          </Row>
          <div class="checks">
            <div class="checkBox" :class="emailCheck ? 'boxChecked' : ''">
              <div class="roundTick" :class="emailCheck ? 'checked' : ''">
                <Icon type="md-checkmark" />
              </div>
              <div class="topSvg">
                <svg
                  v-if="!emailBound"
                  xmlns="http://www.w3.org/2000/svg"
                  width="138"
                  height="110"
                  viewBox="0 0 138 110"
                  fill="none"
                >
                  <path
                    d="M124.2 0H13.8C6.21 0 0.0689999 6.1875 0.0689999 13.75L0 96.25C0 103.812 6.21 110 13.8 110H124.2C131.79 110 138 103.812 138 96.25V13.75C138 6.1875 131.79 0 124.2 0ZM124.2 27.5L69 61.875L13.8 27.5V13.75L69 48.125L124.2 13.75V27.5Z"
                    fill="#E3E3E5"
                  />
                </svg>
                <svg
                  v-else
                  class="boundSvg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="138"
                  height="110"
                  viewBox="0 0 138 110"
                  fill="none"
                  @click="emailCheck = !emailCheck"
                >
                  <path
                    d="M124.2 0H13.8C6.21 0 0.0689999 6.1875 0.0689999 13.75L0 96.25C0 103.812 6.21 110 13.8 110H124.2C131.79 110 138 103.812 138 96.25V13.75C138 6.1875 131.79 0 124.2 0ZM124.2 27.5L69 61.875L13.8 27.5V13.75L69 48.125L124.2 13.75V27.5Z"
                    fill="#E3E3E5"
                  />
                </svg>
              </div>
              <p v-if="!emailBound" class="bindNow" @click="openEmailModal">
                立即绑定
              </p>
              <div v-if="emailBound" class="userInfoDetail">
                <p>{{ userInfo.email }}</p>
                <Icon type="ios-checkmark-circle-outline" />
                <span class="changeEmailText" @click="openEmailModal"
                  >修改</span
                >
              </div>
            </div>
            <div class="checkBox">
              <div class="topSvg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="146"
                  height="117"
                  viewBox="0 0 146 117"
                  fill="none"
                >
                  <path
                    d="M144.204 44.0472L134.156 36.9301L137.682 25.7133C138.163 24.2921 137.754 22.7615 136.611 21.6902C135.407 20.5641 133.65 20.1705 132.013 20.6516L104.358 28.7854C102.745 29.2555 101.566 30.4908 101.277 32.0105L99.099 43.271L68.5554 52.2575C66.3892 52.8916 65.2098 55.0016 65.9078 56.9695C66.6058 58.9373 68.9285 60.0087 71.0947 59.3746L101.638 50.3881L110.664 58.347C111.374 58.9701 112.253 59.3527 113.191 59.473C113.865 59.5605 114.563 59.5058 115.237 59.309L142.893 51.1752C144.529 50.6942 145.709 49.4369 145.949 47.8845C146.19 46.3977 145.528 44.9327 144.216 44.0363L144.204 44.0472ZM114.864 51.3392L107.391 44.7578L109.196 35.4433L127.513 30.0535L125.346 36.941C124.757 38.6684 125.431 40.5488 127.031 41.642L133.145 45.9713L114.864 51.3501V51.3392Z"
                    fill="#E3E3E5"
                  />
                  <path
                    d="M64.3787 117C55.3047 117 46.2547 115.229 37.7343 111.708C22.0894 105.236 10.1512 93.615 4.12187 78.9872C-1.90743 64.3595 -1.30571 48.4745 5.81873 34.2622C12.9432 20.0499 25.7479 9.21577 41.8501 3.73857C57.9523 -1.73863 75.4385 -1.192 91.0834 5.28006C92.2387 5.76109 93.394 6.27492 94.5132 6.81061C98.28 8.61448 99.7242 12.8563 97.7385 16.2891C95.7528 19.711 91.0834 21.0229 87.3166 19.219C86.4621 18.8036 85.5715 18.41 84.693 18.0493C72.8029 13.1296 59.5048 12.7142 47.2656 16.8685C35.0265 21.0338 25.3026 29.277 19.8871 40.0783C14.4716 50.8797 14.0142 62.9601 18.5874 74.0785C23.1725 85.1969 32.2466 94.0304 44.1367 98.95C56.0268 103.87 69.3249 104.285 81.5641 100.131C93.8032 95.9654 103.527 87.7223 108.943 76.921C110.712 73.4007 115.285 71.8373 119.16 73.4444C123.035 75.0515 124.756 79.2059 122.987 82.7261C115.862 96.9384 103.07 107.784 86.9676 113.261C79.6265 115.753 71.9846 117 64.3787 117Z"
                    fill="#E3E3E5"
                  />
                  <path
                    d="M64.5223 89.5592C58.4088 89.5592 52.223 88.0724 46.639 84.9676C30.5127 75.981 25.4462 56.7507 35.3386 42.1011C45.231 27.4515 66.3997 22.8489 82.526 31.8355C86.1604 33.858 87.3037 38.1763 85.0653 41.478C82.8268 44.7796 78.0852 45.8182 74.4508 43.7847C65.5814 38.8432 53.9319 41.3796 48.4923 49.4368C43.0527 57.4941 45.8447 68.0768 54.7142 73.0183C63.5836 77.9598 75.233 75.4235 80.6726 67.3662C81.6354 65.945 82.3575 64.4253 82.8268 62.8401C83.934 59.1012 88.1581 56.8819 92.286 57.8877C96.4018 58.8935 98.8448 62.7308 97.7376 66.4807C96.8832 69.3669 95.5714 72.1437 93.8384 74.7129C87.3759 84.2898 76.0875 89.5811 64.5343 89.5811L64.5223 89.5592Z"
                    fill="#E3E3E5"
                  />
                </svg>
              </div>
              <p class="bindNow">立即下载</p>
            </div>
            <div class="checkBox">
              <div class="topSvg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="156"
                  height="156"
                  viewBox="0 0 156 156"
                  fill="none"
                >
                  <path
                    d="M103.024 52.91C105.559 52.91 108.029 53.105 110.434 53.43C106.014 34.125 85.7336 19.5 61.3586 19.5C33.7336 19.5 11.3086 38.22 11.3086 61.295C11.3086 74.62 18.7836 86.385 30.4186 94.055L23.8536 107.25L41.7936 99.515C45.6286 100.88 49.6586 101.985 53.9486 102.57C53.3636 100.035 53.0386 97.435 53.0386 94.705C52.9736 71.695 75.3986 52.91 103.024 52.91ZM77.9986 38.285C78.818 38.285 79.6295 38.4464 80.3865 38.76C81.1436 39.0736 81.8315 39.5332 82.4109 40.1127C82.9904 40.6921 83.45 41.38 83.7636 42.1371C84.0772 42.8941 84.2386 43.7056 84.2386 44.525C84.2386 45.3444 84.0772 46.1559 83.7636 46.9129C83.45 47.67 82.9904 48.3579 82.4109 48.9373C81.8315 49.5168 81.1436 49.9764 80.3865 50.29C79.6295 50.6036 78.818 50.765 77.9986 50.765C76.3436 50.765 74.7565 50.1076 73.5863 48.9373C72.416 47.7671 71.7586 46.18 71.7586 44.525C71.7586 42.87 72.416 41.2829 73.5863 40.1127C74.7565 38.9424 76.3436 38.285 77.9986 38.285ZM44.6536 50.83C42.9986 50.83 41.4115 50.1726 40.2412 49.0023C39.071 47.8321 38.4136 46.245 38.4136 44.59C38.4136 42.935 39.071 41.3479 40.2412 40.1777C41.4115 39.0074 42.9986 38.35 44.6536 38.35C46.3085 38.35 47.8957 39.0074 49.0659 40.1777C50.2362 41.3479 50.8936 42.935 50.8936 44.59C50.8936 46.245 50.2362 47.8321 49.0659 49.0023C47.8957 50.1726 46.3085 50.83 44.6536 50.83Z"
                    fill="#E3E3E5"
                  />
                  <path
                    d="M144.689 94.7049C144.689 76.2449 126.034 61.2949 103.024 61.2949C80.0144 61.2949 61.3594 76.2449 61.3594 94.7049C61.3594 113.165 80.0144 128.115 103.024 128.115C106.794 128.115 110.434 127.595 113.879 126.815L136.369 136.5L128.569 120.9C138.319 114.79 144.689 105.43 144.689 94.7049ZM90.4794 92.6249C89.2452 92.6249 88.0388 92.259 87.0126 91.5733C85.9865 90.8876 85.1867 89.9131 84.7144 88.7729C84.2421 87.6327 84.1185 86.378 84.3593 85.1676C84.6 83.9571 85.1944 82.8453 86.067 81.9726C86.9397 81.0999 88.0516 80.5056 89.262 80.2648C90.4725 80.024 91.7271 80.1476 92.8673 80.6199C94.0075 81.0922 94.9821 81.892 95.6678 82.9182C96.3534 83.9443 96.7194 85.1508 96.7194 86.3849C96.7844 89.8299 93.9244 92.6249 90.4794 92.6249ZM115.504 92.6249C113.849 92.6249 112.262 91.9675 111.092 90.7973C109.922 89.627 109.264 88.0399 109.264 86.3849C109.264 84.73 109.922 83.1428 111.092 81.9726C112.262 80.8023 113.849 80.1449 115.504 80.1449C117.159 80.1449 118.746 80.8023 119.917 81.9726C121.087 83.1428 121.744 84.73 121.744 86.3849C121.744 88.0399 121.087 89.627 119.917 90.7973C118.746 91.9675 117.159 92.6249 115.504 92.6249Z"
                    fill="#E3E3E5"
                  />
                </svg>
              </div>
              <p class="bindNow">立即绑定</p>
            </div>
          </div>
        </div>
      </div>
    </Card>

    <Modal
      id="emailModal"
      v-model="openModal"
      width="460"
      :mask-closable="false"
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <div slot="header" class="modalHeader">
        <p>填写邮箱，订阅的相关动态及时推送</p>
        <p>我们将把验证码发送到您的邮箱，请注意查收！</p>
      </div>
      <Input
        ref="emailAddress"
        v-model.trim="emailAddress"
        :autofocus="true"
        placeholder="请输入邮箱账号"
      />
      <Row type="flex" align="bottom" justify="space-between">
        <Input
          v-model.trim="confirmCode"
          placeholder="请输入4位数字验证码"
          class="codeInput"
        />
        <Button
          v-if="!isCountingDown"
          :disabled="emailAddress === ''"
          type="text"
          class="sendCode"
          @click="startCountdown"
          >获取验证码</Button
        >
        <Button
          v-if="isCountingDown"
          :disabled="true"
          type="text"
          class="sendCode"
          >{{ countdown }}s后重发</Button
        >
      </Row>
      <div slot="footer" class="modalFooter">
        <Button @click="cancel">取消</Button>
        <Button type="primary" @click="ok">确认</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'PushSetting',
  layout: 'GatherLayout',
  data() {
    return {
      // 邮箱绑定
      countdown: 5, // 初始倒计时时间
      isCountingDown: false, // 是否正在倒计时
      emailAddress: '',
      confirmCode: '',
      emailBound: false, // 邮箱绑定状态
      openModal: false, // 邮箱Modal状态

      emailCheck: false, // 勾选邮箱
      // 绑定成功
      userInfo: {
        email: '',
      },

      // 设置
      settingSwitch: true,
      // settings
      pickTimeList: [
        {
          value: 6,
          label: '06:00',
        },
        {
          value: 6.3,
          label: '06:30',
        },
        {
          value: 7,
          label: '07:00',
        },
        {
          value: 7.3,
          label: '07:30',
        },
        {
          value: 8,
          label: '08:00',
        },
        {
          value: 8.3,
          label: '08:30',
        },
        {
          value: 9,
          label: '09:00',
        },
        {
          value: 10,
          label: '10:00',
        },
        {
          value: 11,
          label: '11:00',
        },
        {
          value: 12,
          label: '12:00',
        },
      ],
      dayTimes: 1,
      settings: {
        subscribeTime: '每日',
        everydayTimes: 1,
        everydayTimesOption: [
          {
            value: 1,
            label: '每日一次',
          },
          {
            value: 2,
            label: '每日两次',
          },
          {
            value: 0,
            label: '实时',
          },
        ],
        selectTime1: '',
        selectTime2: '',
        ways: [],
      },
    };
  },
  watch: {
    dayTimes(val) {
      this.settings.everydayTimes = val;
      if (val === 0) {
        this.settings.selectTime1 = '';
        this.settings.selectTime2 = '';
      }
    },
  },
  methods: {
    setSwitch(status) {
      this.settingSwitch = status;
    },
    openEmailModal() {
      this.openModal = true;
      this.$nextTick(function () {
        this.$refs.emailAddress.focus();
      });
    },
    ok() {
      if (this.emailAddress === '' || this.confirmCode === '') {
        this.$Message.info('验证信息不能为空');
        return;
      }
      this.$Message.info('Clicked ok');
      //   confirm ok
      this.userInfo.email = this.emailAddress;
      this.openModal = false;
      this.emailAddress = '';
      this.confirmCode = '';
      this.emailBound = true;

      this.emailCheck = true;
    },
    cancel() {
      clearInterval(this.timer);
      this.$Message.info('Clicked cancel');
      this.emailAddress = '';
      this.confirmCode = '';
      this.openModal = false;

      this.countdown = 5;
      this.isCountingDown = false;
    },
    startCountdown() {
      this.$Message.info('验证码已发送至邮箱！');
      this.isCountingDown = true;

      this.timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(this.timer);
          this.countdown = 5;
          this.isCountingDown = false;
        }
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
@import 'assets/css/globalColor.scss';
#pushSetting {
  .settingSwitchCard {
    margin-bottom: 20px;
  }
}
.subscribeSettings {
  .subscribeTime,
  .subscribeWay,
  .subscribeRange {
    span,
    .radios,
    .selects,
    .checks,
    .checkBox {
      margin-bottom: 24px;
    }
    span {
      display: inline-block;
      width: 100%;
      font-weight: 600;
      font-size: 16px;
    }
  }
  .subscribeTime {
    .radios {
      display: flex;
      justify-content: space-between;
      width: 100%;
      label {
        margin-right: 100px;
        height: 30px;
        line-height: 30px;
      }
    }
    .selects {
      .everydayTimesSelector,
      .timePicker {
        width: 30%;
      }
    }
  }
  .subscribeWay {
    .wayTitle {
      margin-bottom: 24px;
      span {
        display: contents;
      }
      p {
        color: #afafaf;
        font-size: 12px;
        font-weight: 400;
      }
    }
    .checks {
      width: 100%;
      position: relative;
      display: inline-flex;
      justify-content: space-between;
      .checkBox {
        aspect-ratio: 1;
        width: 30%;
        position: relative;
        display: flex;
        //justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #f0eef64d;
        border-radius: 10px;
        overflow: hidden;
        transition: all 0.2s ease;
        svg {
          width: 150px;
          height: 150px;
        }
        p {
          display: inline-block;
          color: $home-theme-color;
          font-weight: 600;
          font-size: 18px;
          margin-top: 20px;
        }
        .topSvg {
          height: 66%;
          display: flex;
          align-items: flex-end;
        }
        .bindNow {
          cursor: pointer;
        }
        .userInfoDetail {
          text-align: center;
          i {
            font-size: 18px;
            color: #efc18b;
            margin-left: 10px;
          }
          .changeEmailText {
            color: #7d7d7d;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
          }
        }
        .roundTick {
          border-color: transparent;
          cursor: pointer;
          position: absolute;
          right: -110px;
          width: 110px;
          top: -110px;
          transition: all 0.2s ease;
          height: 110px;
          font-size: 28px;
          border-radius: 50%;
          //background: $home-theme-color;
          background: #a998ec;
          i {
            top: 64px;
            left: 18px;
            color: $white;
            position: absolute;
          }
        }
        .checked {
          right: -55px;
          top: -55px;
        }
      }
      .boundSvg {
        cursor: pointer;
      }
      .boxChecked {
        svg path {
          //fill: $home-theme-color;
          transition: all 0.3s;
          fill: #a998ec;
        }
      }
    }
  }
}
</style>
<style lang="scss">
@import 'assets/css/globalColor.scss';
#emailModal {
  .ivu-modal-header,
  .ivu-modal-footer {
    border: 0;
  }
  .ivu-modal-content {
    padding: 20px;
  }
  .ivu-modal-header {
    text-align: center;
    p:nth-child(1) {
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 8px;
    }
    p:nth-child(2) {
      color: #afafaf;
      font-size: 12px;
      font-weight: 400;
    }
  }
  .ivu-modal-footer {
    button {
      width: 50%;
      height: 40px;
    }
  }
  .codeInput {
    width: 280px;
    margin-top: 16px;
  }
  .sendCode {
    color: $home-theme-color;
    //text-decoration: underline;
    //cursor: pointer;
  }
  .modalFooter {
    display: flex;
  }
}
</style>
