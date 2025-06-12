<template>
  <div>
    <Button
      type="text"
      :disabled="disabled"
      size="large"
      style="text-align: right; padding-right: 0"
      long
      @click="clickHandle"
      >{{ !disabled ? txt : time + 's后重发' }}</Button
    >
  </div>
</template>

<script>
export default {
  name: 'CheckCode',
  props: {
    // 点击前调用
    beforeFn: {
      type: [Function, null],
      default: null,
    },
    pTime: {
      type: Number,
      default: 5,
    },
    // 结束次数时间
    endTime: {
      type: Number,
      default: 0,
    },
    txt: {
      type: String,
      default: '获取验证码',
    },
  },
  data() {
    return {
      timer: null,
      time: this.pTime, // 倒数次数
      disabled: false,
    };
  },
  beforeDestroy() {
    this.timer && clearTimeout(this.timer);
  },
  methods: {
    async clickHandle() {
      // 如果定时器已经触发，直接返回
      if (this.timer) return;

      // 禁用点击按钮
      this.disabled = true;

      // 点击前回调
      if (this.beforeFn) {
        // 点击前调用
        const result = await this.beforeFn();
        console.log(result);
        // 如果返回false，直接中止
        if (!result) {
          this.disabled = false;
          return;
        }
      }

      // 调用倒计时方法
      this.setTimer();
    },
    setTimer() {
      this.timer = setTimeout(() => {
        if (this.time > this.endTime) {
          this.time -= 1;

          // 倒计时每一步，事件回调
          this.$emit('on-each', this.time);
          this.setTimer();
        } else if (this.time === this.endTime) {
          // 倒计时完成，事件回调
          this.$emit('on-finish');
          // 清空定时器
          clearTimeout(this.timer);
          this.disabled = false;
          this.timer = null;
          this.time = this.pTime;
        }
      }, 1000);
    },
  },
};
</script>

<style scoped></style>
