<template>
  <div>
    <!--    <div v-for="(response, index) in successfulResponses" :key="index">-->
    <!--      Response {{ index + 1 }}: {{ response }}-->
    <!--    </div>-->
    <Row class="topSelectOptions">
      <div
        class="pageSmallTitle"
        :class="pageContent === 0 ? 'pageActive' : ''"
        @click="pageContent = 0"
      >
        <span>订阅推送</span>
      </div>
      <div
        class="pageSmallTitle"
        :class="pageContent === 1 ? 'pageActive' : ''"
        @click="pageContent = 1"
      >
        <span>推送设置</span>
      </div>
    </Row>
    <div
      v-show="pageContent === 0"
      :class="pageContent === 0 ? 'fade-in' : 'fade-out'"
    >
      <Row class="countCards" :gutter="16">
        <Col :lg="6" :md="12">
          <div class="countCard card1">
            <div class="leftIcon">
              <img src="~assets/logos/regionIcon.png" />
            </div>
            <div class="rightNumber">
              <span>25</span>
              <p>今日更新</p>
            </div>
          </div>
        </Col>
        <Col :lg="6" :md="12">
          <div class="countCard card2">
            <div class="leftIcon">
              <img src="~assets/logos/regionIcon.png" />
            </div>
            <div class="rightNumber">
              <span>25</span>
              <p>覆盖国家</p>
            </div>
          </div>
        </Col>
        <Col :lg="6" :md="12">
          <div class="countCard card3">
            <div class="leftIcon">
              <img src="~assets/logos/regionIcon.png" />
            </div>
            <div class="rightNumber">
              <span>25</span>
              <p>覆盖组织</p>
            </div>
          </div>
        </Col>
        <Col :lg="6" :md="12">
          <div class="countCard card4">
            <div class="leftIcon">
              <img src="~assets/logos/regionIcon.png" />
            </div>
            <div class="rightNumber">
              <span>25</span>
              <p>今日更新</p>
            </div>
          </div>
        </Col>
      </Row>
      <Button @click="rightCardOpen = !rightCardOpen">收起/展开</Button>
      <Row class="cardListSmallTitle" :gutter="16">
        <Col :span="rightCardOpen ? 18 : 23" class="spanTransition">
          推送列表
        </Col>
        <Col :span="rightCardOpen ? 6 : 1" class="spanTransition"> </Col>
      </Row>
      <Row type="flex" :wrap="false" class="bottomBidList" :gutter="16">
        <Col :span="rightCardOpen ? 18 : 22" class="spanTransition">
          <Card :padding="0" class="tabCard" :dis-hover="true">
            <Divider :dashed="true" class="dividerStyle"
              ><p class="dividerText">16:00更新</p></Divider
            >
            <List>
              <ListItem
                v-for="bid in cardData"
                :key="`bid-content-data-${bid.id}`"
                class="bottomBidItem"
              >
                <div class="bidStateTarget">
                  <img
                    v-if="bid.type === 1"
                    src="~assets/logos/red-target.png"
                  />
                  <img
                    v-if="bid.type === 0"
                    src="~assets/logos/green-target.png"
                  />
                </div>
                <div class="bidStateLabel">
                  <div v-if="bid.type === 0" class="greenBidLabel">招标</div>
                  <div v-if="bid.type === 1" class="redBidLabel">中标</div>
                </div>
                <div class="ivu-col ivu-col-span-24">
                  <Row type="flex">
                    <Col span="3">
                      <div class="bidStateImg">
                        <img
                          v-if="bid.type === 1"
                          src="~assets/logos/cubeRedBid.png"
                        />
                        <img
                          v-if="bid.type === 0"
                          src="~assets/logos/cubeGreenBid.png"
                        />
                      </div>
                    </Col>
                    <Col flex="1" class="bidContent">
                      <nuxt-link
                        class="bidTitle"
                        :to="{
                          name: pageCode.DETAIL_BID,
                          params: { bidId: bid.id },
                        }"
                        >{{ bid.title }}</nuxt-link
                      >
                      <p class="singleLine">
                        This is description, this is description.Improving
                        Growth bala balabal abala Improving Growth balabalab
                        alabal aImprovi ng Growth bala balab alabala Improving
                        Growth balabalab alabala
                      </p>
                      <Row type="flex" justify="space-between">
                        <Col>
                          <Tag
                            v-for="(tag, index) in tagOptions.getTagById(
                              bid.tagIdList
                            )"
                            :key="`tag-${index}-${tag.tagId}`"
                            :color="tagOptions.getTagColor(tag.typeId)"
                            >{{ tag.tagName }}</Tag
                          >
                        </Col>
                        <Col>
                          <span
                            :class="
                              collectionIds.includes(bid.id)
                                ? 'collectIcon'
                                : 'collectIcon2'
                            "
                          >
                            <Icon
                              :type="
                                collectionIds.includes(bid.id)
                                  ? `ios-star`
                                  : `ios-star-outline`
                              "
                              size="24"
                              @click="addCollection(bid.id)"
                            ></Icon>
                          </span>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </ListItem>
            </List>
          </Card>
        </Col>
        <Col :span="rightCardOpen ? 6 : 2" class="spanTransition">
          <Card
            v-show="!rightCardOpen"
            class="rightSettingCard refreshCardIcon"
          >
            <img
              src="~assets/gatherIcons/arrow-refresh.svg"
              alt="刷新"
              @click="refresh"
            />
            <!--            <Icon type="ios-refresh" size="24" @click="refresh" />-->
          </Card>
          <Card
            :dis-hover="true"
            class="rightSettingCard"
            :class="rightCardOpen ? '' : 'lowerCard'"
          >
            <Icon
              class="rightCardOpenArrow"
              :class="rightCardOpen ? 'rightCardCloseArrow' : ''"
              size="20"
              type="ios-arrow-back"
              @click="rightCardOpen = !rightCardOpen"
            />
            <div v-show="rightCardOpen">
              日期：
              <flatPickr
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
                    class="selectOptionsWidth"
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
                <Form-item label="组织：" class="formItem" prop="organization">
                  <Select
                    v-model="searchForm.organization"
                    placeholder="请选择国际组织"
                    size="small"
                    multiple
                    class="selectOptionsWidth"
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
                    <Col span="10">
                      <form-item prop="lowestPrice">
                        <Input-number
                          v-model="searchForm.lowestPrice"
                          placeholder="万元"
                          size="small"
                        ></Input-number>
                      </form-item>
                    </Col>
                    <Col span="3">
                      <Row type="flex" justify="center">-</Row>
                    </Col>
                    <Col span="10">
                      <form-item prop="highestPrice">
                        <Input-number
                          v-model="searchForm.highestPrice"
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
                    class="selectOptionsWidth"
                  >
                    <Option value="online">线上</Option>
                  </Select>
                </Form-item>
              </Form>
            </div>
            <div v-show="!rightCardOpen">
              <div class="rightCloseIcon">
                <DatePicker
                  v-model="selectDateValue2"
                  :open="open"
                  type="daterange"
                  :transfer="true"
                  placement="left"
                  confirm
                  split-panels
                  @on-ok="doSomethingOnChange"
                >
                  <img
                    src="~assets/gatherIcons/calendar.svg"
                    alt="日期"
                    @click="open = !open"
                  />
                </DatePicker>
              </div>
              <div
                class="rightCloseIcon"
                @click="rightCardOpen = !rightCardOpen"
              >
                <img src="~assets/gatherIcons/grid.svg" alt="类型" />
              </div>
              <div
                class="rightCloseIcon"
                @click="rightCardOpen = !rightCardOpen"
              >
                <img src="~assets/gatherIcons/global.svg" alt="区域" />
              </div>
              <div
                class="rightCloseIcon"
                @click="rightCardOpen = !rightCardOpen"
              >
                <img src="~assets/gatherIcons/country.svg" alt="国家" />
              </div>
              <div
                class="rightCloseIcon"
                @click="rightCardOpen = !rightCardOpen"
              >
                <img src="~assets/gatherIcons/building.svg" alt="组织" />
              </div>
              <div
                class="rightCloseIcon"
                @click="rightCardOpen = !rightCardOpen"
              >
                <img src="~assets/gatherIcons/price.svg" alt="价格" />
              </div>
              <div
                class="rightCloseIcon"
                @click="rightCardOpen = !rightCardOpen"
              >
                <img src="~assets/gatherIcons/cart.svg" alt="方式" />
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
    <div
      v-show="pageContent === 1"
      :class="pageContent === 1 ? 'fade-in' : 'fade-out'"
    >
      设置
    </div>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import { Mandarin } from 'flatpickr/dist/l10n/zh';

import { tagOptions, countryOptions } from '@/enums/common';
import { addCollection, collectionIds } from '@/utils/setCollectIds';
import { ruleValidate } from '@/utils/ruleValidate';

import '@/assets/css/customFlatpickr.scss';

import pageCode from '@/enums/pageCodes';
import cardData from '@/enums/cardData';
import regionData from '@/enums/regionData';
import organizationData from '@/enums/organizationData';
export default {
  name: 'SubscribePage',
  components: {
    flatPickr,
  },
  layout: 'GatherLayout',
  async asyncData({ $axios }) {
    // 1.
    // return Promise.all([
    //   $axios.get('/getCardData'),
    //   $axios.get('/getCollectIds')
    // ]).then(([cardDataRes, collectIdsRes]) => {
    //   const abc = cardDataRes.data;
    //   const collects111 = collectIdsRes.data;
    //   return { abc, collects111 };
    // });
    //   2
    //   try {
    //     const cardDataRes = await $axios.get('/goods', { params: { pagenum: 1, pagesize: 1 }});
    //     const collectIdsRes = await $axios.post('https://123.com/goods', { params: { pagenum: 1, pagesize: 1 }});
    //     return { abc: cardDataRes.data.meta.status, collects111: collectIdsRes.data.meta.msg };
    //   }catch (error) {
    //     console.log(error);
    //     return { abc: [], collects111: [] };
    //   }
    // 3
    try {
      const requests = [
        $axios.get('/goods', { params: { pagenum: 1, pagesize: 1 } }),
        $axios.get('/orders', { params: { pagenum: 1, pagesize: 1 } }),
        $axios.post('https://123.com/goods', {
          params: { pagenum: 1, pagesize: 1 },
        }),
      ];
      const responses = await Promise.allSettled(requests);
      const successfulResponses = responses
        .filter((response) => response.status === 'fulfilled')
        .map((response) => response.value.data);
      return {
        successfulResponses,
      };
    } catch (error) {
      console.error('Error:', error);
      return {
        successfulResponses: [],
      };
    }
  },
  data() {
    return {
      open: false,
      selectDateValue: '',
      selectDateValue2: null,
      pageContent: 0,
      monthsRange: [],
      rightCardOpen: true,
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

      collectionIds,
      tagOptions,
      cardData,
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
      this.$refs.searchForm.resetFields();
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/css/global.scss';
@import '@/assets/css/globalColor.scss';

.topSelectOptions {
  .pageSmallTitle {
    margin-bottom: 24px;
    margin-right: 24px;
    font-size: 16px;
    cursor: pointer;
    border: 0;
    position: relative;
  }
  .pageSmallTitle span:after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    height: 4px;
    width: 0;
    background: $subscribe-underline-color;
    transition: all 0.3s;
    border-radius: 4px;
  }
  .pageActive {
    color: $subscribe-underline-color;
  }
  .pageActive span:after {
    width: 100%;
  }
}

.countCards {
  .countCard {
    display: flex;
    //border-radius: 10px;
    justify-content: center;
    border-radius: $subscribe-border-radius;
    padding: 16px 16px;
    .leftIcon {
      @extend %flex-all-center;
      img {
        width: 80%;
        height: 100%;
        object-fit: contain;
      }
    }
    .rightNumber {
      //flex: 1;
      margin-left: 10px;
      display: flex;
      align-items: flex-end;
      span {
        display: inline;
        font-size: 50px;
        font-weight: 600;
        padding-bottom: 8px;
      }
      p {
        font-size: 12px;
        margin-left: 10px;
      }
    }
  }
  .card1 {
    background: $subscribe-card-bg-color;
    p {
      color: $subscribe-card-p-color1;
    }
  }
  .card2 {
    background: $subscribe-card-bg-color;
    p {
      color: $subscribe-card-p-color2;
    }
  }
  .card3 {
    background: $subscribe-card-bg-color;
    p {
      color: $subscribe-card-p-color3;
    }
  }
  .card4 {
    background: $subscribe-card-bg-color;
    p {
      color: $subscribe-card-p-color4;
    }
  }
}

.cardListSmallTitle {
  margin-top: 24px;
  .refreshIcon {
    font-size: 24px;
    cursor: pointer;
    background: white;
    border-radius: 50%;
    color: $subscribe-underline-color;
  }
}
.bottomBidList {
  margin: 12px 0;
  .tabCard {
    padding: 16px;
    border-radius: $subscribe-border-radius;
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
    border-radius: $subscribe-border-radius;
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
    }
    .bidStateLabel {
      position: absolute;
      top: 0;
      left: 0;
      .greenBidLabel,
      .redBidLabel {
        padding: 4px;
        border-radius: $subscribe-border-radius;
      }
      .greenBidLabel {
        background: $bid-green-bg-color;
        color: $bid-green-text-color;
      }
      .redBidLabel {
        background: $bid-red-bg-color;
        color: $bid-red-text-color;
      }
    }
  }
  .bidContent {
    margin-right: 16px;
    .singleLine {
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
  }
  .collectIcon2 {
    cursor: pointer;
  }
}

.rightSettingCard {
  border-radius: $subscribe-border-radius;
  position: sticky;
  top: 80px;
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
  .rightCloseIcon {
    font-size: 24px;
    text-align: center;
    margin: 40px 0;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-width: 30px;
      max-height: 30px;
    }
  }
  .rightCloseIcon:hover {
    color: $subscribe-underline-color;
  }
}
.refreshCardIcon {
  margin: 0 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 80px;
}
.lowerCard {
  top: 160px;
}
.rightCardOpenArrow {
  position: absolute;
  top: 50%;
  left: -20px;
  color: $subscribe-underline-color;
  transform: rotateY(0deg);
  cursor: pointer;
}
.rightCardCloseArrow {
  transform: rotateY(-180deg);
}

//global style
.fade-in {
  @extend %fade-in;
}
.fade-out {
  @extend %fade-out;
}
.spanTransition {
  transition: all 0.5s;
}
</style>
