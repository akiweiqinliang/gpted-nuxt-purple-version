<template>
  <div id="personalCenter">
    <!--    个人中心-->
    <Card :padding="42">
      <Row>
        <Col style="margin-right: 48px">
          <div style="position: relative">
            <Avatar v-if="previewImage" :src="previewImage" size="70" />
            <Avatar v-else icon="ios-person" size="70" />
            <Upload
              class="uploadAvatarStyle"
              :format="['jpg', 'jpeg', 'png']"
              accept=".jpg,.jpeg,.png,.JPG,.JPEG,.PNG"
              action="http://localhost:5155/uploadAvatar2"
              :show-upload-list="false"
              :data="myFormData"
              :before-upload="beforeUpload"
              :on-success="handleUploadSuccess"
              name="avatar"
            >
              <span style="cursor: pointer">更换头像</span>
            </Upload>
          </div>
        </Col>
        <Col style="margin-right: 200px">
          <Row class="personalInfoBox">
            <Form
              :model="personalInfo"
              :label-width="100"
              label-position="left"
            >
              <FormItem label="账 号" class="extraWordSpace">
                <span>{{ personalInfo.accountId }}</span>
              </FormItem>
              <FormItem label="密 码" class="extraWordSpace">
                <Row type="flex">
                  <Col
                    ><Input
                      v-model="personalInfo.password"
                      type="password"
                      :border="false"
                      :disabled="true"
                    ></Input
                  ></Col>
                  <Col><p class="decorateColor">修改</p></Col>
                </Row>
              </FormItem>
            </Form>
          </Row>
          <Row>
            <Form :model="basicInfo" :label-width="100" label-position="left">
              <FormItem label="基本信息" class="boldTitle"></FormItem>
              <FormItem label="企业信息">
                <Input v-model="basicInfo.corporateName"></Input>
              </FormItem>
              <FormItem label="行 业" class="extraWordSpace">
                <Select v-model="basicInfo.industry" style="width: 200px">
                  <Option
                    v-for="item in industryList"
                    :key="item.value"
                    :value="item.value"
                    >{{ item.label }}</Option
                  >
                </Select>
              </FormItem>
              <FormItem label="">
                <Button long @click="saveBasicInfo">保存</Button>
              </FormItem>
            </Form>
          </Row>
        </Col>
        <Col>
          <Row>
            <Form :model="bindInfo" :label-width="100" label-position="left">
              <FormItem label="绑定信息" class="boldTitle"></FormItem>
              <FormItem label="绑定邮箱">
                <Row type="flex">
                  <Col>
                    <!--                    <span>{{ bindInfo.email }}</span>-->
                    <Input
                      v-model="bindInfo.email"
                      type="email"
                      :border="false"
                      :disabled="true"
                    ></Input
                  ></Col>
                  <Col><p class="decorateColor">已验证</p></Col>
                </Row>
              </FormItem>
              <FormItem label="绑定手机号">
                <Row type="flex">
                  <Col
                    ><Input
                      v-model="bindInfo.phone"
                      type="tel"
                      :border="false"
                      :disabled="true"
                    ></Input
                  ></Col>
                  <Col
                    ><p class="decorateColor" @click="changePhone">修改</p></Col
                  >
                </Row>
              </FormItem>
            </Form>
          </Row>
          <Row>
            <Form :model="memberInfo" :label-width="100" label-position="left">
              <FormItem label="会员信息" class="boldTitle"></FormItem>
              <FormItem label="会员类别">
                <span>{{ memberInfo.type }}</span>
              </FormItem>
              <FormItem label="到期时间">
                <span>{{ memberInfo.expireDate }}</span>
              </FormItem>
            </Form>
          </Row>
        </Col>
      </Row>
    </Card>

    <CenterModal
      ref="changePhoneModal"
      :current-step="currentStep"
      modal-width="654"
      modal-type="changePhoneModal"
      @nextStep="confirmPhone"
      @changePhoneStepFinish="currentStep = 0"
    >
      <template #title>修改手机号</template>
      <template #otherDesign>
        <Steps :current="currentStep" style="margin: 34px 0">
          <Step title="验证身份"></Step>
          <Step title="绑定手机"></Step>
          <Step title="绑定成功"></Step>
        </Steps>
      </template>
    </CenterModal>
  </div>
</template>

<script>
export default {
  name: 'AccountPage',
  layout: 'GatherLayout',
  data() {
    return {
      personalInfo: {
        accountId: '12345678901',
        password: '12345678',
      },
      basicInfo: {
        corporateName: 'xx信息科技有限公司',
        industry: '',
      },
      bindInfo: {
        email: 'abcd@wdalibocai.com',
        phone: '12345678901',
      },
      memberInfo: {
        type: '标准版',
        expireDate: '2024-11-20',
      },
      industryList: [
        {
          value: 'New York',
          label: 'New York',
        },
        {
          value: 'London',
          label: 'London',
        },
        {
          value: 'Sydney',
          label: 'Sydney',
        },
      ],

      // 换绑手机号初始步骤
      currentStep: 0,
      //   上传头像
      myFormData: null,
      selectedFile: null,
      previewImage: null,
      uploadHeader: {
        'Content-Type': 'multipart/form-data',
      },
      // 其他
      uploadedImageUrl: '',
    };
  },
  mounted() {
    if (window.localStorage.getItem('uploadAvatar')) {
      this.previewImage = window.localStorage.getItem('uploadAvatar');
    }
  },
  methods: {
    // 上传图片
    beforeUpload(file) {
      // 预览图片
      this.previewImage = URL.createObjectURL(file);
      this.selectedFile = file;
      if (file) {
        const formData = new FormData();
        formData.append('avatar', this.selectedFile);
        // 将 FormData 对象转换为普通对象
        this.myFormData = JSON.parse(JSON.stringify(formData));
        // 发送请求到后端
        // 请替换为您的后端接口地址
        return true;
      } else {
        return false;
      }
    },
    handleUploadSuccess(response) {
      // 上传成功后的处理逻辑
      const imageUrl = response.imageUrl;
      console.log(imageUrl);
      const path = response.imageUrl;
      this.uploadedImageUrl = `http://localhost:5155${path}`;
      // 在这里可以进行进一步的处理，例如保存图片 URL 到状态或变量中
      window.localStorage.setItem('uploadAvatar', this.uploadedImageUrl);
    },
    saveBasicInfo() {
      //  axios
      console.log('save basic info', this.basicInfo);
    },
    changePhone() {
      this.$refs.changePhoneModal.openModal = true;
    },
    confirmPhone(info) {
      let confirmFlag = false;
      switch (this.currentStep) {
        case 0:
          // axios then res=> res === ok => confirmFlag = true
          console.log('confirm old phone number', info);
          confirmFlag = true;
          break;
        case 1:
          // axios
          console.log('confirm new phone number', info);
          confirmFlag = info.phone.toString() !== '13724116512';
          break;
        //
      }
      if (confirmFlag) {
        this.currentStep++;
      } else {
        this.$Message.error('something error');
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import 'assets/css/globalColor.scss';
#personalCenter {
  .decorateColor {
    color: $home-theme-color;
    cursor: pointer;
  }
  .boldTitle {
    font-size: 16px;
    font-weight: 600;
  }
  .extraWordSpace {
    word-spacing: 24px;
  }
  .uploadAvatarStyle {
    z-index: 80;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10px;
  }
}
</style>
