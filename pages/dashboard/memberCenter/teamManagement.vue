<template>
  <div id="teamManage">
    <Card :padding="0" class="top">
      <Row type="flex" align="middle" class="infoContainer">
        <Col span="8">
          <Row>
            <Avatar icon="ios-person" size="60" />
            <div class="info">
              <Row class="infoTitle">主账号：</Row>
              <Row class="infoId">12345678901</Row>
            </div>
          </Row>
        </Col>
        <Col span="16">
          <Row type="flex" justify="space-around">
            <div class="bound">
              <span>{{ subAccounts.length }}</span
              ><span>已绑定</span>
            </div>
            <Divider type="vertical" />
            <div class="notBound">
              <span>{{ 6 - subAccounts.length }}</span
              ><span>未绑定</span>
            </div>
          </Row>
        </Col>
      </Row>
    </Card>
    <Row
      type="flex"
      justify="space-between"
      align="middle"
      class="subAccountManage"
    >
      <span>子账号管理</span>
      <Button shape="circle" @click="showManageBtn = !showManageBtn">{{
        showManageBtn ? '完成' : '管理'
      }}</Button>
    </Row>
    <Card :padding="0" class="bottom">
      <List>
        <ListItem v-if="subAccounts.length === 0">
          <p>暂未添加子账号</p>
        </ListItem>
        <ListItem
          v-for="(account, index) in subAccounts"
          v-else
          :key="`member-center-sub-account-${account.id}-${index}-${account.accountId}`"
          class="accountItem"
        >
          <Row
            type="flex"
            align="middle"
            justify="space-between"
            class="fullWidth"
          >
            <Row type="flex" align="middle">
              <Avatar icon="ios-person" size="56" />
              <div class="info">
                <Row class="infoTitle">{{ account.title }}：</Row>
                <Row class="infoId">{{ account.accountId }}</Row>
              </div>
            </Row>
            <Icon
              v-show="showManageBtn"
              type="md-remove"
              size="24"
              @click="openNotBindModal(account.id)"
            />
          </Row>
        </ListItem>
      </List>
      <Row v-show="showManageBtn" type="flex" justify="center">
        <div
          v-show="subAccounts.length !== 6"
          class="addIcon"
          @click="openBindModal"
        >
          <Icon type="md-add" size="34" />
        </div>
      </Row>
    </Card>
    <CenterModal
      ref="bindNewAccountModal"
      modal-type="bind"
      modal-width="648"
      @ok="addSubAccount"
    >
      <template #title>
        <div style="margin-bottom: 34px">绑定</div>
      </template>
      <template #footerDesign>
        <Row justify="space-between" style="margin-top: 40px">
          <Col span="11">
            <Button
              size="large"
              long
              @click="
                handleModalAction('bindNewAccountModal', 'cancel', 'bind')
              "
              >取消</Button
            >
          </Col>
          <Col span="11">
            <Button
              type="primary"
              size="large"
              long
              @click="handleModalAction('bindNewAccountModal', 'ok', 'bind')"
              >确定</Button
            >
          </Col>
        </Row>
      </template>
    </CenterModal>
    <CenterModal
      ref="notBindAccountModal"
      modal-type="notBind"
      modal-width="464"
      @ok="reduceSubAccount"
    >
      <template #title>确定要解绑当前账户吗</template>
      <template #footerDesign>
        <Row justify="space-between" style="margin-top: 40px">
          <Col span="11">
            <Button
              size="large"
              long
              @click="
                handleModalAction('notBindAccountModal', 'cancel', 'notBind')
              "
              >取消</Button
            >
          </Col>
          <Col span="11">
            <Button
              type="primary"
              size="large"
              long
              @click="handleModalAction('notBindAccountModal', 'ok', 'notBind')"
              >确定</Button
            >
          </Col>
        </Row>
      </template>
    </CenterModal>
  </div>
</template>

<script>
export default {
  name: 'TeamManagement',
  layout: 'GatherLayout',
  data() {
    return {
      showManageBtn: false,
      deleteAccountId: '',
      // 子账号
      subAccounts: [
        {
          id: 2993888892,
          title: '账号一',
          accountId: '13579246802',
        },
        {
          id: 23273834,
          title: '账号二',
          accountId: '13579246802',
        },
        {
          id: 222222222222,
          title: '账号三',
          accountId: '13579246802',
        },
        {
          id: 133333333,
          title: '账号四',
          accountId: '13579246802',
        },
      ],
    };
  },
  methods: {
    handleModalAction(ref, action, state) {
      if (action === 'cancel') {
        this.$refs[ref].cancel(state);
      } else if (action === 'ok') {
        this.$refs[ref].ok(state);
      }
    },
    openBindModal() {
      this.$refs.bindNewAccountModal.open();
    },
    openNotBindModal(id) {
      this.deleteAccountId = id;
      this.$refs.notBindAccountModal.open();
    },
    addSubAccount(formInfo) {
      //   this.subAccounts = axios 获取最新子账号列表
      //   模拟
      this.subAccounts.push({
        id: this.subAccounts.length + 1,
        title: '账号n',
        accountId: formInfo.phone,
      });
      this.showManageBtn = false;
    },
    reduceSubAccount() {
      //   axios delete this.deleteAccountId this.subAccounts = axios 获取最新子账号列表
      //   模拟
      this.subAccounts = this.subAccounts.filter(
        (item) => item.id !== this.deleteAccountId
      );
      this.deleteAccountId = '';
      this.showManageBtn = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/css/globalColor.scss';
#teamManage {
  .info {
    margin-left: 38px;
    .infoTitle {
      margin-bottom: 20px;
    }
  }
  .top .info {
    .infoTitle,
    .infoId {
      font-size: 15px;
    }
  }
  .bottom .info {
    .infoTitle {
      font-size: 12px;
    }
    .infoId {
      font-size: 14px;
    }
  }
  .top {
    padding: 44px 40px;
    .bound,
    .notBound {
      span:nth-child(1) {
        font-size: 50px;
        margin-right: 28px;
      }
      span:nth-child(2) {
        color: $home-theme-color;
      }
    }
  }
  .subAccountManage {
    margin: 36px 0;
  }
  .bottom {
    padding: 34px 44px;
    .accountItem {
      padding: 34px 0;
      i {
        color: $home-theme-color;
        cursor: pointer;
      }
    }
    .addIcon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #f7f7f7;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $home-theme-color;
      cursor: pointer;
    }
  }
}
</style>
