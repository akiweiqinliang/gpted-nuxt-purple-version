<template>
  <div>
    <Row>
      <Col span="14" class="leftLoginImgBox"> </Col>
      <Col v-show="login" span="10" class="rightLoginBox">
        <span> Sign in to GPTED </span>
        <p>Don’t have an account?</p>
        <a @click="login = !login"> Create a free account </a>
        <Form ref="formInline" :model="loginForm" :rules="ruleInline">
          <FormItem prop="username">
            <Input
              v-model="loginForm.username"
              :autofocus="true"
              type="text"
              placeholder="username"
            >
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input
              v-model="loginForm.password"
              type="password"
              placeholder="password"
            >
            </Input>
          </FormItem>
          <FormItem class="btnBoxItemMargin">
            <div class="loginBtnItem">
              <div class="loginBtnBox"></div>
              <Button
                class="loginBtn"
                size="large"
                long
                type="primary"
                @click="handleSubmit('loginForm')"
                >Sign in</Button
              >
            </div>
          </FormItem>
          <FormItem>
            <p class="backToHome">
              <nuxt-link :to="{ name: pageCode.HOME }"
                >Back to homepage</nuxt-link
              >
            </p>
          </FormItem>
        </Form>
      </Col>
      <Col v-show="!login" span="10" class="rightLoginBox">
        <span> Create a free account </span>
        <p>Or</p>
        <a @click="login = !login"> Sign in an existing account </a>
        <Form ref="formInline" :model="loginForm" :rules="ruleInline">
          <FormItem prop="username">
            <Input
              v-model="loginForm.username"
              :autofocus="true"
              type="text"
              placeholder="username"
            >
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input
              v-model="loginForm.password"
              type="password"
              placeholder="password"
            >
            </Input>
          </FormItem>
          <FormItem prop="accept">
            <Radio v-model="loginForm.accept" class="ruleStyle"
              >Accept the rules</Radio
            >
          </FormItem>
          <FormItem class="btnBoxItemMargin signUpBtn">
            <div style="position: relative" class="loginBtnItem">
              <div class="loginBtnBox"></div>
              <Button
                class="loginBtn"
                size="large"
                long
                type="primary"
                @click="handleSubmit('loginForm')"
                >Sign up</Button
              >
            </div>
          </FormItem>
          <FormItem>
            <p class="backToHome">
              <nuxt-link :to="{ name: pageCode.HOME }"
                >Back to homepage</nuxt-link
              >
            </p>
          </FormItem>
        </Form>
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import pageCode from '~/enums/pageCodes';

export default {
  name: 'Login',
  data() {
    return {
      text: '',
      login: true,
      loginForm: {
        username: '',
        password: '',
        accept: false,
      },
      msgShow: false,
      isPwd: true,
      ruleInline: {
        username: [
          {
            required: true,
            message: 'Please fill in the user name',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: 'Please fill in the password.',
            trigger: 'blur',
          },
          {
            type: 'string',
            min: 6,
            message: 'The password length cannot be less than 6 bits',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  computed: {
    pageCode() {
      return pageCode;
    },
  },
  methods: {
    ...mapMutations(['setToken']),
    handleSubmit(name) {
      if (!this.login && !this.loginForm.accept) {
        this.$Message.info('View agreement');
        return;
      }
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        console.log('error');
        return;
      }
      this.$axios.post('/login', this.loginForm).then((response) => {
        this.setToken(response.data.data.token);
        sessionStorage.setItem('token', response.data.data.token);
        this.$router.push({ name: pageCode.HOME });
      });
    },
    onReset() {
      this.loginForm.password = '';
      this.loginForm.username = '';
    },
  },
};
</script>

<style scoped lang="scss">
.leftLoginImgBox {
  height: 100vh;
  background-image: url('@/assets/theme-bg-2.png');
  background-position: top;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rightLoginBox {
  padding: 10%;
  span {
    font-size: 30px;
    font-weight: bold;
    color: rgb(177, 229, 73);
    transition: all 0.3s;
    display: block;
  }
  p,
  a {
    margin-bottom: 16px;
    display: inline-block;
  }
  a {
    margin-left: 10px;
  }
  a:hover {
    text-decoration: underline;
  }
  .ruleStyle {
    color: #8b939d;
    margin-bottom: 16px;
  }
  .btnBoxItemMargin {
    margin: 40px 0 20px;
  }
  .signUpBtn {
    margin: -10px 0 20px;
  }
  .loginBtn {
    background: #000;
    color: white;
    border: 0;
    z-index: 2;
    position: relative;
  }
  .loginBtn:focus {
    box-shadow: none;
  }
  .loginBtnBox {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    filter: blur(20px);
    z-index: -1;
    background-image: linear-gradient(
      to right,
      lightskyblue,
      lightgreen,
      sandybrown
    );
    transform: scale(0.95);
    opacity: 0.4;
    transition: all 0.3s;
  }
  .loginBtnItem {
    position: relative;
  }
  .loginBtnItem:hover .loginBtnBox {
    transform: scale(1);
    opacity: 1;
    //background: linear-gradient(to right,blue,green,orange);
    transition: all 0.3s;
  }
  .backToHome {
    a {
      color: #9ea7b4;
      text-decoration: underline;
      margin-left: 0;
    }
  }
}
</style>
