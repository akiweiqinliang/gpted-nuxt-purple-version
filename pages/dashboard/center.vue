<template>
  <Card
    id="memberCenter"
    :dis-hover="true"
    :bordered="false"
    :padding="0"
    class="memberCenter"
  >
    <Row class="pageTop">
      <Col span="13" class="personalInformation">
        <img
          src="~assets/image/dashboard/center/personalInfoBg.png"
          class="bgImg"
        />
        <Row type="flex" align="middle" class="infoContainer">
          <Avatar icon="ios-person" size="100" />
          <div class="info">
            <Row class="infoItem MemberCategory" type="flex" align="middle">
              会员类别 ：
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_302_908)">
                  <path
                    d="M2.30121 3.57523L4.57567 5.0919L6.84308 1.91773C6.89315 1.84748 6.95926 1.79021 7.03593 1.75067C7.1126 1.71114 7.1976 1.69048 7.28386 1.69043C7.37012 1.69038 7.45515 1.71093 7.53187 1.75037C7.60858 1.78981 7.67477 1.847 7.72492 1.91719L9.99233 5.0919L12.2673 3.57577C12.3534 3.51849 12.4541 3.48705 12.5575 3.48517C12.6609 3.48329 12.7627 3.51105 12.8508 3.56517C12.939 3.61929 13.0097 3.6975 13.0548 3.79056C13.0999 3.88363 13.1174 3.98766 13.1053 4.09036L12.2159 11.6547C12.2004 11.7865 12.137 11.908 12.0379 11.9961C11.9387 12.0843 11.8107 12.133 11.678 12.133H2.89054C2.75787 12.133 2.62982 12.0843 2.53067 11.9961C2.43153 11.908 2.36819 11.7865 2.35267 11.6547L1.46271 4.08927C1.4506 3.98653 1.46816 3.88248 1.51332 3.7894C1.55848 3.69633 1.62935 3.61814 1.71755 3.56407C1.80574 3.51 1.90758 3.48232 2.01101 3.4843C2.11444 3.48627 2.21515 3.51783 2.30121 3.57523ZM7.28454 8.88357C7.57186 8.88357 7.84741 8.76943 8.05058 8.56626C8.25374 8.3631 8.36788 8.08755 8.36788 7.80023C8.36788 7.51291 8.25374 7.23736 8.05058 7.0342C7.84741 6.83104 7.57186 6.7169 7.28454 6.7169C6.99722 6.7169 6.72167 6.83104 6.51851 7.0342C6.31535 7.23736 6.20121 7.51291 6.20121 7.80023C6.20121 8.08755 6.31535 8.3631 6.51851 8.56626C6.72167 8.76943 6.99722 8.88357 7.28454 8.88357Z"
                    fill="#FFBE55"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_302_908">
                    <rect
                      width="13"
                      height="13"
                      fill="white"
                      transform="translate(0.78125 0.758789)"
                    />
                  </clipPath>
                </defs>
              </svg>
              标准版
            </Row>
            <Row class="infoItem">到期时间 ： 2024 - 11 - 20</Row>
            <Row class="infoItem">团队管理 ： 点击进入团队管理</Row>
          </div>
          <Button type="primary" shape="circle" size="large" class="renewalBtn"
            >立即续费</Button
          >
        </Row>
      </Col>
      <Col span="11" class="iconList">
        <img
          src="~assets/image/dashboard/center/bidTarget.png"
          class="rightBgImg"
        />
        <Row type="flex" class="iconRow" justify="space-between">
          <div v-for="i in 3" :key="i" class="iconItem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M23.7037 9.09203H25.0312C25.6943 9.09203 26.3302 9.36421 26.799 9.84868C27.2679 10.3331 27.5312 10.9902 27.5312 11.6754V16.842C27.5312 17.5272 27.2679 18.1843 26.799 18.6687C26.3302 19.1532 25.6943 19.4254 25.0312 19.4254H23.7037C23.399 21.9225 22.2228 24.219 20.3959 25.8837C18.569 27.5484 16.217 28.467 13.7812 28.467V25.8837C15.7704 25.8837 17.678 25.0672 19.0846 23.6138C20.4911 22.1604 21.2812 20.1891 21.2812 18.1337V10.3837C21.2812 8.32827 20.4911 6.35703 19.0846 4.90362C17.678 3.45022 15.7704 2.6337 13.7812 2.6337C11.7921 2.6337 9.88447 3.45022 8.47795 4.90362C7.07143 6.35703 6.28125 8.32827 6.28125 10.3837V19.4254H2.53125C1.86821 19.4254 1.23232 19.1532 0.763483 18.6687C0.294642 18.1843 0.03125 17.5272 0.03125 16.842V11.6754C0.03125 10.9902 0.294642 10.3331 0.763483 9.84868C1.23232 9.36421 1.86821 9.09203 2.53125 9.09203H3.85875C4.16379 6.59511 5.3401 4.29901 7.16697 2.63457C8.99383 0.970136 11.3457 0.0517578 13.7812 0.0517578C16.2168 0.0517578 18.5687 0.970136 20.3955 2.63457C22.2224 4.29901 23.3987 6.59511 23.7037 9.09203ZM2.53125 11.6754V16.842H3.78125V11.6754H2.53125ZM23.7812 11.6754V16.842H25.0312V11.6754H23.7812ZM8.48125 19.1477L9.80625 16.957C10.9976 17.7282 12.3755 18.136 13.7812 18.1337C15.187 18.136 16.5649 17.7282 17.7562 16.957L19.0812 19.1477C17.4928 20.176 15.6557 20.72 13.7812 20.717C11.9068 20.7201 10.0696 20.1761 8.48125 19.1477Z"
                fill="#FFBE55"
              />
            </svg>
            <span>专属客服</span>
          </div>
        </Row>
        <Row type="flex" class="iconRow" justify="space-between">
          <div v-for="i in 3" :key="i" class="iconItem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M23.7037 9.09203H25.0312C25.6943 9.09203 26.3302 9.36421 26.799 9.84868C27.2679 10.3331 27.5312 10.9902 27.5312 11.6754V16.842C27.5312 17.5272 27.2679 18.1843 26.799 18.6687C26.3302 19.1532 25.6943 19.4254 25.0312 19.4254H23.7037C23.399 21.9225 22.2228 24.219 20.3959 25.8837C18.569 27.5484 16.217 28.467 13.7812 28.467V25.8837C15.7704 25.8837 17.678 25.0672 19.0846 23.6138C20.4911 22.1604 21.2812 20.1891 21.2812 18.1337V10.3837C21.2812 8.32827 20.4911 6.35703 19.0846 4.90362C17.678 3.45022 15.7704 2.6337 13.7812 2.6337C11.7921 2.6337 9.88447 3.45022 8.47795 4.90362C7.07143 6.35703 6.28125 8.32827 6.28125 10.3837V19.4254H2.53125C1.86821 19.4254 1.23232 19.1532 0.763483 18.6687C0.294642 18.1843 0.03125 17.5272 0.03125 16.842V11.6754C0.03125 10.9902 0.294642 10.3331 0.763483 9.84868C1.23232 9.36421 1.86821 9.09203 2.53125 9.09203H3.85875C4.16379 6.59511 5.3401 4.29901 7.16697 2.63457C8.99383 0.970136 11.3457 0.0517578 13.7812 0.0517578C16.2168 0.0517578 18.5687 0.970136 20.3955 2.63457C22.2224 4.29901 23.3987 6.59511 23.7037 9.09203ZM2.53125 11.6754V16.842H3.78125V11.6754H2.53125ZM23.7812 11.6754V16.842H25.0312V11.6754H23.7812ZM8.48125 19.1477L9.80625 16.957C10.9976 17.7282 12.3755 18.136 13.7812 18.1337C15.187 18.136 16.5649 17.7282 17.7562 16.957L19.0812 19.1477C17.4928 20.176 15.6557 20.72 13.7812 20.717C11.9068 20.7201 10.0696 20.1761 8.48125 19.1477Z"
                fill="#FFBE55"
              />
            </svg>
            <span>专属客服</span>
          </div>
        </Row>
      </Col>
    </Row>
    <Row class="pageMiddle">
      <div class="partTitle equityRecord">权益记录</div>
      <Row class="equityList">
        <Row
          v-for="equityItem in equityData"
          :key="`equityData-${equityItem.id}`"
          class="equityItemStyle"
          type="flex"
          align="middle"
        >
          <Col class="leftIcon">
            <img
              :src="
                require(`assets/image/dashboard/center/equity0${equityItem.id}.png`)
              "
              alt=""
            />
          </Col>
          <Col flex="1" class="rightEquityDetail">
            <Row type="flex" align="bottom">
              <Col flex="1" class="equityInnerDetail">
                <Row type="flex" align="middle">
                  <div class="equityName">{{ equityItem.title }}</div>
                  <div class="equityTimes">{{ equityItem.countText }}</div>
                  <div
                    v-if="equityItem.total === equityItem.used"
                    class="runOutTip"
                  >
                    （次数已达上限）
                  </div>
                </Row>
                <Progress
                  :percent="(equityItem.used / equityItem.total) * 100"
                  stroke-color="#DCDCDC"
                  hide-info
                  class="progressStyle"
                />
                <div
                  v-if="equityItem.total === equityItem.used"
                  class="equityDetailListStyle"
                >
                  <p
                    v-for="(equityDetail, index) in equityItem.equityDetailList"
                    :key="`equityDetail-${equityDetail.id}`"
                    class="equityDetailItemStyle"
                  >
                    {{ index + 1 }}. {{ equityDetail.content }}
                  </p>
                </div>
              </Col>
              <Col span="4">
                <Row
                  v-if="equityItem.total === equityItem.used"
                  justify="end"
                  class="upgrade"
                  >立即升级</Row
                >
                <Row v-else type="flex" justify="end"
                  >{{ equityItem.used }} / {{ equityItem.total }}</Row
                >
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
      <Divider class="dividerStyle" />
    </Row>
    <Row class="pageBottom expensesRecord">
      <Collapse v-model="expensesRecordOpenState" simple class="collapseStyle">
        <Panel name="expensesRecords">
          消费记录
          <div slot="content">
            <Table
              stripe
              :columns="expensesRecordColumn"
              :data="expensesRecords"
              :disabled-hover="true"
            ></Table>
            <Row type="flex" justify="center" class="pageStyle">
              <Page simple :page-size="6" :total="30" />
            </Row>
          </div>
        </Panel>
      </Collapse>
    </Row>
  </Card>
</template>

<script>
export default {
  name: 'CenterPage',
  layout: 'GatherLayout',
  data() {
    return {
      // 用户权益记录数据
      equityData: [
        {
          id: 0,
          title: '查看附件文件',
          total: 10,
          used: 10,
          countText: '10次/天',
          equityDetailList: [
            {
              id: 0,
              content: '等待次日早上5:00恢复权益',
            },
            {
              id: 1,
              content: '升级为专业版会员，即可获得更多权益',
            },
          ],
        },
        {
          id: 1,
          title: '附件文件翻译',
          total: 3,
          used: 2,
          countText: '3次/天',
          equityDetailList: [
            {
              id: 0,
              content: '等待次日早上5:00恢复权益',
            },
            {
              id: 1,
              content: '升级为专业版会员，即可获得更多权益',
            },
          ],
        },
        {
          id: 2,
          title: '关键词订阅',
          total: 200,
          used: 10,
          countText: '200/个',
          equityDetailList: [
            {
              id: 0,
              content: '升级为专业版会员，即可获得更多权益',
            },
          ],
        },
        {
          id: 3,
          title: '导出数据',
          total: 100,
          used: 50,
          countText: '100次/天',
          equityDetailList: [
            {
              id: 0,
              content: '等待次日早上5:00恢复权益',
            },
            {
              id: 1,
              content: '升级为专业版会员，即可获得更多权益',
            },
          ],
        },
        {
          id: 4,
          title: '企业情报监控',
          total: 10,
          used: 10,
          countText: '10家/同时',
          equityDetailList: [
            {
              id: 0,
              content: '升级为专业版会员，即可获得更多权益',
            },
          ],
        },
        {
          id: 5,
          title: '项目进度监控',
          total: 10,
          used: 5,
          countText: '10项/同时',
          equityDetailList: [
            {
              id: 0,
              content: '等待次日早上5:00恢复权益',
            },
            {
              id: 1,
              content: '升级为专业版会员，即可获得更多权益',
            },
          ],
        },
      ],
      // 用户消费记录数据
      expensesRecordOpenState: '',
      expensesRecordColumn: [
        {
          title: '订单号',
          key: 'name',
        },
        {
          title: '标价',
          key: 'age',
        },
        {
          title: '付款金额',
          key: 'address',
        },
        {
          title: '购买产品',
          key: 'address',
        },
        {
          title: '消费时间',
          key: 'address',
        },
      ],
      expensesRecords: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03',
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01',
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02',
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04',
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03',
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import 'assets/css/globalColor.scss';
$tipsYellowColor: #ffbe55;
$blackColor1: #010101; // title 查看附件文件
$blackColor2: #323232; // small text next to title 10次/天
$grayColor: #757575; //  升级为专业版会员，即可获得更多权益
.memberCenter {
  padding-bottom: 40px;
  .pageMiddle,
  .pageBottom {
    padding: 0 34px;
    .partTitle {
      color: $blackColor1;
      font-size: 14px;
      font-weight: 600;
      width: 100%;
    }
  }
  .pageTop {
    .personalInformation {
      position: relative;
      overflow: hidden;
      padding: 76px 34px;
      .bgImg {
        position: absolute;
        left: -4px;
        top: 0;
        width: 100%;
        z-index: 4;
        max-width: 800px;
      }
      .infoContainer {
        z-index: 5;
        position: relative;
        .info {
          margin: 0 40px;
          .MemberCategory {
            svg {
              margin: 0 8px 1px 4px;
            }
          }
          .infoItem {
            margin: 20px 0;
          }
        }
        .renewalBtn {
          width: 120px;
          font-size: 14px;
          transform: translateY(-20px);
        }
      }
    }
    .iconList {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      padding: 60px 0;
      .rightBgImg {
        position: absolute;
        right: 0;
        top: 0;
        width: 150px;
      }
      .iconRow {
        width: calc(100% - 150px);
        .iconItem {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 40px;
          svg {
            margin-bottom: 20px;
          }
          span {
            color: $tipsYellowColor;
          }
        }
      }
    }
  }
  .pageMiddle {
    .equityList {
      width: 100%;
      margin-top: 36px;
      .equityItemStyle {
        width: calc(50% - 21px);
        margin-left: 21px;
        border-radius: 10px;
        background: #fbfbfc;
        padding: 28px 34px;
        margin-bottom: 40px;
        .leftIcon {
          width: 64px;
          height: 64px;
          img {
            width: 100%;
          }
        }
        .rightEquityDetail {
          margin-left: 34px;
          width: calc(100% - 98px);
          .equityInnerDetail {
            margin-right: 10px;
            .equityName {
              font-weight: 500;
              color: $blackColor1;
              margin-right: 20px;
            }
            .equityTimes {
              font-size: 10px;
              color: $blackColor2;
              margin-right: 24px;
            }
            .runOutTip {
              color: $tipsYellowColor;
              font-size: 10px;
            }
            .progressStyle {
              margin-top: 10px;
            }
            .equityDetailListStyle {
              margin-top: 10px;
            }
            .equityDetailItemStyle {
              color: $grayColor;
              font-size: 10px;
              margin-top: 6px;
            }
          }
          .upgrade {
            color: $home-theme-color;
            cursor: pointer;
            font-size: 12px;
          }
        }
      }
      .equityItemStyle:nth-child(odd) {
        margin-right: 21px;
        margin-left: 0;
      }
    }
    .dividerStyle {
      margin: 0 0 28px;
    }
  }
  .pageBottom {
    .collapseStyle {
      border: 0;
      width: 100%;
    }
    .pageStyle {
      margin-top: 40px;
    }
  }
}
</style>
<style lang="scss">
$blackColor1: #010101; // title 查看附件文件
$arrowColor: #898989;
#memberCenter {
  .pageBottom {
    .ivu-collapse-header {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      font-size: 14px;
      font-weight: 600;
      color: $blackColor1;
      margin-bottom: 28px;
      i {
        margin: 0;
        font-size: 16px;
        color: $arrowColor;
      }
    }
    .ivu-collapse-content,
    .ivu-collapse-content-box {
      padding: 0;
    }
    .ivu-table:before {
      height: 0;
    }
  }
}
</style>
