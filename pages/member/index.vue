<template>
  <div id="member">
    <Row>
      <Col span="24" class="topContent">
        <div class="topBgContainer"></div>
        <div class="innerContent">
          <div class="leftText">
            <h1>会员专区</h1>
            <p>
              主要包括
              会员服务模块介绍，您可了解开通GPTED全球招标的会员可享超值服务。
            </p>
            <a href="#">了解详情<Icon type="md-arrow-down" /></a>
          </div>
          <div class="rightImg">
            <img src="~assets/promote/top-right-img.png" alt="活动专区" />
          </div>
        </div>
      </Col>
    </Row>
    <Row class="memberCenter">
      <Col span="24">
        <div class="titleContainer">
          <span>会员中心</span>
        </div>
        <Row class="topCardContainer" type="flex">
          <Col flex="30">
            <Card class="priceCard" :bordered="false">
              <span>普通用户</span>
              <p>开通立享超值服务</p>
              <div class="priceNumber">
                <p>¥ 0元</p>
                <p>/年</p>
              </div>
              <Button long>立即使用</Button>
              <ul>
                <li
                  v-for="(permission, index) in userPermissions.base"
                  :key="`basePermission-${index}`"
                >
                  <Icon
                    :type="permission.type === 0 ? 'md-checkmark' : 'md-add'"
                    size="20"
                  />
                  <p>{{ permission.content }}</p>
                </li>
              </ul>
            </Card>
          </Col>
          <Col flex="2"></Col>
          <Col flex="30">
            <Card class="priceCard" :bordered="false">
              <span>VIP用户</span>
              <p>开通立享超值服务</p>
              <div class="priceNumber">
                <p>¥ 29999元</p>
                <p>/年</p>
              </div>
              <Button long>立即开通</Button>
              <ul>
                <li
                  v-for="(permission, index) in userPermissions.vip"
                  :key="`vipPermission-${index}`"
                >
                  <Icon
                    :type="permission.type === 0 ? 'md-checkmark' : 'md-add'"
                    size="20"
                  />
                  <p>{{ permission.content }}</p>
                </li>
              </ul>
            </Card>
          </Col>
          <Col flex="2"></Col>
          <Col flex="30">
            <Card class="priceCard" :bordered="false">
              <span>SVIP用户</span>
              <p>开通立享超值服务</p>
              <div class="priceNumber">
                <p>¥ 79999元</p>
                <p>/年</p>
              </div>
              <Button long>立即开通</Button>
              <ul>
                <li
                  v-for="(permission, index) in userPermissions.svip"
                  :key="`svipPermission-${index}`"
                >
                  <Icon
                    :type="permission.type === 0 ? 'md-checkmark' : 'md-add'"
                    size="20"
                  />
                  <p>{{ permission.content }}</p>
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
        <div ref="memberTable" class="bottomContainer">
          <Card class="tableOuterCard" :bordered="false">
            <div
              :class="checkTable ? 'checkText' : 'checkText2'"
              @click="checkTable = !checkTable"
            >
              查看所有功能<Icon
                :type="checkTable ? 'md-arrow-down' : 'md-arrow-up'"
              />
            </div>
            <div v-show="!checkTable" class="tableContainer">
              <table>
                <tbody>
                  <tr>
                    <th>功能列表</th>
                    <th>普通用户</th>
                    <th>VIP用户</th>
                    <th>SVIP用户</th>
                  </tr>
                  <tr class="tableSecondTitle">
                    <td>基础功能</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr
                    v-for="(item, index) in priceDetailData.base"
                    :key="`priceBase-${index}`"
                  >
                    <td>{{ item.name }}</td>
                    <td>{{ item.base }}</td>
                    <td>{{ item.vip }}</td>
                    <td>{{ item.svip }}</td>
                  </tr>
                  <tr class="tableSecondTitle">
                    <td>高级功能</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr
                    v-for="(item, index) in priceDetailData.svip"
                    :key="`priceSVIP-${index}`"
                  >
                    <td>{{ item.name }}</td>
                    <td>{{ item.base }}</td>
                    <td>{{ item.vip }}</td>
                    <td>{{ item.svip }}</td>
                  </tr>
                  <tr class="tableSecondTitle">
                    <td>xx功能</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr
                    v-for="(item, index) in priceDetailData.vip"
                    :key="`priceVIP-${index}`"
                  >
                    <td>{{ item.name }}</td>
                    <td>{{ item.base }}</td>
                    <td>{{ item.vip }}</td>
                    <td>{{ item.svip }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-show="!checkTable" class="threeChoices">
              <ul>
                <li></li>
                <li>
                  <span>普通用户</span>
                  <p>0元/年</p>
                  <Button type="primary">立即体验</Button>
                </li>
                <li>
                  <span>VIP</span>
                  <p>29999元/年</p>
                  <Button type="primary">立即开通</Button>
                </li>
                <li>
                  <span>SVIP</span>
                  <p>79999元/年</p>
                  <Button type="primary">立即开通</Button>
                </li>
              </ul>
            </div>
          </Card>
          <div
            v-show="!checkTable"
            class="threeChoices choiceFixed"
            :class="showFloatChoice ? '' : 'displayNone'"
          >
            <ul>
              <li></li>
              <li>
                <span>普通用户</span>
                <p>0元/年</p>
                <Button type="primary">立即体验</Button>
              </li>
              <li>
                <span>VIP</span>
                <p>29999元/年</p>
                <Button type="primary">立即开通</Button>
              </li>
              <li>
                <span>SVIP</span>
                <p>79999元/年</p>
                <Button type="primary">立即开通</Button>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </Row>

    <Row class="commonProblem">
      <Col span="24">
        <div class="titleContainer">
          <span>常见问题</span>
        </div>
        <Collapse simple class="problemList" accordion>
          <Panel
            v-for="(problem, index) in commonProblemList"
            :key="`commonProblem-${index}`"
            :name="problem.title"
          >
            <span>{{ problem.title }}</span>
            <p slot="content">{{ problem.content }}</p>
          </Panel>
        </Collapse>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Member',
  layout: 'CommonLayout',
  data() {
    return {
      checkTable: true,
      showFloatChoice: true,
      userPermissions: {
        base: [
          {
            type: 0,
            content: '各国标讯实时更新',
          },
          {
            type: 0,
            content: '支持地区、类型、招标规模精准检索',
          },
          {
            type: 0,
            content: '提供各国各组织招标规定、法律',
          },
        ],
        vip: [
          {
            type: 0,
            content: '各国标讯实时更新',
          },
          {
            type: 0,
            content: '支持地区、类型、招标规模精准检索',
          },
          {
            type: 0,
            content: '提供各国各组织招标规定、法律',
          },
          {
            type: 1,
            content: '标讯信息实时查看',
          },
          {
            type: 1,
            content: '关键词订阅',
          },
          {
            type: 1,
            content: '获取招标附件100次/日',
          },
          {
            type: 1,
            content: '支持招标附件精准翻译10次/日',
          },
          {
            type: 1,
            content: '项目进度实时跟进',
          },
        ],
        svip: [
          {
            type: 0,
            content: '各国标讯实时更新',
          },
          {
            type: 0,
            content: '支持地区、类型、招标规模精准检索',
          },
          {
            type: 0,
            content: '提供各国各组织招标规定、法律',
          },
          {
            type: 0,
            content: '标讯信息实时查看',
          },
          {
            type: 0,
            content: '关键词订阅',
          },
          {
            type: 0,
            content: '获取招标附件100次/日',
          },
          {
            type: 0,
            content: '支持招标附件精准翻译10次/日',
          },
          {
            type: 0,
            content: '项目进度实时跟进',
          },
          {
            type: 1,
            content: '仪表盘实时分析中标公司历史数据',
          },
          {
            type: 1,
            content: '提供公司子账号',
          },
        ],
      },
      //   table
      columns: [
        {
          title: '功能列表',
          key: 'name',
        },
        {
          title: '普通用户',
          key: 'base',
          className: 'demo-table-info-column',
        },
        {
          title: 'VIP用户',
          key: 'vip',
        },
        {
          title: 'SVIP用户',
          key: 'svip',
        },
      ],
      priceDetailData: {
        base: [
          {
            name: '标讯搜索',
            base: '500条',
            vip: '不限',
            svip: '不限',
          },
          {
            name: '标讯详情',
            base: 'false',
            vip: '不限',
            svip: '不限',
          },
          {
            name: '标讯搜索',
            base: '500条',
            vip: '不限',
            svip: '不限',
          },
        ],
        vip: [
          {
            name: '标讯搜索',
            base: '500条',
            vip: '不限',
            svip: '不限',
          },
          {
            name: '标讯详情',
            base: 'false',
            vip: '不限',
            svip: '不限',
          },
          {
            name: '标讯搜索',
            base: '500条',
            vip: '不限',
            svip: '不限',
          },
          {
            name: '标讯搜索',
            base: '500条',
            vip: '不限',
            svip: '不限',
          },
          {
            name: '标讯详情',
            base: 'false',
            vip: '不限',
            svip: '不限',
          },
          {
            name: '标讯搜索',
            base: '500条',
            vip: '不限',
            svip: '不限',
          },
        ],
        svip: [
          {
            name: '标讯搜索',
            base: '500条',
            vip: '不限',
            svip: '不限',
          },
          {
            name: '标讯详情',
            base: 'false',
            vip: '不限',
            svip: '不限',
          },
          {
            name: '标讯搜索',
            base: '500条',
            vip: '不限',
            svip: '不限',
          },
          {
            name: '标讯搜索',
            base: '500条',
            vip: '不限',
            svip: '不限',
          },
          {
            name: '标讯详情',
            base: 'false',
            vip: '不限',
            svip: '不限',
          },
          {
            name: '标讯搜索',
            base: '500条',
            vip: '不限',
            svip: '不限',
          },
        ],
      },
      //   common problem
      commonProblemList: [
        {
          title: '如何注册？',
          content: 'nothing',
        },
        {
          title: '如何联系我们？',
          content: 'nothing',
        },
        {
          title: '我们的数据来自于哪里？',
          content: 'nothing',
        },
        {
          title: '账号是否在所用平台通用？',
          content: 'nothing',
        },
        {
          title: '还有其他问题？',
          content: 'nothing',
        },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.changeShowFloatChoice);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.changeShowFloatChoice);
  },
  methods: {
    changeShowFloatChoice() {
      const windowScrollHeight = window.innerHeight / 2 + window.scrollY;
      const tableBottomToTopHeight =
        this.$refs.memberTable.offsetTop + this.$refs.memberTable.offsetHeight;
      this.showFloatChoice = windowScrollHeight < tableBottomToTopHeight;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/css/member.scss';

.topContent {
  position: relative;
  display: flex;
  .topBgContainer {
    background-image: url($top-bg-url);
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
  .innerContent {
    width: 100%;
    @extend %event-common-margin-style;
    @extend %left-right-padding-style;
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
.titleContainer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  span {
    @extend %event-title-style;
  }
}

.memberCenter {
  .topCardContainer {
    @extend %left-right-padding-style;
    width: 100%;
    .priceCard {
      height: 100%;
      padding: 30px 20px;
      @extend %card-shadow-style;
      @extend %price-border-radius;
      span {
        font-size: 20px;
        font-weight: 500;
      }
      p {
        color: $price-card-p-color;
      }
      span,
      p {
        display: block;
        margin-bottom: 20px;
      }
      .priceNumber {
        display: block;
        margin: 0;
        p {
          font-weight: 500;
          display: inline-block;
          color: $problem-title-color;
        }
        p:nth-child(1) {
          font-size: 46px;
        }
        p:nth-child(2) {
          font-size: 24px;
          margin-left: 12px;
        }
      }
      button {
        height: 50px;
        border-radius: 15px;
        border: 2.5px solid $theme-color;
        font-size: 20px;
        color: $theme-color;
        margin-bottom: 20px;
      }
      button:hover {
        background: $theme-color;
        color: white;
      }
      ul {
        li {
          display: flex;
          list-style: none;
          margin: 16px 0;
          p {
            margin-bottom: auto;
          }
          i {
            color: $check-icon-color;
            margin-right: 8px;
          }
        }
      }
    }
  }
  .bottomContainer {
    position: relative;
    margin-top: 50px;
    .tableOuterCard {
      padding: 8px 20px;
      margin: 0 160px;
      @extend %card-shadow-style;
      @extend %price-border-radius;
      .checkText,
      .checkText2 {
        cursor: pointer;
        color: $table-check-text-color;
        i {
          margin-left: 4px;
        }
      }
      .checkText {
        text-align: center;
      }
      //table style
      .tableContainer {
        width: 100%;
        border-radius: 20px;
        border: 1px solid rgba(188, 188, 188, 0.55);
        overflow: hidden;
        margin: 20px 0 12px;
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th {
          font-size: 16px;
          font-weight: 500;
        }
        th:nth-child(1) {
          text-align: left;
        }
        th,
        td {
          padding: 20px;
          width: 25%;
        }
        tr > td:nth-child(1),
        tr > th:nth-child(1) {
          background: $table-bg-color1;
        }
        tr > td:nth-child(2),
        tr > th:nth-child(2) {
          background: $table-bg-color2;
        }
        tr > td:nth-child(3),
        tr > th:nth-child(3) {
          background: $table-bg-color3;
        }
        tr > td:nth-child(4),
        tr > th:nth-child(4) {
          background: $table-bg-color4;
        }
        .tableSecondTitle td {
          border-top: 1px solid rgba(188, 188, 188, 0.55);
          border-bottom: 1px solid rgba(188, 188, 188, 0.55);
          color: $table-check-text-color;
        }
        tr > td {
          text-align: center;
        }
        tr > td:nth-child(1) {
          text-align: left;
        }
      }
    }
    //normal choice style and fixed style
    .threeChoices {
      ul {
        padding: 16px 0 12px;
        width: 100%;
        display: flex;
        list-style: none;
        li {
          width: 25%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          span {
            font-size: 16px;
            font-weight: 500;
          }
          p {
            font-size: 12px;
            color: #3e3e3e;
          }
          button {
            border-radius: 8px;
            margin: 12px 0;
            background: $theme-color;
            color: $white;
            border: 0;
            width: 50%;
            font-size: 12px;
          }
        }
      }
    }

    .choiceFixed {
      span,
      p,
      button {
        transition: all 0.2s ease-in-out 0s;
      }
      position: sticky;
      bottom: 0;
      margin-top: 16px;
      padding: 0 196px;
      transition: all 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s;
      width: 100%;
      left: 0;
      background: $white;
      box-shadow: rgba(19, 19, 19, 0.12) 0px 2px 5px 0.5px;
      opacity: 1;
    }
    .displayNone {
      span,
      p,
      button {
        color: $white;
        background: $white;
        transition: all 0.2s ease-in-out 0s;
      }
      transition: all 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s;
      box-shadow: rgba(19, 19, 19, 0) 0px 2px 5px 0.5px;
      opacity: 0;
      position: fixed;
      bottom: -140px;
    }
  }
}
.commonProblem {
  @extend %left-right-padding-style;
  .problemList {
    max-width: 80%;
    margin: auto;
  }
}
.memberCenter,
.commonProblem {
  @extend %event-common-margin-style;
}
</style>
