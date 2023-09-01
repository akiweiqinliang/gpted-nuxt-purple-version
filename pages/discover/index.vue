<template>
  <Row type="flex" justify="center" class-name="bgColor">
    <Col span="6" class="discoverLeftBox">
      <div class="innerLeftBox">
        <!------------------------left start-------------------->
        <Radio-group v-model="searchParams.selectOption" class="radioStyle">
          <Radio label="标题搜索"></Radio>
          <Radio label="全文搜索"></Radio>
        </Radio-group>
        <Row>
          <Input
            v-model.trim="searchParams.searchText"
            class="searchInput"
            clearable
            placeholder="请输入中英文关键词"
            size="large"
            search
            :border="false"
            @on-search="searchCard"
          >
          </Input>
        </Row>
        <Row type="flex">
          <Col span="4" class="ivu-col-offset-1">
            <p class="hotSearchText">热门搜索</p>
          </Col>
          <Col span="19">
            <ul class="keyWordStyle">
              <li
                v-for="(item, index) in keyWords"
                :key="`keyWord-${index}-${item.id}`"
                @click="searchParams.searchText = item.value"
              >
                {{ item.value }}
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Card class="ivu-col ivu-col-span-24" :dis-hover="true">
            <p slot="title">筛选条件</p>
            <Button
              slot="extra"
              size="small"
              type="primary"
              shape="circle"
              :disabled="formDisabled"
              @click="resetSearchForm"
              >重置</Button
            >
            <div>
              <Form
                ref="searchForm"
                :model="searchParams"
                :label-width="84"
                :rules="ruleValidate"
              >
                <Form-item label="公告类型：" class="formItem" prop="type">
                  <Select
                    v-model="searchParams.type"
                    placeholder="请选择公告类型"
                    size="small"
                    class="selectOptionsWidth"
                  >
                    <Option value="招标">招标</Option>
                    <Option value="中标">中标</Option>
                  </Select>
                </Form-item>
                <Form-item label="状态：" class="formItem" prop="state">
                  <Select
                    v-model="searchParams.state"
                    placeholder="请选择状态"
                    size="small"
                    class="selectOptionsWidth"
                  >
                    <Option :value="0">活跃中</Option>
                    <Option :value="1">已结束</Option>
                  </Select>
                </Form-item>
                <Form-item
                  label="区域："
                  class="formItem flexFormItem"
                  prop="region"
                >
                  <Row type="flex" align="middle">
                    <Col span="11">
                      <Cascader
                        v-model="searchParams.region"
                        placeholder="请选择区域"
                        :data="regionData"
                        size="small"
                        class="withHotTag"
                      ></Cascader>
                    </Col>
                    <Col span="12" class="ivu-col-offset-1">
                      <div class="hotKeyWordStyle">
                        <Badge text="hot" class-name="hotBadge">
                          <span>东南亚</span>
                        </Badge>
                        <Badge text="hot" class-name="hotBadge">
                          <span>南非</span>
                        </Badge>
                        <Badge class-name="hotBadge">
                          <span>北美</span>
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </Form-item>
                <Form-item label="国家：" class="formItem" prop="country">
                  <Row>
                    <Col span="11">
                      <Select
                        v-model="searchParams.country"
                        placeholder="请选择国家"
                        size="small"
                        multiple
                        class="withHotTag"
                      >
                        <Option
                          v-for="(
                            country, index
                          ) in countryOptions().getCountryArray()"
                          :key="`country-${index}-${country.id}`"
                          :value="country.value"
                        >
                          {{ country.name }}
                        </Option>
                      </Select>
                    </Col>
                    <Col span="12" class="ivu-col-offset-1">
                      <div class="hotKeyWordStyle">
                        <Badge text="hot" class-name="hotBadge">
                          <span>英国</span>
                        </Badge>
                        <Badge class-name="hotBadge">
                          <span>意大利</span>
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </Form-item>
                <Form-item
                  label="国际组织："
                  class="formItem"
                  prop="organization"
                >
                  <Select
                    v-model="searchParams.organization"
                    placeholder="请选择国际组织"
                    size="small"
                    multiple
                    class="selectOptionsWidth"
                  >
                    <Option
                      v-for="(organization, index) in organizationData()"
                      :key="`organization-${index}-${organization.id}`"
                      :value="organization.value"
                      >{{ organization.name }}</Option
                    >
                  </Select>
                </Form-item>
                <Form-item label="行业：" class="formItem" prop="industry">
                  <Select
                    v-model="searchParams.industry"
                    placeholder="请选择行业分类"
                    size="small"
                    multiple
                    class="selectOptionsWidth"
                  >
                    <Option value="energy">能源</Option>
                  </Select>
                </Form-item>
                <Form-item label="内容：" class="formItem" prop="content">
                  <Row>
                    <Col>
                      <Button
                        type="text"
                        class="formContentBtn"
                        size="small"
                        :class="searchParams.content === 'all' ? 'active' : ''"
                        @click="searchParams.content = 'all'"
                        >全部</Button
                      >
                      <Button
                        shape="circle"
                        class="formContentBtn"
                        size="small"
                        :class="
                          searchParams.content === 'engineer' ? 'active' : ''
                        "
                        @click="searchParams.content = 'engineer'"
                        >工程</Button
                      >
                      <Button
                        shape="circle"
                        class="formContentBtn"
                        size="small"
                        :class="searchParams.content === 'good' ? 'active' : ''"
                        @click="searchParams.content = 'good'"
                        >货物</Button
                      >
                      <Button
                        shape="circle"
                        size="small"
                        :class="
                          searchParams.content === 'server' ? 'active' : ''
                        "
                        @click="searchParams.content = 'server'"
                        >服务</Button
                      >
                    </Col>
                  </Row>
                </Form-item>
                <Form-item label="价格区间：" class="formItem">
                  <Row type="flex">
                    <Col span="4">
                      <Button
                        type="text"
                        size="small"
                        :class="
                          searchParams.lowestPrice || searchParams.highestPrice
                            ? ''
                            : 'active'
                        "
                        @click="
                          searchParams.lowestPrice = searchParams.highestPrice =
                            null
                        "
                        >全部
                      </Button>
                    </Col>
                    <Col span="9" class="ivu-col-offset-0">
                      <form-item prop="lowestPrice">
                        <Input-number
                          v-model="searchParams.lowestPrice"
                          placeholder="万元"
                          size="small"
                          class="fullWidth"
                        ></Input-number>
                      </form-item>
                    </Col>
                    <Col span="2"
                      ><Row type="flex" justify="center">一</Row></Col
                    >
                    <Col span="9">
                      <form-item prop="highestPrice">
                        <Input-number
                          v-model="searchParams.highestPrice"
                          placeholder="万元"
                          size="small"
                          class="fullWidth"
                        ></Input-number>
                      </form-item>
                    </Col>
                  </Row>
                </Form-item>
                <Form-item label="招标时间：" class="formItem">
                  <Row>
                    <Col span="11">
                      <FormItem prop="startDate">
                        <Date-picker
                          v-model="searchParams.startDate"
                          class="fullWidth"
                          type="datetime"
                          placeholder="开始日期"
                          size="small"
                        ></Date-picker>
                      </FormItem>
                    </Col>
                    <Col span="2"
                      ><Row type="flex" justify="center">至</Row></Col
                    >
                    <Col span="11">
                      <FormItem prop="endDate">
                        <Date-picker
                          v-model="searchParams.endDate"
                          class="fullWidth"
                          type="datetime"
                          placeholder="截止日期"
                          size="small"
                        ></Date-picker>
                      </FormItem>
                    </Col>
                  </Row>
                </Form-item>

                <Form-item label="采购方式：" class="formItem" prop="buy">
                  <Select
                    v-model="searchParams.buy"
                    placeholder="请选择采购方式"
                    size="small"
                    class="selectOptionsWidth"
                  >
                    <Option value="online">线上</Option>
                  </Select>
                </Form-item>
              </Form>
            </div>
          </Card>
        </Row>
        <!------------------------left end--------------------->
      </div>
    </Col>
    <Col span="1"></Col>
    <Col span="13">
      <div>
        <SpinLoad ref="spinLoad" />
        <div class="rightTop">
          <span v-if="!searchParams.searchText">{{ latestMsg }}</span>
          <span v-else>搜索"{{ searchParams.searchText }}" 结果如下</span>
          <span class="changeList"
            ><Icon type="ios-refresh" size="18"></Icon>换一换</span
          >
        </div>
        <RightBox
          :search-data1="searchData"
          :search-text="searchParams.searchText"
          :select-option="searchParams.selectOption"
        ></RightBox>
      </div>
    </Col>
  </Row>
</template>

<script>
import cardData from '@/enums/cardData';
import keyWords from '~/enums/keyWords';
import { ruleValidate } from '~/utils/ruleValidate';
import regionData from '~/enums/regionData';
import { countryOptions } from '~/enums/common';
import organizationData from '~/enums/organizationData';

export default {
  name: 'DiscoverPage',
  layout: 'CommonLayout',

  data() {
    return {
      searchData: cardData,
      latestMsg: '今日最新资讯',
      keyWords,
      regionData,
      ruleValidate,
      formDisabled: true,

      searchParams: {
        searchText: null,
        selectOption: '标题搜索',
        active: 'all',
        type: '',
        state: '',
        region: [],
        country: [],
        organization: '',
        industry: '',
        content: 'all',
        lowestPrice: null,
        highestPrice: null,
        startDate: '',
        endDate: '',
        buy: '',
      },
    };
  },
  watch: {
    searchParams: {
      handler() {
        this.searchCard();
        this.formDisabled = false;
      },
      deep: true,
    },
    'searchParams.type': function (val) {
      this.searchByType(val);
    },

    searchData: {
      handler() {
        this.$refs.spinLoad.start();
        setTimeout(() => {
          try {
            this.$refs.spinLoad.finish();
          } catch {}
        }, 2000);
      },
      deep: true,
    },
  },
  mounted() {
    if (this.$route.params.searchText) {
      console.log(this.$route.params.searchText);
      this.searchParams.searchText = this.$route.params.searchText;
    }
  },
  methods: {
    organizationData() {
      return organizationData;
    },
    countryOptions() {
      return countryOptions;
    },
    searchCard() {
      if (this.searchParams.searchText === '') {
        this.searchData = cardData;
        return;
      }
      if (
        this.searchParams.selectOption === '标题搜索' &&
        this.searchParams.searchText
      ) {
        //   axios
        this.$Loading.start();
        const searchData = cardData.filter((el) =>
          el.title.includes(this.searchParams.searchText)
        );
        this.searchData = searchData;
        this.$Loading.finish();
      } else if (
        this.searchParams.selectOption === '全文搜索' &&
        this.searchParams.searchText
      ) {
        //   axios
        const contentData = cardData.filter((el) =>
          el.content.includes(this.searchParams.searchText)
        );
        const titleData = cardData.filter((el) =>
          el.title.includes(this.searchParams.searchText)
        );
        let searchData = [...contentData, ...titleData];
        searchData = Array.from(new Set(searchData));
        this.searchData = searchData;
      }
    },
    searchByType(type) {
      if (type === '招标') {
        this.searchData = cardData.filter((el) => el.type === 0);
      } else if (type === '中标') {
        this.searchData = cardData.filter((el) => el.type === 1);
      } else {
        this.searchData = cardData;
      }
    },
    resetSearchForm() {
      this.formDisabled = true;
      this.$refs.searchForm.resetFields();
      this.searchParams.active = 'all';
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/css/global.scss';
@import '@/assets/css/globalColor.scss';
.bgColor {
  background-image: url($home-bg-img-url);
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  //background-color: $discover-bg-color;
  padding: 50px 0;
}
.rightTop {
  display: flex;
  justify-content: space-between;
  .changeList {
    cursor: pointer;
  }
  .changeList:hover {
    color: $home-theme-color;
  }
}
/*left*/
.discoverLeftBox {
  position: relative;
  .innerLeftBox {
    position: sticky;
    top: 50px;
  }
}
.keyWordStyle {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 16px 0;
}
.keyWordStyle li,
.keyWordStyle span {
  list-style: none;
  margin: 0 8px;
  color: $discover-keyword-color;
  cursor: pointer;
  font-size: 12px;
}
.keyWordStyle li:hover,
.keyWordStyle span:hover {
  color: $discover-keyword-hover-color;
}
.formItem {
  margin-bottom: 8px;
}
.radioStyle {
  display: flex;
  justify-content: space-around;
  padding: 0 0 16px 0;
}
.searchInput {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 0 0 12px 0;
  overflow: hidden;
}
.withHotTag {
  width: 100%;
}
.formContentBtn {
  margin-right: 8px;
}
.hotKeyWordStyle span {
  font-size: 8px;
  margin-right: 4px;
  display: inline;
  color: $discover-keyword-color;
}
.hotSearchText {
  font-size: 12px;
  margin-top: 2px;
}
.fullWidth {
  width: 100%;
}
.selectOptionsWidth {
  width: 60%;
}
</style>
