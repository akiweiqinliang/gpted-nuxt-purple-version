<template>
  <Card id="dashboardMessage" :padding="0" :dis-hover="true">
    <Row class="msgPageHeader">
      <Col flex="1"
        >共 {{ viewOnlyUnread ? unReadMsgList.length : msgList.length }} 条</Col
      >
      <Checkbox v-model="viewOnlyUnread">仅看未读</Checkbox>
      <Row>
        <img src="~assets/dashboardIcons/broom.svg" />
        <p class="cleanUnreadText" @click="cleanUnread">清除未读</p>
      </Row>
    </Row>
    <List :border="false" :loading="msgLoading" class="messageList">
      <ListItem
        v-for="msg in viewOnlyUnread ? unReadMsgList : msgList"
        :key="`dashboard-message-${msg.id}`"
        class="messageItem"
        @click.native="intoMsgDetail(msg.id)"
      >
        <Row type="flex" align="middle" class="fullWidth">
          <Col class="left" flex="1">
            <Row type="flex" align="top">
              <Badge dot :count="msg.msgState ? 0 : 1">
                <img
                  v-if="msg.msgType === 0"
                  src="~assets/image/dashboard/message/bell.png"
                  alt="产品更新"
                />
                <img
                  v-if="msg.msgType === 1"
                  src="~assets/image/dashboard/message/gift.png"
                  alt="会员福利"
                />
              </Badge>
              <Col flex="1" class="center">
                <span>{{ msg.msgTitle }}</span>
                <p>{{ msg.msgContent }}</p>
              </Col>
            </Row>
          </Col>
          <Col class="right updateTime"> 09:30 </Col>
        </Row>
      </ListItem>
    </List>
    <SpinLoad ref="loading" />
    <Row type="flex" justify="center" class="listPagination">
      <Page
        :current="currentPage"
        :total="total"
        :page-size="pageSize"
        simple
        @on-change="changePage"
      />
    </Row>
  </Card>
</template>

<script>
export default {
  name: 'MessagePage',
  layout: 'GatherLayout',
  asyncData({ $axios }) {
    //   axios获取消息列表
  },
  data() {
    return {
      //   分页器
      total: 0,
      pageSize: 5,
      currentPage: 1,
      // 列表加载样式
      msgLoading: false,
      viewOnlyUnread: false,
      msgList: [
        // 0 => 产品更新 ；1 => 会员福利
        {
          id: 0,
          msgTitle: '产品更新 V 1.2.0 通知',
          msgContent:
            '版本更新啦，本次更新，解决了一些已知问题。版本更新啦，本次更新，解决了一些已知问题。版本更新啦，本次更新，解决了一些已知问题。',
          msgType: 0,
          msgState: false, // 未读
        },
        {
          id: 1,
          msgTitle:
            '尊敬的用户：为您申请的会员福利还未领取！尊敬的用户：为您申请的会员福利还未领取！',
          msgContent:
            '超级订阅限时8折特惠，为企业投标高效赋能，速抢...超级订阅限时8折特惠，为企业投标高效赋能，速抢...超级订阅限时8.....',
          msgType: 1,
          msgState: true, // 已读
        },
        {
          id: 2,
          msgTitle: '产品更新 V 1.2.0 通知',
          msgContent:
            '版版本更新啦，本次更新，解决了一些已知问题。解决了一些已知问题。版本更新啦，本次更新，解决了一些已知问题。版本更新啦，本次更新，解决了一些已知问题。解决了一些已知问题。版本更新啦，本次更新，解决了一些已知问题。本更新啦，本次更新，解决了一些已知问题。解决了一些已知问题。版本更新啦，本次更新，解决了一些已知问题。',
          msgType: 0,
          msgState: true, // 已读
        },
        {
          id: 3,
          msgTitle: '产品更新 V 1.2.0 通知',
          msgContent:
            '版本更新啦，本次更新，解决了一些已知问题。版本更新啦，本次更新，解决了一些已知问题。版本更新啦，本次更新，解决了一些已知问题。',
          msgType: 0,
          msgState: false, // 未读
        },
        {
          id: 4,
          msgTitle:
            '尊敬的用户：为您申请的会员福利还未领取！尊敬的用户：为您申请的会员福利还未领取！',
          msgContent:
            '超级订阅限时8折特惠，为企业投标高效赋能，速抢...超级订阅限时8折特惠，为企业投标高效赋能，速抢...超级订阅限时8.....',
          msgType: 1,
          msgState: false, // 未读
        },
        {
          id: 5,
          msgTitle:
            '尊敬的用户：为您申请的会员福利还未领取！尊敬的用户：为您申请的会员福利还未领取！',
          msgContent:
            '超级订阅限时8折特惠，为企业投标高效赋能，速抢...超级订阅限时8折特惠，为企业投标高效赋能，速抢...超级订阅限时8.....',
          msgType: 1,
          msgState: true, // 已读
        },
        {
          id: 6,
          msgTitle:
            '尊敬的用户：为您申请的会员福利还未领取！尊敬的用户：为您申请的会员福利还未领取！',
          msgContent:
            '超级订阅限时8折特惠,超级订阅限时8折特惠，为企业投标高效赋能，速抢...超级订阅限时8.....',
          msgType: 1,
          msgState: true, // 已读
        },
        {
          id: 7,
          msgTitle: '产品更新 V 1.2.0 通知',
          msgContent:
            '版本更新啦，本次更新，解决了一些已知问题。版本更新啦，本次更新，解决了一些已知问题。版本更新啦，本次更新，解决了一些已知问题。',
          msgType: 0,
          msgState: true, // 已读
        },
        {
          id: 8,
          msgTitle: '产品更新 V 1.2.0 通知',
          msgContent:
            '版本更新啦，本次更新，解决了一些已知问题。版本更新啦，本次更新，解决了一些已知问题。版本更新啦，本次更新，解决了一些已知问题。',
          msgType: 0,
          msgState: false, // 未读
        },
      ],
    };
  },
  computed: {
    unReadMsgList() {
      return this.msgList.filter((item) => !item.msgState);
    },
  },
  mounted() {
    this.loadMsgData();
  },
  methods: {
    intoMsgDetail(msgId) {
      this.msgList = this.msgList.map((item) => {
        if (item.id === msgId) {
          // 进行替换操作
          item.msgState = true;
          return item;
        }
        return item;
      });
    },
    cleanUnread() {
      // axios
      this.msgList = this.msgList.map((item) => {
        if (!item.msgState) {
          item.msgState = true;
        }
        return item;
      });
    },
    loadMsgData() {
      const data = {
        pageNum: this.currentPage,
        pageSize: this.pageSize,
      };
      this.total = this.viewOnlyUnread
        ? this.unReadMsgList.length
        : this.msgList.length;
      const flag = true;
      if (flag) {
        return;
      }
      // 调用接口，加载数据
      this.$axios.post('/getMsgDataByPage', data).then((res) => {
        const msgs = res.data.records;
        this.total = res.data.total;
        this.msgList = msgs;
      });
    },
    // 改变当前页
    changePage(i) {
      this.currentPage = i;
      console.log('this is dev');
      this.$refs.loading.start();
      setTimeout(() => {
        // this.msgList = [];
        this.loadMsgData();
      }, 200);
      setTimeout(() => {
        this.$refs.loading.finish();
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
@import 'assets/css/globalColor.scss';
#dashboardMessage {
  padding: 16px 0;
}
.msgPageHeader {
  padding: 16px 20px;
  .cleanUnreadText {
    cursor: pointer;
  }
  .cleanUnreadText:hover {
    color: $home-theme-color;
  }
}
.fullWidth {
  width: 100%;
}
.messageList {
  .messageItem:hover {
    background: #f9f8fe;
  }
  .messageItem::after {
    content: '';
    width: calc(100% - 40px);
    background: #f2f2f2;
    height: 1px;
    position: absolute;
    bottom: 0;
  }
  .messageItem {
    padding: 24px 20px;
    border-bottom: none;
    position: relative;
    .left {
      img {
        width: 44px;
        height: 44px;
      }
    }
    .center {
      margin: 0 16px;
      span {
        color: #000;
        font-size: 18px;
        font-weight: 600;
      }
      p {
        color: #606060;
        font-size: 14px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
.listPagination {
  margin: 24px 0 8px;
}
</style>
<style lang="scss">
#dashboardMessage {
  .ivu-badge-dot {
    z-index: 8;
  }
}
</style>
