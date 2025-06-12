<template>
  <div>
    <Row class="topSelectOptions">
      <div
        class="pageSmallTitle"
        :class="pageContent === 0 ? 'pageActive' : ''"
        @click="pageContent = 0"
      >
        <!--        <span>订阅推送</span>-->
        <span>{{ $t('forwardNews') }}</span>
      </div>
      <div
        class="pageSmallTitle"
        :class="pageContent === 1 ? 'pageActive' : ''"
        @click="pageContent = 1"
      >
        <!--        <span>推送设置</span>-->
        <span>{{ $t('pushSettings') }}</span>
      </div>
    </Row>
    <div
      v-show="pageContent === 0"
      :class="pageContent === 0 ? 'fade-in' : 'fade-out'"
      class="subscribeDataPage"
    >
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
      <Row class="cardListSmallTitle">
        <Col :span="rightCardOpen ? 18 : 24" class="spanTransition">
          推送列表
        </Col>
      </Row>
      <Row type="flex" :wrap="false" class="bottomBidList" :gutter="16">
        <Col :span="rightCardOpen ? 18 : 22" class="spanTransition">
          <Card :padding="0" class="tabCard" :dis-hover="true">
            <Divider :dashed="true" class="dividerStyle">
              <p class="dividerText">16:00更新</p>
            </Divider>
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
                      <Row type="flex" justify="space-between" :wrap="false">
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
            :dis-hover="true"
            @click.native="refresh"
          >
            <svg
              width="30"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </Card>
          <Card
            :dis-hover="true"
            class="rightSettingCard"
            :class="rightCardOpen ? '' : 'lowerCard'"
            :padding="rightCardOpen ? 16 : 4"
          >
            <div v-show="rightCardOpen">
              <Row type="flex" justify="space-between">
                <Button size="small" shape="circle" @click="refresh"
                  >重置</Button
                >
                <Button
                  size="small"
                  shape="circle"
                  @click="rightCardOpen = !rightCardOpen"
                  >收起</Button
                >
              </Row>
              <!--              <MyFlatPickr-->
              <!--                v-model="selectDateValue"-->
              <!--                :config="datePickerConfig"-->
              <!--                class="form-control"-->
              <!--                name="date"-->
              <!--                @on-change="doSomethingOnChange"-->
              <!--              />-->
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
            <div v-show="!rightCardOpen">
              <div
                v-show="!rightCardOpen"
                class="rightCloseIcon"
                @click="rightCardOpen = !rightCardOpen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
              </div>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                </DatePicker>
              </div>
              <div
                class="rightCloseIcon"
                @click="rightCardOpen = !rightCardOpen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
              </div>
              <div
                class="rightCloseIcon"
                @click="rightCardOpen = !rightCardOpen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                  />
                </svg>
              </div>
              <div
                class="rightCloseIcon"
                @click="rightCardOpen = !rightCardOpen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                  />
                </svg>
              </div>
              <div
                class="rightCloseIcon"
                @click="rightCardOpen = !rightCardOpen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <div
                class="rightCloseIcon"
                @click="rightCardOpen = !rightCardOpen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </div>
              <div
                class="rightCloseIcon"
                @click="rightCardOpen = !rightCardOpen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <!--                <img src="~assets/gatherIcons/cart.svg" alt="方式" />-->
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
    <div
      v-show="pageContent === 1"
      :class="pageContent === 1 ? 'fade-in' : 'fade-out'"
      class="settingPage"
    >
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
  </div>
</template>

<script>
import { Mandarin } from 'flatpickr/dist/l10n/zh';

import { countryOptions, tagOptions } from '@/enums/common';
import { addCollection, collectionIds } from '@/utils/setCollectIds';
import { ruleValidate } from '@/utils/ruleValidate';
// import '@/assets/css/customFlatpickr.scss';
import pageCode from '@/enums/pageCodes';
import cardData from '@/enums/cardData';
import regionData from '@/enums/regionData';
import organizationData from '@/enums/organizationData';

export default {
  name: 'SubscribePage',
  layout: 'GatherLayout',
  async asyncData({ $axios }) {
    try {
      const requests = [
        $axios.get('/goods', { params: { pagenum: 1, pagesize: 1 } }),
        $axios.get('/orders', { params: { pagenum: 1, pagesize: 1 } }),
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
      // 设置
      settingSwitch: true,
      // 推送
      successfulResponses1: '',
      open: false,
      selectDateValue: '',
      selectDateValue2: '',
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
      this.selectDateValue2 = '';
      this.monthsRange = [];
      this.$refs.searchForm.resetFields();
    },
    setSwitch(status) {
      this.settingSwitch = status;
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
    background: $home-theme-color;
    transition: all 0.3s;
    border-radius: 4px;
  }
  .pageActive {
    color: $home-theme-color;
  }
  .pageActive span:after {
    width: 100%;
  }
}
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
      padding: 16px;
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
      .bidStateLabel {
        position: absolute;
        top: 0;
        left: 0;
        .greenBidLabel,
        .redBidLabel {
          padding: 4px;
          //border-radius: $subscribe-border-radius;
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
  .lowerCard {
    top: 160px;
  }
}

//设置页
.settingPage {
  .settingSwitchCard {
    //border-radius: $subscribe-border-radius;
    margin-bottom: 20px;
    .ivu-switch:not(.ivu-switch-disabled):focus {
      box-shadow: none;
    }
    .openSubscribeText {
      font-size: 16px;
    }
  }
  .card-border {
    //border-radius: $subscribe-border-radius;
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
            color: $decorate-purple-color;
            cursor: pointer;
          }
        }
      }
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
</style>
