<template>
  <div>
    <Modal
      id="centerModal"
      v-model="openModal"
      :mask-closable="false"
      footer-hide
      :width="modalWidth"
    >
      <div style="padding: 28px 48px">
        <div style="text-align: center; font-size: 20px; font-weight: 400">
          <slot name="title"></slot>
        </div>
        <slot name="otherDesign"></slot>
        <!--      个人中心修改绑定手机号-->
        <div v-if="modalType === 'changePhoneModal'">
          <Form
            v-if="currentStep !== 2"
            ref="formInfo"
            :model="formInfo"
            :rules="ruleValidate"
            :label-width="70"
            label-position="left"
          >
            <FormItem label="手机号" prop="phone" class="customerFormItemStyle">
              <Input
                v-model.trim="formInfo.phone"
                size="large"
                type="text"
                number
                clearable
                :placeholder="
                  currentStep === 0 ? '请输入原手机号' : '请输入新手机号'
                "
              ></Input>
            </FormItem>
            <FormItem
              label="验证码"
              prop="confirmCode"
              class="customerFormItemStyle"
            >
              <Row type="flex" justify="space-between">
                <Col span="17">
                  <Input
                    v-model.trim="formInfo.confirmCode"
                    size="large"
                    type="text"
                    number
                    clearable
                    placeholder="请输入验证码"
                  ></Input>
                </Col>
                <Col span="7">
                  <CheckCode :before-fn="mockSendCode" />
                </Col>
              </Row>
            </FormItem>
          </Form>
          <Button
            v-if="currentStep !== 2"
            type="primary"
            size="large"
            long
            @click="nextStep"
            >下一步</Button
          >
          <div v-else>
            <div class="successMsg">
              <Icon type="ios-checkmark-circle" size="112" />
              <p>新手机绑定成功</p>
            </div>
            <Button type="primary" size="large" long @click="nextStep"
              >完成</Button
            >
          </div>
        </div>

        <!--      会员中心账号管理新增绑定-->
        <div v-if="modalType === 'bind'">
          <Form
            ref="formInfo"
            :model="formInfo"
            :rules="ruleValidate"
            :label-width="70"
            label-position="left"
          >
            <FormItem label="手机号" prop="phone" class="customerFormItemStyle">
              <Input
                v-model.trim="formInfo.phone"
                type="text"
                size="large"
                number
                clearable
                placeholder="请输入手机号"
              ></Input>
            </FormItem>
            <FormItem
              label="验证码"
              prop="confirmCode"
              class="customerFormItemStyle"
            >
              <Row type="flex" justify="space-between">
                <Col span="17">
                  <Input
                    v-model.trim="formInfo.confirmCode"
                    type="text"
                    size="large"
                    number
                    clearable
                    placeholder="请输入验证码"
                  ></Input>
                </Col>
                <Col span="7">
                  <CheckCode :before-fn="mockSendCode" />
                </Col>
              </Row>
            </FormItem>
          </Form>
        </div>
        <div>
          <slot name="footerDesign"></slot>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { ruleValidate } from '~/utils/ruleValidate';
export default {
  name: 'PersonalCenterModal',
  props: {
    modalWidth: {
      type: String,
      default: '520',
    },
    modalType: {
      type: String,
      required: true,
      default: '',
    },
    currentStep: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      //   modal
      openModal: false,
      formInfo: {
        phone: '',
        confirmCode: '',
      },
      timer: null,
    };
  },
  computed: {
    ruleValidate() {
      return ruleValidate;
    },
  },
  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  },
  methods: {
    open() {
      this.openModal = true;
    },
    close() {
      this.openModal = false;
    },
    // 解绑/绑定 footer选择
    ok(state) {
      if (state === 'bind') {
        this.$refs.formInfo.validate((valid) => {
          if (valid) {
            this.$emit('ok', this.formInfo);
            this.cancel();
          }
        });
      } else {
        this.$emit('ok', this.formInfo);
        this.cancel();
      }
    },
    cancel(state) {
      this.$emit('cancel');
      this.formInfo.confirmCode = this.formInfo.phone = '';
      this.openModal = false;
    },
    mockSendCode() {
      return new Promise((resolve, reject) => {
        this.$refs.formInfo.validateField('phone', (error) => {
          if (!error) {
            resolve(true); // 校验成功，返回 true
            //   发送验证码
          } else {
            resolve(false); // 校验失败，返回 false
          }
        });
      });
    },
    nextStep() {
      if (this.currentStep === 2) {
        this.close();
        this.timer = setTimeout(() => {
          this.formInfo.phone = this.formInfo.confirmCode = '';
          this.$emit('changePhoneStepFinish');
        }, 200);
        return;
      }
      this.$refs.formInfo.validate((valid) => {
        if (valid) {
          // axios?
          const info = { ...this.formInfo };
          this.$emit('nextStep', info);
          this.formInfo.phone = this.formInfo.confirmCode = '';
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import 'assets/css/globalColor.scss';
#centerModal {
  .customerFormItemStyle {
    margin-bottom: 40px;
  }
  .successMsg {
    text-align: center;
    color: $home-theme-color;
    p {
      margin: 24px 0 50px;
    }
  }
}
</style>
