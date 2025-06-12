<template>
  <div>
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
      <!--        unset picture-->
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
              <Radio label="周一至周五"></Radio>
              <Radio label="法定工作日"></Radio>
            </RadioGroup>
          </Col>
          <Col flex="1">
            <span>推送时段</span>
            <Row class="selects" type="flex" justify="space-between">
              <Select
                v-model="settings.everydayTimes"
                class="everydayTimesSelector"
              >
                <Option
                  v-for="item in settings.everydayTimesOption"
                  :key="`everydayTimesOption-${item.value}`"
                  :value="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
              <TimePicker
                :disabled="settings.everydayTimes === 0"
                :value="settings.selectTime1"
                class="timePicker"
                format="HH点mm分"
                placeholder="选择时间"
              ></TimePicker>
              <TimePicker
                :disabled="settings.everydayTimes !== 2"
                :value="settings.selectTime2"
                class="timePicker"
                format="HH点mm分"
                placeholder="选择时间"
              ></TimePicker>
            </Row>
          </Col>
        </Row>
        <div class="subscribeWay">
          <span>订阅推送方式</span>
          <CheckboxGroup v-model="settings.ways" class="checks">
            <div class="checkBox">
              <Checkbox label="邮箱推送"></Checkbox>
              <p>立即绑定</p>
            </div>
            <div class="checkBox">
              <Checkbox label="APP推送"></Checkbox>
              <p>立即下载</p>
            </div>
            <div class="checkBox">
              <Checkbox label="微信公众号推送"></Checkbox>
              <p>立即绑定</p>
            </div>
          </CheckboxGroup>
        </div>
        <div class="subscribeRange">
          <span>订阅范围</span>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'PushSetting',
  layout: 'GatherLayout',
  data() {
    return {
      // 设置
      settingSwitch: true,
      // settings
      settings: {
        subscribeTime: '每日',
        everydayTimes: 2,
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
  methods: {
    setSwitch(status) {
      this.settingSwitch = status;
    },
  },
};
</script>

<style scoped lang="scss">
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
      font-size: 15px;
    }
  }
  .subscribeTime {
    .radios {
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
    .checks {
      width: 100%;
      .checkBox {
        width: 25%;
        display: flex;
        justify-content: space-between;
        p {
          display: inline-block;
          padding-left: 50px;
          //color: $decorate-purple-color;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
