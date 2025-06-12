<template>
  <div>
    <BackTop></BackTop>
    <div class="subscribeDataPage">
      <Row class="countCards" type="flex" justify="space-between">
        <Card class="card1" :bordered="false" :dis-hover="true">
          <Row type="flex" align="middle" justify="center">
            <div>
              <img src="~/assets/logos/regionIcon.png" alt="今日更新" />
            </div>
            <div>
              <p>25</p>
              <p>今日更新</p>
            </div>
          </Row>
        </Card>
        <Card class="card2" :bordered="false" :dis-hover="true">
          <Row type="flex" align="middle" justify="center">
            <div>
              <img src="~/assets/logos/regionIcon.png" />
            </div>
            <div>
              <p>25</p>
              <p>覆盖国家</p>
            </div>
          </Row>
        </Card>
        <Card class="card3" :bordered="false" :dis-hover="true">
          <Row type="flex" align="middle" justify="center">
            <div>
              <img src="~assets/logos/regionIcon.png" alt="覆盖组织" />
            </div>
            <div>
              <p>25</p>
              <p>覆盖组织</p>
            </div>
          </Row>
        </Card>
        <Card class="card4" :bordered="false" :dis-hover="true">
          <Row type="flex" align="middle" justify="center">
            <div>
              <img src="~assets/logos/regionIcon.png" alt="今日更新" />
            </div>
            <div>
              <p>25</p>
              <p>今日更新</p>
            </div>
          </Row>
        </Card>
      </Row>
      <Row class="cardListSmallTitle" type="flex" justify="space-between">
        <div class="spanTransition">推送列表</div>
        <div style="position: relative">
          <!--          筛选-->
          <Button
            size="small"
            shape="circle"
            @click="showSelector = !showSelector"
            >筛选</Button
          >
          <div
            v-show="showSelector"
            class="modalMask"
            @click="showSelector = !showSelector"
          ></div>
          <div v-show="showSelector" class="openModalMask spanTransition">
            <!--            <Drawer v-model="showSelector" :closable="false" :width="25">-->
            <Card :dis-hover="true" class="rightSettingCard">
              <div>
                <Row type="flex" justify="end">
                  <Icon type="ios-refresh" size="24" @click="refresh" />
                </Row>
                <MyFlatPickr
                  v-model="selectDateValue"
                  :config="datePickerConfig"
                  class="form-control"
                  name="date"
                  @on-change="doSomethingOnChange"
                />
                <CheckboxGroup
                  v-model="monthsRange"
                  size="small"
                  class="checkboxStyle"
                >
                  <Checkbox label="近一个月" size="small"></Checkbox>
                  <Checkbox label="近三个月" size="small"></Checkbox>
                  <Checkbox label="近半年" size="small"></Checkbox>
                </CheckboxGroup>
                <!--            表单筛选-->
                <Form
                  ref="searchForm"
                  :model="searchForm"
                  :label-width="60"
                  :rules="ruleValidate"
                >
                  <Form-item label="类型：" class="formItem" prop="type">
                    <Select
                      v-model="searchForm.type"
                      placeholder="请选择公告类型"
                      size="small"
                    >
                      <Option value="招标">招标</Option>
                      <Option value="中标">中标</Option>
                    </Select>
                  </Form-item>
                  <Form-item label="区域：" class="formItem" prop="region">
                    <Row type="flex" align="middle">
                      <Col span="24">
                        <Cascader
                          v-model="searchForm.region"
                          placeholder="请选择区域"
                          :data="regionData"
                          size="small"
                          class="regionTop"
                        ></Cascader>
                      </Col>
                    </Row>
                  </Form-item>
                  <Form-item label="国家：" class="formItem" prop="country">
                    <Row>
                      <Col span="24">
                        <Select
                          v-model="searchForm.country"
                          placeholder="请选择国家"
                          size="small"
                          multiple
                          class="withHotTag"
                          filterable
                        >
                          <Option
                            v-for="(
                              country, index
                            ) in countryOptions.getCountryArray()"
                            :key="`country-${index}-${country.id}`"
                            :value="country.value"
                            >{{ country.name }}</Option
                          >
                        </Select>
                      </Col>
                    </Row>
                  </Form-item>
                  <Form-item
                    label="组织："
                    class="formItem"
                    prop="organization"
                  >
                    <Select
                      v-model="searchForm.organization"
                      placeholder="请选择国际组织"
                      size="small"
                      multiple
                      filterable
                    >
                      <Option
                        v-for="(organization, index) in organizationData"
                        :key="`organization-${index}-${organization.id}`"
                        :value="organization.value"
                        >{{ organization.name }}</Option
                      >
                    </Select>
                  </Form-item>
                  <Form-item label="价格：" class="formItem">
                    <Row type="flex">
                      <Col span="11">
                        <form-item prop="lowestPrice">
                          <Input-number
                            v-model="searchForm.lowestPrice"
                            class="fullWidth"
                            placeholder="万元"
                            size="small"
                          ></Input-number>
                        </form-item>
                      </Col>
                      <Col span="2">
                        <Row type="flex" justify="center">-</Row>
                      </Col>
                      <Col span="11">
                        <form-item prop="highestPrice">
                          <Input-number
                            v-model="searchForm.highestPrice"
                            class="fullWidth"
                            placeholder="万元"
                            size="small"
                          ></Input-number>
                        </form-item>
                      </Col>
                    </Row>
                  </Form-item>
                  <Form-item label="方式：" class="formItem" prop="buy">
                    <Select
                      v-model="searchForm.buy"
                      placeholder="请选择采购方式"
                      size="small"
                    >
                      <Option value="online">线上</Option>
                    </Select>
                  </Form-item>
                </Form>
              </div>
            </Card>
            <!--              <div style="height: 500px"></div>-->
            <!--            </Drawer>-->
          </div>
        </div>
      </Row>
      <Row type="flex" :wrap="false" class="bottomBidList" :gutter="16">
        <Col span="24" class="spanTransition">
          <Card :padding="0" class="tabCard" :dis-hover="true">
            <Divider :dashed="true" class="dividerStyle">
              <p class="dividerText">16:00更新</p>
            </Divider>
            <BidList
              :bid-list="bidData1"
              :show-bid-state="true"
              :show-bid-date="false"
              :show-hot-and-time="false"
            />
          </Card>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import { Mandarin } from 'flatpickr/dist/l10n/zh';

import { countryOptions, tagOptions } from '@/enums/common';
import { addCollection, collectionIds } from '@/utils/setCollectIds';
import { ruleValidate } from '@/utils/ruleValidate';
// import '@/assets/css/customFlatpickr.scss';
import pageCode from '@/enums/pageCodes';
import regionData from '@/enums/regionData';
import organizationData from '@/enums/organizationData';

import bidData1 from '~/enums/bidData';

export default {
  name: 'SubscribePage',
  layout: 'GatherLayout',

  data() {
    return {
      bidData1,
      // 推送
      successfulResponses1: '',
      selectDateValue: '',
      selectDateValue2: '',
      monthsRange: [],
      // rightCardOpen: true,
      datePickerConfig: {
        inline: true,
        mode: 'range',
        dateFormat: 'Y-m-d',
        monthSelectorType: 'static',
        locale: Mandarin,
      },
      searchForm: {
        type: '',
        region: [],
        country: [],
        organization: '',
        lowestPrice: null,
        highestPrice: null,
        buy: '',
      },

      showSelector: false,

      collectionIds,
      tagOptions,
      ruleValidate,
      regionData,
      organizationData,
      countryOptions,
      pageCode,
    };
  },
  methods: {
    addCollection,
    doSomethingOnChange() {
      console.log('date1', this.selectDateValue);
      console.log('date2', this.selectDateValue2);
    },
    refresh() {
      this.selectDateValue = '';
      this.selectDateValue2 = '';
      this.monthsRange = [];
      this.$refs.searchForm.resetFields();
    },
    // setSwitch(status) {
    //   this.settingSwitch = status;
    // },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/css/global.scss';
@import '@/assets/css/globalColor.scss';

//推送页
.subscribeDataPage {
  .countCards {
    .card1,
    .card2,
    .card3,
    .card4 {
      width: calc(100% / 4 - 16px);
      img {
        display: block;
        width: 50px;
      }
      p {
        display: inline-block;
        margin-left: 12px;
      }
      p:nth-child(1) {
        font-size: 50px;
        font-weight: 600;
      }
      p:nth-child(2) {
        font-size: 12px;
        margin-left: 10px;
      }
    }
    .card1 p:nth-child(2) {
      color: $subscribe-card-p-color1;
    }
    .card2 p:nth-child(2) {
      color: $subscribe-card-p-color2;
    }
    .card3 p:nth-child(2) {
      color: $subscribe-card-p-color3;
    }
    .card4 p:nth-child(2) {
      color: $subscribe-card-p-color4;
    }
  }
  .cardListSmallTitle {
    margin-top: 12px;
  }
  .bottomBidList {
    margin: 12px 0;
    .tabCard {
      padding: 16px 0;
      //border-radius: $subscribe-border-radius;
      background: $card-list-bg-color;
    }
    .dividerStyle {
      margin: 0;
      .dividerText {
        font-size: 12px;
        color: $divider-text-color;
      }
    }
    .bottomBidItem {
      position: relative;
      //border-radius: $subscribe-border-radius;
      border-radius: 10px;
      margin: 0px 20px 12px;
      padding: 24px 12px;
      box-shadow: 0 10px 20px $card-box-shadow-color;
      background: $card-item-bg-color;
      .bidStateTarget {
        position: absolute;
        right: 0;
        top: 0;
      }
      .bidStateImg {
        @extend %flex-all-center;
        padding: 0 8px;
        img {
          max-width: 60px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          //margin: 0 8px;
        }
      }
    }
    .bidContent {
      margin-right: 16px;
      .singleLine {
        margin: 8px 0;
        @include ellipsis-style(1);
      }
      .bidTitle {
        @extend %card-title-style;
        @include ellipsis-style(1);
      }
    }
    .collectIcon {
      cursor: pointer;
      color: #fdb642;
      transition: all 0.3s;
      i {
        transition: all 0.3s;
        transform: scale(1, 1);
      }
    }
    .collectIcon2 {
      cursor: pointer;
      transition: all 0.3s;
      i {
        transition: all 0.3s;
        transform: scale(1, 1);
      }
    }
    .collectIcon:hover,
    .collectIcon2:hover {
      i {
        transform: scale(1.5, 1.5);
      }
    }
  }
  .rightSettingCard {
    //border-radius: $subscribe-border-radius;
    position: sticky;
    top: 80px;
    min-width: 44px;
    .form-control {
      display: none;
    }
    .checkboxStyle {
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
      .ivu-checkbox-wrapper {
        font-size: 12px;
      }
    }
    .formItem {
      margin-bottom: 8px;
    }

    //  关闭效果
    .rightCloseIcon2 {
      margin-top: 34px;
      text-align: center;
      i {
        font-size: 30px;
      }
    }
    .rightCloseIcon {
      text-align: center;
      margin: 34px 0;
      cursor: pointer;
      svg {
        width: 100%;
        height: 100%;
        max-width: 30px;
        max-height: 30px;
      }
      svg path {
        stroke: $subscribe-close-icon-color;
      }
    }
    .rightCloseIcon:hover svg path {
      stroke: $decorate-purple-color;
    }
  }
  .refreshCardIcon {
    margin: 0 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 80px;
    cursor: pointer;
    svg {
      cursor: pointer;
      path {
        stroke: $subscribe-close-icon-color;
      }
    }
  }
  .refreshCardIcon :hover svg path {
    stroke: $decorate-purple-color;
  }
  //.lowerCard {
  //  top: 160px;
  //}
}

//设置页
.settingPage {
  .settingSwitchCard {
    margin-bottom: 20px;
    .ivu-switch:not(.ivu-switch-disabled):focus {
      box-shadow: none;
    }
    .openSubscribeText {
      font-size: 16px;
    }
  }
}
.regionTop {
  margin-top: 6px;
}
.spanTransition {
  transition: all 0.5s;
}
.fullWidth {
  width: 100%;
}

.modalMask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.openModalMask {
  width: calc(100vw / 4);
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 11;
  max-width: 380px;
}
</style>
